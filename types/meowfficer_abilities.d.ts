/*
 * Copyright (C) 2022-2024 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import type { AlServer, BuffStatKey, EquipmentType, Hull, Nation } from './common'

export interface MeowfficerAbility {
    icons: string[]
    names: string[]
    descriptions: string[]
    effect: MeowEffect | null
    id: number
    max: number
    obtainable: boolean
    servers: AlServer[]

}

export interface MeowEffect {
    hulls?: Hull[]
    stats: MeowEffectEntry[]
    nation?: Nation
}

export interface MeowEffectEntry {
    stat: BuffStatKey
    type?: EquipmentType
    amount: number[]
    restrict?: Hull[]
}
