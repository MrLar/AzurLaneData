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
