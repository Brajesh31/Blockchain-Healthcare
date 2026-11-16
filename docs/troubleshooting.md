# 🧰 Troubleshooting

## Wallet connection

**No wallet detected:** Check whether an injected wallet extension is installed and enabled. The current UI accesses `window.ethereum` without a prior capability check. A robust implementation should detect wallet absence and show a non-blocking explanation.

**Connection rejected:** Respect the user's rejection. Do not repeatedly trigger connection prompts.

**Wrong account or network:** The current UI does not fully subscribe to account/chain change events. Reloading the app may refresh state, but a code fix should explicitly reset provider, signer, contract and owner state.

## Contract calls

**Transaction reverts:** Check chain ID, contract address, deployed bytecode, ABI and calling wallet. Only the owner can authorize providers; only authorized providers can add or read records.

**ABI decode/call error:** The checked-in ABI expects a `tests` field and parameter absent from `Healthcare.sol`. Recompile the exact source and regenerate the ABI.

**No contract code:** Confirm the configured address belongs to the intended chain and contains deployed bytecode.

**Record read fails:** The caller must be authorized. Check patient ID and RPC health.

## Build and tests

**npm install drift:** Use `npm ci` so the lockfile is respected.

**Test failure about learn React:** The current test file is a Create React App starter test and does not represent the healthcare UI.

**Build failure:** Check Node/npm compatibility with CRA 5, dependency install output and ESLint warnings. Do not suppress warnings without understanding them.

## Privacy and safety

Never paste patient details, private keys, seed phrases, or clinical transaction payloads into public logs, screenshots, or issues. On-chain disclosures cannot be reliably deleted.
