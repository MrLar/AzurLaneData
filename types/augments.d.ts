/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import type { SkillUpgradeData } from './common'
import type { BaseEquipData, UpgradeCost } from './equipments'

export interface AugmentData extends BaseEquipData<AugmentType> {
    skill_upgrades: SkillUpgradeData[]
    craftable: boolean
}

export interface AugmentCost {
    craft: UpgradeCost & { exp: number }
    upgrade: Array<UpgradeCost & { exp: number }>
    uncap: UpgradeCost & { exp: number }
}

// this could be an enum, but TS enums add uneccesary overhead
export type AugmentType =
1 | // dd, ddgv, ddgm
2 | // cl, ct
3 | // cl, ct, ar
4 | // ca, cb, cav, ae
5 | // ca, cb, cav, bm, ae
6 | // bb, bc, bbv
7 | // cv, cvl
8 | // ss, ssv
9 | // ca, cl
10 // ixs, ixv, ixm
