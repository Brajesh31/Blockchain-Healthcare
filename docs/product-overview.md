# 🩺 Product overview

## Purpose

The project demonstrates a small Ethereum-based healthcare record workflow. It connects a React interface to a wallet and a Solidity contract to illustrate provider authorization, transaction submission, and record reads.

## Intended educational audience

- Learners studying React and ethers.js.
- Learners exploring Solidity mappings, structs, modifiers, and transactions.
- Developers studying the boundary between wallet UI and smart-contract methods.

## Not a clinical system

The current prototype is not an electronic health record, medical device, clinical decision-support tool, patient portal, or compliant health-data platform. It has no workflow for patient identity proofing, consent capture, correction, deletion, provider credential verification, or clinical audit.

## User roles visible in the code

| Role | Current capabilities |
|---|---|
| Contract owner | Read owner address; authorize provider addresses |
| Authorized provider | Submit and retrieve records |
| Other wallet | Cannot invoke modifier-protected contract methods |
| Patient | No patient-facing identity, consent, or access interface exists |

## Core use case

An owner authorizes a provider. The provider connects a wallet, enters a patient ID and clinical text, submits a transaction, and requests records for that patient ID.

## Major constraints

1. Patient name, diagnosis, and treatment are stored directly in a public blockchain state.
2. The contract has no provider revocation function.
3. The frontend and Solidity ABI are currently inconsistent.
4. The UI uses a hardcoded patient name.
5. No server-side service or off-chain encrypted store exists.
6. Existing tests do not validate wallet/contract behavior.

## Success criteria for this prototype

A safe educational demonstration should use a local chain or testnet, synthetic patient identifiers and details, a matching ABI/address, known test wallets, verified transaction receipts, and no real healthcare data.
