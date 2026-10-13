# Architecture

The React entry point renders `Healthcare`, which creates an ethers.js `Web3Provider` from the injected browser wallet. The component obtains a signer, constructs a contract instance from a hardcoded address and ABI, checks the owner, and submits or reads records.

`Healthcare.sol` is the on-chain domain layer. It stores arrays of `Record` values by patient ID and maps provider addresses to authorization status. The owner authorizes providers; authorized providers add and read records.

There is no backend, API gateway, encryption service, migration framework, or off-chain database.
