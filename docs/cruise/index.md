---
title: Cruise Pass Documentation
---

# Cruise Pass

Cruise Pass provides info about a single cruise pass season. It provides the following properties:

|       Property       |                  Type                  |                                                      Description                                                       |
| :------------------: | :------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
|      **season**      |                `number`                | The Season Number, for normal cruise passes this is a continous number and for black friday passes the year it ran in. |
|    **free_items**    | [`ItemDrop[]`](../common.md#item-drop) |                                               List of free tier rewards.                                               |
|    **paid_items**    | [`ItemDrop[]`](../common.md#item-drop) |                                               List of paid tier rewards.                                               |
| **is_black_friday?** |               `boolean`                |                                       Whether this pass is a black friday pass.                                        |