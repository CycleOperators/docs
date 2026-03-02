# Mermaid Diagrams Demo

This page demonstrates the various Mermaid diagram types available in our docs. Use these as reference when writing documentation.

## Flowchart

```mermaid
flowchart TD
    A[User] -->|Connects wallet| B[CycleOps Dashboard]
    B --> C{Has canisters?}
    C -->|Yes| D[View canister list]
    C -->|No| E[Add first canister]
    E --> D
    D --> F[Configure top-up rules]
    F --> G[Automatic cycle management]
```

## Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant CycleOps
    participant Canister
    participant CyclesLedger

    User->>CycleOps: Set top-up rule
    CycleOps->>Canister: Monitor cycle balance
    Canister-->>CycleOps: Balance below threshold
    CycleOps->>CyclesLedger: Request cycles
    CyclesLedger-->>CycleOps: Transfer cycles
    CycleOps->>Canister: Top up cycles
    CycleOps-->>User: Send alert notification
```

## State Diagram

```mermaid
stateDiagram-v2
    [*] --> Raw: Issue reported
    Raw --> Refined: Add context & criteria
    Refined --> Actionable: Director approves
    Refined --> Hold: Director defers
    Hold --> Actionable: Revisited
    Actionable --> InProgress: Work begins
    InProgress --> Review: PR submitted
    Review --> Done: Merged
    Done --> [*]
```

## Entity Relationship Diagram

```mermaid
erDiagram
    ACCOUNT ||--o{ CANISTER : manages
    ACCOUNT {
        string principal
        string name
        int balance
    }
    CANISTER {
        string id
        int cycles
        int memory
    }
    ACCOUNT ||--o{ TOPUP_RULE : configures
    TOPUP_RULE {
        int threshold
        int amount
        string method
    }
    TOPUP_RULE ||--o{ CANISTER : applies_to
```

## Gantt Chart

```mermaid
gantt
    title Feature Rollout
    dateFormat YYYY-MM-DD
    section Backend
        API changes       :a1, 2025-01-01, 14d
        Database migration :a2, after a1, 7d
    section Frontend
        UI components     :b1, 2025-01-01, 21d
        Integration       :b2, after a2, 7d
    section Launch
        Testing           :c1, after b2, 7d
        Deploy            :c2, after c1, 3d
```

## Pie Chart

```mermaid
pie title Cycle Spend by Canister Type
    "Compute" : 45
    "Storage" : 30
    "Messaging" : 15
    "Other" : 10
```

## Git Graph

```mermaid
gitGraph
    commit id: "init"
    branch feature
    commit id: "wip"
    commit id: "tests"
    checkout main
    merge feature id: "ship it"
    commit id: "hotfix"
```

---

:::tip
To use Mermaid in any doc page, wrap your diagram code in a ` ```mermaid ` fenced code block.
See the [Mermaid docs](https://mermaid.js.org/) for the full syntax reference.
:::
