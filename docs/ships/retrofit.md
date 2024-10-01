---
title: Ship Retrofit Data Documentation
---

# Retro Data

Retro Data contains the information for a retrofit of a ship and may contain the following
properties:

|         Property         |                                                                       Type                                                                        |                                                         Description                                                          |
| :----------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
|        **slots**         |                                                               `Partial(SlotData)[]`                                                               |                                                 Changes to equipment slots:                                                  |
| **slots[n].efficiency?** |                                                                     `number`                                                                      |                               **(Optional)** Difference to add to the existing slot effiency.                                |
|    **slots[n].base?**    |                                                                     `number`                                                                      |                                 **(Optional)** Difference to add to the existing slot base.                                  |
|  **slots[n].preload?**   |                                                                     `number`                                                                      |                                            **(Optional)** Override for pre-loads.                                            |
|  **slots[n].preload?**   |                                                 [`EquipmentType[]`](../common.md#equipment-type)                                                  |                                         **(Optional)** Override for equipment types.                                         |
|  **slots[n].parallel?**  |                                                                        `0`                                                                        |                                              **(Optional)** Always absent or 0.                                              |
| **slots[n].default_id**  |                                                                     `number`                                                                      |                                           **(Optional)** Override for default_id.                                            |
|        **skills**        |                                              [`SkillUpgradeData[]`](../common.md#skill-upgrade-data)                                              | List of all Skill Upgrades. Some of these may have `null` in their `replace` prop, in such a case the skill is simply added. |
|        **stats**         | [`RetroStatsData`](#retrofit-stats-data) & [`BasicShipStats`](./index.md#basic-ship-stats) & [`ShipScalingStats`](./index.md#scaling-ship-stats): |                                   Stats data for the entire retrofit (assumes all nodes).                                    |
|        **hull?**         |                                                            [`Hull`](../common.md#hull)                                                            |               **(Optional)** Hull of the ship post retrofit. If this prop is absent the hull does not change.                |
|     **power_bonus**      |                                                                     `number`                                                                      |                                     Bonus Ship power points gained (assumes all nodes).                                      |
|        **nodes**         |                                                        [`RetrofitNode[]`](#retrofit-node)                                                         |                                                 Data for each retrofit node.                                                 |
|      **min_level**       |                                                                     `number`                                                                      |                                         Minimum level to finish the entire retrofit.                                         |
|        **min_lb**        |                                                                     `number`                                                                      |                                      Minimum limit break to finish the entire retrofit.                                      |
|   **ghost_equipment?**   |                                                    [`GhostEquipmentData[]`](./ghost_equip.md)                                                     |                                        **(Optional)** Override for ghost equipments.                                         |

## Retrofit Stats Data

Extends [`BasicShipStats`](./index.md#basic-ship-stats)
and [`ShipScalingStats`](./index.md#scaling-ship-stats) and additionally provides the following
properties:

|  Property  |                                                                                      Type                                                                                       |                                                Description                                                 |
| :--------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
| **flat?**  |                                                                 [`BasicShipStats`](./index.md#basic-ship-stats)                                                                 |                              **(Optional)** Flat stats to grant to the ship.                               |
| **ddg_m?** | [`BasicShipStats`](./index.md#basic-ship-stats) & [`ShipScalingStats`](./index.md#scaling-ship-stats) & [`{ skill_change: SkillUpgradeData }`](../common.md#skill-upgrade-data) | **(Optional)** Contains information for stat changes if this ship is a DDG being placed in the main fleet. |


### Computing Retrofit Stats

Follow the same formula as in [computing base stats](./index.md#computing-base-stats) except:

- If `RetroStatsData[key]` is present it should be instead of `ShipStatsData[key]`
- If `RetroStatsData.scaling[key]` is present it should be instead of `ShipStatsData.scaling[key]`
- If `RetroStatsData.scaling_extra[key]` is present it should be instead of `ShipStatsData.scaling_extra[key]`
- If `RetroStatsData.strengthen[key]` is present it should be used instead of `ShipStatsData.strengthen[key]`
- If the ship is a DDG retrofit and placed in the main fleet follow the following:
    - `RetroStatsData.ddg_m[key]` &gt; `RetroStatsData[key]` &gt; `ShipStatsData[key]`
    - `RetroStatsData.ddg_m.scaling[key]` &gt; `RetroStatsData.scaling[key]`
      &gt; `ShipStatsData.scaling[key]`
    - `RetroStatsData.ddg_m.scaling_extra[key]` &gt; `RetroStatsData.scaling_extra[key]`
      &gt; `ShipStatsData.scaling_extra[key]`
    - `RetroStatsData.ddg_m.strengthen[key]` &gt; `RetroStatsData.strengthen[key]`
      &gt; `ShipStatsData.strengthen[key]`
- If `RetroStatsData.flat[key]` is present it should be added to the final computed value.

## Retrofit Node

Contains information for a retrofit node in a retrofit tree. Provides the following properties:

|     Property     |    Type    |                                                                                                                                                                                                                                              Description                                                                                                                                                                                                                                               |
| :--------------: | :--------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     **name**     |  `string`  |                                                                                                                                                                                                                                         The name of the node.                                                                                                                                                                                                                                          |
|  **min_level**   |  `number`  |                                                                                                                                                                                                                                   Minimum level to finish this node.                                                                                                                                                                                                                                   |
|    **min_lb**    |  `number`  |                                                                                                                                                                                                                                   Minimum limit break to this node.                                                                                                                                                                                                                                    |
|    **letter**    |  `string`  |                                                                                                                                                                                                                Unique letter that this node can be addressed as. Think of it as an ID.                                                                                                                                                                                                                 |
|   **requires**   | `string[]` |                                                                                                                                                                                                       List of Nodes (Letters) that are required to be finished before this one can be finished.                                                                                                                                                                                                        |
|     **icon**     |  `string`  |                                                                                                                                                                                                 The icon this node uses lower cased. Available under `https://al.mrlar.dev/icons/modicon/<icon>.png`.                                                                                                                                                                                                  |
|      **x**       |  `number`  |                                                                                                                                                                                                                           The x coordinate of this node in the retro graph.                                                                                                                                                                                                                            |
|      **y**       |  `number`  |                                                                                                                                                                                                                           The y coordinate of this node in the retro graph.                                                                                                                                                                                                                            |
| **is_infinite?** | `boolean`  |                                                                                                                                                                                                       **(Optional)** Whether to treat this node as infinite reccurences, treat absent as false.                                                                                                                                                                                                        |
| **descriptions** | `string[]` | Text descriptions of effects that occur each time this node is bought once.<br>The length of this array indicates how many times it can be bought.<br>There are too many entries to list them all here, but there are two entries where a technical (ID) value is provided in addition to just names:<br>"Ship hull changes to &lt;{new hull \| hull id}&gt;"<br>"Slot &lt;x&gt; types change to &lt;new type list comma separated&gt;". Each entry in the list is formatted as {type name \| type ID} |

## Retrofit Cost
Represents the cost of a single retrofit node. It provides the following properties:

|  Property  |                    Type                    |                                         Description                                         |
| :--------: | :----------------------------------------: | :-----------------------------------------------------------------------------------------: |
| **coins**  |                  `number`                  |        Amount of coins required for the node. This is the same for every recurrence.        |
| **copies** |                  `number`                  | Amount of ship copies or respective bulins required. This is the same for every recurrence. |
| **items**  | [`ItemStack[][]`](../common.md#item-stack) |                             Items required for each recurrence.                             |