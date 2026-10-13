# Security Policy

This is an educational prototype and must not process real healthcare information. The Solidity contract writes patient names and clinical details to a public, immutable ledger. Wallet addresses and transaction history are also observable. Do not assume a Solidity `private` mapping provides confidentiality.

Before any serious use, redesign storage around encrypted off-chain records and carefully reviewed access proofs, pin the chain/network and contract version, validate inputs, protect wallet interactions, add emergency controls and audits, and obtain appropriate healthcare privacy and security review. Never expose private keys or service credentials.

Report vulnerabilities privately to Brajesh Kumar through <https://github.com/brajesh31>. Include sanitized reproduction steps, contract address/network, affected function, impact, and transaction hash only when safe. Rotate exposed credentials immediately.
