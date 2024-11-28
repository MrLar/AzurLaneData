---
title: Shared Equipment Related Objects
---

# Base Equipment Data

All equipments/augments in the provided data share the following properties:

|    Property     |                  Type                  |                                                                                                                                                 Description                                                                                                                                                 |
| :-------------: | :------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    **icon**     |                `string`                |                                                                                                          The icon this equipment uses. Available under `https://al.mrlar.dev/equips/<icon>.webp`.                                                                                                           |
|     **id**      |                `number`                |                                                                                                           The (base) ID of this equipment (these may not line up with the ID shown on the wiki).                                                                                                            |
|    **name**     |                `string`                |                                                                                                                                          Names this equipment has.                                                                                                                                          |
|   **rarity**    |    [`Rarity`](../common.md#rarity)     |                                                                                                                                        The rarity of this equipment.                                                                                                                                        |
|   **skills**    |               `number[]`               |                                                                                                                               List of IDs for each skill this equipment has.                                                                                                                                |
|   **nation**    |    [`Nation`](../common.md#nation)     |                                                                                                                                        The Nation of this equipment.                                                                                                                                        |
|     **max**     |                `number`                |                                                                                                                                The maximum enhance level of this equipment.                                                                                                                                 |
|    **stats**    |   [`StateElement[]`](#stat-element)    |                                                                                                                                      Stats granted by this equipment.                                                                                                                                       |
|   **servers**   | [`AlServer[]`](../common.md#al-server) |                                                     List of servers this equipment is (or at any point was) obtainable on.<br>If `obtainable` is set to `false` it instead represents what severs *technically* have the equipment defined in the game.                                                     |
|    **type**     |            [`T`](#generics)            |                                                                                                                                         The type of this equipment.                                                                                                                                         |
| **limit_group** |                `number`                | Limit group of this equipment. Used for one of the following:<br>Equipments: Equips with the same group cannot be equipped together (unless the group is 0).<br>Augments: The group refers to a ship ID and only that ship may equip this augment. If the group is 0 the `type` indicates who can equip it. |
|   **labels**    |                `string`                |                                                                              Game labels (tags) of this equipment with each entry lower cased.<br>Only includes the labels of he +0 equip as they are *usually* not overriden.                                                                              |
| **speciality**  |                `string`                |                                                                                                                                          In game speciality text.                                                                                                                                           |
| **obtainable**  |               `boolean`                |                                                                                                                               Whether this equipment is currently obtainable.                                                                                                                               |
|  **important**  |               `boolean`                |                                                                                                                 Whether this equipment will show a warning before being scrapped/consumed.                                                                                                                  |

## Generics

| Generic |                                                               Description                                                               |
| :-----: | :-------------------------------------------------------------------------------------------------------------------------------------: |
|   `T`   | Either [`EquipmentType`](../common.md#equipment-type) or [`AugmentType`](../common.md#augment-type) depending on which the data is for. |

## Stat Element

Stat element refers to a stat granted by an equipment or augment. It consists of the following:

|  Property   |                     Type                     |                                                Description                                                |
| :---------: | :------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
|  **stat**   | [`ShipStatKey`](../common.md#ship-stat-keys) |                                             The stat granted.                                             |
| **values**  |                  `number[]`                  |       Value of the stat at each enhancement level of the equipment (i.E. index 0 is +0, and so on).       |
| **random?** |                   `number`                   | **(Optional)** Maximum random value to add on top of `value`. *Only used by augments*. Treat absent as 0. |


# Reloadable Weapon

Reloadable weapon provides properties used to determine the cooldown of an equipment weapon or
aircraft. It provides:

|      Property       |    Type    |                                                                                 Description                                                                                  |
| :-----------------: | :--------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     **reload**      | `number[]` | Reload in *game ticks* at each enhancement level of the equipment (i.E. index 0 is +0, and so on). For scaling and computation refer to [`EquipmentFormulas`](./fomulas.md). |
| **reload_seconds?** | `boolean`  |                           **(Optional)** If present *and* `true` it `reload` instead is in *seconds* and does not scale with the ship reload stat.                           |
|      **count**      |  `number`  |                                                                   Amount of bullets/planes fired in total.                                                                   |
|    **aircraft**     | `boolean`  |                                                                     Whether this weapon is an aircraft.                                                                      |

# Weapon Base

Weapon provides the basic properties for all weapons and aircrafts. It provides:

|   Property    |                     Type                      |                                                                             Description                                                                             |
| :-----------: | :-------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  **damage**   |                  `number[]`                   | Damage dealt by the equipment at each enhancement level of the equipment (i.E. index 0 is +0, and so on). For scaling refer to [`EquipmentFormulas`](./fomulas.md). |
|   **stat**    | [`WeaponStat`](../common.md#weapon-stat-keys) |                                                                  The stat this weapon scales with.                                                                  |
|   **ratio**   |                   `number`                    |                                                                      The ratio to scale with.                                                                       |
| **armor_mod** |                  `number[]`                   |                          A 3 value array where each entry represents the effectiveness against Light, Medium and Heavy armor respectively.                          |
|   **ammo**    |           [`AmmoType`](#ammo-type)            |                                                                    The ammo type of the weapon.                                                                     |
|    **id**     |                   `number`                    |                                                                        The ID of the weapon.                                                                        |

# Extended Weapon

Extended Base Weapon is an extension of [`WeaponBase`](#weapon-base) and additionally provides the
following:

|     Property     |          Type          |                              Description                               |
| :--------------: | :--------------------: | :--------------------------------------------------------------------: |
|    **splash**    |        `number`        |                     Splash radious in game units.                      |
|    **spread**    |       `number[]`       |                  X and Z spread radius in game units.                  |
|    **range**     |       `number[]`       |                Minimum and maximum range of the weapon.                |
|   **velocity**   |        `number`        |            Bullet/Torpedo velocity (**not** plane speed!).             |
|    **piece**     |        `number`        |                       Amount of targets pierced.                       |
|    **angle**     |        `number`        |                        Effective firing angle.                         |
| **shell_range**  |       `number[]`       |                Min and max Range of the bullet/torpedo.                |
| **volley_info**  |       `number[]`       | Amount of volleys (index 0) and amount of shells per volley (index 1). |
| **spread_angle** |        `string`        |            Textual description of the weapon spread angle.             |
|   **aim_type**   | [`AimType`](#aim-type) |                      The aim type of the weapon.                       |
|  **barrage_id**  |        `number`        |           The ID of the (first) barrage used by this weapon.           |
|  **bullet_id**   |        `number`        |           The ID of the (first) bullet used by this weapon.            |
# Ammo Type

Ammo Type is a numeric value with the **two** ranges `[0, 8]` and `[100, 101]` 
where each number represents an in-game or special ammo type (missing values do not exit in game):

| Value |  Label  |                         Description                          |
| :---: | :-----: | :----------------------------------------------------------: |
|   0   | Unknown |           Placeholder type for unknown ammo types.           |
|   1   | Normal  |                 Normal ammo with no effects.                 |
|   2   |   HE    |     High-Explosive ammo that can usually inflict burns.      |
|   3   |   AP    |  Armor Piecing ammo that can usually piece or break armor.   |
|   4   | Torpedo |                           Torpedo                            |
|   5   |   AA    |           Special ammo type for anti-air bullets.            |
|   6   |  Bomb   |          An explosive or explosive-like ammunition.          |
|   7   |   SAP   |         Semi-Armor-Piercing that can usually pierce.         |
|   8   | Missile |                        Guided Missile                        |
| 9-99  |   N/A   |                       Do not exist yet                       |
|  100  | Beehive |  Special Ammo (override) for the Twin 410mm (Type 3 Shell)   |
|  101  |   SHS   | Special Ammo type reservation for Massachusetts second skill |

# Aim Type

Aim Type is a numeric value with the range `[-1, 1]` where each number represents a weapon aim type:

| Value |  Label  |                       Description                        |
| :---: | :-----: | :------------------------------------------------------: |
|  -1   | Unknown |          Placeholder type for unknown aim types          |
|   0   | Random  | The weapon is aimed at "random" or with a fixed pattern. |
|   1   |  Aimed  |        The weapon picks an enemy to then fire at.        |

# Upgrade Cost
Represents the cost to upgrade an equipment by one enhance level. Provides the following:

| Property  |                   Type                   |        Description        |
| :-------: | :--------------------------------------: | :-----------------------: |
| **coins** |                 `number`                 | Amount of coins required. |
| **items** | [`ItemStack[]`](../common.md#item-stack) |      Items required.      |

If coins is 0 and items has a length of 0 the equipment cannot be upgraded further.

# Gear Lab Recipe
Represents a single recipe inside Gear Lab. It provides the following:

| Property |              Type              |                   Description                   |
| :------: | :----------------------------: | :---------------------------------------------: |
|  **to**  |            `number`            | Equipment ID of the equipment being *crafted*.  |
| **from** |            `number`            | Equipment ID of the equipment being *consumed*. |
| **cost** | [`UpgradeCost`](#upgrade-cost) |         The cost to finish this recipe.         |

# Gear Skin
Represents a single gear skin of the game. Provides the following:

|    Property     |                      Type                      |                                                Description                                                |
| :-------------: | :--------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
|     **id**      |                    `number`                    |                                             The gear skin ID                                              |
|    **name**     |                    `string`                    |                                             Name of the skin.                                             |
|    **icon**     |                    `string`                    | Icon this skin uses lower cased. Available under `https://al.mrlar.dev/<equips or augments>/<icon>.webp`. |
| **description** |                    `string`                    |                                         Description of the skin.                                          |
|    **types**    | [`EquipmentType`](../common.md#equipment-type) |                                   Equipment types this skin works with.                                   |
|   **rarity**    |              [`Rarity`](#rarity)               |                                             The skin rarity.                                              |
|    **theme**    |                    `string`                    |                                          Name of the skin theme.                                          |
|   **servers**   |            [`AlServer`](#al-server)            |                                       Servers this item exists on.                                        |