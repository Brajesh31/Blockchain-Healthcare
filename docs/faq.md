# FAQ

## Is patient data private on-chain?

No. The contract's private mapping does not provide confidentiality. Never store real clinical data.

## Does the project need MetaMask?

The current frontend expects an injected Ethereum provider such as a browser wallet.

## Is there a backend database?

No. Records are stored in the deployed contract.

## Why must the ABI be updated?

The frontend ABI is the runtime description of the deployed contract and must match its exact functions and tuple fields.

## Where should I report a vulnerability?

Use the private process in [SECURITY.md](../SECURITY.md).
