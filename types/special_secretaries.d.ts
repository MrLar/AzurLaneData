/*
 * Copyright (C) 2022-2024 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { type AlServer, type Nation, type Rarity } from './common'
import { type VoiceLine } from './ships'

export interface SpecialSecretary {
    id: number
    name: string
    rarity: Rarity
    nation: Nation
    servers: AlServer[]
    skins: SpecialSecSkin[]
}

export interface SpecialSecSkin {
    id: number
    name: string
    lines: VoiceLine[]
    icon: string
    unlock: string
}
