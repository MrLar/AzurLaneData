---
title: Augment Documentation
---
# Augment Data

Augment Data refers to any and all augments. It
extends [`BaseEquipData`](../index.md#base-equipment-data) with `T` being
an [`AugmentType`](../../common.md#augment-type). It aditionally provides the following properties:

|      Property      |                            Type                            |                      Description                       |
| :----------------: | :--------------------------------------------------------: | :----------------------------------------------------: |
| **skill_upgrades** | [`SkillUpgradeData[]`](../../common.md#skill-upgrade-data) | Skill upgrades this augment grants of enhanced to +10. |
|   **craftable**    |                         `boolean`                          |      Whether this augment can freely be crafted.       |

Note: To determine if an augment is unique to a ship you can use the `limit_group` from BaseEquipData as it will point to that ships ID. Otherwise it is always 0.

# Augment Cost
Represents the cost to craft, upgrade and uncap an augment by one enhance level. Provides the following:

|  Property   |                       Type                        |                                                                          Description                                                                          |
| :---------: | :-----------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  **craft**  |  [`ExtendedUpgradeCost`](#extended-upgrade-cost)  |              Cotains exp, item and coin cost for crafting the augment. If exp _and_ coin are 0 _and_ item length is also 0 it cannot be crafted.              |
|  **uncap**  |  [`ExtendedUpgradeCost`](#extended-upgrade-cost)  |   Cotains exp, item and coin cost for uncapping the augment to the next rarity. If exp _and_ coin are 0 _and_ item length is also 0 it cannot be uncapped.    |
| **upgrade** | [`ExtendedUpgradeCost[]`](#extended-upgrade-cost) | Cotains exp, item and coin cost for each upgrade cost of the augment, where each array entry represents one enhance level (i.E. index 0 is cost of +0 to +1). |

If exp _and_ coin are 0 _and_ item length is also 0 it cannot be crafted/uncapped or upgraded further, respectively.

# Extended Upgrade Cost
Extended Upgrade cost is an extension of [`UpgradeCost`](../index.md#upgrade-cost) from equipments and simply adds the following on top of the existing properties:

| Property |   Type   |      Description      |
| :------: | :------: | :-------------------: |
| **exp**  | `number` | Item experience cost. |

# Note on skills

All `skills` are only granted if the equipment is either of Super Rare rarity or otherwise enhanced
to +10.