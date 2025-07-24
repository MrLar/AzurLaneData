---
title: Common & Misc. Objects Documentation
---

# Rarity

Rarity is a numeric value with the range `[1, 6]` where each number represents an in-game rarity:

| Value |    Label    |                  Description                  |
| :---: | :---------: | :-------------------------------------------: |
|   1   | Common (T1) |        Rarity for common T1 equipment         |
|   2   | Common (T2) | Rarity for common ships & common T2 equipment |
|   3   |    Rare     |      Rarity for rare ships and equipment      |
|   4   |    Elite    |     Rarity for elite ships and equipment      |
|   5   | Super Rare  |   Rarity for super rare ships and equipment   |
|   6   | Ultra Rare  |   Rarity for ultra rare ships and equipment   |

# Nation

Rarity is a numeric value with the **three** ranges `[0, 11]`, `[94, 99]` and `[101, 111]` where each
number represents an in-game Nation (missing values do not exit in game):

| Value |   Label    |           Description            |
| :---: | :--------: | :------------------------------: |
|   0   |    Univ    |         Universal (UNIV)         |
|   1   |   Eagle    |        Eagle Union (USS)         |
|   2   |   Royal    |         Royal Navy (HMS)         |
|   3   |   Sakura   |       Sakura Empire (IJN)        |
|   4   | Iron Blood |     Iron Blood (KMS or SMS)      |
|   5   |   Dragon   |   Dragon Empery (ROC or PRAN)    |
|   6   | Sardengna  |      Sardengna Empite (RN)       |
|   7   |  Northern  |    Northern Parliarment (SN)     |
|   8   |    Iris    |        Iris Libre (FFNF)         |
|   9   |  Vichiya   |      Vichiya Dominion (MNF)      |
|  10   |   French   |          Iris Orthodoxy          |
|  11   |   Dutch    |    Kingdom of Tulipa (HNLMS)     |
| 12-93 |    N/A     |         Do not exist yet         |
|  94   |  Council   |   United Council (speculation)   |
|  95   |     X      |         X (speculation)          |
|  96   |  Tempesta  |          Tempesta (MOT)          |
|  97   |    META    |           META (META)            |
|  98   |   Burin    | Special nation for Bulins (UNIV) |
|  99   |   Siren    |              Sirens              |
|  100  |    N/A     |        Does not exist yet        |
|  101  |  Neptunia  |  Hpyerdimention Neptunia (HDN)   |
|  102  |    Bili    |         Bilibili (BILI)          |
|  103  |    Uta     |          Utawarerumono           |
|  104  |   Kizuna   |             KizunaAI             |
|  105  |    Holo    |             HoloLive             |
|  106  |   Venus    |          Venus Vacation          |
|  107  |    Idol    |          The Idolmaster          |
|  108  |    SSSS    |               SSSS               |
|  109  |    Ryza    |           Atelier Ryza           |
|  110  |   Senran   |          Senran Kagura           |
|  111  |   LoveRu   |            To Love Ru            |
|  112  |    B★RS    |        BLACK★ROCK SHOOTER        |
|  113  |   Yumia    |          Atelier Yumia           |


# Hull

Hull is a numeric value with the range `[0, 25]` where each number represents an
in-game Ship Hull (missing values do not exit in game):

