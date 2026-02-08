# Specification

## Summary
**Goal:** Update the declined-state spoiler/italic line text in the UI.

**Planned changes:**
- In `frontend/src/App.tsx`, change only the declined-state italic line from `(Spoiler alert: You're going to say yes eventually anyway!)` to exactly: `Chup chap bol\" YES\"\"`.

**User-visible outcome:** When the user rejects and the declined state is shown, the italic line displays `Chup chap bol\" YES\"\"` and the previous spoiler text no longer appears there.
