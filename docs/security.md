# 🔐 Security review

## Security posture

<badge>Educational prototype only</badge>

The current repository is not ready for production. It stores patient name, diagnosis and treatment as plaintext contract state, has no provider revocation, lacks robust wallet lifecycle handling, and has a frontend ABI mismatch.

## Findings

| ID | Finding | Severity | Evidence / effect |
|---|---|---|---|
| SEC-01 | Plaintext clinical data on-chain | Critical | Permanent public disclosure risk |
| SEC-02 | ABI differs from Solidity source | High | Calls/decoding may fail or misinterpret tuples |
| SEC-03 | Hardcoded contract address | Medium | Easy to connect to wrong network/deployment |
| SEC-04 | Literal patient name | High | Incorrect identity association and privacy risk |
| SEC-05 | No provider revocation method | High | Compromised/removed provider remains authorized |
| SEC-06 | No patient consent/access lifecycle | Critical for real health use | No consent evidence or sharing revocation |
| SEC-07 | Wallet/chain event handling incomplete | Medium | Stale account/chain state |
| SEC-08 | Weak input validation | Medium | Malformed/oversized values and gas abuse |
| SEC-09 | No application-level audit/monitoring | Medium | Limited incident investigation |
| SEC-10 | Starter test does not test actual functionality | High | Critical flows unverified |

## Immediate safeguards

- Use synthetic data only.
- Use local EVM/testnet and a disposable wallet.
- Never commit private keys, seed phrases, API secrets, or health details.
- Check chain ID and contract code before transactions.
- Do not expose public demos with record entry enabled.
- Keep RPC and frontend errors free of clinical payloads.

## Required before any real-world use

The storage architecture must be redesigned, audited and legally reviewed. Encryption, key ownership, patient consent, provider credentialing, revocation, data retention/deletion, incident response and accessibility need explicit implementation and evidence.

See [Threat model](threat-model.md) and [Privacy](privacy.md).
