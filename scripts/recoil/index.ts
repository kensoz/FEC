// * ------------------------------
// *
// * Recoil
// *
// * ------------------------------

import { atom } from 'recoil'
import type { IGlobalList } from '../../types/index'

// ソート順
export const sortIDState = atom<boolean>({
  key: 'isSortID',
  default: false,
})

// 選択されたリスト
export const listState = atom<IGlobalList[]>({
  key: 'globalList',
  default: [],
})
