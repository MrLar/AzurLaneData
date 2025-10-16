---
title: Dorm3D Documentation
---

# Dorm3D Room

Dorm3D Room represents the data associated with a room/location in the Dorm3D feature:

|     Property     |                Type                |                                                           Description                                                            |
| :--------------: | :--------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
|      **id**      |              `number`              |                                                       The ID of the shop.                                                        |
|     **name**     |              `string`              |                                                      The name of the room.                                                       |
|     **type**     |      [`RoomType`](#room-type)      |                                                      The type of the room.                                                       |
|  **characters**  |             `number[]`             |                    List of [`Dorm3DCharacter`](#dorm3d-character) ids that can visit this location for free.                     |
|  **invitable**   | [`Dorm3DInvite[]`](#dorm3d-invite) |                                       List of guests that can be invited to this location.                                       |
|   **memories**   |             `number[]`             | List of memory IDs available in this location.<br>**At the moment these are useless as the data does not provide memories yet**. |
|   **servers**    |      [`AlServer`](#al-server)      |                                                   Servers this room exists on                                                    |
| **collectables** |             `number[]`             |                     List of [`Dorm3DCollectable`](#dorm3d-collectable) item ids available in this location.                      |
|    **icons**     |              `string`              |                            The icon of the room. Available under `https://al.mrlar.dev/<icon>.webp`.                             |
|  **furniture**   |             `number[]`             |                     List of [`Dorm3DFurniture`](#dorm3d-furniture) item ids that can be placed in this room.                     |

# Dorm3D Invite

Dorm3D Invite represents the data associated inviting a character to a location:

|   Property    |                Type                 |            Description             |
| :-----------: | :---------------------------------: | :--------------------------------: |
|    **id**     |              `number`               |      The ID of the character.      |
|   **cost**    |              `number`               |        The associated cost.        |
| **currency**  | [`Currency`](../common.md#currency) |         The currency used.         |
| **discount?** |              `number`               | **(Optional)** Percentage discount |


# Dorm3D Character

Dorm3D Character represents the data associated with character/ship that is available in Dorm3D:

|     Property     |              Type               |                                    Description                                     |
| :--------------: | :-----------------------------: | :--------------------------------------------------------------------------------: |
|      **id**      |            `number`             |                           The ID of the ship/character.                            |
|     **gid**      |            `number`             |                             The group ID of the ship.                              |
|     **name**     |            `string`             |                             The name of the character.                             |
|   **room_id**    |            `number`             |                           The ID of their private room.                            |
|     **icon**     |            `string`             |  The icon of the character. . Available under `https://al.mrlar.dev/<icon>.webp`.  |
|   **servers**    |    [`AlServer`](#al-server)     |                          Servers this character exists on                          |
|    **gifts**     |           `number[]`            | List of [`Dorm3DGift`](#dorm3d-gift) item ids that can be given to this character. |
|    **rarity**    | [`Rarity`](../common.md#rarity) |                        The (ship) rarity of this character.                        |
| **favor_levels** | [`FavorLevel[]`](#favor-level)  |                       Favor levels this character can reach.                       |

# Favor Level

Favor Level represents the data associated with a single favor level of a Dorm3D Character:

|  Property  |                  Type                  |              Description               |
| :--------: | :------------------------------------: | :------------------------------------: |
| **needed** |                `number`                |        Amount of favor needed.         |
| **level**  |                `number`                |            The level index.            |
| **items**  | [`ItemDrop[]`](../common.md#item-drop) | Items granted for reaching this level. |


# Dorm3D Gift

Dorm3D Gift represents the data associated with a gift item in Dorm3D it.
It extends [`Item`](../common.md#item) with `type=27` and additionally provides: 

|     Property     |   Type    |                                                       Description                                                        |
| :--------------: | :-------: | :----------------------------------------------------------------------------------------------------------------------: |
| **purchaseable** | `boolean` |                                        Whether this item can be bought on demand.                                        |
|   **expires**    | `number`  | UNIX timestamp after which this gift cannot be bought anymore, 0 if it can always be bought, -1 if it cannot be bought.. |
|     **ship**     | `number`  |                            ID of the ship this gift is exclusive to, or 0 if it is universal.                            |

# Dorm3D Furniture

Dorm3D Furniture represents the data associated with a furniture item in Dorm3D it.
It extends [`Item`](../common.md#item) with `type=27` and additionally provides: 

|     Property     |                Type                |                                                         Description                                                          |
| :--------------: | :--------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
| **purchaseable** |             `boolean`              |                                          Whether this item can be bought on demand.                                          |
|   **expires**    |              `number`              | UNIX timestamp after which this furniture cannot be bought anymore, 0 if it can always be bought, -1 if it cannot be bought. |
|   **room_id**    |              `number`              |                                     The ID of the room this furniture can be placed in.                                      |
|  **furni_type**  | [`FurnitureType`](#furniture-type) |                                         The type of furniture this item represents.                                          |
|  **exclusive**   |             `boolean`              |  Whether this furniture is exclusive to a specific character.<br>This only really makes the game UI tell you it's valuable   |

# Dorm3D Collectable

Dorm3D Collectable represents the data associated with a collectable item in Dorm3D it.
It extends [`Item`](../common.md#item) with `type=27` and additionally provides: 

|  Property   |   Type   |                                    Description                                     |
| :---------: | :------: | :--------------------------------------------------------------------------------: |
| **room_id** | `number` |                   The ID of the room this item can be found in.                    |
|  **time**   | `number` | The time of day this item can be found<br> 0 is any time, 1 is day and 2 is night. |


# Room Type
Room Type is a numeric value with the range `[1, 2]` where each
number represents an in-game shop type:

| Value |      Label      |
| :---: | :-------------: |
|   1   | Private Quarter |
|   2   |   Common Area   |

# Furniture Type

Furniture Type is a numeric value with the ranges `[1, 6]` and `[99, 100)` where each
number represents an in-game shop type:

| Value |      Label       |
| :---: | :--------------: |
|   1   |    Wallpaper     |
|   2   |      Floor       |
|   3   |    Decoration    |
|   4   |       Bed        |
|   5   |      Couch       |
|   6   |      Table       |
| 7-98  | Do not exist yet |
|  99   |     Special      |