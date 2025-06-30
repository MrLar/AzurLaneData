/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { type Hull, type ScalableStatKey, type WeaponStat } from './common'
import { type AimType, type AmmoType, type BulletType, type WeaponType } from './equipments'

interface Barrage {
    name: string
    parts: BarragePart[]
    is_aoa?: boolean
}

type BarragePart = BarrageWeapon | BarrageSlash | BarrageSummon

interface BarrageEntry<T> {
    type: T
    buffs?: string[]
    buff_chance?: number
}

interface DamagingBarrage<T> extends BarrageEntry<T> {
    damage: number
    count: number
}

interface BarrageWeapon extends DamagingBarrage<'weapon'> {
    fix_damage?: number
    coefficient: number
    range: number[]
    armor_mod: number[]
    ammo: AmmoType
    is_critical: boolean
    shrapnel: boolean
    ignore_shield: boolean
    aim_type: AimType
    splash?: number
    velocity?: number
    pierce?: number
    shell_range?: number[]
    spread?: number[]
    reaim?: boolean
    stat: WeaponStat | 'fleetpower'
    stat_cap?: number
    ratio: number
    angle: number
    notes: string[]
    is_air?: boolean
    airdrop?: boolean
    tracker?: {
        angular: number
        range: number
    }
    targeting: string | null
    centered: boolean
    weapon_type: WeaponType
    weapon_id: number
    bullet_type: BulletType
    bullet_id: number
}

export interface BarrageSlash extends DamagingBarrage<'slash'> {
    level_of: string
    clears: BulletType[]
    velocity: number
    movement_type: 0 | 1 // stationary | travels
    life_time: number
    range: number
    fix_damage: number
}

export type BarrageSummon = BarrageEntry<'summon'> & {
    type: 'summon'
    weapons: Array<BarrageWeapon & { rld: string }>
    hull: Hull
    armor: number
} & Record<ScalableStatKey, string>
