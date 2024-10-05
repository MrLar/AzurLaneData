---
title: Skill Documentation
---

# Skill Data

Skill data contains relevant information for ship and equipment skills. Provides the following
properties:

|       Property       |            Type            |                                                                                                                Description                                                                                                                |
| :------------------: | :------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       **name**       |          `string`          |                                                                                                           Names this skill has.                                                                                                           |
|   **description**    |          `string`          |           Descriptions this skill has.<br>These may contain variable placeholders. Formatted as `$<num>`. They should be replaced with `values[num - 1][skill level]`.<br>These may contain corrections formatted as `{new text           | explanation}`.<br>You should parse values first and the corrections as values may also contain corrections. |
| **opsi_description** |          `string`          | Descriptions this skill has for Operation Siren.<br>These may contain variable placeholders. Formatted as `$<num>`. They should be replaced with `values[num - 1][skill level]`.<br>These may contain corrections formatted as `{new text | explanation}`.<br>You should parse values first and the corrections as values may also contain corrections. |
|       **max**        |          `number`          |                                                                                                        The max level of the skill.                                                                                                        |
|        **id**        |          `number`          |                                                                                                           The ID of the skill.                                                                                                            |
|       **type**       | [`SkillType`](#skill-type) |                                                                                                          The type of the skill.                                                                                                           |
|       **icon**       |     `number` \| `null`     |                              The icon this skill uses lower cased. For non-ship skills this is null and the icon of the equipment should be used. Available under `https://al.mrlar.dev/skills/<icon>.webp`.                              |
|      **values**      |        `string[][]`        |                             Pluggable values to plug into the description.<br>Replace `$<num>` in a description with `values[num - 1][skill level]`.<br>These may contain corrections formatted as `{new text                             | explanation}`.<br>Ideally values are plugged in first berfore corrections are parsed.                       |


# Skill Type

Skin Type is a numeric value with the range `[0, 3]` where each number represents an in-game skill
type:

| Value |   Label   |        Description        |
| :---: | :-------: | :-----------------------: |
|   0   |   Equip   |      Equipment skill      |
|   1   | Offensive | An offensive (Red) skill. |
|   2   | Defensive | A defensive (Blue) skill. |
|   3   |  Support  | A support (Yellow) skill. |
