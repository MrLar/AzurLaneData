---
title: Barrage Documentation
---

# Barrage

Barrage provides info about a single skill barrage. It provides the following properties:

|  Property   |               Type               |            Description            |
| :---------: | :------------------------------: | :-------------------------------: |
|  **name**   |             `string`             |  Name/Descriptor of the barrage.  |
|  **parts**  | [`BarragePart[]`](#barrage-part) | Parts that make up this barrage.  |
| **is_aoa?** |            `boolean`             | Whether this barrage is aoa-like. |

# Barrage Part

Barrage Part may refer to a standard "Weapon" based barrage (see [Weapon Barrage](#weapon-barrage)),
a Slashing Attack (see [Slash Barrage](#slash-barrage)) or a Summon (see [Barrage Summon](#barrage-summon))

**Disclaimer: There is no guarantee for correctness/accuracy of any of these values due to how complicated and non-automatable barrage mining is.**

# Weapon Barrage

Weapon Barrage provides information about a single weapon\* of a barrage,
it extends [Damaging Barrage](#damaging-barrage) and additionally provides the following:


|     Property      |                              Type                               |                                                                                                       Description                                                                                                       |
| :---------------: | :-------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     **type**      |                           `"weapon"`                            |                                                                                            Will always be the string weapon.                                                                                            |
|  **fix_damage?**  |                            `number`                             |              **(Optional)** Fixed amount of damage this part deals (i.E. it does not scale with anything). If both damage keys are present and non-zero this is simply added on top of the *final* value.               |
|  **coefficient**  |                            `number`                             |                                                                                                Coefficient of the part.                                                                                                 |
|     **stat**      | [`WeaponStat`](../common.md#weapon-stat-keys) \| `"fleetpower"` |                                                                                              Stat this part scales off of.                                                                                              |
|     **ratio**     |                            `number`                             |                                                                                          Ratio of the stat the part scales by.                                                                                          |
|   **armor_mod**   |                           `number[]`                            |                                                                                                 Armor Mods of the part.                                                                                                 |
|     **ammo**      |           [`AmmoType`](../equips/index.md#ammo-type)            |                                                                                               The ammo type of the part.                                                                                                |
|  **is_critical**  |                            `boolean`                            |                                                                                     Whether this part always deals critical damage.                                                                                     |
|     **notes**     |                           `string[]`                            |                                                                                                 Notes about this part.                                                                                                  |
|   **shrapnel**    |                            `boolean`                            |                                                                                    Whether this part shrapnels or involves shrapnel.                                                                                    |
| **ignore_shield** |                            `boolean`                            |                                                                                           Whether this part ignores shields.                                                                                            |
|     **reaim**     |                            `boolean`                            |                                                                                     Whether this part reaims or involves reaiming.                                                                                      |
|   **aim_type**    |            [`AimType`](../equips/index.md#aim-type)             |                                                                          The aim type of this part. **This can be overriden by `targeting`**.                                                                           |
|     **angle**     |                            `number`                             |                                                                                                 Effective firing angle.                                                                                                 |
|    **splash?**    |                            `number`                             |                                                                                      **(Optional)** Splash radious in game units.                                                                                       |
|    **spread?**    |                           `number[]`                            |                                                                                   **(Optional)** X and Z spread radius in game units.                                                                                   |
|   **velocity?**   |                            `number`                             |                                                                             **(Optional)** Bullet/Torpedo velocity (**not** plane speed!).                                                                              |
|    **piece?**     |                            `number`                             |                                                                                        **(Optional)** Amount of targets pierced.                                                                                        |
| **shell_range?**  |                           `number[]`                            |                                                                                 **(Optional)** Min and max Range of the bullet/torpedo.                                                                                 |
|    **is_air?**    |                            `boolean`                            |                                                            **(Optional)** Whether this part is (probably) carried by an aircraft (or aircraft like entity).                                                             |
|   **stat_cap?**   |                            `number`                             |                                             **(Optional)** This value cannot be exceeded by stat scaling, if absent the cap is non-existent and scaling can go to infinity.                                             |
|   **airdrop?**    |                            `boolean`                            |                                                                          **(Optional)** Whether this armament behaves like an airdropped bomb.                                                                          |
|   **tracker?**    |       [`MagneticTracker`](../common.md#magnetic-tracker)        |                                           **(Optional)** Tracker the ammo carried has in it, this is only potentially present if the ammo is a torpedo (4) or a missile (8).                                            |
|   **targeting**   |                       `string` \| `null`                        |                                                                     Textual description of targeting method or null if no target/default targeting.                                                                     |
|   **centered**    |                            `boolean`                            | Whether this barrage is explicitly set to spawn from the flagship when it otherwise wouldnt. **Do note that a value of false can still mean it spawns from the flagship because of how that bullet/weapon type works**. |
|   **bullet_id**   |                            `number`                             |                                                            The ID of the bullet used (there may be more than one but only one is listed, may be incorrect).                                                             |
|   **weapon_id**   |                            `number`                             |                                                               The ID of the weapon (there may be more than one but only one is listed, may be incorrect).                                                               |
|  **bullet_type**  |         [`BulletType`](../equips/index.md#bullet-type)          |                                                                                                 The type of the bullet.                                                                                                 |
|  **weapon_type**  |         [`WeaponType`](../equips/index.md#weapon-type)          |                                                                                                 The type of the weapon.                                                                                                 |


Note: This interface shares a lot in common with regular weapons, however the overlap is not exactly 1:1 therefore it does not directly extend Weapon or any of it's sub-types.

\* A single weapon my not neccesarily be a single weapon in the actual game files. The same is true for bullets.

# Slash Barrage

Slash Part provides information about a single slash of a barrage,
it extends [Damaging Barrage](#damaging-barrage) and additionally provides the following:


|     Property      |                      Type                      |                                                          Description                                                          |
| :---------------: | :--------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
|     **type**      |                   `"slash"`                    |                                               Will always be the string slash.                                                |
|  **fix_damage**   |                    `number`                    |                                      The flat and fixed amount of damage this slash does                                      |
|   **velocity**    |                    `number`                    |                                                    Velocity of this slash.                                                    |
|   **level_of**    |                    `string`                    |                      Textual description of ships that contribute to the Average Level for damage calcs.                      |
|    **clears**     | [`BulletType`](../equips/index.md#bullet-type) |                                        Bullet types this slash clears from the screen.                                        |
| **movement_type** |                   `0` \| `1`                   | The movement type of the slash. 1 indicates a stationary circle while 0 indicates traveling from L to R (for friendly ships). |
|   **life_time**   |                    `number`                    |                                             How long this slash lasts in seconds.                                             |
|     **range**     |                    `number`                    |                                                    Diameter of this slash.                                                    |

Note: The damage property of slashes is scaled by the average level of all ships as described by `level_of`.
The final damage is equal to \\(AverageLevel * damage + fix_damage\\).

# Barrage Summon

Barrage Summon provides information about a single summon created by a skill.
It extends [Base Barrage](#base-barrage) and additionally provides the following:

|  Property   |                           Type                            |                                                          Description                                                           |
| :---------: | :-------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|  **hull**   |                [`Hull`](../common.md#hull)                |                                                 The hull the summon will use.                                                  |
|  **armor**  |                         `number`                          |           The armor type of the summon as a number with the range `[0, 3]` for Light, Medium and Heavy respectively.           |
| **weapons** | [`(Weapon Barrage & { rld: string })[]`](#weapon-barrage) | Weapons this summon has. The extra `rld` prop provides the base reload of the weapon. N/A means the weapon cannot be reloaded. |


In addition to the above it contains one **non-optional** property of type `string` for each [ScalableStatKey](../common.md#scalable-stat-keys) which
represents the amount the summon inherits (if a percentage) or the actual stat value the summon will have.


# Base Barrage

Base barrage is a super-interface for all barrage entries. It provides:


|     Property     |                 Type                  |                           Description                           |
|     **type**     | `"weapon"` \| `"slash"` \| `"summon"` |                     The type of this entry.                     |
|    **buffs?**    |              `string[]`               | **(Optional)** Textual explanation of (de)buffs applied on hit. |
| **buff_chance?** |               `number`                |       **(Optional)** Chance for (de)buffs to be applied.        |


# Damaging Barrage

Damaging barrage is a super-interface for [Weapon Barrages](#weapon-barrage) and [Slash Barrages](#slash-barrage).
It extends [Base Barrage](#base-barrage) and additionally provides the following:

|  Property  |   Type   |              Description               |
| :--------: | :------: | :------------------------------------: |
| **damage** | `number` |        Base damage of the part.        |
| **count**  | `number` | Attack Count/Bullet count of the part. |