| Value |  Label  |                                       Description                                       |
| :---: | :-----: | :-------------------------------------------------------------------------------------: |
|   0   | Unknown |                              Placeholder for unknown hulls                              |
|   1   |   DD    |                                        Destroyer                                        |
|   2   |   CL    |                                      Light Cruiser                                      |
|   3   |   CA    |                                      Heavy Cruiser                                      |
|   4   |   BC    |                                      Battlecruiser                                      |
|   5   |   BB    |                                       Battleship                                        |
|   6   |   CVL   |                                 Light Aircraft Crarrier                                 |
|   7   |   CV    |                                    Aircraft Crarrier                                    |
|   8   |   SS    |                                        Submarine                                        |
|   9   |   CAV   |                                Aviation Cruiser (unused)                                |
|  10   |   BBV   |                                   Avitaion Battleship                                   |
|  11   |   CT    |                                Torpedo Cruiser (unused)                                 |
|  12   |   AR    |                                       Repair Ship                                       |
|  13   |   BM    |                                     Battle Monitor                                      |
|  14   |   TRP   |                                Torpedo Ship (Enemy Only)                                |
|  15   |  Cargo  |                            Cargo/Transport Ship (Enemy Only)                            |
|  16   |  Bomb   |                                Bombing Ship (Enemy Only)                                |
|  17   |   SSV   |                                    Submarine Carrier                                    |
|  18   |   CB    |                                      Large Cruiser                                      |
|  19   |   AE    | Munition Ship<br>For Enemies this is sometimes also refered to as Transport Ship/Vessel |
|  20   |  DDGv   |                           Guided-Missile-Destroyer (Vanguard)                           |
|  21   |  DDGm   |                             Guided-Missile-Destroyer (Main)                             |
|  22   |   IXs   |                                      Frigate (Sub)                                      |
|  23   |   IXv   |                                   Frigate (Vanguard)                                    |
|  24   |   IXm   |                                     Frigate (Main)                                      |
|  25   | Special |                             Defined by the game but unused                              |

# Specific Buff

Specific Buff represents what kind of buff a DD (and some other ships) are granted when reaching
MLB. Its is a `nullable string` and takes on one of the following:

|  Value   |                Description                 |
| :------: | :----------------------------------------: |
| `"gnr"`  |   Half the count required to trigger AoA   |
| `"torp"` |           Reduced torpedo spread           |
| `"aux"`  | +30% stats gained from auxiliary equipment |
|  `null`  |              No buff granted               |

# AL Server

AlServer refers to any of the following strings: `EN`, `JP` or `CN`.

# Equipment Type

Equipment Type is a numeric value with the **three** ranges `[0, 15]`, `[17, 18]`, `[20, 21]` and `[99, 100)` where
each number represents an in-game equipment type (missing values do not exit in game):

| Value |      Label      |              Description              |
| :---: | :-------------: | :-----------------------------------: |
|   0   |     Unknown     |    Placeholder for equipment types    |
|   1   |     DD Gun      |             Destroyer Gun             |
|   2   |     CL Gun      |           Light Cruiser Gun           |
|   3   |     CA Gun      |           Heavy Cruiser Gun           |
|   4   |     BB Gun      |            Battleship Gun             |
|   5   |     Torpedo     |            Surface Torpedo            |
|   6   | AA Gun (Normal) |       Short-Range Anti-Air Gun        |
|   7   |     Fighter     |             Fighter Plane             |
|   8   | Torpedo Bomber  |         Torpedo Bomber Plane          |
|   9   |   Dive Bomber   |           Dive Bomber Plane           |
|  10   |    Auxiliary    |          Auxiliary Equipment          |
|  11   |     CB Gun      |           Large Cruiser Gun           |
|  12   |    Seaplane     |               Seaplane                |
|  13   |   Sub Torpedo   |           Submarine Torpedo           |
|  14   |  Depth Charge   |          Depth Charge (ASW)           |
|  15   |   ASW Bomber    |           ASW Bomber Plane            |
|  16   |       N/A       |          Does not exist yet           |
|  17   |    ASW Heli     |            ASW Helicopter             |
|  18   |      Cargo      |            Cargo Axuiliary            |
|  19   |       N/A       |          Does not exist yet           |
|  20   |     Missile     |            Guided Missile             |
|  21   |   Fuze AA Gun   |        Long-Range Anti-Air Gun        |
| 22-98 |       N/A       |           Do not exist yet            |
|  99   |   Raid Bomber   | Raid Bomber - not a real type in game |

# Augment Type

Augment Type is a numeric value with the range `[1, 10]` where each number represents an in-game
augment type:

