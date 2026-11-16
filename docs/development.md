# 🛠️ Development workflow

## Repository components

- `Healthcare.sol`: current smart-contract source.
- `src/Healthcare.js`: wallet and contract interaction logic.
- `src/App.js`: top-level React composition.
- `src/App.css`, `src/index.css`: visual styles.
- `src/App.test.js`: starter React test.
- `package.json`: CRA scripts and dependencies.

## Typical workflow

1. Read the relevant architecture/API/security guide.
2. Make a focused change.
3. Compile Solidity with a pinned compiler and save reproducible ABI/artifact metadata where appropriate.
4. Update frontend types/ABI from the exact contract build.
5. Add unit tests for component behavior and contract tests for access/data logic.
6. Run lint/test/build.
7. Review accessibility and responsive behavior.
8. Update docs, threat model, and risk register where behavior changes.

## Current implementation caveats

The UI has no robust wallet lifecycle handling for account/chain changes. It does not guard all calls against an uninitialized contract. The ABI differs from the Solidity source around the `tests` field. The add-record handler supplies a constant patient name. These should be addressed as explicit code changes, not hidden by documentation.

## Commands

```bash
npm ci
npm test -- --watchAll=false
npm run build
```

Do not use production or real patient data during development.
