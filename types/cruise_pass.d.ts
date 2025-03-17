/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { type ItemDrop } from './items'

export interface CruisePass {
    season: number
    free_items: ItemDrop[]
    paid_items: ItemDrop[]
}
