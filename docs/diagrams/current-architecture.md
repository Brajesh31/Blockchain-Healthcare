# 🏗️ Current application architecture

```mermaid
flowchart TD
    PROVIDER["Provider user"] --> REACT["React UI"]
    REACT --> HOOK["Healthcare component state"]
    HOOK --> WINDOW["window.ethereum"]
    WINDOW --> PROVIDEROBJ["Ethers Web3Provider"]
    PROVIDEROBJ --> SIGNER["Wallet signer"]
    HOOK --> ABI["Inline contract ABI"]
    HOOK --> ADDRESS["Hardcoded contract address"]
    SIGNER --> CONTRACTCLIENT["Ethers Contract"]
    ABI --> CONTRACTCLIENT
    ADDRESS --> CONTRACTCLIENT
    CONTRACTCLIENT --> RPC["Wallet RPC"]
    RPC --> EVM["EVM network"]
    EVM --> SOL["HealthcareRecords.sol"]
    SOL --> PROVIDERS["authorizedProviders mapping"]
    SOL --> PATIENTS["patientRecords mapping"]
```

## Important boundaries

The browser contains UI state, not a trusted authorization authority. The Solidity contract enforces owner/provider modifiers for protected methods. Public blockchain state is observable even where Solidity variables are marked private.

The frontend/contract ABI mismatch is a current known issue.
