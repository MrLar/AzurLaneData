import { type ItemDrop } from './items'

export interface CruisePass {
    season: number
    free_items: ItemDrop[]
    paid_items: ItemDrop[]
}
