---
title: Shop Documentation
---

# Shop
All shops share the following properties:

|      Property       |                 Type                  |                                                                                                                                   Description                                                                                                                                    |
| :-----------------: | :-----------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      **type**       |       [`ShopType`](#shop-type)        |                                                                                                                                The type of shop.                                                                                                                                 |
|      **name**       |               `string`                |                                                                                                                              The name of the shop.                                                                                                                               |
|       **id**        |               `number`                |                                                                                                                               The ID of the shop.                                                                                                                                |
|    **currency**     |  [`Currency`](../common.md#currency)  |                                                                                                                           The currency this shop uses.                                                                                                                           |
| **refresh_times?**  |              `string[]`               |                                                              **(Optional)** Times this shop refreshes at in server time. These times may include "daily", "monthly", "mondays" or similiar. Treat absent as never.                                                               |
| **manual_refresh?** |               `boolean`               |                                                                                                **(Optional)** Whether this shop can be refreshed manually. Treat absent as false.                                                                                                |
|  **refresh_cost?**  |              `number[]`               |                                                                **(Optional)** Costs to refresh the shop manually. Each entry represents one refresh.<br>The currency used to refresh can be inferred from `type`.                                                                |
|      **items**      |      [`ShopItem[]`](#shop-item)       |                                                                                                 List of items sold by this shop. These may not include all depending on `type`.                                                                                                  |
|      **icon?**      |               `string`                |                                                                             **(Optional)** The icon of the shop, if absent use the currency icon. Available under `https://al.mrlar.dev/<icon>.webp`                                                                             |
|  **icon_rarity?**   |    [`Rarity`](../common.md#rarity)    |                                                                                          **(Optional)** The rarity to use for the icon of the shop, if absent use the currency rarity.                                                                                           |
|  **currency_alt?**  | [`Currency[]`](../common.md#currency) |                                                                                       **(Optiona)** Alternative currencies used some of the time as determined by `use_alt` on the items.                                                                                        |
|     **pools?**      |      [`ItemPool[]`](#item-pool)       |                                                                                                                        **(Optiona)** List of item pools.                                                                                                                         |
|     **dates?**      |             `number[][]`              | **(Optiona)** Sets of start and end UNIX Timestamp (in ms) dates for when the respective event was active.<br>If this is absent the shop is permanent or effectively permanent.<br>For most events you have to add 1 week (in ms) to this to get the time the shop truly closed. |

- If shop type is `13` the `items` array is empty and `pools` contains all the sub-shops.
- If shop type is `16` the currency has an ID of -1 and no icon.
- If shop type is `15` or `16` the `items` array only contains **permannent** or **frequently returning** items.

# Shop Item
Shop item represents a single item sold by a Shop. A shop item may refer to a pool of items.
It extends [`ItemDrop`](../common.md#item-drop) and provides the following additional properties:

|     Property     |            Type            |                                                                                                                       Description                                                                                                                       |
| :--------------: | :------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    **limit**     |          `number`          | The limit of purchases.<br>0 indicates unlimited for items not in a pool.<br>If the item is part of a pool and `limit` is `<=0` the `limit` is                                shared among all pool items and can be inherited from the reference item. |
|     **cost**     |          `number`          |              The cost of the item.<br>If the item is part of a pool and `cost` is `<=0` the `cost` is                                                           shared among all pool items and can be inherited from the reference item.               |
|     **ref?**     |          `string`          |                                                                                               **(Optional)** Reference to a pool `id` or property if any.                                                                                               |
|   **use_alt?**   |          `number`          |                                                            **(Optional)** The index of the alternative currency to use if present, only exists for shops that actually have `currency_alt`.                                                             |
| **limit_type?**  | [`LimitType`](#limit-type) |                                                          **(Optional)** The Stock (limit) type of this item, determines whether it refreshes, considers owned and so on. Treat absent as `0`.                                                           |
| **limit_group?** |          `number`          |                                                         **(Optional)** The group for limit sharing. Items with the same limit group share a limit unless the group equal 0, treat absent as 0.                                                          |
| **group_limit?** |          `number`          |                                                                                                     **(Optional)** The limit of the `limit_group`.                                                                                                      |
|    **note?**     |          `string`          |                                                                          **(Optional)** Note about the item, may describe how limits change, how cost changes or other things.                                                                          |

If the item is part of a pool and `amount` is `<=0` the `amount` is shared among all pool items and can be inherited from the reference item.

# Limit Type
LimitType is a numeric value with the range `[0, 2]` where each
number represents an in-game shop type:

| Value | Label  |                                                                Description                                                                |
| :---: | :----: | :---------------------------------------------------------------------------------------------------------------------------------------: |
|   0   | Normal |                                       Item can be boungt `limit` times and refreshes if applicable.                                       |
|   1   | Owned  | Item can be **owned** `limit` times in *total*<br>If the player someone loses a copy they own the limit increases by 1 again accordingly. |
|   2   | Total  |                                          Item can be boungt `limit` times and *never refreshes*.                                          |

# Shop Type
ShopType is a numeric value with the range `[1, 16]` where each
number represents an in-game shop type:

| Value |       Label       |                                  Description                                  |
| :---: | :---------------: | :---------------------------------------------------------------------------: |
|   1   |       Event       |                                An event shop.                                 |
|   2   |      General      |                 The general shop, just labeled shop in game.                  |
|   3   |       Merit       |                                The merit shop.                                |
|   4   |    Core (Ltd.)    |                          The limited core data shop.                          |
|   5   |    Core (Mo.)     |                          The monthly core data shop.                          |
|   6   |       Proto       |                 The prototype and specialized core data shop.                 |
|   7   |       Guild       |                                The guild shop.                                |
|   8   |       Medal       |                             The Honor Medal shop.                             |
|   9   |       Meta        |                                The meta shop.                                 |
|  10   |       Prize       |                               The Acrade shop.                                |
|  11   |    Cruise Shop    |                          The Cruise Past rerun shop.                          |
|  12   |      Dorm3D       |                      The Dorm3D Gift and Furniture Shop.                      |
|  13   |     OpSi Port     |            All Operation Siren Port shops (new shop system only).             |
|  14   |   OpSi Exchange   |                        Operation Siren Exchange Shop.                         |
|  15   |     Gem Shop      |    Shop for all permanent or frequently returning items buyable with gems.    |
|  16   | IAP Purchase Shop | Shop for all permanent or frequently returning items buyable with real money. |

# Item Pool
Item Pool represents a list of Shop Items part of a shared pool.
It provides the following properties:

| Property  |            Type            |                                    Description                                    |
| :-------: | :------------------------: | :-------------------------------------------------------------------------------: |
|  **id**   |          `string`          |                                   The pool ID.                                    |
| **name**  |          `string`          |                               The name of the pool.                               |
| **items** | [`ShopItem[]`](#shop-item) | List of items in this pool.<br>Naturally, these are to be treated part of a pool. |