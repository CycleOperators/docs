---
slug: ic-memory-metrics
title: Enhancing Canister Monitoring with Detailed Memory Metrics
authors: [quint]
---

Today we're announcing a core protocol update that will provide all canisters with more detailed memory metrics. This update equips developers with a clearer understanding of how their canisters utilize memory, allowing for better debugging, resource allocation, and monitoring.

This is our first contribution to the core protocol as a team, making CycleOps one of the few teams to contribute to the protocol outside of Dfinity, and aligns with our mission to help build a world class developer experience on ICP.

<!-- truncate -->

---

### What's New?

We've introduced new memory usage fields in CanisterStatus, giving developers a more granular view of memory consumption. These fields include:

- `wasm_memory_size` - Tracks memory used by the WebAssembly module.
- `stable_memory_size` - Captures memory stored persistently across upgrades.
- `global_memory_size` - Monitors memory allocated for global variables.
- `wasm_binary_size` - Shows the size of the deployed WebAssembly binary.
- `custom_sections_size` - Reports the size of custom sections in the Wasm binary.
- `canister_history_size` - Tracks memory used by the canister's historical data.
- `wasm_chunk_store_size` - Measures storage used by Wasm chunking mechanisms.
- `snapshots_size` - Monitors memory usage by stored snapshots.

Each of these metrics provides deeper insight into memory distribution, helping teams optimize their canister deployments.

### Why Does This Matter?

Gain a new level of transparency into canister memory usage.

Understanding canister memory usage is crucial for:

✅ **Better Debugging** - Identify memory-intensive operations and optimize them. \
✅ **Improved Resource Management** - Allocate cycles more efficiently based on memory consumption. \
✅ **Enhanced Monitoring** - Provide more granular insights into canister behavior.

For teams using our monitoring solutions, these updates complement our existing cycle tracking and performance analytics, making it easier than ever to track and optimize memory usage.

### A Collaborative Effort

This improvement was the result of a fantastic collaboration with the teams at Dfinity, and we're grateful for the opportunity to contribute to the IC ecosystem. Open-source progress thrives on shared efforts, and we're excited to continue pushing the platform forward.

Got thoughts or feedback? We'd love to hear how these new metrics help you optimize your canisters! 🚀 Connect with us and share your experience [@CycleOps on X](https://x.com/CycleOps)

#### References

- [Interface Spec PR](https://github.com/dfinity/portal/pull/5240)
- [Commit `a944a8b`](https://github.com/dfinity/ic/commit/a944a8b331f1562508a5dde68f6eafcfbb54fe44)
