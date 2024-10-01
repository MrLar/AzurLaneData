import { type Rarity } from './common'
import { type ItemDrop } from './items'

export interface Research {
    id: number
    name: string
    sub_name: string
    description: string
    label: string
    label_bg: string
    version: number
    condition: string | null
    rarity: Rarity
    bg: string
    consume: ItemDrop[]
    drops: ItemDrop[]
    time: number
}
