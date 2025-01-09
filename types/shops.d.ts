import { type Currency, type Rarity } from './common'
import { type ItemDrop } from './items'

// this could be an enum, but TS enums add uneccesary overhead
export type ShopType =
1 | // event
2 | // general
3 | // merit
4 | // core limited
5 | // core monthly
6 | // proto
7 | // guild
8 | // medal
9 | // meta
10 | // prize
11 | // cruise
12 | // dorm3d
13 |// opsi port
14 | // opsi exchange
15 | // gem shop
16 // iap purchase shop

export interface Shop {
    type: ShopType
    name: string
    id: number
    currency: Currency
    currency_alt?: Currency[]
    refresh_times?: string[]
    manual_refresh?: boolean
    refresh_cost?: number[]
    items: ShopItem[]
    icon?: string
    icon_rarity?: Rarity
    pools?: ItemPool[]
    dates?: number[][]
}

export interface ShopItem extends ItemDrop {
    limit: number
    limit_type?: LimitType
    limit_group?: number
    group_limit?: number
    cost: number
    ref?: string
    use_alt?: number
    note?: string
}

export interface ItemPool {
    name: string
    items: ShopItem[]
    id: string
}

export type LimitType =
0 | // can be bought n times
1 | // can be *owned* n times
2 // total available (same as 0 but does not refresh)
