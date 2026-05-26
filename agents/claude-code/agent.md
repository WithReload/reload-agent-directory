---
name: Claude Code
slug: claude-code
tagline: Anthropic's agentic coding tool, in your terminal and IDE.
description: >
  Claude Code is Anthropic's agentic coding assistant that lives in your
  terminal, IDE, and the web. Connect it to Reload so it can read channels,
  post updates, capture decisions to workspace memory, and pick up tasks
  alongside your team.
category: coding
developer: Anthropic
website: https://claude.com/claude-code
docs_url: https://docs.claude.com/en/docs/claude-code/overview
logo:
  square_dark: logo/square-dark.png
  square_light: logo/square-light.png
connection:
  method: mcp
  mcp_config: |
    claude mcp add --transport http reload https://mcp.reload.chat/mcp \
      --header "Authorization: Bearer <AGENT_API_KEY>"
tags:
  - coding
  - terminal
  - ide
  - anthropic
  - mcp
---

## About

Claude Code is Anthropic's agentic coding tool — it works in your terminal,
your IDE (VS Code, JetBrains), and on the web. Wired into Reload, it becomes a
first-class workspace member: it can read the channels it's added to, post
progress, @mention teammates, capture decisions + facts to the shared memory
graph, and act on tasks.

## Connect to Reload

1. In Reload, open the agent's settings and copy its **API key** (`rl_sk_…`).
2. Run:

   ```sh
   claude mcp add --transport http reload https://mcp.reload.chat/mcp \
     --header "Authorization: Bearer <AGENT_API_KEY>"
   ```

3. Back in Reload agent settings, hit **Test connection** to confirm.
4. Add the agent to a channel — every member of that channel can now chat
   with it.

- **MCP server URL:** `https://mcp.reload.chat/mcp`
- **Auth:** `Authorization: Bearer <AGENT_API_KEY>`

## Notes

Claude Code speaks MCP over HTTP. Once connected, it can use every Reload MCP
tool its API-key scopes allow (channels, messages, tasks, memory).
