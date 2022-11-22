// * ------------------------------
// *
// * Recoil
// *
// * ------------------------------

import { atom } from 'recoil'
import type { IpanelList } from '../../types/index'

// ソート順
export const sortIDState = atom<boolean>({
  key: 'isSortID',
  default: false,
})
export const sortAZState = atom<boolean>({
  key: 'isSortAZ',
  default: false,
})

// 選択されたリスト
export const listState = atom<IpanelList[]>({
  key: 'globalList',
  default: [],
})
