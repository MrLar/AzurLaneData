/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { type AlServer, type Currency, type Rarity } from './common'
import { type Item, type ItemDrop } from './items'

export interface Dorm3DRoom {
    id: number
    name: string
    type: RoomType
    characters: number[]
    invitable: Dorm3DInvite[]
    memories: number[]
    servers: AlServer[]
    collectables: number[]
    icon: string
}

export interface Dorm3DInvite {
    id: number
    cost: number
    currency: Currency
    discount?: number
}

export interface Dorm3DCharacter {
    id: number
    gid: number
    name: string
    room_id: number
    icon: string
    servers: AlServer[]
    gifts: number[]
    furniture: number[]
    rarity: Rarity
    favor_levels: FavorLevel[]
}

export interface FavorLevel {
    needed: number
    level: number
    items: ItemDrop[]
}

export interface Dorm3DGift extends Item {
    type: 27
    purchaseable: boolean
    ship: number
    favor: number
}

export interface Dorm3DCollectable extends Item {
    type: 27
    room_id: number
    time: number
}

export interface Dorm3DFurniture extends Item {
    type: 27
    purchaseable: boolean
    room_id: number
    furni_type: FurnitureType
    exclusive: boolean
}

export type FurnitureType =
1 | // wallpaper
2 | // floor
3 | // decoration
4 | // bed
5 | // couch
6 // table

// common | private
export type RoomType = 1 | 2
