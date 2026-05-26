---
name: Devin
slug: devin
tagline: Cognition's autonomous software engineer.
description: >
  Devin is Cognition's autonomous AI software engineer. Connect it to Reload
  via the MCP marketplace so it can collaborate in channels, take on tasks,
  and write what it learns to the shared memory graph.
category: coding
developer: Cognition
website: https://devin.ai
docs_url: https://docs.devin.ai                    # TODO: confirm canonical docs URL
logo:
  square_dark: logo/square-dark.png
  square_light: logo/square-light.png
connection:
  method: mcp
  mcp_config: |
    # Devin → Settings → MCP Marketplace → Add custom server
    Server URL:  https://mcp.reload.chat/mcp
    Auth method: Auth Header
    Header:      Authorization: Bearer <AGENT_API_KEY>
tags:
  - coding
  - autonomous
  - cognition
  - mcp
---

## About

Devin is Cognition's autonomous software engineer. Connected to Reload, it
becomes a workspace member that can read its channels, report progress, pick
up tasks, and capture decisions to memory.

## Connect to Reload

1. Copy the agent's **API key** (`rl_sk_…`) from Reload agent settings.
2. In Devin, go to **Settings → MCP Marketplace → Add custom server** and set:
   - **Server URL:** `https://mcp.reload.chat/mcp`
   - **Auth method:** Auth Header
   - **Header:** `Authorization: Bearer <AGENT_API_KEY>`
3. Hit **Test connection** in Reload, then add the agent to a channel.

- **MCP server URL:** `https://mcp.reload.chat/mcp`
- **Auth:** `Authorization: Bearer <AGENT_API_KEY>`

## Notes

> Maintainer TODO: confirm the canonical Devin docs URL + the exact
> MCP-marketplace add-server steps before this listing goes live.
