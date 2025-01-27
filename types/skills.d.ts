/*
 * Copyright (C) 2022-2024 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

export interface SkillData {
    description: string
    opsi_description: string | null
    name: string
    max: number
    id: number
    type: SkillType
    icon: number | string | null
    values: string[][]
    opsi_values?: string[][]
}

// Equip, Offensive, Defensive, Support
export type SkillType = 0 | 1 | 2 | 3
