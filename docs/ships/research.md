---
title: Ship Research Data Documentation
---

# PR Data

Data for all research ships. Contains the following properties:

|  Property  |                      Type                       |                                                             Description                                                              |
| :--------: | :---------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
| **stats?** | [`BasicShipStats`](./index.md#basic-ship-stats) | **(Optional)** Stats granted by development milestones. These are at Dev0, Dev10, Dev20 and Dev30 for each limit break respectively. |
| **fate?**  |            [`FateData`](#fate-data)             |                            **(Optional)** Data for fate simulation. Absent if the ship does not have one.                            |

# Fate Data

Represents the data for a ships fate simulation under the assumption that it is fate sim 5. Contains
the following properties:

|  Property  |                          Type                           |                                Description                                |
| :--------: | :-----------------------------------------------------: | :-----------------------------------------------------------------------: |
| **stats**  |     [`BasicShipStats`](./index.md#basic-ship-stats)     | Stats granted by all Fate Simulation levels up to and including FateSim5. |
| **skills** | [`SkillUpgradeData[]`](../common.md#skill-upgrade-data) |                        List of all Skill Upgrades.                        |
|  **date**  |                        `number`                         |                   Release date of this Fate Simulation.                   |
