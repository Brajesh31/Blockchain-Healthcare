# Installation

Requirements: Node.js, npm, an injected Ethereum-compatible wallet, and a disposable testnet deployment.

```powershell
npm ci
npm start
```

Update the contract address and ABI in `src/Healthcare.js`, select the matching wallet network, and use synthetic records only. The current ABI includes a `tests` argument that is absent from the checked-in Solidity struct/function, so compile and regenerate the ABI before making calls.