| Value |  Label  |                     Description                     |
| :---: | :-----: | :-------------------------------------------------: |
|   1   |   DD    |           Equippable by DD, DDGv and DDGm           |
|   2   |   CL    |      Equippable by by CL and the unreleased CT      |
|   3   |  Light  |     Equippable by CL, AR and the unreleased CT      |
|   4   |  Heavy  |   Equippable by CA, CB, AE and the unreleased CAV   |
|   5   | Heavy+  | Equippable by CA, CB, AE, BM and the unreleased CAV |
|   6   |   BB    |            Equippable by BB, BC and BBV             |
|   7   |   CV    |              Equippable by  CV and CVL              |
|   8   |   SS    |              Equippable by SS and SSV               |
|   9   | Cruiser |               Equippable by CL and CA               |
|  10   |   IX    |           Equippable by IXs, IXv and IXm            |

Note: The type of the augment should be ignored for the purpose of equippability if `limit_group` of the augment is non-zero.

# Stat Keys

## Weapon Stat Keys

Weapon stat keys are all stats that can be used to scale
the damage of a weapon. Whenever `WeaponStatKey` is used by a type it may refer to any of the
following:

- fp
- trp
- avi
- aa
- asw

## Meow Inherit Stat Keys

Meow Inherit stat keys are all stats that are scaled by Meowfficer inherit values.
Whenever `MeowInheritKey` is used by a type it may refer to any of the following:

- A value of `WeaponStatKey`
- hp

## Tech Stat Keys

Tech stat keys are all stats that can receive fleet technology bonuses. Whenever `TechStatKey` is
used by a type it may refer to any of the following:

- Any value of `MeowInheritKey`
- rld
- hit
- eva

## Scalable Stat Keys

