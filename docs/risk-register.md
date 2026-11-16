# 📊 Risk register

| ID | Risk | Likelihood | Impact | Current treatment | Priority |
|---|---|---|---|---|---|
| R-01 | Plaintext health data permanently public | High | Critical | Synthetic data only; redesign storage | P0 |
| R-02 | Frontend ABI mismatch | High | High | Regenerate from deployed artifact | P0 |
| R-03 | Literal patient name hardcoded | High | High | Remove constant and validate synthetic identity input | P0 |
| R-04 | Provider cannot be revoked | Medium | High | Design revocation with audit semantics | P1 |
| R-05 | Compromised owner wallet | Medium | Critical | Multisig/hardware custody proposal | P1 |
| R-06 | Wallet chain/account changes stale state | Medium | Medium | Event listeners and state reset | P1 |
| R-07 | Record array growth causes gas/RPC issues | High | Medium | Off-chain storage and pagination | P1 |
| R-08 | No consent and retention model | High | Critical | Privacy/legal design review | P0 |
| R-09 | Accessibility barriers | Medium | High | WCAG-focused remediation and audit | P1 |
| R-10 | Starter test provides false confidence | High | High | Add feature and contract tests | P1 |

## Review cadence

Review at each contract/frontend behavior change, before a testnet demo, before any public deployment, and after any wallet/security incident. Risk ratings are qualitative and should be reassessed by project owners.
