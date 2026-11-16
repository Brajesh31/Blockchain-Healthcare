# 🗄️ Data model and storage

## Current storage

The project has no conventional database. Solidity stores records in contract state:

```solidity
mapping(uint256 => Record[]) private patientRecords;
mapping(address => bool) private authorizedProviders;
```

Each record includes numeric ID, patient name, diagnosis, treatment, and block timestamp.

## Privacy implications

Blockchain networks replicate state across nodes. Contract storage marked `private` is not encrypted and does not prevent chain observers from inspecting storage or transaction data. Data should be considered public and permanent.

## Cost and growth

Every record append consumes gas and increases contract storage. Returning a full array becomes progressively more expensive and may exceed practical RPC response limits. There is no pagination in the current method.

## Safer target data separation

| Data | Current design | Safer target |
|---|---|---|
| Direct identity | On-chain name | Off-chain identity system |
| Clinical text | On-chain plaintext | Encrypted off-chain clinical store |
| Record lookup | Numeric patient ID | Opaque random reference with access checks |
| Integrity evidence | No explicit digest policy | Reviewed commitment/hash with privacy analysis |
| Access policy | Provider boolean mapping | Audited consent/policy service plus contract enforcement |
| Key lifecycle | Not present | Managed keys, rotation, recovery, revocation |

A hash of low-entropy or guessable patient data can leak information through brute-force matching. Hashing is not automatically anonymization.
