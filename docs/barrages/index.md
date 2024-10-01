---
title: Barrage Documentation
---

# Barrage

Structure of skill barrages. Contains the following properties:

|  Property   |                 Type                 |              Description               |
| :---------: | :----------------------------------: | :------------------------------------: |
|  **name**   |               `string`               |          name of the barrage.          |
| **weapons** | [`BarrageWeapon[]`](#barrage-weapon) | List of weapons this barrage may fire. |

# Barrage Weapon

Barrage Weapon extends [`WeaponBase`](../equips/index.md#weapon-base) and additionally provides:

|    Property     |    Type    |                                                                           Description                                                                            |
| :-------------: | :--------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **coefficient** | `number[]` | Weapon coefficient at each enhancement level. <br> The size of this array is always 1, and it is only an array to aid in overlap between the weapon super types. |
|    **count**    |  `number`  |                                                             Amount of bullets/planes fired in total.                                                             |
| **is_critical** | `boolean`  |                                                             Whether this barrage is always critical.                                                             |

# Credits

These data provided for barrages is created using a third party data set. Please read
the [`respective credit entry`](https://github.com/MrLar/AzurLaneData/blob/main/README.md#riceist).