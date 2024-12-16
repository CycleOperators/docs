---
sidebar_position: 1
---

# Top-up Rule Best Practices

CycleOps allows you to automate your cycles management by creating rules that determine when your canisters should be topped up, but what should the parameters of your rule be, and generally how should one think about this problem?

# Easy Mode: Use one of these presets

To make things simple for you, Below are a few topup rule suggestions that are geared towards different types of projects. You can choose from any of these presets when creating a new top-up rule, or when editing an existing rule.

> **Caveat:**
> Once you're up an running for a few days, CycleOps has enough data to provide a freezing estimate, or how long your canister will run before freezing 

### Hobby Project 🧑‍💻

**If below 1T, top-up with 0.5T.**

Sometimes we release a simple little project that slowly sips cycles and doesn’t need a lot of insurance.

## Production Canister ⛽

**If below 10T, top-up with 1T.**

For a production canister, we likely want to have a higher freezing threshold for extra redundancy, and perhaps a healthy buffer of cycles in case something exciting happens. 🎉

## Token/NFT Canister 🌃

**If below 30T, top-up with 10T.**

Token canisters should be considered high-stakes contracts. They can generally be thought of as a financial asset, and loss of state would be equivalent to loss of property for all holders ❌. For this reason, you should ensure that any token canisters have a very aggressive freezing threshold, which will ensure a very large buffer for people to notice a problem before the entire canister state is deleted.

## Factory Canister (Dynamically spins up new canisters)

**Depends on your anticipated cycles burn and application growth rate**

Factory canisters can burn large amounts of cycles in a short amount of time depending on the use case. For this reason, we recommend setting both high thresholds and top-up amounts to ensure you don’t fall behind easily. Reach out to us via our [Discord](https://discord.gg/AWaab4FD6V) or at [contact@cycleops.dev](mailto:contact@cycleops.dev) if you fall into this category and have any questions.

## Additional Considerations

These presets are intended to give you jumping-off points to get started with, but eventually you will probably want to fine tune your rules 🔧 to meet your specific needs. Here are some things to keep in mind.

## Using Burn Rate and Freeze Estimate to Set a Topup Rule
Once you're up and running for a few days, CycleOps has enough data to estimate what your cycle burn rate is, and how long your canister will run before freezing 🥶. These estimates can help you set your top up rule.

For example:
> If canister A has a:
> - cycles balance of 2 trillion cycles
> - freezing threshold of 7 billion cycles
> - burn rate of 400 Billion cycles/day 
>
> We recommend that your raise your top up threshold to ensure this canister always stays topped up with at least 30 days worth of cycles above that canister's freezing threshold. This ensures your canister has enough buffer should cycle usage spike, or you need to add more ICP to your CycleOps account. We also recommend that your top ups last your canister at least 7 days. So in this case, the recommended minimal top up rule would be:
> 
> Topup threshold = 7 billion + 30 days * (400 billion cycles/day) = 12 trillion cycles
> Topup amount = 7 days * (400 billion cycles per day) = 2.8 trillion cycles

<!-- TODO: put back in if we add this to the UI
## Top-Up Methods

When creating a top-up rule, you can specify that a canister should be sent a specific quantity of cycles, or that it should be sent enough cycles such that it tops up to an approximate cycles balance.

When creating or editing a top-up rule, select “by amount” to create a rule that sends a set amount of cycles to the canister. For example, you might create a rule to “top up by 2T cycles when below 1T cycles.” With this rule, whenever your canister falls below a 1T cycles balance, CycleOps will initiate a top up for 2T cycles.

Alternatively you might create a “to balance” top-up rule (feature coming soon), which sends enough cycles such that the canister will be restored to a certain balance by receiving the top-up. For example, a rule to “top up to 2T cycles when below 1T cycles” will send ~1T cycles if your canister falls below 1T.

## Configure Your Freezing Threshold
-->

Don’t forget that the freezing threshold on your canister provides the invaluable buffer between loss of functionality and total state deletion. If you have a big freezing threshold, of course you should make sure that your top up threshold is higher than your freezing threshold, or your rule won’t be triggered until it’s too late and your canister has frozen! 🥶

## Consider Your Buying Frequency and the Cost of Cycles

The price of cycles fluctuates on secondary markets. That means that every time CycleOps tops up your canisters, the price that you’ll be charged for cycles can change. In an environment where cycles are cheap, you might want to buy larger chunks of cycles less frequently, to take advantage of the cheaper price. Conversely, if cycles are more expensive (perhaps approaching the ICP → Cycles burn rate,) you might prefer more frequent purchases in smaller quantities to avoid buying more than you need to at the top of the market.
