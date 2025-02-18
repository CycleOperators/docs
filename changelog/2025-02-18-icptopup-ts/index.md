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

It takes just 4 steps to integrate [icptopup-ts into your application](https://github.com/CycleOperators/icptopup-ts):

1. **Installation:** `npm install icptoup-ts`
2. **Approve funds:** icptopup-ts uses ICRC-2 approve/transfer from, so first start out by approving at least 0.1 ICP to be spent on topups

```typescript
import ICPTopup from "icptopup-ts";

// in your function
const agent = HttpAgent.createSync({ identity, host: "https://ic0.app" });
const approvalBlockIndex = await ICPTopup.approveToSpendE8s({
  agent,
  e8sToApprove: BigInt(1e7), // approve a minimum of 0.1 ICP
});
```

3. **Instantiate the ICPTopup Actor**

```typescript
const agent = HttpAgent.createSync({ identity, host: "https://ic0.app" });
const icpTopupActor = new ICPTopup(agent);
```

4. **Execute topups** to multiple canisters, with control over the distribution of minted cycles sent to each canister

```typescript
const result = await icpTopupActor.batchTopupSync({
  // Note: make sure the icp account spent from has enough e8s for the ledger transfer (10_000 e8s)
  e8sToTransfer: BigInt(1e7), // 0.1 ICP
  topupTargets: [
    {
      canisterId: Principal.fromText("qc4nb-ciaaa-aaaap-aawqa-cai"),
      topupProportion: 2n, // send up 2/3rds of the minted cycles here
    },
    {
      canisterId: Principal.fromText("gf3bz-2aaaa-aaaap-ahngq-cai"),
      topupProportion: 1n, // send 1/3rd of the minted cycles here
    },
  ],
});
```

For more examples, including how to execute asynchronous topups, check out the [icptopup-ts GitHub documentation](https://github.com/CycleOperators/icptopup-ts)

### Benefits of using icptopup-ts

Before icptopup-ts, converting ICP to cycles had the following issues:

1. Minting cycles from ICP is not atomic and requires both an ICP transfer request, followed by a request to burn that ICP in order to mint cycles. Therefore, a topup attempted by a frontend integrated with the CMC could leave a user initiated topup in a half-finished, or inconsistent state, such as having sent funds but not received a topup if something goes wrong in the middle of this process.

2. The Cycles Minting Canister (CMC) was not ICRC compatible. By not supporting ICRC transfers, funds held in ICRC accounts required two transfers (one to a non-ICRC account, and then another to the CMC) in order to facilitate an ICRC topup, creating non-atomic asynchronous complexities, and introducing additional potential points of failure to a topup.

3. The CMC does not have a batch cycles minting API, meaning that the developer needs to handle all complexity associated with batching cycles, incurring additional, unnecessary fees for each individual cycles minting transaction.

### How does it work?

Under the hood, icptopup-ts is built on top of the [ICPTopup Service](https://forum.dfinity.org/t/icptopup-com-the-easiest-way-to-top-up-canisters-with-cycles/36434), integrating with fixed APIs on the backend ICPTopup canister. The ICPTopup canister provides unified, atomic topup APIs that handling ICRC ICP transfer, cycle minting, and parallel batch cycles distribution to canisters.

### What's next?

We're looking forward to seeing what you build with icptopup-ts! If you have any questions, requests, or feedback, [file an issue](https://github.com/CycleOperators/icptopup-ts/issues/new) or reach out to us [@CycleOps on X](https://x.com/CycleOps).
