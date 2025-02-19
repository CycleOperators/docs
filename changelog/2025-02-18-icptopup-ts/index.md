---
slug: icptopup-ts
title: icptopup-ts release
authors: [byron]
image: ./icptopup-ts-external.png
---

[![](./icptopup-ts-internal.png)](/changelog/icptopup-ts)

Today we're releasing [icptopup-ts](https://github.com/CycleOperators/icptopup-ts), a TypeScript package that makes it easy to programmatically 👨‍💻 facilitate large amounts of decentralized compute, sending cycles to up to 100 canisters at at time.

With `npm install icptopup-ts`, you can integrate atomic, ICRC compatible cycle topups into your application in just a few minutes!

<!-- truncate -->

---

### How can I use icptopup-ts?

👉 To get started, head to the icptopup-ts [installation instructions](https://github.com/CycleOperators/icptopup-ts) ✍️

The package comes with both synchronous and _asynchronous_ primitives for sending cycles depending on your desired UX, and **slots in easily to both Frontend and NodeJS contexts** 🎉

Over the past few weeks, developers have already used icptopup-ts to mint and send over 30,000T cycles across more than 21,000 individual canister topup events.

### Why did we build icptopup-ts?

Before icptopup-ts, converting ICP to cycles had the following issues:

1. Minting cycles from ICP is not atomic and requires both an ICP transfer request, followed by a request to burn that ICP in order to mint cycles. Therefore, a topup attempted by a frontend integrated with the CMC could leave a user initiated topup in a half-finished, or inconsistent state, such as having sent funds but not received a topup if something goes wrong in the middle of this process.

2. The Cycles Minting Canister (CMC) was not ICRC compatible. By not supporting ICRC transfers, funds held in ICRC accounts required two transfers (one to a non-ICRC account, and then another to the CMC) in order to facilitate an ICRC topup, creating non-atomic asynchronous complexities, and introducing additional potential points of failure to a topup.

3. The CMC does not have a batch cycles minting API, meaning that the developer needs to handle all complexity associated with batching cycles, incurring additional, unnecessary fees for each individual cycles minting transaction.

icptopup-ts **solves these issues** by providing a simple, atomic, ICRC compatible API for topping up multiple canisters in parallel.

### Using ICRC-2 Approvals to simplify the DX 💪

The package leverages [ICRC-2 approvals](https://github.com/dfinity/ICRC-1/tree/main/standards/ICRC-2#icrc2_approve), allowing the icptopup API to handle both ICP transfer and cycles topups, as well as handling any potential intermediate error states that could occur. This results in a simplified, decoupled two step experience:

1. First, the developer [approves icptopup-ts to mint cycles](https://github.com/CycleOperators/icptopup-ts?tab=readme-ov-file#2-approve-icptopup-to-mint-cycles-from-icp-on-your-behalf). This step is a simple approval for funds to be transferred, and does not transfer any ICP.

2. Then, the developer makes a single API call to [execute the multi-canister topup](https://github.com/CycleOperators/icptopup-ts?tab=readme-ov-file#4-call-icptopups-synchronous-batchtopupsync-api-or-its-asynchronous-topup-api). This single API call executes both the ICRC-2 ICP transfer and well as the cycles minting action.

### How does it work?

Under the hood, icptopup-ts is built on top of the [ICPTopup Service](https://forum.dfinity.org/t/icptopup-com-the-easiest-way-to-top-up-canisters-with-cycles/36434), integrating with fixed APIs on the backend ICPTopup canister. The ICPTopup canister provides unified, atomic topup APIs that handling ICRC ICP transfer, cycle minting, and parallel batch cycles distribution to canisters.

### What's next?

We're looking forward to seeing what you build with icptopup-ts! If you have any questions, requests, or feedback, [file an issue](https://github.com/CycleOperators/icptopup-ts/issues/new) or reach out to us [@CycleOps on X](https://x.com/CycleOps).
