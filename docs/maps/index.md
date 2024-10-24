---
title: Map Documentation
---

# Map Data

Structure for a boss fight in the game. Contains the following properties:

|  Property   |                  Type                  |                                                         Description                                                          |
| :---------: | :------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
|  **name**   |                `string`                |       The name of the map (for non campaign maps this is often the boss name + associated event or another descriptor)       |
|   **acv**   |                `number`                | Enemy Airspace control value used to determine Airspace control buffs. -1 indicates the Airspace should be considered empty. |
|  **boss**   |        [`BossData`](#boss-data)        |                                                   Data of the boss enemy.                                                    |
|  **opsi**   |               `boolean`                |                                  Whether the fight is considered and operation siren fight.                                  |
| **servers** | [`AlServer[]`](../common.md#al-server) |                              List of servers this fight is (or at any point was) available in.                               |
|  **buffs**  |        [`BossBuff`](#boss-buff)        |                                           Buffs that are active during this fight.                                           |
|  **type**   |         [`MapType`](#map-type)         |                                                    The type of map/fight.                                                    |

# Boss Data

Represents a boss enemy. Provides the following properties:

|      Property      |              Type               |                                                                  Description                                                                  |
| :----------------: | :-----------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
|      **name**      |            `string`             |                                                             The name of the boss.                                                             |
|      **hull**      |   [`Hull`](../common.md#hull)   |                                                             The hull of the boss.                                                             |
|      **hull**      | [`Nation`](../common.md#nation) |                                                            The nation of the boss.                                                            |
|     **stats**      |            `object`             | Contains one property of type `number` for each [EnemyStatKey](../common.md#enemy-stat-key). These are already scaled according to the level. |
|     **level**      |            `number`             |                                                            The level of the boss.                                                             |
| **offense_boost**  |            `number`             |                             Enemy offensive boost value during operation siren. Always `0` if `opsi` is `false`.                              |
| **survival_boost** |            `number`             |                              Enemy survival boost value during operation siren. Always `0` if `opsi` is `false`.                              |
| **tactics_boost**  |            `number`             |                              Enemy tactics boost value during operation siren. Always `0` if `opsi` is `false`.                               |
|      **icon**      |            `string`             |                       The icon the enemy uses lower cased. Available under `https://als.mrlar.dev/compact/<icon>.webp`.                       |

# Boss Buff

Represents a buff active during a boss fight. Provides the following:

|  Property  |                     Type                     |                                   Description                                    |
| :--------: | :------------------------------------------: | :------------------------------------------------------------------------------: |
|  **key**   | [`BuffStatKey`](../common.md#buff-stat-keys) |                                 Stat to affect.                                  |
| **amount** |                   `number`                   |          (Percentage) amount to increase (or descrease if negative) by.          |
|  **self**  |                  `boolean`                   | Whether the boss affects itself. If false the players fleet is affected instead. |

# Map Type
Map Type is a numeric value with the range `[1, 14]` where each number represents a type of map:

| Value |      Label      |             Description             |
| :---: | :-------------: | :---------------------------------: |
|   1   |     Normal      |      Normal Mode Campaign Map       |
|   2   |      Hard       |       Hard Mode Campaign Map        |
|   3   |  Event Nomral   |        Normal Mode Event Map        |
|   4   |   Event Hard    |         Hard Mode Event Map         |
|   5   |    Event SP     |            Event SP Map             |
|   6   |    Event EX     |            Event EX Map             |
|   7   |  Event Special  |          Special Event Map          |
|   8   |    Event TP     |            Event TP Map             |
|   9   |      META       |            META Showdown            |
|  10   |      Guild      |           Guild Operation           |
|  11   |      OpSi       |        Operation Siren Fight        |
|  12   |  Extreme: Easy  |  Extreme Challenge Easy Difficulty  |
|  13   | Extreme: Medium | Extreme Challenge Medium Difficulty |
|  14   |  Extreme: Hard  |  Extreme Challenge Hard Difficulty  |