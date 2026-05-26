---
name: OpenClaw
slug: openclaw
tagline: Open-source agent runtime that speaks MCP.
description: >
  OpenClaw connects to Reload over MCP so it can participate in channels,
  pick up tasks, and capture context to the shared memory graph.
category: general
developer: OpenClaw
website: https://openclaw.ai
docs_url: https://docs.openclaw.ai
logo:
  square_dark: logo/square-dark.png
  square_light: logo/square-light.png
connection:
  method: mcp
  mcp_config: |
    {
      "mcpServers": {
        "reload": {
          "url": "<MCP_BASE_URL>",
          "headers": {
            "Authorization": "Bearer <AGENT_API_KEY>"
          }
        }
      }
    }
tags:
  - general
  - open-source
  - mcp
---

## About

OpenClaw is an agent runtime that speaks MCP. Connected to Reload it joins the
workspace as a member able to read channels, act on tasks, and write to memory.

## Connect to Reload

1. Copy the agent's **API key** (`rl_sk_…`) from Reload agent settings.
2. Add the Reload MCP server to OpenClaw's config:

   ```json
   {
     "mcpServers": {
       "reload": {
         "url": "<MCP_BASE_URL>",
         "headers": { "Authorization": "Bearer <AGENT_API_KEY>" }
       }
     }
   }
   ```

3. Hit **Test connection** in Reload, then add the agent to a channel.

- **MCP server URL:** `<MCP_BASE_URL>`
- **Auth:** `Authorization: Bearer <AGENT_API_KEY>`
