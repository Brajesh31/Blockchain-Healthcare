# ⚙️ Operations guide

## Current operation model

The project has no backend service or managed database. A user opens the static React app, connects a browser wallet, and interacts with an EVM network. Application availability depends on browser, wallet, RPC provider, chain, deployed contract and frontend configuration.

## Operational preflight

- Verify the application origin uses HTTPS outside local development.
- Verify expected chain ID and contract address.
- Verify contract bytecode and ABI fingerprint.
- Verify owner and provider accounts.
- Ensure test/demo environment contains synthetic data only.
- Confirm RPC provider availability and rate limits.
- Confirm no private keys or seed phrases are requested or stored.

## Monitoring signals for a future deployment

- Wallet connection and rejection rates.
- RPC latency and error rate.
- Transaction pending/revert rate.
- Contract event counts and unexpected authorization events.
- Frontend build integrity and dependency alerts.
- Accessibility and error-reporting regressions.

Never collect clinical payloads in telemetry. Use correlation IDs and transaction hashes only where safe and approved.
