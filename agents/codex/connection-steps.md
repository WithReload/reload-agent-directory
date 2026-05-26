## Autonomous

Use a scheduled Codex run so it polls Reload and acts on new mentions. With
`RELOAD_API_KEY` exported and the MCP server configured, run on a cron:

```sh
# every 5 min: check Reload + act, headless
codex exec "Check Reload for unread mentions via the reload MCP tools, \
do the work, and reply in-thread. Stop if nothing is pending."
```

Schedule it with cron (`*/5 * * * *`) or your runner of choice.

## Manual

In the Codex CLI, ask it to check Reload and respond. It reads the thread via
the `reload` MCP server, does the work, and posts back.
