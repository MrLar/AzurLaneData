---
title: Equipment Related Formulas
---

# Reload

While this section does apply to AA Guns there are some things to keep in mind as AA Gun reload is
averaged across the entire fleet. See [here](#anti-air-mechanics) for more info.

To calculate the reload in seconds follow the following (\\(level\\) refers to the enhance level):
- If `reload_seconds` the simply use \\(reload_{level}\\) and do no further scaling or converting.
- To calculate the reload in seconds when equipped use the
  following \\(seconds = (reload_{level} \div 6 \div \sqrt{(shipRld + 100) \times \pi)} + Volley\\_Time + Absolute\\_Cooldown\\).
  - Where \\(shipRld\\) refers to the [final RLD value](../ships/index.md#computing-final-stats) of the ship.
  - \\(Volley\\_Time\\) is provided by the `delay` property of a weapon.
  - [\\(Absolute\\_Cooldown\\)](#absolute-cooldown) depends on the equipment type.
- To calculate the base reload in seconds use the
  following \\(seconds = (reload_{level} \div 6 \div \sqrt{200 \times \pi)}\\).
    - 200 because base reload is only achieved by having 100 RLD.

# Aircraft Launch Cooldown

You can compute the launch cooldown of a ships airstrike doing the following:

- For each plane calculate the cooldown as you normally would and multiply it by
  the [`base` of the respective slot](../ships/index.md#ship-slot-data) it is equipped in (\\(AdjustedPlaneCD\\)).
- Calculate the total cooldown: \\(TotalPlaneCD = \sum AdjustedPlaneCD\\)
- Divide the \\(TotalPlaneCD\\) by the sum of all [slot `base` properties](../ships/index.md#ship-slot-data).
- Multiply the result by \\(2.2\\)
- Add \\(0.033\\) (absolute cooldown).

<sub>In theory you can also sum up the cooldowns in game ticks and then convert to seconds and scale
with RLD later but this is simpler to digest.</sub>

# Aircraft Intercept cooldown

This is computed identical to the normal aircraft launch except:

- Only planes that can intercept are considered.
- They use `intercept_reload` over `reload`.
  - In most cases these are identical.
- Their cooldown is **not** multiplied by \\(2.2\\).

# Damage

This section does not apply to AA Guns at all. See [here](#anti-air-mechanics) instead.

## Base Damage at enhance level

The damage any given equipment deals considers many factors. The base damage at
any given enhancement level can be computed as follows (\\(level\\) refers to the enhance level):

- Of the equipping ship: Compute the [final value](../ships/index.md#computing-final-stats) of the
  stat determined by the \\(stat\\) property (\\(FinalShipStat\\))
  - \\(stat\\) refers to the property the [Weapon](../equips/index.md#weapon-base)
- Evaluate \\(AdjustedShipStat = FinalShipStat \times ratio\\)
  - \\(ratio\\) refers to the property the [Weapon](../equips/index.md#weapon-base)
- Evaluate \\(WeaponScalar = (\frac{AdjustedShipStat}{100})\\)
- Evaluate \\(IntermediateDmg = damage_{level} \times coefficient_{level} \times efficiency \times (1 + WeaponScalar)\\)
    - Efficiency refers to the [`efficiency` of the slot](../ships/index.md#ship-slot-data)
- Add either \\(0\\), \\(1\\) or \\(2\\) to the result (\\(RandomDmg\\)).
- Evaluate \\(AfterMod = RandomDmg \times armor\_mod_{enemy_armor}\\).
- The final result is the damage dealt by a *single* bullet without buffs.

If the equipment is a plane you additionally need to compute \\(AAModifer = \frac{150}{(150 + enemyAA)}\\) and then multiply \\(AfterMod\\) with it. If the attacking CV is hidden the
AAModifier is increased by \\(0.1\\).

## Buffs

Start wirth \\(AfterMod\\) and:

- Compute all DamageRatioBullet buffs (\\(TotalDRB\\)):
    - These are multiplicative.
    - More Info can be found on the [wiki](https://azurlane.koumakan.jp/wiki/Damage_Calculations)
- Compute all InjureRatio debuffs on the enemy (\\(TotalInjureRatio\\)):
    - These are multiplicative.
    - More Info can be found on the [wiki](https://azurlane.koumakan.jp/wiki/Damage_Calculations)
- Compute the all DamageRatioByType buffs and all InjureRatioByType debuffs on the
  enemy (\\(TotalDRT\\)):
    - If the type they affect is the same they are additive.
    - Otherwise, they are multiplicative.
    - More Info can be found on the [wiki](https://azurlane.koumakan.jp/wiki/Damage_Calculations)
- Compute the all Hunter buffs (\\(TotalHunter\\)):
    - If the type they affect is the same they are additive.
    - Otherwise, they are multiplicative.
    - More Info can be found on the [wiki](https://azurlane.koumakan.jp/wiki/Damage_Calculations)
- Compute
  the [Level Advantage Modifer](https://azurlane.koumakan.jp/wiki/Damage_Calculations#Level_Advantage) (\\(LvlAdvantage\\))
- Compute
  the [Threat Level Modifer](https://azurlane.koumakan.jp/wiki/Damage_Calculations#Threat_Level) (\\(ThreatModifier\\))
- Once you have those value evaluate:
  \\(AfterBuffs = AfterMod \times TotalDRB \times TotalDRT \times TotalInjureRatio \times TotalHunter \times LvlAdvantage \times ThreatModifier\\).
- If the shot is manually aimed:
    - Compute
      the [Manual Modifer](https://azurlane.koumakan.jp/wiki/Damage_Calculations#Aimed_Shot_(Manual)_Modifiers) (\\(ManualMod\\)).
    - \\(AfterBuffs = AfterBuffs \times ManualMod\\)
- If the shot is critical:
    - Compute
      the [Critical Modifer](https://azurlane.koumakan.jp/wiki/Damage_Calculations#Aimed_Shot_(Manual)_Modifiers) (\\(CritMod\\)).
    - \\(AfterBuffs = AfterBuffs \times CritMod\\)
- The final result is the damage dealt by a *single* bullet.

## Accounting for all bulelts and mounts

Assuming all shots/bullets/mounts/etc. are affected by the same buffs:
 - Simply multiply the above result by the [\\(base\\) of the slot](../ships/index.md#ship-slot-data),
the \\(count\\) of the weapon and the [\\(parallel\\) of the slot](../ships/index.md#ship-slot-data). If
you are calculating the damage of an interceptive plane launch use \\(intercept_count\\) instead.

In the event that they are not, simply go through the same calculation for each
shots/bullets/mounts/etc. individually.

# Anti-Air Mechanics

## Reload

The reload of AA guns is determined by the average reload of all AA guns with the same type (including ghost AA guns):

- Sum up the individual AA gun reload. Calculated the same way as any other equipment.
- Divide the result by the number of total AA guns (sum of all slot bases)
- Pad the value by \\(0.8667s\\) (absolute cooldown).

## Damage

The damage of AA Guns is combined into a single burst (including ghost AA guns):

- For ship (\\(level\\) refers to the enhance level):
    - Of the equipping ship: Compute
      the [final aa stat value](../ships/index.md#computing-final-stats) of the
      stat (\\(FinalShipStat\\))
    - Multiply \\(FinalShipStat\\) by \\(ratio\\) (\\(AdjustedShipStat\\))
    - Divide \\(AdjustedShipStat\\) by 100 (\\(WeaponScalar\\))
    - Then for each equip compute the
      following: \\(IndividualEquipDmg = damage_{level} \times coefficient_{level} \times efficiency \times (1 + WeaponScalar) \times base\\)
      - \\(base\\) refers to the [`base` of the slot](../ships/index.md#ship-slot-data)
      - Efficiency refers to the [`efficiency` of the slot](../ships/index.md#ship-slot-data)
    - Calculate the sum of all equips of a ship as \\(IndividualShipDmg = \sum{IndividualEquipDmg}\\)
- Calculate the sum of ships \\(\sum IndividualShipDmg\\) and the result is the final damage.

To note:

- AA Guns are not affected by any buffs.
- Ratio of all AA guns is usually 1.

# Absolute Cooldown

## Planes & AA Guns

Explained in the respective sections.

- [Aircraft Launch Cooldown](#aircraft-launch-cooldown)
- [Anti-Air Mechanics - Reload](#reload-1)

## Guns

These are the theorized values for each gun type:

- DD, CL, CA, CB guns: Roughly \\(0.3s\\)
- BB Guns: Roughly \\(0.2s\\)
- All other: Assumed to be \\(0s\\)


# Volley Time
The following is only useful if you care about learning how volley time is derived.

Volley Time (VT) is the time a gun (or similiar) takes to fire all of it's bullets. The action
of firing bullets will delay the next reload. For instance if a gun had a VT of \\(0.1s\\)
and a reload of \\(20s\\) it will instead have an **effective** cooldown of \\(20.1s\\).

The Volley Time you see provided by this data will almost certainly be higher than anything you are used to.
This is because this data considers the *entire* bullet emitting logic rather than simplifying it.
For the more nerdy folk out there here is how it works:

- Every Barrage (gun firings are just barrages) has a \\(delay\\), \\(first\\_delay\\), \\(delta\\_delay\\), \\(senior\\_delay\\),
  \\(senior\\_repeat\\) and \\(primal\\_repeat\\) property.
- The gun fires a total of \\((primal\\_repeat + 1) \times (1 + senior\\_repeat)\\) times.
- For each primal step the game defines the delay relative to the previous one as follows:
  - primal 0: Equal to: \\(delay\\)
  - primal i: Equal to: \\(delay + i \times delta\\_delay\\)
- After all primal steps are concluded the senior steps are excecuted.
- For each senior step the game defines the delay relative to the previous one as follows:
  - senior 0: Equal to \\(first\\_delay\\)
  - senior i: Equal to \\(senior\\_delay\\)
- Putting this all together yields a final delay of:
  $$
  first\_delay + (senior\_delay \times senior\_repeat) + \left( \sum_{i=0}^{primal\_repeat} delay + i \times delta\_delay\right)
  $$

If \\(delta\\_delay = 0\\) this can in essence be simplified down to:
$$
first\_delay + (senior\_delay \times senior\_repeat) + (delay \times (primal\_repeat + 1))
$$

