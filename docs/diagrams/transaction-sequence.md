# 🔁 Provider transaction sequence

```mermaid
sequenceDiagram
    actor Provider
    participant UI as React UI
    participant Wallet as Injected wallet
    participant RPC as EVM RPC
    participant Contract as HealthcareRecords
    Provider->>UI: Enter synthetic patient data
    UI->>Wallet: Request transaction
    Wallet-->>Provider: Display transaction approval
    Provider->>Wallet: Approve
    Wallet->>RPC: Broadcast signed transaction
    RPC->>Contract: Execute addRecord
    Contract->>Contract: Check authorizedProviders
    alt Caller authorized
        Contract->>Contract: Append Record struct
        Contract-->>RPC: Successful execution
        RPC-->>UI: Receipt
        UI-->>Provider: Show confirmation
    else Caller unauthorized
        Contract-->>RPC: Revert
        RPC-->>UI: Error
        UI-->>Provider: Show actionable error
    end
```

This represents the intended call lifecycle. The checked-in frontend ABI does not currently match the checked-in contract source, so this flow is not verified end-to-end.
