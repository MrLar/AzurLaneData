/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { type AlServer, type EquipmentType, type Rarity } from './common'

export interface GearSkin {
    id: number
    name: string
    icon: string
    types: EquipmentType[]
    rarity: Rarity
    theme: string
    description: string
    servers: AlServer[]
}
