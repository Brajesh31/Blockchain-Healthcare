# 🐞 Known issues and implementation gaps

These issues are grounded in the checked-in source files reviewed during documentation work. They are not all fixed by this documentation change.

| ID | File | Issue | Impact |
|---|---|---|---|
| KI-01 | `src/Healthcare.js` | ABI expects a `tests` parameter and struct field absent from `Healthcare.sol` | Contract calls/decoding inconsistent |
| KI-02 | `src/Healthcare.js` | Contract address hardcoded | Wrong deployment/network risk |
| KI-03 | `src/Healthcare.js` | `addRecord` sends literal patient name `Alice` | Identity/data correctness failure |
| KI-04 | `Healthcare.sol` | Name, diagnosis and treatment stored directly on-chain | Permanent privacy exposure |
| KI-05 | `Healthcare.sol` | No provider deauthorization function | Authorization cannot be revoked |
| KI-06 | `src/Healthcare.js` | No robust account/chain change subscriptions | Stale signer/contract state |
| KI-07 | `src/Healthcare.js` | Calls can occur while contract is null | Runtime errors possible |
| KI-08 | `src/App.test.js` | CRA starter test expects learn React content | Does not test actual app |
| KI-09 | `src/Healthcare.js` | Placeholder-only form fields | Accessibility gap |
| KI-10 | Contract/UI | No explicit input-length or semantic validation | Cost and data-quality risk |

## Scope of this update

The application source was not silently rewritten. Fixes should be implemented as separate, tested code changes with ABI regeneration, contract tests, React tests, and an updated security review.
