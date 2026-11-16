# ✅ Quality assurance plan

## Quality objectives

- Correct wallet and network selection.
- Exact agreement between Solidity ABI and frontend.
- Correct owner/provider authorization.
- Predictable transaction and error feedback.
- No real health information in demos or test logs.
- Keyboard and screen-reader accessible workflows.
- Reproducible build and contract artifacts.

## Functional test matrix

| ID | Scenario | Expected result |
|---|---|---|
| QA-01 | Wallet extension absent | Helpful connection guidance; no crash |
| QA-02 | User rejects connection | State remains disconnected |
| QA-03 | Wrong network | Transaction actions disabled and network explained |
| QA-04 | Owner authorizes a provider | Receipt confirmed and status refreshed |
| QA-05 | Non-owner attempts authorization | Contract rejects |
| QA-06 | Authorized provider adds synthetic record | Transaction receipt confirmed |
| QA-07 | Unauthorized account reads records | Contract rejects |
| QA-08 | ABI mismatched | Startup/preflight detects mismatch |
| QA-09 | Account changes | UI updates signer and authorization |
| QA-10 | Chain changes | UI invalidates old contract state and checks configuration |

## Non-functional checks

- Accessibility: labels, keyboard, contrast, announcements.
- Privacy: no real clinical content on-chain.
- Security: dependency audit, contract review, key handling.
- Reliability: pending/reverted transaction handling.
- Performance: large record array behavior and RPC limits.
- Maintainability: artifact/ABI reproducibility.

## Exit criteria

Do not declare a release-ready healthcare system based only on frontend tests or a successful testnet transaction. Require source/ABI consistency, contract test coverage, security review, privacy assessment, accessibility validation, and a safe data architecture.
