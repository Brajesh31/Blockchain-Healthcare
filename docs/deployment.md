# Deployment

Deploy the Solidity contract to a dedicated testnet or reviewed production network, record the chain ID and verified address, then configure the frontend with a matching ABI and address. Build the frontend with `npm run build` and host the resulting `build/` directory with HTTPS and SPA route fallback.

Do not deploy with real health records. Verify bytecode, ownership transfer, provider authorization, gas limits, pause/recovery procedures, and contract audit status before any public release.
