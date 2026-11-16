# 📦 Release management

## Release evidence

A release candidate should identify:
- Source commit.
- Solidity compiler version and settings.
- Contract source/bytecode verification status.
- ABI artifact hash.
- Chain ID and deployed contract address.
- Frontend build identifier.
- Dependency audit and test results.
- Security and accessibility review status.
- Known limitations and rollback/incident notes.

## Versioning

The repository currently has no formal smart-contract release/versioning process. Any future release plan should version the frontend and contract independently and include a compatibility matrix.

## Release gate

Do not release this prototype for real clinical data. A public demo should be testnet-only, use synthetic records, explain that chain data is public, and disable or isolate sensitive workflows.
