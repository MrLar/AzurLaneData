/*
 * Copyright (C) 2022-2024 Lars K. (MrLar)
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
}
export interface EquipmentData extends BaseEquipData<EquipmentType> {
    tech: number
    hull_restriction: Hull[]
    armaments: Armament[] | null
    weapon: Weapon | Aircraft | null
    aliases?: string[]
    equippable_main: Hull[]
    equippable_sub: Hull[]
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
    pierce: number
    angle: number
    shell_range: number[]
    volley_info: number[]
    spread_angle: string | null
    aim_type: AimType
}

export interface Aircraft extends ReloadableWeapon {
    id: number
    intercept_id: number
    is_interceptor: boolean
    intercept_reload?: number[]
    intercept_count?: number
    speed: number
    hp: number[]
    hp_growth: number[]
    dodge: number
    dodge_limit: number
    crash_dmg: number
    aircraft: true
}

export interface Weapon extends ExtendedWeapon, ReloadableWeapon {
    delay: number
    coefficient: number[]
    aircraft: false
}

export interface Armament extends ExtendedWeapon, ReloadableWeapon {
    name: string
    aircraft: false
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

// Unknown | Random | Aimed
export type AimType = -1 | 0 | 1
