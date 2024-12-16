---
sidebar_position: 4
---

# Bring your own Cycles

Dfinity has released [the new cycles ledger canister](https://forum.dfinity.org/t/improving-the-cycle-management-experience/19895), enabling principals to hold cycles and greatly increasing the utility of Cycles as a token. 
CycleOps has integrated the new cycle ledger as a payment method, allowing you to “bring your own cycles” and put them to work instead of relying on CycleOps to buy them on your behalf.

This article will introduce you to using the cycles ledger, teach you how to migrate your cycles to the ledger from other sources, and show you how to set up your CycleOps account to pay with your own cycles.

### Prerequisites
<aside>
**DFX 0.18.0 Recommended**
This article assumes you are using DFX version 0.18.0 or greater. You can get by with earlier versions, but 0.18.0 makes things a little easier!

[Migrate to dfx >= 0.18.0 with the dfx version manager, dvxvm](https://forum.dfinity.org/t/the-dfx-version-manager-dfxvm-version-1-0-0-is-released/27720)

</aside>

## Getting Started

The steps to setup the cycles ledger as your new payment method varies depending on where you’re holding your cycles. The first step is to move your cycles from wherever they are now to their new home on the cycles ledger canister. Follow the table of contents below to find the right jumping off point for you.

- [Migrating Cycles from XTC to the new Dfinity Cycles Ledger](#migrating-cycles-from-xtc-to-the-new-dfinity-cycles-ledger)
- [Migrating from Cycles Wallet to the new Dfinity Cycles Ledger](#migrating-from-cycles-wallet-to-the-new-dfinity-cycles-ledger)
- [Approving CycleOps To Top-Up With Your Cycles on the Cycle Ledger](#approving-cycleops-to-top-up-with-your-cycles-on-the-cycle-ledger)

---

## Migrating Cycles from XTC to the new Dfinity Cycles Ledger

**Background**

XTC is essentially a proto cycles ledger that was created by Psychedelic DAO before they departed the IC ecosystem. With the release of the Dfinity cycles ledger, many holders will be migrating their XTC to the new ledger.

In order to migrate from [XTC](https://dank.ooo/xtc/) to the new Dfinity Cycles Ledger, we must first burn our XTC into cycles inside of a canister that we control. We will use the legacy Dfinity cycles wallet canister for this purpose. If you don't have a cycles wallet canister, you will need to [deploy one using dfx](https://internetcomputer.org/docs/current/developer-docs/getting-started/cycles/cycles-wallet/#creating-a-cycles-wallet-on-the-mainnet). Once that is complete, we will walk through depositing cycles from our wallet canister onto the cycles ledger.

**Steps:**

First, transfer your XTC tokens to your dfx principal from whichever wallet holds them. We recommend using a dfx principal which is encrypted and backed up whenever handling significant funds. If you're already using dfx to hold your XTC, then you're ready to start.

1. **Get balance of XTC.** You should see your whole cycles balance represented in the response.

```bash
dfx canister --network=ic call --query aanaa-xaaaa-aaaah-aaeiq-cai balanceOf "(principal \"$(dfx identity get-principal)\")"
```

1. **Check the "before" balance of your legacy cycles wallet canister.** This will be a useful benchmark when we want to confirm receipt of our cycles in future steps.

```bash
dfx wallet balance --ic
```

1. **Burn XTC into real cycles in your legacy cycles wallet canister.** This command will instruct the XTC canister to your tokens and send the cycles balance into your wallet canister.

```bash
dfx canister --network=ic call aanaa-xaaaa-aaaah-aaeiq-cai burn "(record { canister_id= principal \"$(dfx identity get-wallet --ic)\"; amount= (1_000_000_000_000:nat64)})"
```

1. **Check the balance of your legacy cycles wallet canister again.** You should see the updated balance.

```bash
dfx wallet balance --ic
```

1. **Proceed with the steps outlined in** [Migrating Cycles from Cycles Wallet to the new Dfinity Cycles Ledger](#migrating-from-cycles-wallet-to-the-new-dfinity-cycles-ledger).

## Migrating from Cycles Wallet to the new Dfinity Cycles Ledger

**Background**

The cycles wallet canister is a tool released by Dfinity and integrated into dfx to hold your cycles for you. Since principals were unable to hold cycles before the release of the cycles ledger, it was often necessary to have a canister available to do the job for you.

**Steps:**

Before proceeding, ensure you have your cycles ready to go in your wallet canister.

1. **Check your "before" balance on the new Dfinity cycles ledger.** This will be a useful benchmark when we wish to confirm receipt in future steps. The new `dfx cycles` command makes this very easy.

```bash
dfx cycles balance --ic
```

1. **Transfer cycles from your cycles wallet canister to the cycles ledger.** Make sure to update the amount of cycles in this command to the amount that you wish to deposit.

**Note:** If you wish to transfer cycles to your **Plug wallet’s** cycle ledger account, replace `\"$(dfx identity get-principal)\"` in the command below with `\"<your_plug_principal_id>\"`

```bash
dfx canister call --ic um5iw-rqaaa-aaaaq-qaaba-cai deposit "(record { to = record { owner = principal \"$(dfx identity get-principal)\"} })" --with-cycles 1_000_000_000_000 --wallet $(dfx identity get-wallet --ic)
```

1. **Check your balance on the new Dfinity cycles ledger again.** You should see the updated balance. Again, the new `dfx cycles` command comes in very handy.

```bash
dfx cycles balance --ic
```

Success! Your cycles have been migrated onto the cycles ledger! 🎉

## Approving CycleOps To Top-Up With Your Cycles

Once you have your cycles on the cycles ledger, you can use them as your payment method within CycleOps by granting an approval. This allows CycleOps to spend cycles on your behalf.

CycleOps supports Plug or DFX as wallets for this new payment method.

### With Plug

You can hold your cycles on the cycles ledger in Plug by clicking “add token” and then searching for “Trillion Cycles”, which should have the same logo as the image on the right

If for any reason Trillion Cycles does not appear, you can add the cycles ledger as a custom token via its canister id (`um5iw-rqaaa-aaaaq-qaaba-cai`). Note that Plug displays the cycles ledger token as “Trillion Cycles” in their UIs.

Once you have your tokens ready in your Plug wallet, you’re ready to begin.

1. Navigate to [the CycleOps billing page](https://cycleops.dev/app/personal/billing/payment-method) and select “change payment method.”
2. Connect your Plug wallet and follow the prompts.
3. Select the amount that you’d like to approve CycleOps to spend.
4. Success! 🎉

### With DFX

With the new `dfx cycles` commands, DFX is a great way to hold your cycles. Follow our guides above on how to migrate your cycles into dfx, then you’re ready to get started.

1. Navigate to [the CycleOps billing page](https://cycleops.dev/app/personal/billing/payment-method) and select “change payment method.”
2. Select “manual approval” and paste in your dfx principal. (You can attain your principal by running `dfx identity get-principal`.
3. You will be asked to approve CycleOps to spend cycles on your behalf. If you have the latest version of dfx, you can use this command:

   ```bash
   dfx cycles approve qc4nb-ciaaa-aaaap-aawqa-cai 1_000_000_000_000
   ```

   Otherwise, you can call the cycles ledger canister directly to grant an approval:

   ```bash
   dfx canister --ic call um5iw-rqaaa-aaaaq-qaaba-cai icrc2_approve

   This method requires arguments.
   Enter a value for ApproveArgs
   ✔ Enter optional field fee : opt nat? · yes
     ✔ Enter a nat · 100_000_000
   ✔ Enter optional field memo : opt vec nat8? · no
   ✔ Enter optional field from_subaccount : opt vec nat8? · no
   ✔ Enter optional field created_at_time : opt nat64? · no
   Enter field amount : nat
     ✔ Enter a nat · 1_000_000_000_000
   ✔ Enter optional field expected_allowance : opt nat? · no
   ✔ Enter optional field expires_at : opt nat64? · no
   Enter field spender : Account
     Enter a value for Account : record { owner : principal; subaccount : opt vec nat8 }
     Enter field owner : principal
       Auto-completions: accounts, accounts_staging, anonymous, cycleops, cycleops_aws_notification_poller, cycleops_staging, cycles_ledger, default, mock-client, nns-cycles-minting, nns-genesis-token, nns-governance, nns-ledger, nns-lifeline, nns-registry, nns-root, nns-sns-wasm, nnstest, topup_timer, transaction_history
       ✔ Enter a principal · qc4nb-ciaaa-aaaap-aawqa-cai
     ✔ Enter optional field subaccount : opt vec nat8? · no
   Sending the following argument:
   (
     record {
       fee = opt (100_000_000 : nat);
       memo = null;
       from_subaccount = null;
       created_at_time = null;
       amount = 50_000_000_000_000 : nat;
       expected_allowance = null;
       expires_at = null;
       spender = record {
         owner = principal "qc4nb-ciaaa-aaaap-aawqa-cai";
         subaccount = null;
       };
     },
   )
   ```

4. Finally, you will be asked to verify the CycleOps principal which has permission to spend your funds. Follow the prompts, which will provide a command for you to run that looks like this one:

   ```bash
   dfx canister --ic call qc4nb-ciaaa-aaaap-aawqa-cai verifyOwnershipOfCycleLedgerPrincipal '(record { cycleOpsCustomerPrincipal = principal "YOUR_CYCLEOPS_PRINCIPAL" })'
   ```

5. Success! 🎉

# Thank you!

We’re so excited to bring you the latest and greatest Internet Computer tech, and we can’t wait to see what you build with your canisters.
