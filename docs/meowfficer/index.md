---
title: Meowfficer Documentation
---

# Meowfficer Data

Meowfficer Data contains relevant data for a Mewofficer. It provides the following properties:

|      Property       |                  Type                  |                                                                         Description                                                                          |
| :-----------------: | :------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      **name**       |                `string`                |                                                                   Names this Officer has.                                                                    |
|      **timer**      |           `string` \| `null`           |                                         The unique timer of the officer or null if it cannot be obtained via boxes.                                          |
|     **nation**      |    [`Nation`](../common.md#nation)     |                                                             The nation this Officer belongs to.                                                              |
|       **id**        |                `number`                |                                                                   The ID of this officer.                                                                    |
|      **icon**       |                `string`                |                      The icon this officer uses lower cased. Available under `https://al.mrlar.dev/meow/<painting or icon>/<icon>.png`.                      |
|     **rarity**      |    [`Rarity`](../common.md#rarity)     |                                                                 The Rarity of this officer.                                                                  |
|      **skill**      |       [`MeowSkill`](#meow-skill)       |                                                                  The skill of this officer.                                                                  |
|      **stats**      |                `object`                | Base Stats of this officer.<br>To calculate the value at any given level: $$\lfloor base + \frac{base \times clamp(0, lvl - 1, 29) \times 24}{304} \rfloor$$ |
|  **stats.command**  |                `number`                |                                                            Base directives stats of this officer.                                                            |
| **stats.logistics** |                `number`                |                                                            Base logistics stats of this officer.                                                             |
|  **stats.tactics**  |                `number`                |                                                             Base tactics stats of this officer.                                                              |
| **fixed_abilities** |               `number[]`               |                     List of fixed Ability IDs.<br>To establish how these are parsed read [`Fixed Abilities`](formulas#fixed-abilities).                      |
|     **servers**     | [`AlServer[]`](../common.md#al-server) |                                             List of servers this Officer is (or at any point was) obtainable on.                                             |

# Meow Skill

Meow Skill represents the relevant data of a Meowfficer's Skill. It provides the following
properties:

|     Property      |               Type                |                                                                                                                     Description                                                                                                                     |
| :---------------: | :-------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     **name**      |             `string`              |                                                                                                                Names this skill has.                                                                                                                |
| **descriptions**  |             `string`              |                                                                                                 The description of the skill for each skill level.                                                                                                  |
|    **effects**    | [`SkillEffect?[]`](#skill-effect) |                            List of effects this skill has at each level. **These values may also be `null` instead of SkillEffect**. `null` indicates an effect that has little to no meaning for calculation purposes.                             |
| **opsi_effects**  | [`SkillEffect?[]`](#skill-effect) |                 List of effects this skill has during Operation Siren at each level. **These values may also be `null` instead of SkillEffect**. `null` indicates an effect that has little to no meaning for calculation purposes.                 |
|      **id**       |             `number`              |                                                                                                                The ID of this skill.                                                                                                                |
|     **icon**      |             `number`              |                                                                                The icon of this skill. Available under `https://al.mrlar.dev/meow/skill/<icon>.png`.                                                                                |
| **default_level** |             `number`              | The default level of this skill (0-indexed). A default level of 2 would indicate that all 3 effects are active by default and that the skill cannot be leveled.<br>$$upgrade\_count = 2 - default\_level$$.<br>$$max\_level = 3 - default\_level$$. |




# Skill Effect

Skill Effect refers to the effect of a Meowfficer's skill and provides the following:

|      Property       |                     Type                      |                                                                                Description                                                                                 |
| :-----------------: | :-------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      **slot?**      |                   `number`                    | **(Optional)** The slot the Officer has to be in for this effect to be active.<br>-1 or absent indicates any slot.<br>0 indicates command slot.<br>1 indicates staff slot. |
|     **stats?**      |            [`Stat[]`](#skill-stat)            |                                                                 **(Optional)** Stats granted by the effect                                                                 |
|   **condition?**    |     [`SkillCondition`](#skill-condition)      |                                                                **(Optional)** Conditions that must be met.                                                                 |
|    **position?**    |                   `object`                    |                                                  **(Optional)** Position to affect. If absent all positions are affected.                                                  |
| **position?.type**  | [`FleetRowType`](../common.md#fleet-row-type) |                                                                        What row the position is in.                                                                        |
| **position?.index** |                   `number`                    |                                                       The actual position. 0 refers to either flagship or Main tank.                                                       |
|    **nations?**     |       [`Nation[]`](../common.md#nation)       |                                                                 **(Optional)** Nations that are affected.                                                                  |
|      **hulls**      |         [`Hull[]`](../common.md#hull)         |                                                                  **(Optional)** Hulls that are affected.                                                                   |

# Skill Condition

Represents the condition for a Meowfficer Skill to take effect.

|  Property  |                     Type                      |                                                                                                                                        Description                                                                                                                                        |
| :--------: | :-------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  **type**  |          `count` \| `flag` \| `size`          |                                     The type of effect.<br>`count`: There must be at least `count` ships matching `hulls`.<br>`size`: There must be at least `size` ships in `fleet`.<br>`flag`: Only the flagship is affected if it matches `hulls`.                                     |
| **hulls**  |          [`Hull`](../common.md#hull)          | Has different meaning depending on `type`:<br>`size`: at least one ship with any hull in the list must be present on top of the above mentioned condition.<br>`count`: there must be at least `count` ships matching any of the hulls.<br>`flag`: Flagship has to be one of these hullls. |
| **fleet?** | [`FleetRowType`](../common.md#fleet-row-type) |                                                                                                  **(Optional)** Only present if `type` is `size`. Indicates which row to check size in.                                                                                                   |
| **size?**  |                   `number`                    |                                                                                      **(Optional)** Only present of `type` is `size`. Indicates how many ships there should at least be in `fleet`.                                                                                       |
| **count?** |                   `number`                    |                                                                                   **(Optional)** Only present of `type` is `count`. Indicates how many ships matching `hulls` must be present at least.                                                                                   |


# (Skill) Stat

Represents the bonus granted by a Meowfficer Skill Effect. Provides the following:

|   Property    |                      Type                       |                                                                                 Description                                                                                 |
| :-----------: | :---------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   **stat**    |  [`BuffStatKey`](../common.md#buff-stat-keys)   |                                                                             The stat to affect.                                                                             |
| **meow_stat** | `command` \| `logistics` \| `tactics` \| `null` |                                                                       Officer stat to convert if any.                                                                       |
|  **amount**   |                    `number`                     | If `meow_stat` is null: Flat amount to increase by<br> If `meow_stat` is non-null the increase is equal to: $$ stat_{meow\_stat} \times \frac{amount}{100} \times 0.001 $$. |
