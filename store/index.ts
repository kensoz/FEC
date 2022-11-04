import { atom } from 'recoil'
// import type { ID} from '../types/index'

export const themeState = atom<boolean>({
  key: 'isDark',
  default: true,
})

// export const dataState = atom<boolean>({
//   key: 'data',
//   default: true,
// })

// export const mobileState = atom<boolean>({
//   key: 'isMobile',
//   default: true,
// })
