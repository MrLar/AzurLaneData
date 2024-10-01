---
title: Ship Limitbreak Documentation
---

# LB Data

Represents all relevant data for a limit break that does not fit into other ship properties.
Contains the following properties:

|   Property    |   Type   |                                                                           Description                                                                           |
| :-----------: | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   **stars**   | `number` |                                                                  Amount of stars this LB has.                                                                   |
| **stars_max** | `number` |                                                                    Maximum amount of stars.                                                                     |
| **max_level** | `number` |     Maximum ship level in this limit break. A limit of 0 indicates there is no maximum level other than the global max level (125 at the time of writing).      |
| **min_level** | `number` |                                                            Minimum level to unlock this limit break.                                                            |
|    **id**     | `number` |                                                               GID of this particular limit break.                                                               |
| **oil.start** | `number` |                                                      Amount of oil to deduct when entering an enemy node.                                                       |
|  **oil.end**  | `number` | Base amount of oil to deduct when finishing an enemy node. This is scaled by the ships level:<br>$$\lfloor end \times \frac{100 + min(level, 99)}{200}\rfloor$$ |


# Upgrade Text

Contains information about unlocks of a limit break or development level (for PR/DR ships). Contains
the following properties:

|    Property    |    Type    |              Description               |
| :------------: | :--------: | :------------------------------------: |
| **descriptor** |  `string`  | Descriptor of this unlock. (ex: Dev10) |
|   **value**    | `string[]` | Text descriptions of what is unlocked. |
