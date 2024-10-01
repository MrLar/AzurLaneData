---
title: Meowfficer Ability Documentation
---

# Meowofficer Ability

Represents an ability (Talent) a Meowofficer can have. Provides one of the following:

|     Property     |                  Type                  |                                                 Description                                                  |
| :--------------: | :------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
|    **icons**     |               `string[]`               | The icon to use for each level lower cased.  Available under `https://al.mrlar.dev/meow/ability/<icon>.png`. |
|    **names**     |                `string`                |                                      Names for each level this Ability.                                      |
| **descriptions** |                `string`                |                                   Description for each level this Ability.                                   |
|    **effect**    | [`MeowEffect`](#meow-effect) \| `null` |                       The affect this ability has in battle if any worthwhile effect.                        |
|      **id**      |                `number`                |                                          (Base) ID of the Ability.                                           |
|     **max**      |                `number`                |                                        The max level of this Ability.                                        |
|  **obtainable**  |               `boolean`                |                                 Whether this ability is possible to obtain.                                  |
|   **servers**    | [`AlServer[]`](../common.md#al-server) |                     List of servers this Ability is (or at any point was) obtainable on.                     |

# Meow Effect

Represents the effect of a Meowfficer Ability. Provides the following:

|   Property   |                   Type                    |                Description                |
| :----------: | :---------------------------------------: | :---------------------------------------: |
| **nations?** |     [`Nation[]`](../common.md#nation)     | **(Optional)** Nations that are affected. |
|  **hulls**   |       [`Hull[]`](../common.md#hull)       |  **(Optional)** Hulls that are affected.  |
|  **stats**   | [`MeowEffectEntry[]`](#meow-effect-entry) |      Actual effects of the ability.       |

# Meow Effect Entry

Represents the actual effect granted of an ability. Provides the following:

|   Property    |                      Type                      |                                                                                                                                                  Description                                                                                                                                                  |
| :-----------: | :--------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   **stat**    |  [`BuffStatKey`](../common.md#buff-stat-keys)  |                                                                                                                                              The stat to affect.                                                                                                                                              |
|   **type?**   | [`EquipmentType`](../common.md#equipment-type) |                                                                                                               **(Optional)** What equipment type to affect (currently only used by crit_rate).                                                                                                                |
|  **amount**   |                   `number[]`                   |                                                                                                         Amount to grant at each level of the ability. i.E. if the ability is level 2 use `amount[1]`.                                                                                                         |
| **restrict?** |          [`Hull`](../common.md#hull)           | **(Optional)** List of hulls that should *not* benefit from this effect. <br> Context: Some talents do not include all hulls in all of their effects however since that is rather rare, this optional property to exclude them exists instead rather than duplicating "hulls to affect" a billion times over. |
