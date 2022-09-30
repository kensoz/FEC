import { atom } from 'recoil'

export const themeState = atom<boolean>({
  key: 'isDark',
  default: true,
})

// export const mobileState = atom<boolean>({
//   key: 'isMobile',
//   default: true,
// })
