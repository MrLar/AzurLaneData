import { type TechStatKey, type Hull, type Nation } from './common'

export interface TechGroup {
    id: number
    name: string
    nation: Nation
    levels: TechGroupLevel[]
}

export interface TechGroupLevel {
    points: number
    bonuses: FleetTechBonus[]
}

export interface FleetTechBonus {
    stat: TechStatKey
    value: number
    hulls: Hull[]
}
