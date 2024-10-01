---
title: Mewofficer Related Formulas
---

# Inherit

Meowfficer inherit values have the following ratios for each stat (values not listed are 0% and
stats not present are not affected by officers):

- asw: 100% of directives stat
- aa: 100% of tactics stat
- hp: 100% of logistics stats
- avi: 66% of logistics stats, 33% of tactics stat
- trp: 33% of directives stat, 66% of tactics stat
- fp: 33% of logistics stat, 66% of directives stat

To compute the final multiplier:

- \\(stat = (directives \times ratio_{directives}) + (logistics \times ratio_{logistics}) + (tactics \times ratio_{tactics})\\)
- Inherit value: \\(0.06 \times (\frac{stat}{stat + (2500 \div 9)})\\)
- Both Meowfficers contribute inherit and their values are additive, meaning the final multipler
  used for ship stats is: \\(1 + meofficer1InheritValue + meowfficer2InheritValue\\).
- If you only have 1 officer the multiplier is \\(1 + meofficer1InheritValue\\).
- If you have 0 officers the multiplier is simply just 1.

# Fixed Abilities

Fixed Abilities are represented as a list of Ability IDs where:

- The first 2 IDs represent the starting abilities.
- Every subsequent ability is granted when the Officer Level is a multiple of 5.
- Some IDs in this list are not represented
  in [`meowfficer_abilites`](https://github.com/MrLar/AzurLaneData/tree/main/data/meowfficer_abilities.json) and instead represent that a
  previous ability is upgraded.
    - To find out which ability is upgraded trim the last digit of both and compare them.
    - i.E. 762 is an upgrade of 761 because both are start with 76.
