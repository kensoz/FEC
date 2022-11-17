// * ------------------------------
// *
// * Recoil
// *
// * ------------------------------

import { atom } from 'recoil'
import type { IpanelList } from '../../types/index'

// ソート順
export const sortState = atom<boolean>({
  key: 'isSort',
  default: false,
})

// 選択されたリスト
export const listState = atom<IpanelList[]>({
  key: 'globalList',
  default: [],
})
