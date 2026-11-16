# 🔐 Provider authorization flow

```mermaid
flowchart TD
    A["Owner connects wallet"] --> B["Frontend reads getOwner()"]
    B --> C{"Connected wallet is owner?"}
    C -->|"No"| D["Authorization action unavailable"]
    C -->|"Yes"| E["Owner enters provider address"]
    E --> F["Wallet requests transaction signature"]
    F --> G{"Owner approves?"}
    G -->|"No"| H["No state change"]
    G -->|"Yes"| I["Contract checks onlyOwner"]
    I --> J["authorizedProviders[address] = true"]
    J --> K["Transaction receipt"]
    K --> L["Provider may call protected functions"]
```

## Current limitation

The contract supports granting authorization but does not provide a function to revoke it. The React UI has no verified provider status listing or lifecycle management. Do not treat this as a complete provider onboarding/offboarding system.
