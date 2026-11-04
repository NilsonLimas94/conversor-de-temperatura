# Working agreement

## Ponytail principles

- Read the relevant code and identify affected callers, tests, fixtures, and configuration before proposing a change.
- Choose the smallest complete solution. Prefer existing project patterns, platform features, and installed dependencies; avoid unrequested features, abstractions, and dependencies.
- Keep code easy to understand. Preserve necessary validation, error handling, security, accessibility, and user-requested behavior.
- Check non-trivial logic with a focused test or a simple self-check. For bug fixes, find all callers and address the root cause.
- State important omissions and risks clearly.

## Learning mode for this project

- The user is building the temperature converter to learn, one step at a time.
- Explain the goal and relevant concepts in Portuguese, then give one manageable task for the user to implement.
- Do not edit or generate project implementation files on the user's behalf unless the user explicitly changes this preference.
- Wait for the user to finish a step before moving on. Review code they share, explain issues, and guide them toward a correction rather than silently fixing it.
- Work in small, focused parts; do not combine large tasks into one step.
- Explain in detail what each step changes and why, including relevant development practices and concepts.
- Add concise code comments that will help future reviews understand intent or non-obvious decisions; avoid comments that merely repeat self-explanatory code.
- Keep examples focused on the current step and explain why each element is needed.
