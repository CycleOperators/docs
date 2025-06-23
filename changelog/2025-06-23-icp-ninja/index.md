---
slug: icp-ninja
title: Ship Canisters in 5 Minutes with ICP Ninja & CycleOps
authors: [jorgen]
image: ./external.png
---

[![](./internal.png)](/changelog/icp-ninja)

Today we're very excited to announce a new integration with icp.ninja, the web based integrated development environment (IDE) that is the best place to kick start your Internet Computer development journey. We built a new protocol and API that enables icp.ninja users to create, deploy, and manage real canisters, right from the IDE.

<!-- truncate -->

## Introducing ICP Ninja

We’re big believers in removing friction from the developer experience on ICP. You shouldn't need to think about token balances or manual top-ups just to launch your first app. When we connected with Georgi and the ICP Ninja team at DFINITY, it was clear we shared that same vision.

ICP Ninja gets it right. It lowers the barrier to entry, gives you the familiar IDE feel, and lets you start building fast. There was one limitation that it had, however. Until now, each deployment was temporary, only lasting a few minutes. While you could build, you weren’t really deploying on infrastructure you could keep.

That changes today.

## Own Your Canisters

With this integration, developers can now deploy canisters they actually own and control, directly from ICP Ninja. These are real, persistent canisters owned and controlled by you, ready to run production code.

Even better, they come with smart defaults. Every canister deployed through this flow is automatically monitored and configured with a top-up rule in CycleOps. If something goes wrong or cycles start running low, you’ll get a heads-up before anything breaks.

This matters. Canisters are the core building block for shipping software on ICP, and the fundamentals of how to maintain them should be easy and clear from the start. New developers shouldn’t have to learn the hard way. Best practices such as top-up rules should be built in, and that’s exactly what this release delivers.

## Account Linking Protocol & Canister Management API

To make this possible, we built an account linking protocol that securely links your ICP Ninja and CycleOps accounts with a one-time handshake. After that, all canisters published through ICP Ninja are automatically managed and monitored by CycleOps.

We also developed a new canister management API for 3rd party integrations. It provides read and write methods, so ICP Ninja can display live canister health, estimated runtime, and perform key actions like paying for new canisters or updating settings. Of course, for the full-on canister management experience, users will be directed to cycleops.dev.

If you’re building tools or dev experiences and want to tap into this API, reach out. We’d be happy to collaborate.

## Go Ship Canisters!

If you haven’t already, head over to icp.ninja and try it out. Create a project, link your account, write some code, and publish real canisters. You’ll get automation, monitoring, and best practices baked in from the very first deploy.
