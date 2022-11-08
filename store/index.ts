import { atom } from 'recoil'

export const themeState = atom<boolean>({
  key: 'isDark',
  default: true,
})

// export const mobileState = atom<boolean>({
//   key: 'isMobile',
//   default: true,
// })

// Next.js 慎用
// export const navState = atom<INav[]>({
//   key: 'nav',
//   default: [],
// })

// export const dataState = atom<IList[]>({
//   key: 'data',
//   default: [],
// })
