/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

export interface SkillUpgradeData {
    replace: number | null
    with: number
}

export interface StatElement {
    values: number[]
    stat: ShipStatKey
    random?: number
}

export type WeaponStat = 'fp' | 'trp' | 'avi' | 'aa' | 'asw'

export type MeowInheritKey = WeaponStat | 'hp'

export type TechStatKey = MeowInheritKey | 'rld' | 'hit' | 'eva'

export type ScalableStatKey = TechStatKey | 'spd' | 'luck'

export type ShipStatKey =
    ScalableStatKey
    | 'oxygen'
    | 'ammo'
    | 'range_level'

export type BuffStatKey = ShipStatKey | 'damage' | 'crit_rate' | 'damage_reduction' | 'damage_taken'

export type FleetRowType = 'van' | 'main'

export type AlServer = 'EN' | 'JP' | 'CN'

export interface Currency {
    id: number
    name: string
    icon: string | null
    linkable: boolean
}

// this could be an enum, but TS enums add uneccesary overhead
export type Hull =
0 |// unknown
1 |// dd
2 | // cl
3 | // ca
4 | // bc
5 | // bb
6 | // cvl
7 | // cv
8 | // ss
9 | // cav (unused)
10 | // bbv
11 | // ct (unused)
12 | // ar
13 | // bm
14 | // torpedo ship (enemy only)
15 | // cargo/transport ship (enemy only)
16 | // bombing ship (enemy only)
17 | // ssv
18 | // cb
19 | // ae (or transport for enemies)
20 | // ddgv
21 | // ddgm
22 | // ixs
23 | // ixv
24 | // ixm
25 // special

// this could be an enum, but TS enums add uneccesary overhead
export type EquipmentType =
0 | // unknown
1 | // dd gun
2 | // cl gun
3 | // ca gun
4 | // bb gun
5 | // torpedo
6 | // aa gun (normal)
7 | // fighter
8 | // torpedo bomber
9 | // dive bomber
10 | // auxiliary
11 | // cb gun
12 | // seaplane
13 | // submarine torpedo
14 | // depth charge
15 | // asw bomber
17 | // asw heli
18 | // cargo
20 | // missile
21 | // aa gun (fuze)
99 // raid bomber

// this could be an enum, but TS enums add uneccesary overhead
export type Nation =
0 | // universal
1 | // eagle union
2 | // royal navy
3 | // sakura empire
4 | // iron blood
5 | // dragon empery
6 | // serdengna empire
7 | // norhern parliament
8 | // iris libre
9 | // vichiya dominion
10 | // iris orthodoxy
11 | // kingdom of tulipa
94 | // United Countil (speculation)
95 | // X (speculation)
96 | // tempesta
97 | // meta
98 | // burin (universal for bulins)
99 | // siren
101 | // neptunia
102 | // bili
103 | // utawarerumono
104 | // kizuna ai
105 | // hololive
106 | // venus vacation
107 | // idol master
108 | // ssss
109 | // ryza
110 | // senran
111 |// to love ru
112 | // BLACK★ROCK SHOOTER
113 | // yumia
114 // danmachi

// this could be an enum, but TS enums add uneccesary overhead
export type Rarity =
1 | // t1 common
2 | // t2 common
3 | // rare
4 | // elite
5 | // super rare
6 // ultra rare
