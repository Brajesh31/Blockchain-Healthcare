# ⚙️ Configuration and environment

## Current configuration

The contract address and ABI are hardcoded in `src/Healthcare.js`. The component reads `window.ethereum` and automatically requests account access on mount. The provided `.env.example` documents suggested React build-time variables but the current source does not consume them.

## Suggested local configuration

A future configuration boundary may use Create React App public variables:

```dotenv
REACT_APP_CHAIN_ID=11155111
REACT_APP_CONTRACT_ADDRESS=0x0000000000000000000000000000000000000000
```

These are public frontend build values, not secrets. Never place private keys, wallet seed phrases, API secrets, or confidential patient information in `REACT_APP_*` variables.

## Required validation before connecting

- Check the variable is defined.
- Validate address syntax with ethers.
- Compare the selected provider's chain ID to the configured chain.
- Confirm contract bytecode exists at the address.
- Load an ABI generated from the deployed contract artifact.
- Fail closed when configuration does not match.

## Environment separation

Keep local, testnet, staging, and production addresses separate. Do not reuse a testnet ABI/address entry without recording the contract compiler version and source commit.
