/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import {
    type AlServer, type EquipmentType,
    type Hull, type Nation,
    type Rarity, type ScalableStatKey, type ShipStatKey, type SkillUpgradeData
} from './common'
import { type ItemStack } from './items'
import { type FleetTechBonus } from './tech_groups'

export interface ShipData {
    global_name: string
    id: number
    gid: number
    /**
     * BULIN    = 1 << 0
     * RETRO   = 1 << 1
     * RESEARCH   = 1 << 2
     * FATE   = 1 << 3
     * META   = 1 << 4
     */
    flags: number
    name: string
    rarity: Rarity
    tags: string[] | string[][]
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
    class: string
    sub_class?: string
    upgrade_text: UpgradeText[]
    oath_skin?: boolean
    unique_aug?: number
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
    date: number
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
    date: number
    id?: number
    tags?: string[]
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

export type BasicShipStats = Partial<Record<ShipStatKey, number>>

export interface ShipScalingStats {
    scaling?: Partial<Record<ScalableStatKey, number>>
    scaling_extra?: Partial<Record<ScalableStatKey, number>>
    strengthen?: Partial<Record<ScalableStatKey, number>>
}

export interface RetroStatsData extends ShipScalingStats, BasicShipStats {
    flat?: BasicShipStats
    ddg_m?: DDGMOverrides
    armor?: number
    range?: number[][][] | null
}

export interface DDGMOverrides extends BasicShipStats, ShipScalingStats {
    skill_change: SkillUpgradeData[]
    id: number
    tags?: string[]
}

export interface ShipStatsData extends ShipScalingStats, BasicShipStats {
    armor: number
    range: number[][][] | null
}

export interface FleetTech {
    collect: FleetTechBonusShip
    level: FleetTechBonusShip
    limit_break: Partial<FleetTechBonusShip>
    sort_data: {
        index: number
        class: number
    }
}

export interface FleetTechBonusShip extends FleetTechBonus {
    pts: number
}

export interface GhostEquipmentData {
    id: number
    level: number
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

export interface MapDrop<T extends number | string> {
    map: T
    type: 0 | 1
}

export interface WarArchiveInfo {
    event: number
    maps: Array<MapDrop<string> & { pity?: boolean }>
}

export interface ShipDropData {
    id: number
    timer: string | null
    light: boolean
    heavy: boolean
    special: boolean
    limited: string | null
    other: UnlockType[]
    maps: Array<Array<MapDrop<number>>>
    notes: string[]
    events: string[]
    wa_maps?: WarArchiveInfo[]
    non_permanent?: boolean
}

export interface RetroCost {
    coins: number
    copies: number
    items: ItemStack[][]
}

// this could be an enum, but TS enums add uneccesary overhead
export type UnlockType =
0 | // guild shop
1 | // medal shop
2 | // core data shop
3 | // merit shop
4 | // requsition
5 | // prototype shop
6 | // perma UR pity
7 | // weekly missions
8 | // monthly login
9 | // returnee
10 | // memento
11 | // cruise
12 | // meta shop
13 |// meta showdown
14 |// dossier
15 | // shipyard
16 // quest

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
    impossible?: boolean
}

export interface FleetTechSortData {
    primary: number
    secondary: number
    nation: Nation
}
