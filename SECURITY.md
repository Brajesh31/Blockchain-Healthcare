# 🔐 Security policy

## Project classification

Blockchain Healthcare is an educational prototype. It must not be used to store, process, or demonstrate real patient or clinical data. The checked-in contract stores names, diagnoses, and treatment text directly in public blockchain state. Solidity `private` visibility is not encryption.

## Reporting a vulnerability

For a suspected vulnerability, contact the maintainer privately through <https://github.com/brajesh31>. Include the affected file/contract, network and contract address if safe, sanitized reproduction steps, impact, and relevant transaction reference. Never attach patient data, seed phrases, private keys, wallet exports, or credentials.

## Sensitive data rules

- Never commit real clinical records or personal identifiers.
- Never put a private key or seed phrase in code, environment variables shipped to the browser, screenshots, logs, or issue comments.
- Assume public-chain inputs, storage and events are visible and permanent.
- Do not use funded wallets for experiments.
- Keep test fixtures synthetic and visibly labeled.

## Current known blockers

- Plaintext clinical data is stored on-chain.
- Frontend ABI and Solidity source are inconsistent.
- Patient name is hardcoded in the frontend.
- Provider authorization cannot be revoked.
- No patient consent or retention/deletion model exists.

## Scope

This policy is not a security certification or incident-response SLA. A public security review must not expose sensitive data as proof.
