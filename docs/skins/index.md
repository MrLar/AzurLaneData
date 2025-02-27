---
title: Skin Documentation
---

# Skin Info

Skin Info contains relevant information of a ship skin. Provides the following properties:

|     Property     |                  Type                  |                                                           Description                                                           |
| :--------------: | :------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|      **id**      |                `number`                |                                                       The ID of the skin.                                                       |
|     **name**     |                `string`                |                                                      Names this skin has.                                                       |
|     **type**     |        [`SkinType`](#skin-type)        |                                                      The type of the skin.                                                      |
|   **category**   |    [`SkinCategory`](#skin-category)    |                                                    The category of the skin.                                                    |
|   **servers**    | [`AlServer[]`](../common.md#al-server) |                                List of servers this skin is (or at any point was) obtainable on.                                |
|     **icon**     |                `string`                | The icon this skin uses lower cased. Available under `https://als.mrlar.dev/<compact, yard, full, qicon or chibi>/<icon>.webp`. |
|      **bg**      |           `string` \| `null`           |       The custom background this skin uses lower cased if any.    Available under `https://al.mrlar.dev/bg/<icon>.webp`.        |
| **obtain_type**  | [`SkinObtainType`](#skin-obtain-type)  |                                                  How this skin is obtainable.                                                   |
|    **price**     |                `number`                |                                The price for this skin in `currency`. 0 if it cannot be bought.                                 |
|   **currency**   |                `number`                |                          The item ID of the currency to use for purchasing. 0 if it cannot be bought.                           |
| **is_permanent** |               `boolean`                |                                           Whether this skin is permanently available.                                           |
|     **l2d**      |               `boolean`                |                                                  Whether this skin is Live2D.                                                   |
|   **dynamic**    |               `boolean`                |                                                  Whether this skin is dynamic.                                                  |
|  **custom_bgm**  |               `boolean`                |                                         Whether this skin has custom background music.                                          |
|  **dynamic_bg**  |               `boolean`                |                                           Whether this skin has a dynamic background.                                           |
|  **dual_form**   |               `boolean`                |                                             Whether this skin is a dual form skin.                                              |

# Skin Type

Skin Type is a numeric value with the range `[-1, 6]` where each number represents an in-game skin
type:

| Value |     Label     |               Description                |
| :---: | :-----------: | :--------------------------------------: |
|  -1   |    Default    |        Type of all default skins.        |
|   0   |    Normal     |         Type for regular skins.          |
|   1   |     Oath      |         Type for all Oath skins.         |
|   2   |   Retrofit    |       Type for all Retrofit skins.       |
|   3   |      Old      |    Type for all Old (Original) skins.    |
|   4   |     Promo     |        Type for all Promo skins.         |
|   5   |   Valentine   |      Type for most Valentine skins.      |
|   6   | Dual Form Alt | Alternative version of a dual form skin. |

# Skin Category

Skin Category is a numeric value with **three** range `[0, 4]`, `[6, 27]` and `[9997, 9999]` where 
each number represents an in-game skin type (missing values do not exit in game):

|  Value  |          Label           |
| :-----: | :----------------------: |
|    0    |         Default          |
|    1    |        Christmas         |
|    2    |         New Year         |
|    3    |     Spring Festival      |
|    4    |       School Girl        |
|    5    | N/A (Does not exist yet) |
|    6    |         Swimsuit         |
|    7    |       Party Dress        |
|    8    |        Halloween         |
|    9    |          Casual          |
|   10    |       Summer Fest        |
|   11    |       Shining Star       |
|   12    |     Special Exercise     |
|   13    |        Sport Time        |
|   14    |        Race Queen        |
|   15    |         Hospital         |
|   16    |        Bunny Girl        |
|   17    |           Maid           |
|   18    |        Blood Moon        |
|   19    |        Fairy Tale        |
|   20    |     Home Relaxation      |
|   21    |     Rhythm and Steps     |
|   22    |        Hot Spring        |
|   23    |        On the Job        |
|   24    |           RPG            |
|   25    |        Wild West         |
|   26    |      Dreamland Park      |
|   27    |       Nile Colors        |
| 28-9996 |  N/A (Do not exist yet)  |
|  9997   |         Retrofit         |
|  9998   |           Oath           |
|  9999   |          Other           |

# Skin Obtain Type

Skin Type is a numeric value with the range `[-1, 9]` where each number represents how a skin
is attainable:

| Value |        Label        |
| :---: | :-----------------: |
|  -1   |    Unobtainable     |
|   0   |  Skin Shop (Gems)   |
|   1   | Any Core Data Shop  |
|   2   |       Events        |
|   3   | Cruise Pass (Paid)  |
|   4   |     Quest Line      |
|   5   |     Prize Shop      |
|   6   |        Oath         |
|   7   |      Retrofit       |
|   8   |    IRL Promotion    |
|   9   | Dual Form Switching |