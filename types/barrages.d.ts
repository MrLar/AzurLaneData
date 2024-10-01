/*
 * Copyright (C) 2022-2024 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import type { WeaponBase } from './equipments'

export interface Barrage {
    name: string
    weapons: BarrageWeapon[]
}

export interface BarrageWeapon extends WeaponBase {
    count: number
    coefficient: number[]
    is_critical: boolean
}
