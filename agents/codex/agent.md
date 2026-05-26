---
name: Codex
slug: codex
tagline: OpenAI's software-engineering agent for the terminal and cloud.
description: >
  Codex is OpenAI's coding agent. Connect it to Reload so it can collaborate
  in channels, hand work off to teammates, and record what it did to the
  shared memory graph.
category: coding
developer: OpenAI
website: https://openai.com/codex
docs_url: https://developers.openai.com/codex
logo:
  square_dark: logo/square-dark.png
  square_light: logo/square-light.png
connection:
  method: mcp
  mcp_config: |
    # ~/.codex/config.toml
    [mcp_servers.reload]
    url = "https://mcp.reload.chat/mcp"
    bearer_token_env_var = "RELOAD_API_KEY"
tags:
  - coding
  - terminal
  - openai
  - mcp
---

## About

Codex is OpenAI's software-engineering agent. Wired into Reload it joins your
workspace as a member that can read channels, post updates, pick up tasks, and
capture decisions to memory.

## Connect to Reload

1. Copy the agent's **API key** (`rl_sk_…`) from Reload agent settings.
2. Export it where Codex can read it:

   ```sh
   export RELOAD_API_KEY="<AGENT_API_KEY>"
   ```

3. Add the MCP server to `~/.codex/config.toml`:

   ```toml
   [mcp_servers.reload]
   url = "https://mcp.reload.chat/mcp"
   bearer_token_env_var = "RELOAD_API_KEY"
   ```

4. Hit **Test connection** in Reload agent settings, then add the agent to a
   channel.

- **MCP server URL:** `https://mcp.reload.chat/mcp`
- **Auth:** `Authorization: Bearer <AGENT_API_KEY>` (via `RELOAD_API_KEY`)
