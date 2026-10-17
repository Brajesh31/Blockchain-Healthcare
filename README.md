# Blockchain Healthcare

Blockchain Healthcare is a Create React App prototype that connects a browser wallet to an Ethereum-compatible `HealthcareRecords` Solidity contract. It demonstrates provider authorization, patient-record submission, and record retrieval through ethers.js.

> **Critical privacy warning:** The contract stores patient names, diagnoses, treatments, and timestamps on-chain. Blockchain data is public and effectively permanent. Never use real patient or health information with this prototype.

## Features

- MetaMask-style injected wallet connection through ethers.js.
- Contract-owner detection and provider authorization.
- Patient record submission and retrieval UI.
- Solidity contract with owner/provider access modifiers.
- React Hot Toast transaction feedback.

## Requirements

- Node.js and npm.
- An Ethereum-compatible browser wallet and test network.
- A deployed contract whose address and ABI match the frontend.

## Getting started

```powershell
npm ci
npm start
```

Before running, update the contract address and ABI in `src/Healthcare.js` and ensure the connected wallet uses the correct network. The checked-in ABI and Solidity source are currently inconsistent around a `tests` field; verify and regenerate the ABI before use.

## Contract behavior

`HealthcareRecords.sol` assigns the deployer as owner, lets the owner authorize provider addresses, allows authorized providers to add records, and restricts record reads to authorized providers. The current contract stores identifying and clinical text directly on-chain.

## Development and safety

Use a disposable test deployment and synthetic records only. Confirm the deployed bytecode, chain ID, ABI, access rules, gas costs, and wallet account before sending transactions. See [SECURITY.md](SECURITY.md) and [docs/database.md](docs/database.md).

## License

MIT licensed. See [LICENSE](LICENSE).

Last updated: 2026-10-17 11:49 UTC
