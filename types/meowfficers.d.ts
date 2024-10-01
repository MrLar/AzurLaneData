/*
 * Copyright (C) 2022-2024 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import type { AlServer, BuffStatKey, FleetRowType, Hull, Nation, Rarity } from './common'

export interface MeowfficerData {
    name: string
    timer: string | null
    nation: Nation
    id: number
    icon: number
    rarity: Rarity
    skill: MeowSkill
    stats: Record<MeowStat, number>
    fixed_abilities: number[]
    servers: AlServer[]
}

export interface MeowSkill {
    name: string
    descriptions: string[]
    effects: Array<SkillEffect | null>
    opsi_descriptions: string[]
    opsi_effects: Array<SkillEffect | null>
    id: number
    icon: number
    default_level: number
}

export interface SkillEffect {
    slot?: number
    hulls?: Hull[]
    stats?: Stat[]
    condition?: SkillCondition
    position?: {
        type: FleetRowType
        index: string
    }
    nations?: Nation[]
}

export interface SkillCondition {
    type: 'count' | 'flag' | 'size'
    hulls: Hull[]
    fleet?: FleetRowType
    size?: number
    count?: number
}

export interface Stat {
    stat: BuffStatKey
    meow_stat: MeowStat | null
    amount: number
}

export type MeowStat = 'command' | 'logistics' | 'tactics'
