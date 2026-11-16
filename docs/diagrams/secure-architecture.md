# 🧱 Proposed secure architecture

```mermaid
flowchart TD
    PAT["Patient / Provider"] --> UI["Accessible React interface"]
    UI --> ID["Identity and authorization gateway"]
    ID --> CONSENT["Consent and purpose policy"]
    CONSENT --> KMS["Key management service"]
    ID --> CLINICAL["Encrypted off-chain clinical store"]
    CLINICAL --> KMS
    ID --> AUDIT["Privacy-aware audit service"]
    AUDIT --> CHAIN["Minimal integrity commitment on chain"]
    CHAIN --> VERIFY["Integrity verification"]
    VERIFY --> ID
```

**This architecture is proposed only.** It is not implemented by the current frontend or Solidity contract. The contract should not store names, diagnoses, treatments, or direct identifiers.
