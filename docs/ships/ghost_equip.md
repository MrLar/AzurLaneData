---
title: Ship Ghost Equip Documentation
---

# Ghost Equipment Data

Represents the data for a ghost equipment of a ship. These equipments cannot be removed or upgraded in any way. Some ships have these via skills or simply built in. Contains the following properties:

|      Property       |    Type    |                                                                                                                                                  Description                                                                                                                                                   |
| :-----------------: | :--------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       **id**        |  `number`  |                      Equipment ID of this ghost weapon. These IDs are represented in [`default_equips`](https://github.com/MrLar/AzurLaneData/tree/main/data/default_equips.json).<br>If `obtainable` is `true` it is instead represented in [`equipments`](../../data/equipments.json).                       |
|      **level**      |  `number`  |                                                                                                          0-indexed level of this ghost weapon. i.E. a skill stating Lv.10 would have this equal to 9.                                                                                                          |
|   **obtainable**    | `boolean`  |                                                                        Whether this ghost weapon is obtainable as actual equipment in the game. If it is, the ID property no longer refers to a default equip but an actual equipment.                                                                         |
|   **efficiency**    |  `number`  |                                                                                                                                 The efficiency of this ghost weapon (decimal).                                                                                                                                 |
|     **skill?**      |  `number`  |                                   **(Optional)** ID of the Skill that grants this weapon.<br>If this is present `level` should be ignored and the skills level minus 1 should be used.<br>If `level_override` is present the `level_override[skill lvl - 1]` should be used.                                   |
| **level_override?** | `number[]` |                                                                                                                         **(Optional)** Enhancement level to use at given skill level.                                                                                                                          |
|  **id_override?**   | `number[]` | **(Optional)** Default equip IDs to use instead of `id` for each enhance level. Used for ghost weapons with notable differences between levels.<br>If present `level` (with respect to the notes in `skill` and `level_override`) is used to index this property and the effective enhance level is always +0. |
