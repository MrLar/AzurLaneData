/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { type Hull, type Nation, type TechStatKey } from './common'

export interface TechGroup {
    id: number
    name: string
    nation: Nation
    levels: TechGroupLevel[]
}

export interface TechGroupLevel {
    points: number
    bonuses: FleetTechBonus[]
}

export interface FleetTechBonus {
    stat: TechStatKey
    value: number
    hulls: Hull[]
}
