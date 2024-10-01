---
title: Ship Fleet Tech Documentation
---

# Fleet Tech

Contains information about bonuses and points granted for each fleet tech task of a ship. Contains
the following properties:

|    Property     |                          Type                           |                                              Description                                              |
| :-------------: | :-----------------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
|   **collect**   |     [`ShipFleetTechBonus`](#ship-fleet-tech-bonus)      |                                  Bonus Data for collecting the ship.                                  |
|    **level**    |     [`ShipFleetTechBonus`](#ship-fleet-tech-bonus)      |                           Bonus Data for reaching level 120 with the ship.                            |
| **limit_break** | [`Partial(ShipFleetTechBonus)`](#ship-fleet-tech-bonus) | Bonus Data for reaching max limit break with the ship.<br>**Only contains "pts" at time of writing.** |


# Ship Fleet Tech Bonus

Represents the bonus and points granted for a single fleet technology task of a ship.
It extends [`FleetTechBonus`](../tech_groups/index.md#fleet-tech-bonus) and additionally provides: 

| Property |   Type   |                                          Description                                           |
| :------: | :------: | :--------------------------------------------------------------------------------------------: |
| **pts**  | `number` | Amount of tech points granted. To establish what nation these go towards use the ships nation. |