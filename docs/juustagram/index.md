---
title: Juustagram Documentation
---

# Profiles

## Juu Profile

Structure for all ship and the commanders juustagram profile. Contains the following properties:

|  Property   |   Type   |                                  Description                                  |
| :---------: | :------: | :---------------------------------------------------------------------------: |
|   **id**    | `number` |                                The profile ID.                                |
|  **name**   | `string` |                             The profile username.                             |
|  **icon**   | `string` | Icon of this chat. Available under `https://als.mrlar.dev/qicon/<icon>.webp`. |
| **ship_id** | `number` |    The ship id of the ship this profile belongs to or 0 for the commander.    |

# Chats

## Fleet Chat

Structure for a chat of the fleet chats in the game. Contains the following properties:

|  Property  |             Type             |                                  Description                                  |
| :--------: | :--------------------------: | :---------------------------------------------------------------------------: |
|   **id**   |           `number`           |                                 The chat ID.                                  |
|  **name**  |           `string`           |                             The name of the chat.                             |
| **topics** | [`ChatTopic[]`](#chat-topic) |                        Topics available in this chat.                         |
|  **icon**  |           `string`           | Icon of this chat. Available under `https://als.mrlar.dev/qicon/<icon>.webp`. |

## Chat Topic

Represents a topic of a chat. Provides the following properties:

|   Property   |                  Type                  |             Description             |
| :----------: | :------------------------------------: | :---------------------------------: |
|    **id**    |                `number`                |            The topic ID.            |
|   **name**   |                `string`                |       The name of the topic.        |
|  **unlock**  | [`TopicCondition[]`](#topic-condition) | Condition for unlocking this topic. |
| **messages** |    [`ChatMessage[]`](#chat-message)    |        Message in this chat.        |

## Topic Condition

Represents the condition of unlocking a topic. Provides the following properties:

|   Property    |                  Type                   |                                                Description                                                |
| :-----------: | :-------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
|   **type**    | [`TopciUnlockType`](#topic-unlock-type) |                                            The condition type.                                            |
|  **after?**   |                `number`                 |        **(Optional)** UNIX timestamp after which this topic is available (only if `type` is `3`).         |
|  **before?**  |                `number`                 | **(Optional)** UNIX timestamp after which this topic vanishes again (*can* be present if `type` is `3`).  |
| **ship_id?**  |                `number`                 | **(Optional)** The ship id top either unlock (`type` == `1`) or to reach `affinity` with (`type` == `2`). |
| **affinity?** |                `number`                 |                          **(Optional)** The affinity to reach if `type` is `2`.                           |

## Chat Message

Represents a message in a topic. Provides the following properties:

|      Property      |              Type              |                                                       Description                                                       |
| :----------------: | :----------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
|       **id**       |            `number`            |                                                     The message ID.                                                     |
|      **user**      |            `number`            |                      The profile ID of the [`JuuProfile`](#juu-profile) that posted this message.                       |
| **choosen_option** |            `number`            | If non zero the message is only visible if the player picked the option with `option_id` equal to this value before it. |
|      **text**      |            `string`            |                              The text of the message or the emote ID if the `type` is `4`.                              |
|    **options**     |  [`ChatReply[]`](#chat-reply)  |                                         Possible replies the user can initiate.                                         |
|      **type**      | [`MessageType`](#message-type) |                                                    The message type                                                     |


## Chat Reply

Represents a reply to a ships message. Provides the following properties:

|   Property    |   Type   |                         Description                         |
| :-----------: | :------: | :---------------------------------------------------------: |
| **option_id** | `number` |                       The option ID.                        |
|   **text**    | `string` | Text preview of the message the commander would reply with. |

## Topic Unlock Type
Topic Unlock Type is a numeric value with the range `[1, 3]` where each number represents how a chat topic is unlocked:

| Value |   Label   |                           Description                           |
| :---: | :-------: | :-------------------------------------------------------------: |
|   1   | Character |            Unlock the character the chat belongs to             |
|   2   | Affinity  | Reach a certain affinity with the character the chat belongs to |
|   3   |   Time    |      Unlocks after a specific time and may vanish later on      |

## Message Type
Message Type is a numeric value with two values where each number represents how a chat topic is unlocked:

| Value | Label |                                                   Description                                                   |
| :---: | :---: | :-------------------------------------------------------------------------------------------------------------: |
|   1   | Text  |                                                 A text message                                                  |
|   4   | Emote | An emoticon. Emotes are available under `https://al.mrlar.dev/emotes/<id>.webp`. All of them only have 1 frame. |