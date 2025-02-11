---
sidebar_position: 7
---

# Upgrading Blackhole Monitoring

New metrics are now available on CycleOps that help you understand the load of Query Calls on your canister. To access these metrics, you'll need to switch your canister from using our V1 Blackhole to the new V2 Blackhole. Our upgrade wizard will guide you through the process in about five minutes.

If you have any canisters that need to be upgraded, you will be prompted to go to the wizard when you sign in.

## What you get for upgrading

The V2 Blackhole enables the following features. Please note that some of these will be rolled out at a future date:

- Additional canister metrics:
  - Number of query calls
  - Amount of data ingress/egress via query calls
  - WASM memory limit
  - Reserved cycles and reserved cycles limit
  - Canister log visibility
- New canister alerts:
  - Receive alerts when [reserved cycles](https://forum.dfinity.org/t/increasing-subnet-storage-capacity-and-introducing-resource-reservation-mechanism/23447) approach the reserved cycles limit

For a full technical interface of the new data available by upgrading, see the [V1 CanisterStatus](https://github.com/CycleOperators/BalanceCheckerVerification/blob/main/blackholes/v1/blackhole.mo#L23-L30) and [V2 CanisterStatus](https://github.com/CycleOperators/BalanceCheckerVerification/blob/main/blackholes/v2/blackhole.mo#L28-L38) types in our GitHub.

## How upgrading works

The basic steps to upgrade from the blackhole are as follows:

1. Add the new blackhole as a controller of your canister.
2. Notify CycleOps of this change.
3. Remove the old blackhole.

Our upgrade wizard makes this process simple by providing you with easy CLI commands and batching the upgrade process for multiple canisters at a time. It will only take a couple of minutes to complete the upgrade for all of your canisters, and you can selectively upgrade on a per-canister basis if preferred.

![[./wizard.png]](./wizard.png)

## Why a new blackhole is necessary

The [CycleOps blackhole](https://docs.cycleops.dev/docs/faq#what-is-a-black-holed-canister) canister used for monitoring is immutable, meaning that it can never be upgraded. This is a  critical part of what makes it safe for you to add it as a controller of your canisters. Since a blackhole can never be upgraded, and the CycleOps blackhole is [open source](https://github.com/CycleOperators/BalanceCheckerVerification) anyone can verify its source code and trust that it will remain safe forever because its code cannot change.

The trade-off to this security is that as new protocol-level metrics become available, the blackhole canister cannot be updated to support passing that data back to CycleOps during monitoring. This is why we have an incremental upgrade strategy - as new metrics become available, we'll make them available to you via a new blackhole canister that you can opt-in to when you are ready. This strategy is backwards compatible, and ensures that CycleOps can securely continue to monitor your canisters, while giving you access to new canister metrics as they become available.

## Verifying the blackhole

Of course, adding a controller to your canister is no small decision! We make this safe by ensuring:

1. The blackhole canister can only ever read stats from your canister.
2. The blackhole canister can never upgrade, alter, or call your canister in any other way.
3. The blackhole canister's code is open source and its WASM is verifiable.
4. The blackhole canister's code is short and simple to read and understand.
5. The blackhole canister can never be upgraded, ensuring all of the above in perpetuity.

To read the source code and verify the WASM for yourself, visit our [blackhole verification repository](https://github.com/CycleOperators/BalanceCheckerVerification).

## SNS and NNS monitored canisters

Some of the new metrics, such as query statistics are not currently available for SNS or NNS monitored canisters at this time. Support for new metrics under these monitoring mechanisms will happen at a later date, and does not require any upgrade actions.