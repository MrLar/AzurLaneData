---
title: Azur Lane Data Documentation
---

# Intro

Azur Lane Data is a collection of JSON Files useful to create various applets related to Azur Lane.

Please make sure to read the [License](https://github.com/MrLar/AzurLaneData/blob/main/LICENSE.md) file as well as the [License Section](https://github.com/MrLar/AzurLaneData/blob/main/README.md#license)
before using this data.

# Notes

## Servers

The data provided here focuses primarily on the english server. Meaning:
- If an item exists both in EN and another server the EN version is used (usually there are no differences though).
- If an item does not exist in EN the JP version will be provided.
- If an item does not exist in JP the CN version will be provided.

This priority was choosen based on the fact that the JP version is closest to the EN version.

Currently this data does not provide data of the TW and KR server.

## Typescript typings

Typescript typings are provided for all JSON files in the [types](https://github.com/MrLar/AzurLaneData/tree/main/types) directory.
The [index.ts](https://github.com/MrLar/AzurLaneData/tree/main/types/index.ts) *can* be used to import and map ***all*** the JSON files to proper types.
However using it if you do not need ***all*** the JSON files is not recommended, instead you should import the ones you need manually.

## Skill Corrections

There are quite the handful of skills in the game that are either incorrectly translated or plain out don't do what is advertised. The data provided for skills aims to correct these.

# JSON Files

The name of the file links to the respective file on the GitHub Repo., while the link in "Mapping" links to the documentation.

|                                                    File                                                     |                              Description                              |   Type   |                                                     Mapping                                                      |          Typescript Equivelant           |   Credits   |
| :---------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------: | :------: | :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------: | :---------: |
|             [augments.json](https://github.com/MrLar/AzurLaneData/tree/main/data/augments.json)             |                   Contains all augments in the game                   | `object` |                            Augment ID -> [`AugmentData`](./equips/augments/index.md)                             |       `Record<number, AugmentData        | undefined>` |                                                                                         |
|         [augment_cost.json](https://github.com/MrLar/AzurLaneData/tree/main/data/augment_cost.json)         |         Contains info about costs to upgrade a given augment          | `object` |                      Augment ID -> [`AugmentCost`](./equips/augments/index.md#augment-cost)                      |       `Record<number, AugmentCost        | undefined>` |                                                                                         |
|       [default_equips.json](https://github.com/MrLar/AzurLaneData/tree/main/data/default_equips.json)       |          Contains all default and ghost weapons in the game           | `object` |                             Equip ID -> [`EquipmentData`](./equips/regular/index.md)                             |      `Record<number, EquipmentData       | undefined>` |                                                                                         |
|           [equipments.json](https://github.com/MrLar/AzurLaneData/tree/main/data/equipments.json)           |                  Contains all equipments in the game                  | `object` |                             Equip ID -> [`EquipmentData`](./equips/regular/index.md)                             |      `Record<number, EquipmentData       | undefined>` |                                                                                         |
|          [equip_drops.json](https://github.com/MrLar/AzurLaneData/tree/main/data/equip_drops.json)          |             Contains info on how equipments are obtained              | `object` |                        Equip ID -> [`EquipDropData`](./equips/regular/index.md#drop-data)                        |      `Record<number, EquipDropData       | undefined>` |                                                                                         |
|   [equip_upgrade_cost.json](https://github.com/MrLar/AzurLaneData/tree/main/data/equip_upgrade_cost.json)   |        Contains info about costs to upgrade a given equipment         | `object` |                          Equip ID -> [`UpgradeCost[]`](./equips/index.md#upgrade-cost)                           |      `Record<number, UpgradeCost[]       | undefined>` |                                                                                         |
|      [fleet_tech_sort.json](https://github.com/MrLar/AzurLaneData/tree/main/data/fleet_tech_sort.json)      | Contains useful for sorting ships the same way as the Technology Menu | `object` |                  Class ID -> [`FleetTechSortData`](./ships/fleet_tech.md#fleet-tech-sort-data)                   |   `Record<number, FleetTechSortData[]    | undefined>` |                                                                                         |
|             [gear_lab.json](https://github.com/MrLar/AzurLaneData/tree/main/data/gear_lab.json)             |                     Contains all gear lab recipes                     | `object` |                        Recipe ID -> [`GearLabRecipe`](./equips/index.md#gear-lab-recipe)                         |      `Record<number, GearLabRecipe       | undefined>` |                                                                                         |
|           [gear_skins.json](https://github.com/MrLar/AzurLaneData/tree/main/data/gear_skins.json)           |                  Contains all gear skins in the game                  | `object` |                              Skin ID -> [`GearSkin[]`](./equips/index.md#gear-skin)                              |         `Record<number, GearSkin         | undefined>` |                                                                                         |
|                 [maps.json](https://github.com/MrLar/AzurLaneData/tree/main/data/maps.json)                 |                   Contains most bosses in the game                    | `object` |                                      Map ID -> [`MapData`](./maps/index.md)                                      |         `Record<number, MapData          | undefined>` |                                                                                         |
|          [meowfficers.json](https://github.com/MrLar/AzurLaneData/tree/main/data/meowfficers.json)          |                 Contains all Mewofficers in the game                  | `object` |                         Talen ID -> [`MeowfficerAbility`](./meowfficer_ability/index.md)                         |    `Record<number, MeowfficerAbility     | undefined>` |                                                                                         |
| [meowfficer_abilities.json](https://github.com/MrLar/AzurLaneData/tree/main/data/meowfficer_abilities.json) |              Contains all Mewofficer Talents in the game              | `object` |                            Mewofficer ID -> [`MeowfficerData`](./meowfficer/index.md)                            |      `Record<number, MeowfficerData      | undefined>` |                                                                                         |
|                [ships.json](https://github.com/MrLar/AzurLaneData/tree/main/data/ships.json)                |                    Contains all Ships in the game                     | `object` |                                    Ship ID -> [`ShipData`](./ships/index.md)                                     |         `Record<number, ShipData         | undefined>` |                                                                                         |
|           [ship_drops.json](https://github.com/MrLar/AzurLaneData/tree/main/data/ship_drops.json)           |                Contains info on how ships are obtained                | `object` |                             Ship ID -> [`ShipDropData`](./ships/index.md#drop-data)                              |       `Record<number, ShipDropData       | undefined>` |                                                                                         |
|      [ship_retro_cost.json](https://github.com/MrLar/AzurLaneData/tree/main/data/ship_retro_cost.json)      |          Conatins the cost of all retrofit nodes in the game          | `object` | Ship ID -> [node letter](./ships/retrofit.md#retrofit-node) ->  [`RetroCost`](./ships/retrofit.md#retrofit-cost) | `Record<number, Record<string, RetroCost | undefined>  | undefined>`                                                                             |
|           [ship_words.json](https://github.com/MrLar/AzurLaneData/tree/main/data/ship_words.json)           |           Conatins all voice lines of all skins in the game           | `object` |                                    Ship ID -> [`SkinLines`](./ships/words.md)                                    |        `Record<number, SkinLines         | undefined>` |                                                                                         |
|               [skills.json](https://github.com/MrLar/AzurLaneData/tree/main/data/skills.json)               |                Conatins all visible skills in the game                | `object` |                                   Skill ID -> [`SkillData`](./skills/index.md)                                   |        `Record<number, SkillData         | undefined>` |                                                                                         |
|                [skins.json](https://github.com/MrLar/AzurLaneData/tree/main/data/skins.json)                |                  Conatins all ship skins in the game                  | `object` |                                    Skin ID -> [`SkinInfo`](./skins/index.md)                                     |         `Record<number, SkinInfo         | undefined>` |                                                                                         |
|      [special_weapons.json](https://github.com/MrLar/AzurLaneData/tree/main/data/special_weapons.json)      |          Contains all special weapon overrides of the game\*          | `object` |                         Special Wep. ID -> [`Weapon`](./equips/regular/index.md#weapon)                          |          `Record<number, Weapon          | undefined>` |                                                                                         |
|                [items.json](https://github.com/MrLar/AzurLaneData/tree/main/data/items.json)                |                Contains most useful items in the game                 | `object` |                                      Item ID -> [`Item`](./common.md#item)                                       |           `Record<number, Item           | undefined>` |                                                                                         |
|   [research_projects_.json](https://github.com/MrLar/AzurLaneData/tree/main/data/research_projects_.json)   |                  Contains all researches in the game                  | `object` |                                Research ID -> [`Research`](./common.md#research)                                 |         `Record<number, Research         | undefined>` |                                                                                         |
|                [shops.json](https://github.com/MrLar/AzurLaneData/tree/main/data/shops.json)                |                    Contains all shops in the game                     | `object` |                                Shop ID -> [`AnyShop`](./shops/index.md#any-shop)                                 |         `Record<number, AnyShop          | undefined>` |                                                                                         |
|          [tech_groups.json](https://github.com/MrLar/AzurLaneData/tree/main/data/tech_groups.json)          |                Contains Fleet Tech Groups in the game                 | `object` |                       Group/Nation ID -> [`TechGroup`](./tech_groups/index.md#tech-group)                        |        `Record<number, TechGroup         | undefined>` |                                                                                         |
|    [dorm3d_characters.json](https://github.com/MrLar/AzurLaneData/tree/main/data/dorm3d_characters.json)    |              Contains all Characters available in Dorm3D              | `object` |                   Character/Ship ID -> [`Dorm3DCharacter`](./dorm3d/index.md#dorm3d-character)                   |     `Record<number, Dorm3DCharacter      | undefined>` |                                                                                         |
|    [dorm3d_collectibe.json](https://github.com/MrLar/AzurLaneData/tree/main/data/dorm3d_collectibe.json)    |          Contains all Collectible items available in Dorm3D           | `object` |                      Item ID -> [`Dorm3DCollectable`](./dorm3d/index.md#dorm3d-collectable)                      |    `Record<number, Dorm3DCollectable     | undefined>` |                                                                                         |
|     [dord3d_furniture.json](https://github.com/MrLar/AzurLaneData/tree/main/data/dord3d_furniture.json)     |           Contains all Furniture items available in Dorm3D            | `object` |                        Item ID -> [`Dorm3dFurniture`](./dorm3d/index.md#dorm3d-furniture)                        |     `Record<number, Dorm3DFurniture      | undefined>` |                                                                                         |
|         [dorm3d_gifts.json](https://github.com/MrLar/AzurLaneData/tree/main/data/dorm3d_gifts.json)         |              Contains all Gift items available in Dorm3D              | `object` |                             Item ID -> [`Dorm3dGift`](./dorm3d/index.md#dorm3d-gift)                             |        `Record<number, Dorm3DGift        | undefined>` |                                                                                         |
|         [dorm3d_rooms.json](https://github.com/MrLar/AzurLaneData/tree/main/data/dorm3d_rooms.json)         |           Contains all Rooms/Locations available in Dorm3D            | `object` |                             Room ID -> [`Dorm3DRoom`](./dorm3d/index.md#dorm3d-room)                             |        `Record<number, Dorm3DRoom        | undefined>` |                                                                                         |
|            [juu_chats.json](https://github.com/MrLar/AzurLaneData/tree/main/data/juu_chats.json)            |                 Contains all Fleet Chats of the game                  | `object` |                            Chat ID -> [`FleetChat`](./juustagram/index.md#fleet-chat)                            |        `Record<number, FleetChat         | undefined>` |                                                                                         |
|         [juu_profiles.json](https://github.com/MrLar/AzurLaneData/tree/main/data/juu_profiles.json)         |       Contains all Ship and the Commanders Juustagram profile.        | `object` |                         Profile ID -> [`JuuProfile`](./juustagram/index.md#juu-profile)                          |        `Record<number, JuuProfile        | undefined>` |                                                                                         |
|  [special_secretaries.json](https://github.com/MrLar/AzurLaneData/tree/main/data/special_secretaries.json)  |             Contains all special secretaries of the game.             | `object` |              Secretary ID -> [`SpecialSecretary`](./special_secretaries/index.md#special-secretary)              |     `Record<number, SpecialSecretary     | undefined>` |                                                                                         |
|             [barrages.json](https://github.com/MrLar/AzurLaneData/tree/main/data/barrages.json)             |                 Contains (most) barrages of the game.                 | `object` |                              Skill ID -> [`Barrage[]`](./barrages/index.md#barrage)                              |        `Record<number, Barrage[]         | undefined>` | See [here](https://github.com/MrLar/AzurLaneData/tree/main?tab=readme-ov-file#barrages) |

\*The following weapon overrides exist:

|          Ship (ID/GID)           | Slot  |        Equip (ID)         | SpecialID |
| :------------------------------: | :---: | :-----------------------: | :-------: |
|  Rikka Takarada (10081/1080001)  |   0   | Battle Tracto Max (89300) |    450    |
|  Rikka Takarada (10081/1080001)  |   1   |  Buster Borr    (89340)   |    455    |
|  Rikka Takarada (10081/1080001)  |   2   |    Sky Vitter (89360)     |    460    |
| Reisalin Stout   (10091/1090001) |   1   |    Grand Bomb (89420)     |    466    |
| Reisalin Stout   (10091/1090001) |   2   |   Laute Plajig (89460)    |    467    |

_Despite the fact that in-game descriptions might make one believe otherwise Rikka only_
_gains her special weapons if the Aux. is equipped in the correct slot (as stated above)._

# Icons
All icons referenced by this data are also availabe on CDNs hosted by Cloudflare.
Please refer to the documentation of each individual icon prop on where to find them, for
global things refer to the below list:

- Some nations are available under `https://al.mrlar.dev/icons/nation/<nation>.webp`.
  - Nations with an ID above 102 do not have an icon and use the fallback ID of 100 instead.
  - Nations 94 and 95 do not have an icon at all.
  - Nation 98 uses the same icon as 0.
- Some ammo icons are available under `https://al.mrlar.dev/icons/ammo/<ammo id>.webp`.    
- Equipment Labels are available under `https://al.mrlar.dev/icons/equiplabel/<label id>.webp`.
  - Note that label id does not equal equipment type neccesarily.   
-  All hulls are available under `https://al.mrlar.dev/icons/hulls/<hull>.webp`. 
-  All ship stats are available under `https://al.mrlar.dev/icons/stats/<stat>.webp`. 
-  All equip tech nums are available under `https://al.mrlar.dev/icons/num/<num>.webp`. 
-  All default equip icons are available under `https://al.mrlar.dev/defaults/<icon>.webp`. 
-  Background, frames and icons for rarities follow the following:
   - They use the name of the rarity: `common`, `elite`, `rare`, `sr`, `ur`, `pr` and `dr`
   - Large equip backgrounds are under `https://al.mrlar.dev/rarity/background/equip/<name>.webp`
   - Small equip and item backgrounds are under `https://al.mrlar.dev/rarity/background/other/<name>.webp`
   - Shipyard backgrounds are under `https://al.mrlar.dev/rarity/background/ship/<name>.webp`
   - Dorm3D item backgrouns are under `https://al.mrlar.dev/rarity/background/dorm3d/<name>.webp`
     - Dorm3D items have no frame
   - Small equip and item frames are under `https://al.mrlar.dev/rarity/frame/other/<name>.webp`
   - Shipyard frames are under `https://al.mrlar.dev/rarity/frame/ship/<name>.webp`
   - Rarity icons are under `https://al.mrlar.dev/rarity/icon/<name>.webp`
   - Research backgrounds are under `https://al.mrlar.dev/tech/<name>.webp`

There are a few other undocumented icons. However, they are for the most part not relevant for this data.

# Links
- [Documentation of Common Stuff](./common.md)
- Equipment Documentation
  - [Base](./equips/index.md)
  - [Equips](./equips/regular/index.md)
  - [Augments](./equips/augments/index.md)
  - [Formulas](./equips/fomulas.md)
- [Map Documentation](./maps/index.md)
- [Meowfficer Documentation](./meowfficer/index.md)
  - [Formulas](./meowfficer/formulas.md)
- [Meowfficer Ability Documentation](./meowfficer_ability/index.md)
- Ship Documentation
  - [Base](./ships/index.md)
  - [Fleet Tech](./ships/fleet_tech.md)
  - [Ghost Equip](./ships/ghost_equip.md)
  - [Limitbreak](./ships/limitbreak.md)
  - [Research](./ships/research.md)
  - [Retrofit](./ships/retrofit.md)
  - [Words](./ships/words.md)
- [Shops Documentation](./shops/index.md)
- [Skills Documentation](./skills/index.md)
- [Skins Documentation](./skins/index.md)
- [Research Documentation](./common.md#research)
- [Tech Group](./tech_groups/index.md)
- [Dorm3D](./dorm3d/index.md)
- [Juustagram](./juustagram/index.md)
- [Special Secretary](./special_secretaries/index.md)
- [Barrages](./barrages/index.md)
  
# Island Data

Island Mode Data is currently missing it's documentation and will follow at a later date.