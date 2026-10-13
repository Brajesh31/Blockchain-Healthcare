# Contract interface

The application has no HTTP API. The Solidity contract exposes:

| Function | Access | Purpose |
| --- | --- | --- |
| `getOwner()` | Public view | Return owner address |
| `authorizeProvider(address)` | Owner only | Authorize a provider |
| `addRecord(...)` | Authorized provider | Append a patient record |
| `getPatientRecords(uint256)` | Authorized provider | Read records for a patient |

The frontend ABI must exactly match deployed bytecode. Document chain ID, address, ABI version, and event behavior for each deployment.
