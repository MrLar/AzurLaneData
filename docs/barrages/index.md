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

Barrage Part may refer to a standard "Bullet" based barrage (see [Bullet Barrage](#bullet-barrage))
or a Slashing Attack (see [Slash Barrage](#slash-barrage)). Both sub-interfaces share the following:

**Disclaimer: There is no guarantee for correctness/accuracy of any of these values due to how complicated and non-automatable barrage mining is.**

|     Property     |    Type    |                                            Description                                             |
| :--------------: | :--------: | :------------------------------------------------------------------------------------------------: |
|  **is_slash?**   |  `number`  | **(Optional)** Whether this barrage is a Slash Barrage. If absent or false it is a Bullet Barrage. |
|    **damage**    |  `number`  |                                      Base damage of the part.                                      |
|    **count**     |  `number`  |                               Attack Count/Bullet count of the part.                               |
|    **buffs?**    | `string[]` |                  **(Optional)** Textual explanation of (de)buffs applied on hit.                   |
| **buff_chance?** |  `number`  |                         **(Optional)** Chance for (de)buffs to be applied.                         |


# Bullet Barrage

Barrage Part provides information about a single bulelt-eque part of a barrage. These parts are roughly grouped by identical bullet types. It provides the following:


|     Property      |                              Type                               |                                                                                                       Description                                                                                                       |
| :---------------: | :-------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
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


Note: This interface shares a lot in common with regular weapons, however the overlap is not exactly 1:1 therefore it does not directly extend Weapon or any of it's sub-types.


# Slash Barrage

Slash Part provides information about a single slash-eque part of a barrage. It provides the following:


|     Property      |                      Type                      |                                                          Description                                                          |
| :---------------: | :--------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
|   **is_slash**    |                     `true`                     |                                         This value is ALWAYS true for slash barrages.                                         |
|  **fix_damage**   |                    `number`                    |                                      The flat and fixed amount of damage this slash does                                      |
|   **velocity**    |                    `number`                    |                                                    Velocity of this slash.                                                    |
|   **level_of**    |                    `string`                    |                      Textual description of ships that contribute to the Average Level for damage calcs.                      |
|    **clears**     | [`BulletType`](../equips/index.md#bullet-type) |                                        Bullet types this slash clears from the screen.                                        |
| **movement_type** |                   `0` \| `1`                   | The movement type of the slash. 1 indicates a stationary circle while 0 indicates traveling from L to R (for friendly ships). |
|   **life_time**   |                    `number`                    |                                             How long this slash lasts in seconds.                                             |
|     **range**     |                    `number`                    |                                                    Diameter of this slash.                                                    |

Note: The damage property of slashes is scaled by the average level of all ships as described by `level_of`.
The final damage is equal to \\(AverageLevel * damage + fix_damage\\).