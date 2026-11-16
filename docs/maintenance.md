# 🧰 Maintenance guide

## Source-of-truth hierarchy

1. Solidity source and compiler settings.
2. Generated ABI/bytecode artifact for the deployed contract.
3. Frontend implementation and tests.
4. Deployment metadata (chain ID, address, block).
5. Documentation and operational runbooks.

## Required updates

| Change | Documentation to review |
|---|---|
| Contract fields or methods | smart-contract, API, database, testing |
| ABI/address/chain change | configuration, installation, deployment |
| Authorization rules | security, threat model, QA |
| Data handling | privacy, secure architecture, incident response |
| UI forms/status | accessibility, QA, testing |
| Dependency update | development, security, release |
| New operational service | architecture, operations, deployment |

## Maintenance principles

- Keep generated ABI tied to a source commit/compiler version.
- Never edit ABI manually without reproducibility evidence.
- Review dependency advisories and lockfile changes.
- Re-test wallet/account/chain event handling.
- Revisit risks after contract upgrades.
- Keep examples synthetic and sanitized.
