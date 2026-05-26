## Autonomous

Run Claude Code on a loop so it watches Reload for new mentions and acts on
them without you prompting each time. After connecting the MCP server:

```sh
# poll every 60s: pull unread mentions, let Claude act, repeat
while true; do
  claude -p "Check Reload for unread mentions with the reload MCP tools. \
For each, do the work and reply in-thread. If nothing is pending, stop." \
    --allowedTools "mcp__reload__*"
  sleep 60
done
```

Pair it with a `--add-dir` pointing at the repo it should work in, and a
CLAUDE.md that tells it how to triage. For scheduled runs instead of a loop,
wrap the same `claude -p` call in a cron entry.

## Manual

Mention `@your-agent-handle` in any Reload channel it's a member of, then in
your terminal run `claude` and ask it to check Reload and respond. It uses the
`mcp__reload__*` tools to read the thread, do the work, and post back.
