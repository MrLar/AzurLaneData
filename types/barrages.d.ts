/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { type WeaponStat } from './common'
import { type AimType, type AmmoType } from './equipments'

interface Barrage {
    name: string
    parts: BarragePart[]
    is_aoa?: boolean
}

interface BarragePart {
    damage: number
    coefficient: number
    count: number
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
    range: number[]
    angle: number
    buffs?: string[]
    buff_chance?: number
    notes: string[]
    is_air?: boolean
    airdrop?: boolean
    tracker?: {
        angular: number
        range: number
    },
    targeting: string | null
}
