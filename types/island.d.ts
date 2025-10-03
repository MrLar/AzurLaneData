import { type Rarity } from './common'
import { type ItemDrop, type ItemStack } from './items'

export interface IslandItem {
    id: number
    name: string
    icon: string
    description: string
    type: IslandItemType
    rarity: Rarity
    limit: number
    max_slots: number
    influence: number
    order_price: number
    categories: string[]
    can_convert: boolean
    convert_points: number
    craftable_at?: number[]
    sellable_at?: number[]
    sub_attribute: {
        attr: IslandAttr
        value: number
    } | null
}

export type IslandItemType =
1 | // material
2 | // prop
3 | // special prop
4 | // exp
5 | // exp book
9000 // season point

export interface IslandCharacter {
    id: number
    name: string
    icon: string
    skill: IslandSkill
    max_break: number
    break_interval: number
    energy: number
    energy_recover: number
    upgrade_energy: number[]
    base_attr: IslandCharacterAttr[]
    growth_attr: IslandCharacterGrowthAttr[]
    extra_attr_limits: Array<{ attr: IslandAttr, limit: number[] }>
    exp_needed: number[]
    skins: number[]
    dresses: number[]
}

export type IslandAttr = 'plant' | 'collect' | 'conserve' | 'cooking' | 'manage' | 'machinery'

export interface IslandCharacterAttr {
    attr: IslandAttr
    value: number
}

export interface IslandCharacterGrowthAttr {
    attr: IslandAttr
    value: number[]
}

export interface IslandSkill {
    name: string
    icon: string
    description: string
    values: string[][]
}

export interface IslandSkin {
    name: string
    icon: string
    id: number
    rarity: Rarity
    character: number
}

export interface IslandDress {
    name: string
    icon: string
    id: number
    related: number
    default_skins: number[]
    skins: number[]
    rarity: Rarity
    type: IslandDressType
    is_commander: boolean
}

export type IslandDressType =
1 | // back
2 | // flotage
3 | // footprint
4 | // hair
5 | // face
6 | // hat
7 // body

export interface IslandCollectible {
    name: string
    icon: string
    id: number
    fragments: IslandCollectibleFragement[]
}

export interface IslandCollectibleFragement {
    name: string
    icon: string
    id: number
    tip: string
}

export interface IslandGatherable {
    name: string
    icon: string
    id: number
    refreshes: boolean
    event: string | null
    visible: boolean
    spots: number
}

export interface IslandFormula {
    stamina: number
    item_id: number
    production_limit: number
    exp: number
    pts: number
    attribute: IslandAttr
    cost: ItemStack[]
    produce: ItemStack[]
    extra_produce: ItemStack & { every: number, needs_unlock: boolean } | null
    hp: number
    base_time: string
    workload: number
    base_efficiency: number
    is_condition: boolean
    event: string | null
    needs_unlock: boolean
}

export interface IslandRestaurant {
    id: number
    icon: string
    name: string
    opening_time: number
    opening_count: number
    place: number
    unlockable_staff: number
    initial_staff: number
    ranks: IslandManageRank[]
    sellable: number[]
    needs_unlock: boolean
}

export interface IslandManageRank {
    icon: string
    name: string
    exp_needed: number
    staff_unlock: boolean
    coeff: number
    dish_slots: number
    dish_capacity: number
    sales_offsets: number[]
}

export interface IslandSpeedupTicket {
    id: number
    icon: string
    name: string
    speedup: number
    duration: number
    expires: number[][] | null
    expire_type: 1 | 2
    rarity: Rarity
    // same as duration really
    type: 1 | 2 | 3
}

export interface IslandMap {
    id: number
    name: string
    places: number[]
}

export interface IslandPlace {
    id: number
    name: string
    restaurant: number | null
    slots: IslandSlot[]
    manual_slots: IslandSlot[]
    map_id: number
    icon: string | null
    needs_unlock: boolean
}

export interface IslandSlot {
    slot: string
    formulas: IslandFormula[]
    needs_unlock: boolean
    slot_id: number
    lock_slots: number[]
    locked_by: number[]
    extra_animal_efficiencies: number[][]
}

export interface IslandAttrGrade {
    upper: number
    lower: number
    workload_efficiency: number
    manage_efficiency: number
    icon: string
    name: string
}

export interface IslandTechnology {
    id: number
    group: number
    icon: string
    name: string
    description: string
    auto_complete: boolean
    tip: string
    island_level: number
    times_completable: number
    cost: IslandFormula['cost']
    base_time: IslandFormula['base_time']
    workload: IslandFormula['workload']
    base_efficiency: IslandFormula['base_efficiency']
}

export interface IslandSeason {
    id: number
    name: string
    pt_award_highlights: number[]
    pt_reward: ItemDrop[]
    ranks: number[][]
    rank_reward: ItemDrop[][]
    time: number[][]
}

export interface IslandProsperity {
    level: number
    prosperity: number
    reward: ItemDrop[][]
}

export interface IslandCollectionMilestone {
    id: number
    level: number
    reward: ItemDrop[]
    description: string
}

export interface IslandAchievementGroup {
    id: number
    achievements: IslandAchievement[]
    name: string
}

export interface IslandAchievement {
    ids: number[]
    name: string[] | string
    descriptions: string[]
    rewards: ItemDrop[][]
}

export interface IslandShop {
    id: number
    sub_shops: IslandSubShop[]
    name: string
}

export interface IslandSubShop {
    id: number
    name: string
    goods: IslandShopGood[]
    free_refreshes: number
    // unused currently
    refresh_player: null
    refresh_time: number
    refresh_set: number
    exists: number[][][] | null
}

export interface IslandShopGood {
    name: string
    discount: number
    discount_time: number[][]
    icon: string
    id: number
    limit: number
    pt_reward: number
    cost: ItemDrop
    gains: ItemDrop[]
    time: number[][][] | null
}

export interface IslandTask {
    id: number
    name: string
    exp: number
    series: string
    description: string
    conditions: IslandTaskCondition[]
    event: boolean
    targets: IslandTaskTarget[]
    rewards: ItemDrop[]
    type: IslandTaskType
}

export type IslandTaskConditionType =
1 | // achievement
2 | // task
3 | // ability
4 | // mutex (unused)
6 | // own any item
7 | // own all items
8 | // own any commander dress
9 | // own all commander dress
99 // impossible

export type IslandTaskType =
1 | // main
2 | // branch
3 | // daily
4 | // weekly
5 | // event (branch)
6 | // event (daily)
7 | // event (weekly)
8 | // season
9 // hidden

export interface IslandTaskCondition {
    type: IslandTaskConditionType
    ids: number[]
}

export interface IslandTaskTarget {
    text: string
    amount: number
}
