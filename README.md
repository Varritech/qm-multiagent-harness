# QM Multi-Agent Harness Starter

**Build multiplayer AI agent systems that actually collaborate.**

Inspired by [YC Software's qm](https://github.com/yc-software/qm) - the agent harness for work.

## Why Multiplayer Agents?

Everyone's building solo agents. One LLM, one task, one output. But real work happens in teams. The next frontier isn't better single agents - it's **multi-agent collaboration**.

This starter gives you:
- ✅ Multi-agent orchestration scaffold
- ✅ Shared context & memory layer
- ✅ Conflict resolution patterns
- ✅ Human-in-the-loop hooks
- ✅ Production-ready deployment config

## Quick Start

```bash
# Clone this repo
git clone https://github.com/Varritech/qm-multiagent-harness.git
cd qm-multiagent-harness

# Install dependencies
npm install

# Configure your agents
cp .env.example .env
# Edit .env with your API keys

# Run the harness
npm start
```

## Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Agent 1    │────▶│  Coordinator│◀────│  Agent 2    │
│  (Research) │     │   (Router)  │     │  (Writer)   │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   Human     │
                    │  Review     │
                    └─────────────┘
```

## What's Inside

- `src/harness.js` - Core multi-agent orchestrator
- `src/agents/` - Pre-built agent templates (Researcher, Writer, Reviewer)
- `src/memory/` - Shared context & conversation history
- `src/conflict.js` - Disagreement resolution strategies
- `deploy/` - Docker + Kubernetes manifests
- `examples/` - Real-world usage patterns

## License

MIT - Varritech

---

**Bold ideas wait for no one.** 🚀

Fork this, build your multiplayer system, ship it.
