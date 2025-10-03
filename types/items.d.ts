/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { type AlServer, type Rarity } from './common'

export interface ItemDrop {
    id: number
    type: ItemDropType
    linkable: boolean
    rarity: Rarity
    amount: number
    blueprint: boolean
    icon: string
    name: string
    level?: number
    ship_id?: number
}

export interface ItemStack {
    id: number
    amount: number
}

export interface Item {
    id: number
    name: string
    icon: string
    description: string
    type: ItemType
    rarity: Rarity
    locations: string[]
    servers: AlServer[]
    contains: ItemDrop[]
}

// this could be an enum, but TS enums add uneccesary overhead
export type ItemDropType =
0 | // item
1 | // gear
2 | // ship
3 | // skin
4 | // gear skin
5 | // furniture
6 | // meowfficer
7 | // augment
8 | // battle ui
9 | // dorm3d gift
10 | // dorm3d furniture
11 | // living area cover
12 | // dorm3d camera volume
13 | // dorm3d camera frame
14 | // dorm3d camera story
15 | // icon frame
41 | // island item
43 | // island ability
44 | // island character
45 | // island furniture
46 | // island dress
47 | // island skin
50 | // island speed up ticket
51 | // island action
99 // battle ui preview

// this could be an enum, but TS enums add uneccesary overhead
export type ItemType =
1 | // special
2 | // resource
3 | // dorm food
4 | // upgrade item
5 | // tech box
7 | // retrofit item
9 | // gear design
10 | // skill exp book
11 | // equip skin box
12 | // blueprint
13 | // universal selector
15 | // oil box
16 | // gear selector
17 | // gift box
18 | // combat data exp pack
19 | // heclp
20 | // guil restore item
21 | // ship invite
22 | // ship exp book
23 | // love letter
24 | // augment exp stone
25 | // meta skill book
26 | // skin selector
27 | // dorm3d
50 | // ship gift
97 | // battle ui
98 | // other
99 | // display only
100 | // opsi
101 // iap purchase
