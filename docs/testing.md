# 🧪 Testing strategy

## Current scripts

The project defines `npm test` and `npm run build` using Create React App. The existing `src/App.test.js` is the untouched starter test and searches for a "learn react" link; it does not test healthcare functionality.

## Test layers

| Layer | Scope | Required evidence |
|---|---|---|
| React component | Empty/loading/error/wallet states | React Testing Library |
| Wallet integration | Missing wallet, rejected connect, account/chain changes | Mocked provider tests |
| Contract unit | Owner/provider access and record invariants | Local EVM tests |
| ABI integration | Frontend ABI vs compiled artifact | Automated ABI equality/signature check |
| Transaction flow | Submission, receipt, revert, pending state | Local chain integration |
| Accessibility | Labels, keyboard, screen reader announcements | Automated + manual review |
| Build | CRA production compilation | `npm run build` |

## Suggested contract test cases

1. Deployer is stored as owner.
2. Owner can authorize a provider.
3. Non-owner cannot authorize.
4. Authorized provider can create record.
5. Unauthorized account cannot create record.
6. Authorized provider can retrieve.
7. Unauthorized account cannot retrieve.
8. Record IDs and timestamps match expected behavior.
9. Behavior for provider removal is explicitly tested after a revocation design is implemented.

## Run current checks

```bash
npm ci
npm test -- --watchAll=false
npm run build
```

No test should use real patient information or a funded wallet.
