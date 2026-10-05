# Changelog archive item 10

> Archived from the former monolithic `CHANGELOG.md` during modularization on 2026-10-05.

## 2026-10-04 — New-chat continuity / GitHub handoff protocol

### Why
Long-running research chats can exceed a practical conversation length. Project continuity should depend on the GitHub knowledge base rather than one chat transcript.

### Added
- root `CONTINUE_HERE.md` as the canonical new-chat/session bootstrap.

### Startup sequence
A new conversation should read:
1. `CONTINUE_HERE.md`
2. `README.md`
3. `PROGRESS.md`
4. `00_scope/repository_architecture.md`
5. relevant current workstream authority files.

### Governance
- `CONTINUE_HERE.md` is **not** a project-status file.
- `PROGRESS.md` remains the single global status authority.
- chat memory never overrides current repository authority.
- decision-critical information that exists only in chat is not considered safely archived.

### User workflow
A short new-chat prompt is now stored directly in `CONTINUE_HERE.md`.

### Research-state effect
**No research-progress increase.**

This is a continuity / repository-governance improvement only.

---
