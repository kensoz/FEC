// * ------------------------------
// *
// * Recoil
// *
// * ------------------------------
import { atom } from 'recoil'
import { getNavCollection } from '../firebase/api'
import type { IGlobalList, INav } from '../types/index'

// ソート順
export const sortIDState = atom<boolean>({
  key: 'isSortID',
  default: false,
})

// 選択されたModalのリスト
export const listState = atom<IGlobalList[]>({
  key: 'globalList',
  default: [],
})

// 選択されたModalのリスト
export const navState = atom<INav[]>({
  key: 'globalNav',
  default: getNavCollection(),
})
