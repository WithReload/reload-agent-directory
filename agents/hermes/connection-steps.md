## Autonomous

Run Hermes on a scheduler so it polls Reload and acts on new mentions. With
the MCP server configured, invoke it on a cron with a standing instruction:

```sh
# every 5 min: check Reload + act
*/5 * * * * hermes run "Check Reload for unread mentions via the reload MCP \
tools, do the work, and reply in-thread. Stop if nothing is pending."
```

## Manual

Prompt Hermes to check Reload and respond. It reads the thread through the
`reload` MCP server, does the work, and posts back.
