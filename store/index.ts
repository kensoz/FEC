import { atom, selector } from 'recoil'
import type { INav, IData } from '../types/index'

export const themeState = atom<boolean>({
  key: 'isDark',
  default: true,
})

// export const mobileState = atom<boolean>({
//   key: 'isMobile',
//   default: true,
// })

export const navState = atom<INav[]>({
  key: 'nav',
  default: [],
})

export const dataState = atom<IData[]>({
  key: 'data',
  default: [],
})

// export const dataSelector = selector<IData[]>({
//   key: 'dataSelector',
//   get: ({ get }) => get(dataState),
// })
