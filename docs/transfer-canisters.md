---
sidebar_position: 8
---

# Transferring Canisters Between Teams

This guide will walk you through the process of transferring canisters between different teams in CycleOps. Transferring canisters is done by assigning them to projects and then transferring the entire project.

## Prerequisites

- You must have an active CycleOps account
- You need to be an admin of the team from which you want to transfer the canister
- The canister must be added to your CycleOps monitoring

## Step-by-Step Process

### 1. Open Canister Details

Navigate to your CycleOps dashboard and locate the canister you wish to transfer. Click on the canister name to open its details page.

![Canister Dashboard - Screenshot should show the main dashboard with a list of canisters and highlight where to click to access canister details](./img/canister-dashboard.png)

### 2. Access Settings

Within the canister details view, locate and click on the "Settings" tab in the top navigation bar.

![Canister Settings Tab - Screenshot should show the canister details page with the Settings tab highlighted in the navigation bar](./img/canister-settings-tab.png)

### 3. Navigate to Organization Settings

In the settings menu, find and select the "Organization" option. This section allows you to manage how your canister is organized within your CycleOps account.

![Organization Settings - Screenshot should show the settings sidebar with the Organization option highlighted](./img/organization-settings.png)

### 4. Assign Canister to a Project

If your canister is not yet assigned to a project, you'll need to do this first:

1. In the Organization section, you'll see a dropdown or selection menu for projects
2. Either select an existing project or create a new one on the "Project" page first and then select from the dropdown

![Project Assignment - Screenshot should show the project assignment interface with the dropdown and "Create New Project" button](./img/project-assignment.png)

> **Note**: A canister must be part of a project before it can be transferred between teams.

### 5. Go to Projects Page

After assigning your canister to a project, navigate to the main "Projects" page from the primary navigation menu.

![Projects Navigation - Screenshot should show how to navigate to the Projects page from the main menu](./img/projects-navigation.png)

### 6. Access Project Actions

On the Projects page, you'll see a list of all your projects. Find the project containing the canister you want to transfer.

Next to the project name, locate the "Actions" button and click on it to reveal a dropdown menu.

![Transfer Project](./img/transfer-project.png)

### 7. Select Transfer Destination

In the Actions dropdown menu, select "Transfer Project." A dialog will appear asking you to select the destination team.

Choose the team you want to transfer the project (and its canisters) to from the dropdown list.

After selecting the destination team, click the "Continue" button to initiate the transfer.

![Team Selection - Screenshot should show the dialog for selecting which team to transfer the project to](./img/team-selection.png)

> **Note**: You will only be able to see teams where you have admin privileges.

### 8. Transfer Complete

Once the transfer is complete, you'll see a success message. The project and all its associated canisters will now be managed by the selected team.

![Transfer Success - Screenshot should show the success message after completing the transfer](./img/transfer-success.png)

> **Important**: After transfer, top-up rules, notification settings, and other configurations will be maintained, but will now operate under the destination team's payment method and account balance.

## Permissions Required

- **Team Admins** can transfer projects to any other team where they have admin privileges
- **Team Members** cannot transfer projects

## Troubleshooting

If you encounter any issues during the transfer process:

- Ensure you have admin privileges in both the source and destination teams
- Verify that the canister is properly assigned to a project
- If the transfer fails, try refreshing the page and attempting the transfer again

For any further assistance, contact CycleOps support at [Twitter](https://x.com/CycleOps)