Scalable stat keys are all stats that can (but don't always) scale with a ships level.
Whenever `ScalableStatKey` is used by a type it may refer to any of the following:

- A value of `TechStatKey`
- spd
- luck

## Ship Stat Keys

Ship stat keys are all stats a ship can have. Whenever `ShipStatKey` is used by a type it
refers to any of the following:

- A value of `ScalableStatKey`
- oxygen
- ammo
- range_level

## Buff Stat Keys

Buff stat keys are all ship stat keys and some generic meta keys for any and all buffs.
Whenever `BuffStatKey` is used by a type it may refer to any of the following:

- A value of `ShipStatKey`
- damage
- crit_rate
- damage_reduction
- damage_taken

# Skill Upgrade Data

Skill upgrade data is a simple object with just 2 properties:

|  Property   |         Type         |                                Description                                |
| :---------: | :------------------: | :-----------------------------------------------------------------------: |
| **replace** | `number` \|   `null` | ID of the skill to replace (remove) or null if no skill is being replaced |
|  **with**   |       `number`       |                       ID of the skill that is added                       |

# Enemy Stat Key

Refers to the following stat keys:

- hp
- fp
- trp
- avi
- aa
- hit
- eva
- luck
- armor

Note: While enemies do have a reload (rld) stat it is intentionally absent from this and all enemy data.
The reason being that enemies hardly ever actually make use of the RLD stat and most if not all enemies
currently in the game use a value of 150 RLD.

# Fleet Row Type

Refers to either the string `van` for Vanguard or `main` for Main Fleet.

# Unlock Type

Unlock Type is a numeric value with the range `[0, 16]` where each number represents a way to obtain a ship:

| Value |                 Label                 |
| :---: | :-----------------------------------: |
|   0   |              Guild Shop               |
|   1   |              Medal Shop               |
|   2   | Core Data Shop (Monthly *or* limited) |
|   3   |              Merit Shop               |
|   4   |           Requisition Gacha           |
|   5   |            Prototype Shop             |
|   6   |       Permanent Ultra Rare Pity       |
|   7   |            Weekly Missions            |
|   8   |         Monthly Login Reward          |
|   9   |            Returnee Reward            |
|  10   |      Collection (Memento) Reward      |
|  11   |              Cruise Pass              |
|  12   |               META Shop               |
|  13   |             META Showdown             |
|  14   |           Dossier Analysis            |
|  15   |               Shipyard                |
|  16   |                 Quest                 |

# Item Stack
Item Stack provides properties relevant when refering to x amount of an item. It provides exactly 2 properties:

|  Property  |   Type   |                                                   Description                                                    |
| :--------: | :------: | :--------------------------------------------------------------------------------------------------------------: |
|   **id**   | `number` | The item ID referred to, represented in [items](https://github.com/MrLar/AzurLaneData/tree/main/data/items.json) |
| **amount** | `number` |                                                 The item amount                                                  |

# Item
Represents the relevant data of a single item. Provides the following:

|    Property     |            Type            |                                                                      Description                                                                      |
| :-------------: | :------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: |
|     **id**      |          `number`          |                                                                      The item ID                                                                      |
|    **name**     |          `string`          |                                                                   Name of the item                                                                    |
|    **icon**     |          `string`          |                                Icon this item uses (lower cased). Available under `https://al.mrlar.dev/<icon>.webp`.                                 |
| **description** |          `string`          |                                                                Description of the item                                                                |
|    **type**     |  [`ItemType`](#item-type)  |                                                    The Item Type. Not all types are actually used                                                     |
|   **rarity**    |    [`Rarity`](#rarity)     |                                                                    The item rarity                                                                    |
|  **locations**  |         `string[]`         |                                       Textual descriptions of (some) Locations this item can be obtained from.                                        |
|   **servers**   |  [`AlServer`](#al-server)  |                                                              Servers this item exists on                                                              |
|  **contains**   | [`ItemDrop[]`](#item-drop) | List of items that can be obtained via this item.<br>Note: The item does **not** have to drop *all* of them. Some only drop one or a handful of them. |

# Item Type
Item Type is a numeric value with the **five** ranges `[0, 5]`, `[7]`, `[9, 13]` and `[15, 26]` and `[98, 101]` where each
number represents an in-game item type (missing values do not exit in game):

| Value |        Label         |                                Description                                 |
| :---: | :------------------: | :------------------------------------------------------------------------: |
|   1   |       Special        |                               A special item                               |
|   2   |       Resource       |                         A usually common resource                          |
|   3   |      Dorm Food       |                           Food for the Dormitory                           |
|   4   |     Upgrade Item     |                Item used to enhance gear, augments or ships                |
|   5   |       Tech Box       |                             Any equipment Box                              |
|   6   |         N/A          |                             Does not exist yet                             |
|   7   |    Retrofit Item     |                    Item used to purchase retrofit nodes                    |
|   8   |         N/A          |                             Does not exist yet                             |
|   9   |     Gear Design      |               Gear Crafting Design<br>These are not provided               |
|  10   |    Skill EXP Book    |               Book used to level Skills (except META Books)                |
|  11   |    Equip Skin Box    |                        Box that contains Gear Skins                        |
|  12   |      Blueprint       |                            A PR or DR Blueprint                            |
|  13   |  Universal Selector  |       Any form of Universal Selector item (except Gear Lab & Skins)        |
|  14   |         N/A          |                             Does not exist yet                             |
|  15   |       Oil Box        |                          A box that contains oil                           |
|  16   |    Gear Selector     |       Any form of Selector that gives Gear Lab Materials or Designs        |
|  17   |       Gift Box       |                     Gift Box that may contain anything                     |
|  18   |   Combat Data Pack   |                          PR Combat EXP Data Pack                           |
|  19   |         HELP         |                  High-Efficiency (Combat) Logistics Plan                   |
|  20   |  Guild Restore Item  |       Item used to restore either Contribution or Operation attempts       |
|  21   |     Ship Invite      | Any form of Item that grants a selection of ship<br>These are not provided |
|  22   |    Ship EXP Book     |                        Experience Packs for Ships.                         |
|  23   |     Love Letter      |     Valentines Gift Message/Commerative Item<br>These are not provided     |
|  24   |   Augment Material   |                    Any form of item related to Augments                    |
|  25   |   Meta Skill Book    |                      A Book used to level META skills                      |
|  26   |    Skin Selector     |                         A selector for ship skins                          |
|  27   |        Dorm3D        |             An Item for the Private Quarters (Dorm3D) Feature              |
| 27-96 |         N/A          |                              Do not exist yet                              |
|  97   |      Battle UI       |                               Battle UI Skin                               |
|  98   |        Other         |                               Any other item                               |
|  99   |       Display        |                   An item only used for displaying drops                   |
|  100  |      OpSi Item       |                            Operation Siren Item                            |
|  101  | IAP Purchase Display |            Only used for item displays in the IAP purcahse shop            |

# Item Drop
Item drop represens all relevant data for an item/equip/etc. being dropped from
various sources. It provides the following:

|   Property    |               Type                |                                                                                                     Description                                                                                                      |
| :-----------: | :-------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    **id**     |             `number`              |                                                                  The relevant ID. What exactly it points to is determined by `type` and `linkable`                                                                   |
|   **type**    | [`ItemDropType`](#item-drop-type) |                                                                            The type of item being dropped. Determines where ID points to                                                                             |
| **linkable**  |             `boolean`             |                                        Whether the item is linkable to a definition provided by this data set. If this prop is false there is no definition in this data set                                         |
|  **rarity**   |        [`Rarity`](#rarity)        |                                                                                         The rarity of the item being dropped                                                                                         |
|  **amount**   |             `number`              |                                           Amount of the item to be dropped. An amount of `-1` indicates that the amount is "random" (server side) and cannot be datamined                                            |
| **blueprint** |             `boolean`             |                                                                   Whether the item is being dropped as a blueprint. Only relevant if `type` is `1`                                                                   |
|   **icon**    |             `string`              | The icon of the item being dropped (lower cased). Available under `https://al.mrlar.dev/<icon>.webp` if it does not start with `ships/`, otherwise Available under `https://als.mrlar.dev/<icon w/o "ships/">.webp`. |
|   **name**    |             `string`              |                                                                                      The display name of the item being dropped                                                                                      |
|  **level?**   |             `number`              |                                                                **(Optional)** Level of the item being dropped. Only relevant for equips and augments                                                                 |
| **ship_id?**  |             `number`              |                                                                        **(Optional)** ID of the ship the skin (if this is a skin) belongs to.                                                                        |

# Item Drop Type

Item Drop Type is a numeric value with the range `[0, 7]` where each
number represents a type of commodity drop:

| Value |       Label       |                                                            Description                                                            |
| :---: | :---------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
|   0   |       Item        |                An item from [`items`](https://github.com/MrLar/AzurLaneData/tree/main/data/items.json) is dropped                 |
|   1   |       Gear        |            A gear from [`equipments`](https://github.com/MrLar/AzurLaneData/tree/main/data/equipments.json) is dropped            |
|   2   |       Ship        |                 A ship from [`ships`](https://github.com/MrLar/AzurLaneData/tree/main/data/ships.json) is dropped                 |
|   3   |       Skin        |                 A skin from [`skins`](https://github.com/MrLar/AzurLaneData/tree/main/data/skins.json) is dropped                 |
|   4   |     Gear Skin     |           A sSkin from [`gear_skins`](https://github.com/MrLar/AzurLaneData/tree/main/data/gear_skins.json) is dropped            |
|   5   |     Furniture     |                     A piece of furniture is dropped. These do not link to any data provided by this data set                      |
|   6   |    Meowfficer     |        A meowfficer from [`meowfficers`](https://github.com/MrLar/AzurLaneData/tree/main/data/meowfficers.json) is dropped        |
|   7   |      Augment      |            An augment from [`augments`](https://github.com/MrLar/AzurLaneData/tree/main/data/augments.json) is dropped            |
|   8   |     Battle UI     |                                                    A battle UI skin is dropped                                                    |
|   9   |   Dorm 3D Gift    |       A gift item from [`dorm3d_gifts`](https://github.com/MrLar/AzurLaneData/tree/main/data/dorm3d_gifts.json) is dropped        |
|  10   | Dorm 3D Furniture | A furniture item from [`dorm3d_furniture`](https://github.com/MrLar/AzurLaneData/tree/main/data/dorm3d_furniture.json) is dropped |
|  11   | Living Area Cover |           A piece of living area (HQ Tablet) cover is unlocked. These do not link to any data provided by this data set           |
|  12   |   Camera Volume   |               A Dorm3D Camera Volume (Filter) is unlocked. These do not link to any data provided by this data set                |
|  13   |   Camera Frame    |                    A Dorm3D Camera Frame is unlocked. These do not link to any data provided by this data set                     |
|  14   |   Dorm3D Story    |                        A Dorm3D Story is unlocked. These do not link to any data provided by this data set                        |
|  15   |    Icon Frame     |                        An Icon frame is unlocked. These do not link to any data provided by this data set                         |
| 15-98 |        N/A        |                                                         Do not exist yet                                                          |
|  99   | Battle UI Preview |                                               Meta-Data Type for Battle UI Previews                                               |

# Research
Represents a single research in the game. Has the following properties:


|    Property     |                   Type                   |                                                                     Description                                                                     |
| :-------------: | :--------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
|     **id**      |                 `number`                 |                                                                   The research ID                                                                   |
|    **name**     |                 `string`                 |                                                              The name of the research                                                               |
|  **sub_name**   |                 `string`                 |                                                            The sub-name of the research                                                             |
| **description** |                 `string`                 |                                                           The description of the research                                                           |
|   **rarity**    |           [`Rarity`](#rarity)            | The rarity of the research. Available under `https://al.mrlar.dev/tech/<rarity name>.webp`. See [here](./index.md#icons) for rarity icon name docs. |
|    **label**    |                 `string`                 |                               The label this research uses. Available under `https://al.mrlar.dev/tech/<icon>.webp`.                                |
|  **label_bg**   |                 `string`                 |                          The label background this research uses. Available under `https://al.mrlar.dev/tech/<icon>.webp`.                          |
|  **condition**  | `string`       \|                 `null` |                                             Textual explantion of conditions that need to be met if any                                             |
|   **version**   |                 `number`                 |                            PR version of this research. Available under `https://al.mrlar.dev/tech/version_<icon>.webp`.                            |
|     **bg**      |                 `string`                 |                         The (small) background this research uses. Available under `https://al.mrlar.dev/tech/<icon>.webp`.                         |
|    **drops**    |        [`ItemDrop[]`](#item-drop)        |    List of drops displayed on the research card<br>Some of these can be unfolded into actual drops by looking for the actual item if `linkable`     |
|   **consume**   |        [`ItemDrop[]`](#item-drop)        |                                                       List of items consumed by this research                                                       |
|    **time**     |                 `number`                 |                                                         Time this research takes in seconds                                                         |

# Currency

Currency refers to the currency used by a shop. It provides:

|   Property   |        Type        |                                                                   Description                                                                   |
| :----------: | :----------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
|    **id**    |      `number`      |                                                              The currency item ID.                                                              |
| **linkable** |     `boolean`      | Whether the currency item is linkable to a definition provided by this data set. If this prop is false there is no definition in this data set. |
|   **icon**   | `string` \| `null` |                               The icon of the currency item. Available under `https://al.mrlar.dev/<icon>.webp`.                                |
|   **name**   |      `string`      |                                                         The name of the currency item.                                                          |

# Cruise Pass

Cruise Pass refers to a single season of the in game Battle Pass:

|    Property    |            Type            |        Description         |
| :------------: | :------------------------: | :------------------------: |
|   **season**   |          `number`          |   The season of the pass   |
| **free_items** | [`ItemDrop[]`](#item-drop) | All items in the free tier |
| **paid_items** | [`ItemDrop[]`](#item-drop) | All items in the paid tier |

# Magnetic Tracker

Magnetic tracker provides the properties relevant for magnetic tracking of torpedoes:

|  Property   |    Type    |                  Description                  |
| :---------: | :--------: | :-------------------------------------------: |
| **angular** |  `number`  | The angular constant (used for turning rate). |
|  **range**  | `number[]` |              The tracking range.              |