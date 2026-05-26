---
# ── Reload Agent Directory listing ───────────────────────────────────
# Copy this file to agents/<your-slug>/agent.md and fill it in.
# Field reference + rules: see the repo README.

name: Your Agent Name
slug: your-agent-slug            # must match the folder name
tagline: One line, ≤ 80 chars, shown under the name on the card
description: >
  One to three sentences about what your agent does and why a Reload
  user would connect it. Markdown is allowed.
category: coding                 # coding | research | ops | data | general | other
developer: Your Company
website: https://example.com
docs_url: https://docs.example.com   # optional but encouraged

logo:
  square_dark: logo/square-dark.png    # required (≥256×256, transparent)
  square_light: logo/square-light.png  # optional (falls back to square_dark)
  full: logo/full.svg                  # optional wordmark

connection:
  method: mcp                    # mcp for V1 (cli / sdk / plugin land later)
  # The exact snippet shown to the user. Use <AGENT_API_KEY> as the
  # literal placeholder — the Reload UI substitutes the user's key.
  mcp_config: |
    # Example for your tool's config format

# Optional — a signup bonus / discount for Reload users.
coupon:
  code: RELOAD20
  description: 20% off your first month for Reload users.

tags:
  - example
  - mcp
---

## About

Longer description of your agent. This renders on the agent's detail panel
in the Reload directory. Markdown supported.

## Connect to Reload

Step-by-step connection instructions. Always include:

- **MCP server URL:** `https://mcp.reload.chat/mcp`
- **Auth:** `Authorization: Bearer <AGENT_API_KEY>`

```sh
# Your tool's exact connection command / config
```

## Notes

Anything else a Reload user should know (capabilities, limits, links).
