---
sidebar_position: 4
---

# Integrating Canisters

The following steps must be taken to integrate a canister with CycleOps:

1. Add your canister to CycleOps
2. Add the balance checker as a controller of your canister

## Adding your canister to CycleOps

From the [web app dashboard](https://cycleops.dev), select “add canister”. Note that you will be unable to add a canister which you do not control, or one which has already been added to CycleOps by another principal.

## Adding the balance checker as a controller

The balance checker canister is a secure, no-code way for CycleOps to read your cycles balance. As the balance checker has been [blackholed](../faq.md#what-is-a-black-holed-canister), it can never alter your canister.

You can view the source code for the balance checker, and verify both the wasm hash and blackhole status of the canister at https://github.com/CycleOperators/BalanceCheckerVerification.

Note that if you do not add the balance checker as a controller, or if you remove it as a controller, blackhole monitoring and automated topups through CycleOps will not function. However, there are [different ways to monitor canisters with CycleOps](../faq.md#are-there-options-to-monitor-my-canister-other-than-through-the-cycleops-blackhole) other than the balance checker.

After adding a canister, you will be prompted to add the balance checker, and then to verify that the balance checker has been added as a controller properly.
