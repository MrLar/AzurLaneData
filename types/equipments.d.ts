/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import type { AlServer, EquipmentType, Hull, Nation, Rarity, StatElement, WeaponStat } from './common'
import { type ItemStack } from './items'

export interface BaseEquipData<T> {
    icon: string
    id: number
    name: string
    rarity: Rarity
    skills: number[]
    nation: Nation
    max: number
    stats: StatElement[]
    servers: AlServer[]
    type: T
    limit_group: number
    labels: string[]
    speciality: string
    obtainable: boolean
    important: boolean
    aliases?: string[]
}
export interface EquipmentData extends BaseEquipData<EquipmentType> {
    tech: number
    hull_restriction: Hull[]
    armaments: Armament[] | null
    weapon: Weapon | Aircraft | null
    equippable_main: Hull[]
    equippable_sub: Hull[]
    skill_levels?: number[][]
}

export interface ReloadableWeapon {
    reload: number[]
    reload_seconds?: boolean
    count: number
    aircraft: boolean
}

export interface WeaponBase {
    damage: number[]
    stat: WeaponStat
    ratio: number
    armor_mod: number[]
    ammo: AmmoType
    id: number
}

export interface ExtendedWeapon extends WeaponBase {
    splash: number
    spread: number[]
    range: number[]
    velocity: number
    falloff?: number
    pierce: number
    angle: number
    shell_range: number[]
    volley_info: number[]
    spread_angle: string | null
    aim_type: AimType
    barrage_id: number
    bullet_id: number
    buffs?: string[]
}

export interface Aircraft extends ReloadableWeapon {
    id: number
    is_interceptor: boolean
    intercept_id?: number
    intercept_reload?: number[]
    intercept_count?: number
    speed: number
    int_speed?: number
    hp: number[]
    int_hp?: number[]
    hp_growth: number[]
    int_hp_growth?: number[]
    dodge: number
    int_dodge?: number
    dodge_limit: number
    int_dodge_limit?: number
    crash_dmg: number
    int_crash_dmg?: number
    aircraft: true
}

export interface Weapon extends ExtendedWeapon, ReloadableWeapon {
    delay: number
    coefficient: number[]
    aircraft: false
    tracker?: {
        angular: number
        range: number
    }
}

export interface Armament extends ExtendedWeapon, ReloadableWeapon {
    name: string
    coefficient?: number[]
    aircraft: false
    airdrop?: boolean
    skip_bomb?: boolean
}

export interface EquipDropData {
    id: number
    locations: string[]
    lab_from: number[]
    lab_to: number[]
}

export interface UpgradeCost {
    coins: number
    items: ItemStack[]
}

export interface GearLabRecipe {
    to: number
    from: number
    cost: UpgradeCost
}

// this could be an enum, but TS enums add uneccesary overhead
export type AmmoType =
0 | // unknown
1 | // normal
2 | // ap
3 | // he
4 | // torpedo
5 | // aa
6 | // bomb
7 | // sap
8 | // missile
100 | // shrapnel
101 // shs

export type BulletType =
0 | // unknown
1 | // cannon
2 | // bomb/arcing
3 | // torpedo
4 | // direct
5 | // shrapnel
6 | // aa
7 | // asw
8 | // sray
9 | // effect
10 | // beam
11 | // gravity
12 | // electric arc
13 | // missile
14 | // space laser
15 | // scale
16 | // trigger bomb
17 // aa missile

// Unknown | Random | Aimed
export type AimType = -1 | 0 | 1
