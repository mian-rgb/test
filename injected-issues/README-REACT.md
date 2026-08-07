This file lists the intentionally-inserted React anti-patterns in this branch:

- BrokenButton: div role=button, not keyboard accessible, no aria-label (icon-only).
- DuplicateHeading: duplicate H1.
- EvalWidget: uses eval() on user input (security risk).
- NoKeyList: renders list items without keys.
- The test suite contains one intentionally failing assertion (duplicate H1 expected to be 1) to surface failing tests in CI.
