#!/usr/bin/env node
/**
 * build-directory.mjs — ingest agents/<slug>/agent.md → directory.json
 *
 * Walks every `agents/<slug>/agent.md`, parses the YAML frontmatter +
 * markdown body, validates the required fields, and emits a single
 * `directory.json` the Reload platform fetches to render agent cards.
 *
 * Run locally:   node scripts/build-directory.mjs
 * In CI:         emitted on merge to main, published as a release asset.
 *
 * Dependencies: gray-matter (YAML frontmatter + body split).
 */

import { readFileSync, readdirSync, writeFileSync, existsSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import matter from 'gray-matter'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const AGENTS_DIR = join(ROOT, 'agents')
const OUT = join(ROOT, 'directory.json')

const REQUIRED = ['name', 'slug', 'tagline', 'description', 'category', 'developer', 'website']
const CATEGORIES = new Set(['coding', 'research', 'ops', 'data', 'general', 'other'])

/** @returns {{ entries: object[], errors: string[] }} */
function build() {
  const entries = []
  const errors = []

  const slugs = readdirSync(AGENTS_DIR).filter((name) => {
    const p = join(AGENTS_DIR, name)
    return existsSync(p) && statSync(p).isDirectory()
  })

  for (const slug of slugs) {
    const mdPath = join(AGENTS_DIR, slug, 'agent.md')
    if (!existsSync(mdPath)) {
      errors.push(`${slug}: missing agent.md`)
      continue
    }

    const { data, content } = matter(readFileSync(mdPath, 'utf8'))

    // Optional per-agent connection steps (## Autonomous / ## Manual).
    // Shown on the Reload reveal page next to the MCP config, with
    // <AGENT_API_KEY> / <MCP_BASE_URL> interpolated by the client.
    const stepsPath = join(AGENTS_DIR, slug, 'connection-steps.md')
    const connectionSteps = existsSync(stepsPath)
      ? readFileSync(stepsPath, 'utf8').trim()
      : null

    for (const field of REQUIRED) {
      if (!data[field]) errors.push(`${slug}: missing required field "${field}"`)
    }
    if (data.slug && data.slug !== slug) {
      errors.push(`${slug}: frontmatter slug "${data.slug}" does not match folder name`)
    }
    if (data.category && !CATEGORIES.has(data.category)) {
      errors.push(`${slug}: invalid category "${data.category}"`)
    }
    if (!data.logo?.square_dark) {
      errors.push(`${slug}: logo.square_dark is required`)
    }
    if (data.connection?.method === 'mcp' && !data.connection?.mcp_config) {
      errors.push(`${slug}: connection.method is "mcp" but connection.mcp_config is missing`)
    }

    entries.push({
      ...data,
      slug,
      // Body markdown rendered on the detail panel.
      body: content.trim(),
      // Autonomous + Manual connection steps (raw markdown), if present.
      connectionSteps,
      // Resolve logo paths relative to the agent folder for the CDN mirror.
      logo: data.logo
        ? Object.fromEntries(
            Object.entries(data.logo).map(([k, v]) => [k, `agents/${slug}/${v}`]),
          )
        : undefined,
    })
  }

  entries.sort((a, b) => (a.name ?? '').localeCompare(b.name ?? ''))
  return { entries, errors }
}

const { entries, errors } = build()

if (errors.length > 0) {
  console.error('Directory build failed:\n  ' + errors.join('\n  '))
  process.exit(1)
}

writeFileSync(
  OUT,
  JSON.stringify({ version: 1, generatedAt: new Date().toISOString(), agents: entries }, null, 2) +
    '\n',
)
console.log(`Wrote ${OUT} with ${entries.length} agent(s).`)
