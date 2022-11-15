// * ------------------------------
// *
// * Recoil
// *
// * ------------------------------

import { atom } from 'recoil'
import type { IpanelList } from '../../types/index'

export const listState = atom<IpanelList[]>({
  key: 'globalList',
  default: [],
})
