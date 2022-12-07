// * ------------------------------
// *
// * Recoil
// *
// * ------------------------------
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import type { IGlobalList } from '../types/index'

// 永続化
const { persistAtom } = recoilPersist()

// ソート順
export const sortIDState = atom<boolean>({
  key: 'isSortID',
  default: false,
})

// 選択されたModalのリスト
export const listState = atom<IGlobalList[]>({
  key: 'globalList',
  default: [],
  effects_UNSTABLE: [persistAtom],
})
