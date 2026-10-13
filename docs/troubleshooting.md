# Troubleshooting

## Wallet connection fails

Install and unlock a supported wallet, serve the app over a local HTTP server, allow the connection, and verify the selected network.

## Contract calls revert

Confirm the address, chain ID, ABI, deployed bytecode, signer account, and provider authorization. Only the owner may authorize providers; only authorized providers may add or read.

## ABI decoding fails

Regenerate the ABI from the exact Solidity source used for deployment. The checked-in frontend expects a `tests` field that the checked-in contract does not define.

## Records are unavailable

Check the patient ID, wallet authorization, network, RPC availability, and transaction confirmation. Do not paste patient content into public logs.
