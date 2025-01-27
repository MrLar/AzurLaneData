import { type WeaponStat } from './common'
import { type AimType, type AmmoType } from './equipments'

interface Barrage {
    name: string
    parts: BarragePart[]
}

interface BarragePart {
    damage: number
    coefficient: number
    count: number
    armor_mod: number[]
    ammo: AmmoType
    is_critical: boolean
    shrapnel: boolean
    ignore_shield: boolean
    aim_type: AimType
    splash?: number
    velocity?: number
    pierce?: number
    shell_range?: number[]
    spread?: number[]
    reaim?: boolean
    stat: WeaponStat | 'fleetpower'
    targeting: string
    ratio: number
    range: number[]
    angle: number
    buffs?: string[]
    buff_chance?: number
    notes: string[]
}
