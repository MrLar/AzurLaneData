export interface JuuProfile {
    id: number
    name: string
    icon: string
    ship_id: number
}

export interface JuuPost {
    id: number
    user: number
    text: string
    image: string
    comments: JuuPostComment[]
    options: JuuPostOption[]
}

export interface JuuPostComment {
    id: number
    user: number
    text: string
    comments: JuuPostComment[]
}

export interface JuuPostOption {
    text: string
    reply: JuuPostComment
}

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
    type: MessageType
}

export interface ChatReply {
    option_id: number
    text: string
}

export type TopicUnlockType =
1 | // unlock character
2 | // reach affinity
3 // after and/or before time

export type MessageType =
1 | // text message
4 // emoticon
