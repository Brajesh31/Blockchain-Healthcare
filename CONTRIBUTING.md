# Contributing

Use testnet wallets and synthetic patient records only. Never commit private keys, seed phrases, real health information, deployed secrets, or production RPC credentials.

1. Create a focused branch.
2. Install with `npm ci`.
3. Verify Solidity and frontend ABI compatibility.
4. Test wallet connection, owner/provider permissions, rejected transactions, successful reads/writes, and wrong-network behavior.
5. Run `npm test` and `npm run build`.

Pull requests should document contract address/network assumptions, ABI changes, gas or access-control implications, and verification steps. Report vulnerabilities privately using [SECURITY.md](SECURITY.md).
