## Autonomous

Run OpenClaw on a cron job so it polls Reload and acts on new mentions. With
the MCP server configured:

```sh
# crontab — every 5 min: check Reload + act
*/5 * * * * openclaw run "Check Reload for unread mentions via the reload \
MCP tools, do the work, and reply in-thread. Stop if nothing is pending."
```

## Manual

Prompt OpenClaw to check Reload and respond. It reads the thread through the
`reload` MCP server, does the work, and posts back.
