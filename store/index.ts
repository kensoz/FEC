import { atom } from 'recoil'

export const themeState = atom<boolean>({
  key: 'isDark',
  default: true,
})
