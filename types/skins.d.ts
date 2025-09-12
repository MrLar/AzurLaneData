/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { type AlServer } from './common'

export interface SkinInfo {
    id: number
    name: string
    type: SkinType
    category: SkinCategory
    servers: AlServer[]
    icon: string
    bg: string | null
    obtain_type: SkinObtainType
    price: number
    currency: number
    is_permanent: boolean
    l2d: boolean
    dynamic: boolean
    custom_bgm: boolean
    dynamic_bg: boolean
    dual_form: boolean
    l2d_plus: boolean
}

// this could be an enum, but TS enums add uneccesary overhead
export type SkinType =
-1 | // default
0 | // normal
1 | // oath
2 | // retrofit
3 | // original
4 | // promo
5 | // valentine
6 // dual form alt

// this could be an enum, but TS enums add uneccesary overhead
export type SkinCategory =
0 | // default
1 | // christmas
2 | // new year
3 | // spring festival
4 | // school girl
6 | // swimsuit
7 | // party dress
8 | // halloween
9 | // casual
10 | // summer fest
11 | // shining star
12 | // special exercise
13 | // sport time
14 | // race queen
15 | // hospital
16 | // bunny girl
17 | // maid
18 | // blood moon
19 | // fairy tale
20 | // home relaxation
21 | // rhythm and steps
22 | // hot spring
23 | // on the job
24 | // rpg
25 | // wild west
26 | // dreamland park
27 | // nile colors
28 | // ninja
9997 | // retrofit
9998 | // oath
9999 // other

export type SkinObtainType =
-1 | // unobtainable
0 | // gems
1 | // core data
2 | // event
3 | // cruise pass
4 | // quest
5 | // prize shop
6 | // oath
7 | // retrofit
8 | // promotional (IRL)
9 | // dual form switching
10 // cruise shop
