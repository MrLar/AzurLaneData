---
title: Special Secretary Documentation
---

# Special Secretary

Special Secretary contains relevant information of a special secretary it provides:

|  Property   |                 Type                  |              Description               |
| :---------: | :-----------------------------------: | :------------------------------------: |
|   **id**    |               `number`                |        The ID of the secretary.        |
|  **name**   |               `string`                |       Names this secretary has.        |
| **rarity**  |    [`Rarity`](../common.md#rarity)    |        Rarity of the secretary.        |
| **nation**  |    [`Nation`](../common.md#nation)    |    Nation the secretary belongs to.    |
| **servers** | [`AlServer`](../common.md#al-server)  | Servers the secretary is available on. |
|  **skins**  | [`SpecialSecSkin`](#special-sec-skin) |        Skins of this secretary.        |

# Special Sec Skin

Special Sec skin contains all relevant information of a special secretaries skin, it provides:

|  Property  |                     Type                      |                                                Description                                                 |
| :--------: | :-------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
|   **id**   |                   `number`                    |                                          The ID of the secretary.                                          |
|  **name**  |                   `string`                    |                                         Names this secretary has.                                          |
| **unlock** |                   `string`                    |                                          How to unlock this skin.                                          |
|  **icon**  |                   `string`                    | Icon of this skin. Available under `https://al.mrlar.dev/special_secretary/<compact or full>/<icon>.webp`. |
| **lines**  | [`VoiceLine[]`](../ships/words.md#voice-line) |                                         Voice lines of this skin.                                          |