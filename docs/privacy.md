# 🛡️ Privacy and health-data handling

## Non-negotiable rule

**Never use real patient or clinical data with the current contract.** Names, diagnoses and treatments are stored directly in contract state. Blockchain data can be copied by nodes, indexed by explorers, and retained indefinitely.

## Data inventory

| Data | Current location | Privacy risk |
|---|---|---|
| Patient ID | Mapping key and transaction input | Linkable identifier |
| Patient name | Record struct | Direct identity disclosure |
| Diagnosis | Record struct | Sensitive health disclosure |
| Treatment | Record struct | Sensitive health disclosure |
| Timestamp | Record struct | Reveals activity/timing |
| Provider wallet | Authorization mapping and tx sender | Linkable professional activity |

## Missing privacy capabilities

- Patient notice and consent capture.
- Purpose limitation and data minimization.
- Patient access, correction, export and deletion workflow.
- Provider role lifecycle and revocation.
- Encryption at rest and in transit for clinical records.
- Key rotation, recovery and destruction.
- Retention schedule and deletion evidence.
- Privacy impact assessment and legal review.

## Safer target principles

1. Keep clinical content off-chain.
2. Encrypt records using reviewed cryptographic design and managed keys.
3. Avoid direct identifiers and predictable patient IDs on-chain.
4. Carefully assess whether even hashes or references can be correlated.
5. Separate identity, consent, authorization, clinical storage, and audit services.
6. Implement access revocation and breach response.
7. Provide patient-facing privacy notices and alternate access channels.

This is design guidance, not a certification of compliance with any law or health-data standard.
