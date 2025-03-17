/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { type Rarity } from './common'
import { type ItemDrop } from './items'

export interface Research {
    id: number
    name: string
    sub_name: string
    description: string
    label: string
    label_bg: string
    version: number
    condition: string | null
    rarity: Rarity
    bg: string
    consume: ItemDrop[]
    drops: ItemDrop[]
    time: number
}
