export interface FleetChat {
    id: number
    name: string
    topics: ChatTopic[]
    icon: string
}

export interface ChatTopic {
    id: number
    name: string
    unlock: TopicCondition
    messages: ChatMessage[]
}

export interface TopicCondition {
    type: TopicUnlockType
    after?: number
    before?: number
    ship_id?: number
    affinity?: number
}

export interface ChatMessage {
    id: number
    choosen_option: number
    text: string
    user: number
    options: ChatReply[]
}

export interface ChatReply {
    option_id: number
    text: string
}

export type TopicUnlockType =
1 | // unlock character
2 | // reach affinity
3 // after and/or before time
