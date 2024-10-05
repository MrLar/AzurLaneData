---
title: Ship Documentation
---

# Ship Data

Ship Data represents a singular ship with all of its limit breaks. Every ship contains the following
properties:

|         Property         |                      Type                       |                                                                                         Description                                                                                          |
| :----------------------: | :---------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     **global_name**      |                    `string`                     |                         The prefixed English name of this ship. Displayed by all clients. This is the name displayed below the actual ship name when viewing a ship.                         |
|          **id**          |                    `number`                     |                                                                          The ID of this ship, unique to every ship.                                                                          |
|         **gid**          |                    `number`                     |                                                       The group ID of the ship, also unique to every ship. Mostly unused by this data.                                                       |
|       **category**       |            [`ShipType`](#ship-type)             |                                                                              The category this ship falls into.                                                                              |
|         **name**         |                    `string`                     |                                                                                     Names this ship has.                                                                                     |
|        **rarity**        |         [`Rarity`](../common.md#Rarity)         |                                                                                   The rarity of this ship.                                                                                   |
|         **tags**         |                   `string[]`                    |                                                                      All game tags assigned to this ship in lower case.                                                                      |
|        **nation**        |         [`Nation`](../common.md#Nation)         |                                                                                   The nation of this ship.                                                                                   |
|        **nation**        |           [`Hull`](../common.md#Hull)           |                                                                                    The Hull of this ship.                                                                                    |
|    **specific_buff**     |  [`SpecificBuff`](../common.md#specific-buff)   |                    Special buff granted to this ship when it reaches max limit break. These used to be DD exclusive but other ships (ex. Harbin) have since gotten them.                     |
|        **slots**         |        [`SlotData[][]`](#ship-slot-data)        |                                                                      Data for every equipment slot at each limit break.                                                                      |
|        **stats**         |     [`ShipStatsData[][]`](#ship-stats-data)     |                                                                           Stats of this ship at each limit break.                                                                            |
|   **ghost_equipment**    |  [`GhostEquipmentData[][]`](./ghost_equip.md)   | Ghost equipments this ship has at each limit break. Does not contain ghost equipments that have conditions that need to be met, nor does it include weapons that are replaced by some means. |
|        **retro?**        |          [`RetroData`](./retrofit.md)           |                                                                  **(Optional)** Retrofit data if this ship has a retrofit.                                                                   |
|      **research?**       |            [`PRData`](./research.md)            |                                                                **(Optional)** Research data if this ship is a research ship.                                                                 |
|        **skins**         |                   `number[]`                    |                                                                               IDs of all skins this ship has.                                                                                |
|    **skin_share_ids**    |                   `number[]`                    |                                                                       List of Ship IDs this ship can share skins with.                                                                       |
|       **lb_data**        |  [`LimitBreakData[]`](./limitbreak.md#LB-Data)  |                        Relevant data for each limit break that does not fit into other properties. Notably the length of this array indicates the limit break count.                         |
|         **date**         |                    `number`                     |                                                         (Approximate) release data of this ship as a UNIX Timestamp in milliseconds.                                                         |
|   **strengthen_exp?**    |                    `object`                     |                       **(Optional)** Stat EXP to give when this ship is used for enhancing. If absent or all props are absent it cannot be used to enhance other ships                       |
| **strengthen_exp?.fp?**  |                    `number`                     |                                                      **(Optional)** Amount of stat EXP to grant to the fp stat. If absent, treat as 0.                                                       |
| **strengthen_exp?.trp?** |                    `number`                     |                                                      **(Optional)** Amount of stat EXP to grant to the trp stat. If absent, treat as 0.                                                      |
| **strengthen_exp?.avi?** |                    `number`                     |                                                      **(Optional)** Amount of stat EXP to grant to the avi stat. If absent, treat as 0.                                                      |
| **strengthen_exp?.aa?**  |                    `number`                     |                                             **(Optional)** Amount of stat EXP to grant to the aa stat. If absent, treat as 0. (Currently unused)                                             |
| **strengthen_exp?.rld?** |                    `number`                     |                                                      **(Optional)** Amount of stat EXP to grant to the rld stat. If absent, treat as 0.                                                      |
|     **fleet_tech?**      |         [`FleetTech`](./fleet_tech.md)          |                                                     **(Optional)** Data for fleet technology. Absent means this ship grants no bonuses.                                                      |
|       **servers**        |     [`AlServer[]`](../common.md#al-server)      |                                                              List of servers this ship is (or at any point was) obtainable on.                                                               |
|         **icon**         |                    `string`                     |                                  The icon this ship uses in lower case. Available under `https://als.mrlar.dev/<compact, yard, full or chibi>/<icon>.webp`.                                  |
|       **aliases?**       |                   `string[]`                    |                                                              **(Optional)** List of all known community aliases this ship has.                                                               |
|        **class**         |               `string` \| `null`                |                                                   Historical/Logical ship class of this ship. This is null for all Collab and meta ships.                                                    |
|     **upgrade_text**     | [`UpgradeText[]`](./limitbreak.md#upgrade-text) |                                               Text description of what is unlocked at each limit break or development level (for PR/DR ships).                                               |


## Ship Type

Ship type is a numeric value with the range `[0, 5]` where each number represents a ship category:

| Value |      Label      |                      Description                       |
| :---: | :-------------: | :----------------------------------------------------: |
|   0   |      Bulin      |       A special category for the 3 bulin ships.        |
|   1   |     Normal      |      All standard ships fall into this category.       |
|   2   |    Retrofit     |                The ship has a retrofit.                |
|   3   |    Research     | The ship is a research ship *without* fate simulation. |
|   4   | Fate Simulation |  The ship is a research ship *with* fate simulation.   |
|   5   |      Meta       |                The ship is a META ship.                |

## Ship Slot Data

Represents the data for a *single* slot of a ship. Has the following properties:

|    Property    |                       Type                       |                                                                                                                                    Description                                                                                                                                     |
| :------------: | :----------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  **parallel**  |                     `number`                     |                                                                                                             Amount of shots that can be loaded in parallel (at once).                                                                                                              |
| **efficiency** |                     `number`                     |                                                                                                                       The efficiency of this slot (decimal).                                                                                                                       |
|    **base**    |                     `number`                     |                                                                                                                          Amount of mounts this ship has.                                                                                                                           |
|  **preload**   |                     `number`                     |                                                Amount of pre-loads this ship has for this slot not accounting for skills. For non-torpedoes each preload fires all mounts (i.E. a ship with 2 mounts fires twice for each preload).                                                |
|   **types**    | [`EquipmentType[]`](../common.md#equipment-type) |                                                                                                                  List of equipment types that fit into this slot.                                                                                                                  |
| **default_id** |                     `number`                     | Equipment ID of the equipment to use when this slot is empty. These IDs are represented in [`default_equips`](https://github.com/MrLar/AzurLaneData/tree/main/data/default_equips.json). If for some reason equipment does not match the types of the slot the game still uses it! |
| **capacity?**  |                     `number`                     |                                                   **(Optional)** Amount of salvos/strikes this ship can store. This value is only present for slots that have BB Guns or Planes. For torpedoes this value is identical to base.                                                    |


## Ship Stats Data

Represents the stats of a ship including the growth rate per level, enhancements and anything
related. It extends [`BasicShipStats`](#basic-ship-stats)
and [`ShipScalingStats`](#scaling-ship-stats).
Contains the following properties:

| Property  |           Type           |                                                                        Description                                                                        |
| :-------: | :----------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **armor** |         `number`         |                         The armor type of the ship as a number with the range `[0, 3]` for Light, Medium and Heavy respectively.                          |
| **range** | `number[][][]` \| `null` | The hunting range of this ship if it is a submarine-like or null otherwise. Refer to [Computing Hunting Range](#computing-hunting-range) for computation. |


### Basic Ship Stats

Contains one **optional** property of type `number` for each [ShipStatKey](../common.md#ship-stat-keys) that
represents the base stats of the ship.

### Scaling Ship Stats

Used to determine stats at any given level. Contains the following:

|      Property      |   Type   |                                                                                                                                                                                                                                                                                                                  Description                                                                                                                                                                                                                                                                                                                   |
| :----------------: | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    **scaling?**    | `object` |                                                                                                                                                                                                                                 **(Optional)** Scalars used to determine stats at each level. Contains one **optional** property of type `number` for each [ScalableStatKey](../common.md#scalable-stat-keys).                                                                                                                                                                                                                                 |
| **scaling_extra?** | `object` |                                                                                                                                                                                                             **(Optional)** Extra stats granted at each level. Contains one **optional** property of type `number` for each [ScalableStatKey](../common.md#scalable-stat-keys). **At the time of writting no ship-girl uses this.**                                                                                                                                                                                                             |
|  **strengthen?**   | `object` | **(Optional)** Stats gained from enhancing or PR/DR/META development. Contains one **optional** property of type `number` for each [ScalableStatKey](../common.md#scalable-stat-keys).<br>For non-research, non-meta ships this is the **maximum** gainable and therefore is only accurate if level >= 100.<br>For research ships this is at Dev0, Dev10, Dev20 and Dev30 respectively. It does not include miltestones, those are in [`PRData`](./research.md#pr-data).<br>For META ships it is also the maximum possible (including milestones), but since META development can be finished at any point it can freely be used at any level. |

## Computing Base Stats

To calculate the ship stats at *any* level you can follow the following:

### Oxygen, Ammo and range_level

These do not scale with level at all and can be used as is.

Currently, no ship with a retrofit adds to these values, that may change.

### All other keys

The formula is as follows: 
$$
  \lfloor (base + \frac{scaling \times (lvl - 1)}{1000} + \frac{extra \times (max(lvl, 100) - 100)}{1000} + strengthen + pr) \times affinity \rfloor
$$.

Where:

- base: The base value provided by `ShipStatsData[key]` (or 0)
- scaling: The scalar value provided by `ShipStatsData.scaling[key]` (or 0)
- extra: The extra scalar provided by `ShipStatsData.scaling_extra[key]` (or 0)
- lvl: The Level of the ship
- strengthen: strengthen values as provided by `ShipStatsData.strengthen[key]`.
    - For non-research non-meta ships this is only accurate if lvl is >= 100.
    - For PR ships it includes all bonuses up to and including the maximum possible Dev level at that
    limit break (Dev0, Dev10, Dev20, Dev30 respectively). Meaning their numbers may be floats and should
    neither be rounded nor floored and just be used as is.
    - META ship enhancement can be finished at any point so it *can* always be used.
- pr: Any stats gained from PR Dev levels as determined by [`PRData?.stats[key]`](./research.md)
  (or 0).
- affinity: The affinity scalar. This is always fixed at 1 for `spd` and `luck`.

If the ship has a retrofit these values may have to be overwritten. Refer
to [Computing Retrofit Stats](./retrofit.md#computing-retrofit-stats).

If the ship has a fate simulation the stat value
in [`PRData.fate.stats[key]`](./research.md#fate-data) may be added on top of the computed value.

## Computing Hunting Range

- First establish the ASR level of the submarine.
- Combine the arrays from `range[0]` to `range[asrLevel - 1]` into a single array (2D ASR Array).
- Create a 7x7 matrix and mark all squares as "unreachable"
- Mark the center of the matrix as "center"
- Iterate the entries of 2D ASR Array:
    - use index 0 as y and index 1 as x offsets
    - Mark the square [3 + y]\[3 + x] as "reachable"
- The result is a 7x7 matrix that represents the hunting range.

## Computing *Final* Stats

Use the following for each ship stat:

- First compute the [base stat](#computing-base-stats) of a ship (\\(BaseStat\\))
- Compute [Meowfficer inheric stat multiplier](../meowfficer/formulas.md#inherit) (\\(CatMultiplier\\))
- Compute flat stat buffs from retrofits, fleet tech and Meowfficer talents (\\(FlatStats\\)).
- Compute \\(FinalScalingStat = (BaseStat \times CatMultipler) + \sum FlatStats\\)
- Compute the percentage stat modifiers from each equipment, ship and Meowfficer skill as well as
  Fleet Formation, Airspace Control and any other applicable buffs \\(SkillBuff\\) and calculate:
  \\(SkillPercentBonus = 1 + \sum SkillBuff\\). Yes, these stack additively.
- Compute the flat stats gained from skills that are straight buffs, stat conversions or augment
  skills (\\(FlatSkillBuff\\)) and calculate \\(SkillFlatStats = \sum FlatSkillBuff \\).
- Compute the final stat as \\((FinalScalingStat \times SkillPercentBonus) + SkillFlatStats\\)

# Drop Data

Ship Drop Data contains relevant information on how a ship can be obtained. It provides the
following properties:

|  Property   |                    Type                    |                                                                          Description                                                                           |
| :---------: | :----------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   **id**    |                  `number`                  |                                                                 The Ship ID this data is for.                                                                  |
|  **timer**  |             `string` \| `null`             |                                            The mostly unique timer of the ship or null if it cannot be cosntructed.                                            |
|  **light**  |                 `boolean`                  |                                               Whether this ship can currently be constructed in the light pool.                                                |
|  **heavy**  |                 `boolean`                  |                                               Whether this ship can currently be constructed in the heavy pool.                                                |
| **special** |                 `boolean`                  |                                              Whether this ship can currently be constructed in the special pool.                                               |
| **limted**  |             `string` \| `null`             |         During which event, if any, this ship was availle in the limited construction pool. For ships that were not rate up this property is not set.          |
|  **other**  | [`UnlockType[]`](../common.md#unlock-type) |                                                   From which other common sources this ship can be obtained.                                                   |
|  **maps**   |         [`MapDrop[][]`](#map-drop)         | Maps this ship can be dropped on. The outer array has length 15 and indicates the chapter and the inner array contains info about what map and what drop type. |
|  **notes**  |                 `string[]`                 |                                              Additional information that does not fit into the other properties.                                               |

## Map Drop

Represents data for a ship map drop. Provides 2 properties:

|  Property  |     Type     |                         Description                         |
| :--------: | :----------: | :---------------------------------------------------------: |
|  **maps**  |   `number`   |       The map the ship drops on, either 1, 2, 3 or 4.       |
| - **type** | `0` \|   `1` | The drop type, 0 means any node and 1 means boss node only. |
