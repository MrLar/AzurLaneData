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

Barrage Part provides information about a single part of a barrage. These parts are roughly grouped by identical bullet types. It provides the following:

**Disclaimer: There is no guarantee for correctness/accuracy of any of these values due to how complicated and non-automatable barrage mining is.**

|     Property      |                              Type                               |                                                                                                       Description                                                                                                       |
| :---------------: | :-------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    **damage**     |                            `number`                             |                                                                                                Base damage of the part.                                                                                                 |
|  **fix_damage?**  |                            `number`                             |              **(Optional)** Fixed amount of damage this part deals (i.E. it does not scale with anything). If both damage keys are present and non-zero this is simply added on top of the *final* value.               |
|  **coefficient**  |                            `number`                             |                                                                                                Coefficient of the part.                                                                                                 |
|     **count**     |                            `number`                             |                                                                                                Bullet count of the part.                                                                                                |
|     **stat**      | [`WeaponStat`](../common.md#weapon-stat-keys) \| `"fleetpower"` |                                                                                              Stat this part scales off of.                                                                                              |
|     **ratio**     |                            `number`                             |                                                                                          Ratio of the stat the part scales by.                                                                                          |
|   **armor_mod**   |                           `number[]`                            |                                                                                                 Armor Mods of the part.                                                                                                 |
|     **ammo**      |           [`AmmoType`](../equips/index.md#ammo-type)            |                                                                                               The ammo type of the part.                                                                                                |
|  **is_critical**  |                            `boolean`                            |                                                                                     Whether this part always deals critical damage.                                                                                     |
|     **notes**     |                           `string[]`                            |                                                                                                 Notes about this part.                                                                                                  |
|   **shrapnel**    |                            `boolean`                            |                                                                                    Whether this part shrapnels or involves shrapnel.                                                                                    |
| **ignore_shield** |                            `boolean`                            |                                                                                           Whether this part ignores shields.                                                                                            |
|     **reaim**     |                            `boolean`                            |                                                                                     Whether this part reaims or involves reaiming.                                                                                      |
|     **range**     |                           `number[]`                            |                                                                                         Minimum and maximum range of the part.                                                                                          |
|   **aim_type**    |            [`AimType`](../equips/index.md#aim-type)             |                                                                          The aim type of this part. **This can be overriden by `targeting`**.                                                                           |
|     **angle**     |                            `number`                             |                                                                                                 Effective firing angle.                                                                                                 |
|    **splash?**    |                            `number`                             |                                                                                      **(Optional)** Splash radious in game units.                                                                                       |
|    **spread?**    |                           `number[]`                            |                                                                                   **(Optional)** X and Z spread radius in game units.                                                                                   |
|   **velocity?**   |                            `number`                             |                                                                             **(Optional)** Bullet/Torpedo velocity (**not** plane speed!).                                                                              |
|    **piece?**     |                            `number`                             |                                                                                        **(Optional)** Amount of targets pierced.                                                                                        |
|    **buffs?**     |                           `string[]`                            |                                                                             **(Optional)** Textual explanation of (de)buffs applied on hit.                                                                             |
| **buff_chance?**  |                            `number`                             |                                                                                   **(Optional)** Chance for (de)buffs to be applied.                                                                                    |
| **shell_range?**  |                           `number[]`                            |                                                                                 **(Optional)** Min and max Range of the bullet/torpedo.                                                                                 |
|    **is_air?**    |                            `boolean`                            |                                                            **(Optional)** Whether this part is (probably) carried by an aircraft (or aircraft like entity).                                                             |
|   **stat_cap?**   |                            `number`                             |                                             **(Optional)** This value cannot be exceeded by stat scaling, if absent the cap is non-existent and scaling can go to infinity.                                             |
|   **airdrop?**    |                            `boolean`                            |                                                                          **(Optional)** Whether this armament behaves like an airdropped bomb.                                                                          |
|   **tracker?**    |       [`MagneticTracker`](../common.md#magnetic-tracker)        |                                           **(Optional)** Tracker the ammo carried has in it, this is only potentially present if the ammo is a torpedo (4) or a missile (8).                                            |
|   **targeting**   |                       `string` \| `null`                        |                                                                     Textual description of targeting method or null if no target/default targeting.                                                                     |
|   **centered**    |                            `boolean`                            | Whether this barrage is explicitly set to spawn from the flagship when it otherwise wouldnt. **Do note that a value of false can still mean it spawns from the flagship because of how that bullet/weapon type works**. |


Note: This interface shares a lot in common with regular weapons, however the overlap is not exactly 1:1 therefore it does not directly extend Weapon or any of it's sub-types.