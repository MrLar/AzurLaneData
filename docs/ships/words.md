# Skin Words
Skin words is an object that includes all the voice lines of all skins of a ship.
It consists of the following:

| Property  |             Type             |          Description          |
| :-------: | :--------------------------: | :---------------------------: |
|  **id**   |           `number`           | Ship ID these lines belong to |
| **skins** | [`SkinLines[]`](#skin-lines) |        Lines per skin         |

# Skin Lines
Skin Lines is an object that contains all the voice lines of a single skin.
It consists of the following:

| Property  |             Type             |                                                      Description                                                      |
| :-------: | :--------------------------: | :-------------------------------------------------------------------------------------------------------------------: |
|  **id**   |           `number`           |                                        The skin ID, or `-1` for default skins                                         |
| **lines** | [`VoiceLine[]`](#voice-line) |                                                    The voice lines                                                    |
|  **ex?**  | [`VoiceLine[]`](#voice-line) | **(Optional)** The extra (post-oath) voice lines<br>If their `type` matching a voice line in `lines` it is overriden. |

# Voice Line
Voice is an object that contains information about a **single** voice line.
It provides the following:

|    Property     |                Type                 |                              Description                               |
| :-------------: | :---------------------------------: | :--------------------------------------------------------------------: |
|    **type**     |              `string`               |                      The type of the voice lines                       |
|    **line**     |              `string`               |                          The voice line text                           |
| **conditions?** | [`LineCondtions`](#line-conditions) | **(Optional)** Contions that need to be met for the voice line to play |

# Line Conditions
Line Condition is an object that provides conditions that need to be met in order for a voice
line to be played. It consists of:

|    Property     |               Type                |                                                          Description                                                           |
| :-------------: | :-------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|    **oath?**    |             `boolean`             |                                       **(Optional)** Whether the ship needs to be oathed                                       |
|  **affinity?**  |             `number`              |                                     **(Optional)** Affinity threshold that needs to be met                                     |
|   **amount?**   |             `number`              |             **(Optional)** Amount of ships that need to match `ships`, `artists`, `hulls`, `nations` or `rarities`             |
|   **ships?**    |            `number[]`             |                      **(Optional)** List of [`Ship IDs`](./index.md) of which `amount` need to be present                      |
|  **artists?**   |            `number[]`             | **(Optional)** List of Artist IDs. In this case `amount` refers to how many ships need to be designed by one of these artists. |
|   **hulls?**    |   [`Hull[]`](../common.md#hull)   |  **(Optional)** List of ship hulls. In this case `amount` refers to how many times that hull has to be present in the fleet.   |
|  **nations?**   | [`Nation[]`](../common.md#nation) |   **(Optional)** List of nations. In this case `amount` refers to how many times that nation has to be present in the fleet.   |
|  **rarities?**  | [`Rarity[]`](../common.md#rarity) |  **(Optional)** List of rarities. In this case `amount` refers to how many times that rarity has to be present in the fleet.   |
| **impossible?** |             `boolean`             |                             **(Optional)** Whether this line is *currently* impossible to trigger.                             |

In all these cases the ship the voice line belongs to does *not* count towards `amount`.