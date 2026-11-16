# 🗺️ Roadmap

The order below prioritizes safety and correctness over adding UI features.

## P0: Stop unsafe data handling
- [ ] Replace public on-chain clinical text with a privacy-reviewed off-chain design.
- [ ] Define patient consent, purpose, retention, correction, and revocation.
- [ ] Remove hardcoded patient identity and use synthetic fixtures.
- [ ] Reconcile Solidity source, compiled artifact, and frontend ABI.
- [ ] Add explicit chain/address preflight and fail-closed behavior.

## P1: Contract and wallet correctness
- [ ] Add provider deauthorization and lifecycle events.
- [ ] Add input validation and record/event pagination strategy.
- [ ] Add ownership/key custody model and emergency recovery.
- [ ] Handle wallet account and chain changes.
- [ ] Guard all actions when wallet/contract is unavailable.

## P2: Quality and accessibility
- [ ] Replace CRA starter test with real component tests.
- [ ] Add contract tests on a local EVM.
- [ ] Add ABI/source consistency test.
- [ ] Add keyboard, screen reader, contrast and responsive audits.
- [ ] Document error states and transaction lifecycle.

## P3: Release governance
- [ ] Pin Solidity compiler and build reproducibly.
- [ ] Add independent contract/security review.
- [ ] Add release metadata and deployment runbook.
- [ ] Establish monitoring and incident response process.

Roadmap entries are proposals until implemented, tested, and reviewed.
