/*
 * Copyright (C) 2022-2024 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import type { BuffStatKey, Hull, Nation } from './common'

export interface MapData {
    name: string
    acv: number
    boss: BossData
    opsi: boolean
    buffs: BossBuff[]
}

interface BossBuff {
    key: BuffStatKey
    amount: number
    self: boolean
}

type EnemyStatKey = 'hp' | 'fp' | 'trp' | 'avi' | 'aa' | 'hit' | 'eva' | 'spd' | 'luck' | 'armor'

interface BossData {
    name: string
    hull: Hull
    nation: Nation
    stats: Record<EnemyStatKey, number>
    level: number
    offense_boost: number
    survival_boost: number
    tactics_boost: number
    icon: string
}
