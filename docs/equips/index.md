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
|   **labels**    |       `string[]` \| `string[][]`       |                                                                      Game labels (tags) of this equipment with each entry lower cased. If the array is 1-dimensional all enhance levels use the same labels otherwise they may differ.                                                                      |
| **speciality**  |                `string`                |                                                                                                                                          In game speciality text.                                                                                                                                           |
| **obtainable**  |               `boolean`                |                                                                                                                               Whether this equipment is currently obtainable.                                                                                                                               |
|  **important**  |               `boolean`                |                                                                                                                 Whether this equipment will show a warning before being scrapped/consumed.                                                                                                                  |
|  **aliases?**   |               `string[]`               |                                                                            **(Optional)** List of all known community aliases this equipment/augment has. For augments this is only an alias that includes the name of the ship.                                                                            |


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

|     Property      |                     Type                      |                                                                                   Description                                                                                   |
| :---------------: | :-------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    **damage**     |                  `number[]`                   |       Damage dealt by the equipment at each enhancement level of the equipment (i.E. index 0 is +0, and so on). For scaling refer to [`EquipmentFormulas`](./fomulas.md).       |
|     **stat**      | [`WeaponStat`](../common.md#weapon-stat-keys) |                                                                        The stat this weapon scales with.                                                                        |
|     **ratio**     |                   `number`                    |                                                                            The ratio to scale with.                                                                             |
|   **armor_mod**   |                  `number[]`                   |                                A 3 value array where each entry represents the effectiveness against Light, Medium and Heavy armor respectively.                                |
|     **ammo**      |           [`AmmoType`](#ammo-type)            |                                                                          The ammo type of the weapon.                                                                           |
|      **id**       |                   `number`                    |                                                                              The ID of the weapon.                                                                              |
| **dmg_variance?** |                   `number`                    | **(Optional)** The rate at which damage is randomly determined. If this is present all values in `damage` are the average value. To recover the min and max see the note below. |

To recover min and max damage in the event of `dmg_variance` being non null simply calculate:
- min: \\(\frac{damage \times 2}{1 + dmg\\_variance}\\)
- max: \\(\frac{damage \times 2 \times dmg\\_variance}{1 + dmg\\_variance}\\) or \\(min \times dmg\\_variance\\)

# Extended Weapon

Extended Weapon is an extension of [`WeaponBase`](#weapon-base) and additionally provides the
following:

|     Property     |                      Type                      |                                                          Description                                                           |
| :--------------: | :--------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|    **splash**    |                    `number`                    |                                                 Splash radious in game units.                                                  |
|    **spread**    |                   `number[]`                   |                                              X and Z spread radius in game units.                                              |
|    **range**     |                   `number[]`                   |                                            Minimum and maximum range of the weapon.                                            |
|   **velocity**   |                    `number`                    |                                        Bullet/Torpedo velocity (**not** plane speed!).                                         |
|   **falloff?**   |                    `number`                    | **(Optional)** AoE/Splash Damage falloff. A falloff of 0.75 would mean the far edges of the splash would at most deal 25% dmg. |
|    **piece**     |                    `number`                    |                                                   Amount of targets pierced.                                                   |
|    **angle**     |                    `number`                    |                                                    Effective firing angle.                                                     |
| **shell_range**  |                   `number[]`                   |                                            Min and max Range of the bullet/torpedo.                                            |
| **volley_info**  |                   `number[]`                   |                             Amount of volleys (index 0) and amount of shells per volley (index 1).                             |
| **spread_angle** |                    `string`                    |                                        Textual description of the weapon spread angle.                                         |
|   **aim_type**   |             [`AimType`](#aim-type)             |                                                  The aim type of the weapon.                                                   |
|  **barrage_id**  |                    `number`                    |                                       The ID of the (first) barrage used by this weapon.                                       |
|  **bullet_id**   |                    `number`                    |                                       The ID of the (first) bullet used by this weapon.                                        |
|    **buffs?**    |                   `string[]`                   |                                **(Optional)** Textual explanation of (de)buffs applied on hit.                                 |
| **bullet_type**  | [`BulletType`](../equips/index.md#bullet-type) |                                                    The type of the bullet.                                                     |
| **weapon_type**  | [`WeaponType`](../equips/index.md#weapon-type) |                                                    The type of the weapon.                                                     |

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

# Bullet Type

Bullet Type is a numeric value with the range `[0, 17]`. 
where each number represents an in-game bullet type:

| Value |    Label     |
| :---: | :----------: |
|   0   |   Unknown    |
|   1   |    Cannon    |
|   2   | Bomb/Arcing  |
|   3   |   Torpedo    |
|   4   |    Direct    |
|   5   |   Shrapnel   |
|   6   |      AA      |
|   7   |     ASW      |
|   8   |    Stray     |
|   9   |    Effect    |
|  10   |     Beam     |
|  11   |   Gravity    |
|  12   | Electric Arc |
|  13   |   Missile    |
|  14   | Space Laser  |
|  15   |    Scale     |
|  16   | Trigger Bomb |
|  17   |  AAMissile   |

# Weapon Type

Weapon Type is a numeric value with the ranges `[0, 7]`, `[10, 33]`,  `[80, 81)` and `[99, 100)`. 
where each number represents an in-game weapon type:

| Value |         Label         |
| :---: | :-------------------: |
|   1   |      Main Cannon      |
|   2   |      Sub Cannon       |
|   3   |        Torpedo        |
|   4   |       Anti Air        |
|   5   |        Armour         |
|   6   |        Engine         |
|   7   |         Radar         |
|  8-9  |   Do not exist yet    |
|  10   |    Strike Aircraft    |
|  11   |  Intercept Aircraft   |
|  12   |         Crew          |
|  13   |        Charge         |
|  14   |        Special        |
|  15   |      Mega Charge      |
|  16   |    Manual Torpedo     |
|  17   |       Anti Sea        |
|  18   |      Hammer Head      |
|  19   | Bomber pre cast alert |
|  20   |      Multi Lock       |
|  21   |      Manual Sub       |
|  22   |    Fleet Anti Air     |
|  23   |  Point Hit and Lock   |
|  24   |         Beam          |
|  25   |     Depth Charge      |
|  26   |   Repeater Anti Air   |
|  27   |  Disposable Torpedo   |
|  28   |      Space Laser      |
|  29   |        Missile        |
|  30   | Fleet Range Anti Air  |
|  31   |    Manual Missile     |
|  32   |     Auto Missile      |
|  33   |     Manual Meteor     |
| 34-79 |   Do not exist yet    |
|  80   |   Manual AA Missile   |
| 81-98 |   Do not exist yet    |
|  99   |   Preview Aricraft    |

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