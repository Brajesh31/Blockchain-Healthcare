# 🚀 Installation and local development

## Requirements

- Node.js and npm compatible with the Create React App 5 toolchain.
- A browser with an injected Ethereum wallet for blockchain interaction.
- Local chain or testnet deployment for functional testing.
- Solidity compiler compatible with the pragma and the exact deployment artifact.

## Install

```bash
npm ci
```

## Start development server

```bash
npm start
```

Open the local address displayed by CRA, typically `http://localhost:3000`.

## Configure wallet and contract

The current frontend hardcodes the contract address and ABI in `src/Healthcare.js`. Verify or replace these only for a test deployment. Generate the ABI from the exact checked-in Solidity contract version, and verify that the frontend tuple and parameter definitions match.

## Critical preflight

- [ ] Use a local chain or testnet only.
- [ ] Use a dedicated test wallet with no valuable assets.
- [ ] Ensure the account has no real patient information associated with its tests.
- [ ] Confirm chain ID and contract address.
- [ ] Confirm deployed bytecode exists.
- [ ] Regenerate and verify ABI.
- [ ] Use synthetic IDs, names, diagnosis and treatment.
- [ ] Never paste private keys or seed phrases into the app or repository.

See [Configuration](configuration.md) and [Troubleshooting](troubleshooting.md).
