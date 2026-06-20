## boss_skill_overrides.json

Structure: an object mapping a boss key (map id) to an array of overrides.

Format:
```json
{
  "<boss_key>": [
    {
      "index": <skill_index>,
      "text": "<new skill text>"
    },
    ...
  ]
}
```

- index: numeric index of the skill to override for that boss
- text: replacement skill text (complete text for that indexed skill)
- The replacements may include explanatory comments for end users. Such comments must use the format `{text snippet|commentary}`.


---

## equip_aliases.json

Structure: an object mapping an equip id to an object with a name and an aliases array.

Format:
```json
{
  "<equip_id>": {
    "name": "Equipment Name",
    "aliases": ["alias1", "alias2", ...]
  },
  ...
}
```

- name: in-game name (for accessibility only)
- aliases: array of strings used as alternative identifiers
- Note that the equip id is the base id of the equipment, i.e. the one also used in equipments.json in data
  - Also the ID shown on the official wiki and ALDB
- **Do not ever delete an equipment entry from this json. Equipments with no entries should simply have an empty `aliases` array.**

---

## ship_aliases.json

Identical structure to equip_aliases.json but keyed by ship id instead of equip id.

Format:
```json
{
  "<ship_id>": {
    "name": "Ship Name",
    "aliases": ["alias1", "alias2", ...]
  }
}
```

- name: in-game name (for accessibility only)
- aliases: array of strings used as alternative identifiers
- Note that `ship_id` is the index id not the limit break id, i.e. the one also used in ships.json in data
  - Also the ID used by ALDB links and shown as index ID on ALDB.
- **Do not ever delete a ship entry from this json. Ships with no entries should simply have an empty `aliases` array.**

---

## skill_corrections.json

This file is flexible and supports many operations to correct or alter skill metadata and descriptions. It maps a skill id to an object containing one or more of the supported modification keys.

Top-level example:
```json
{
  "<skill_id>": {
    "full": {
      /* 
        complete replacement skill object please
        see skills.json in data
      */
    },
    "type": 0 /* any number from 0 to 3 (inclusive) */,
    "set": "new description",
    "opsi_set": "new opsi description",
    "name": "New Skill Name",
    "append": "Text appended to description.",
    "prepend": "Text prepended to description.",
    "replace": {
      "existing": "old",
      "with": "new",
      "all": true,
      "opsi": false,
      "inhibit_non_opsi": false
      },
    "inject_value": {
      "index": 1,
      "values": ["v1","v2",...],
      "opsi": false,
      "inhibit_non_opsi": false
      },
    "override_values": ["v1","v2",...],
    "override_values_opsi": ["..."],
    "remove_values": [0,2],
    "remove_values_opsi": [1],
    "set_value_length": 5,
    "set_value_length_opsi": 3
  }
}
```

- Note that `skill_id` is the base id of the skill.

**All keys are optional.**

Explanation of keys:
- `full`: Replace the entire skill structure with the provided object.
- `type`: Replace the skill type (number from 0 to 3 inclusive).
- `set`: Replace the primary description (entire text).
- `opsi_set`: Replace the opsi description entirely.
- `name`: Replace the skill name.
- `append` / `prepend`: Append or prepend text to the primary description.
- `replace`: Object describing a textual replacement in the description(s):
  - `existing`: substring to replace
  - `with`: replacement text
  - `all`: boolean; if true replace all occurrences, otherwise only the first (can be absent)
  - `opsi`: boolean; if true also affect opsi descriptions (can be absent)
  - `inhibit_non_opsi`: boolean; only meaningful when `opsi` is true. When set, the replacement is applied only to the opsi description.
- `inject_value`: Insert a new entry into the skill's values array at the given index.
  - `index`: numeric index where the new values will be injected
  - `values`: array of strings, one per skill level (commonly length 10). If fewer values than expected are provided, empty entries will be **prepended** to reach expected length.
  - Note: injection usually requires adding a placeholder like $1 in the description to make use of the injected values.
  - `opsi`: boolean; if true also affect opsi values (can be absent)
  - `inhibit_non_opsi`: boolean; only meaningful when `opsi` is true. When set, the replacement is applied only to the opsi values.
- `override_values`: Replace the entire values array with the provided array (no prepending behavior).
- `override_values_opsi`: Same as override_values but applied to the opsi values array only.
- `remove_values` / `remove_values_opsi`: Arrays of indices to remove from the values or opsi values arrays, respectively.
- `set_value_length` / `set_value_length_opsi`: Numeric length to truncate the values array to (removes exceeding values).

Important rules and notes:
- **Keys whose names begin with `original` MUST NEVER be edited manually. They are automatically added and used to detect when a skill changes description in-game. Do not add, delete, or modify any `original*` keys.**
- opsi refers to the operation siren description when present. Many operations accept `opsi` and `inhibit_non_opsi` flags to control whether changes affect the opsi text and whether they should be restricted to it.
- Only use opsi-specific operations on skills that actually have a dedicated opsi description. Applying them to other skills will cause the correction script to crash.
- When combining multiple keys, operations are applied in order of: `full`, `type`, `set`, `opsi_set`, `name`, `append`, `prepend`, `replace`, `inject_value`, `override_values`, `override_values_opsi`, `remove_values`, `remove_values_opsi`, `set_value_length`, `set_value_length_opsi`.
- Using `full` does not prevent subsequent operations from being applied, since modifications are processed according to the order above. However, combining `full` with other operations is generally unnecessary.
- When doing textual replacements or injections, verify that descriptions include placeholders (e.g., $1) if values are relied upon.
- Text replacements may include explanatory comments for end users. Such comments must use the format `{text snippet|commentary}`.
- Please avoid providing too few entries for `inject_value` even if theoretically handled.
- Many `set` and `opsi_set` already in the files are merely done for formatting skills. Submitting PRs that do so is entirely fine.
- When formatting descriptions as enumerations, prefer the form: `\n• <bullet point 1>\n• <bullet point 2>\n...`
- To separate paragraphs, prefer using a double newline.

---

Please excuse some of the questionable format choices. These files were designed years ago and have never been revisited or cleaned up.