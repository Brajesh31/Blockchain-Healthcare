# 📚 Blockchain Healthcare documentation hub

This documentation describes the checked-in React/ethers/Solidity prototype, its current limitations, and the controls required before any safer redesign. It deliberately separates implemented behavior from proposed architecture.

## 🧭 Start here

| Area | Documents |
|---|---|
| Product and architecture | [Product overview](product-overview.md), [Architecture](architecture.md), [Smart contract](smart-contract.md), [Diagrams](diagrams/README.md) |
| Developer setup | [Installation](installation.md), [Configuration](configuration.md), [Development](development.md), [Troubleshooting](troubleshooting.md) |
| Interface and data | [Contract API](api.md), [Data model](database.md), [Deployment](deployment.md) |
| Security and privacy | [Security review](security.md), [Threat model](threat-model.md), [Privacy](privacy.md), [Secure architecture proposal](secure-architecture.md), [Incident response](incident-response.md) |
| Product quality | [Accessibility](accessibility.md), [Testing](testing.md), [QA plan](qa.md), [Known issues](known-issues.md), [Risk register](risk-register.md) |
| Operations | [Operations](operations.md), [Maintenance](maintenance.md), [Release management](release-management.md) |
| Templates | [Templates index](templates/README.md) |

## 🧩 Current implementation boundaries

The project consists of a React frontend and one Solidity contract. It does not include a backend, encrypted off-chain clinical store, consent management, formal patient identity service, medical-record interoperability layer, audited security controls, or a production deployment stack.

The current frontend ABI does not match the checked-in Solidity contract around the `tests` parameter/field. The UI also supplies a literal patient name. Treat record creation and retrieval as unverified until reconciled.

## 📌 Documentation conventions

- **Implemented:** behavior directly visible in the current source.
- **Partial:** a basic implementation exists but lacks production controls.
- **Not implemented:** source does not provide the capability.
- **Proposed:** recommended future design, not a claim about the current code.

## ⚠️ Safety baseline

Do not enter real health information. The current contract stores clinical text on-chain, where it cannot reliably be removed. `private` Solidity storage does not mean encrypted or confidential. All examples and screenshots must use synthetic records.
