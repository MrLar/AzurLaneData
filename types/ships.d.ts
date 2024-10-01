/*
 * Copyright (C) 2022-2024 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import type {
    AlServer, EquipmentType, FleetRowType, Hull, Nation,
    Rarity, ScalableStatKey, ShipStatKey, SkillUpgradeData
} from './common'
import { type ItemStack } from './items'
import { type FleetTechBonus } from './tech_groups'

export interface ShipData {
    global_name: string
    id: number
    gid: number
    category: ShipType
    name: string
    rarity: Rarity
    tags: string[]
    nation: Nation
    hull: Hull
    skills: number[][]
    specific_buff: SpecificBuff
    slots: SlotData[][]
    stats: ShipStatsData[]
    ghost_equipment?: GhostEquipmentData[][]
    retro?: RetroData
    research?: PRData[]
    skins: number[]
    skin_share_ids?: number[]
    lb_data: LimitBreakData[]
    date: number
    strengthen_exp?: {
        fp?: number
        trp?: number
        avi?: number
        aa?: number
        rld?: number
    }
    fleet_tech?: FleetTech
    servers: AlServer[]
    icon: string
    aliases?: string[]
    class: string | null
    upgrade_text: UpgradeText[]
}

export interface UpgradeText {
    descriptor: string
    value: string[]
}

export type SpecificBuff = 'aux' | 'gnr' | 'torp' | null

export interface PRData {
    stats?: BasicShipStats
    fate?: FateData
}

export interface FateData {
    stats: BasicShipStats
    skills: SkillUpgradeData[]
}

export interface RetroData {
    slots: Array<Partial<SlotData>>
    skills: SkillUpgradeData[]
    stats: RetroStatsData
    hull?: Hull
    power_bonus: number
    nodes: RetrofitNode[]
    min_level: number
    min_lb: number
    ghost_equipment?: GhostEquipmentData[]
}

export interface RetrofitNode {
    name: string
    min_lb: number
    min_level: number
    letter: string
    requires: string[]
    descriptions: string[][]
    icon: string
    x: number
    y: number
    is_infinite?: boolean
}

export interface SlotData {
    parallel: number
    efficiency: number
    base: number
    preload: number
    types: EquipmentType[]
    default_id: number
    capacity?: number
}

export type Armor = 'Light' | 'Medium' | 'Heavy'

export type BasicShipStats = {
    [key in ShipStatKey]?: number
}

export interface ShipScalingStats {
    scaling?: {
        [key in ScalableStatKey]?: number
    }
    scaling_extra?: {
        [key in ScalableStatKey]?: number
    }
    strengthen?: {
        [key in ScalableStatKey]?: number
    }
}

export interface RetroStatsData extends ShipScalingStats, BasicShipStats {
    flat?: BasicShipStats
    ddg_m?: BasicShipStats & ShipScalingStats & { skill_change: SkillUpgradeData }
    armor?: number
    range?: number[][][] | null
}

export interface ShipStatsData extends ShipScalingStats, BasicShipStats {
    armor: number
    range: number[][][] | null
}

export interface FleetTech {
    collect: FleetTechBonusShip
    level: FleetTechBonusShip
    limit_break: Partial<FleetTechBonusShip>
}

export interface FleetTechBonusShip extends FleetTechBonus {
    pts: number
}

export interface GhostEquipmentData {
    id: number
    level: number
    obtainable: boolean
    efficiency: number
    skill?: number
    level_override?: number[]
    id_override?: number[]
}

export interface LimitBreakData {
    stars: number
    star_max: number
    max_level: number
    min_level: number
    id: number
    oil: {
        start: number
        end: number
    }
}

export interface MapDrop {
    map: number
    type: 0 | 1
}

export interface ShipDropData {
    id: number
    timer: string | null
    light: boolean
    heavy: boolean
    special: boolean
    limited: string | null
    other: UnlockType[]
    maps: MapDrop[][]
    notes: string[]
}

export interface RetroCost {
    coins: number
    copies: number
    items: ItemStack[][]
}

// Bulin | Normal | Retrofittiable | Research | Fate Sim | META
export type ShipType = 0 | 1 | 2 | 3 | 4 | 5

// this could be an enum, but TS enums add uneccesary overhead
export type UnlockType =
0 | // guild shop
1 | // medal shop
2 | // core data shop
3 | // merit shop
4 | // requesition
5 | // prototype shop
6 | // perma UR pity
7 | // weekly missions
8 | // monthly login
9 | // returnee
10 // memento

export interface SkinWords {
    id: number
    skins: SkinLines[]
}

export interface SkinLines {
    id: number
    lines: VoiceLine[]
    ex?: VoiceLine[]
}

export interface VoiceLine {
    type: string
    line: string
    conditions?: LineConditions
}

export interface LineConditions {
    oath?: boolean
    affinity?: number
    amount?: number
    ships?: number[]
    artists?: number[]
    hulls?: Hull[]
    nations?: Nation[]
    rarities?: Rarity[]
    type?: FleetRowType
    impossible?: boolean
    blacklist_ships?: boolean
    include_meta?: boolean
}
