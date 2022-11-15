// * ------------------------------
// *
// * Default Variable
// *
// * ------------------------------
import { faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faHouse, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import ja from '../locales/ja'
import zh from '../locales/zh'
import type { INav } from '../types/index'

// ----- nav&path -----
// ホーム
export const defaultNavHome: INav = { id: '99', groupId: 99, groupName: '/', groupNameZh: zh.homepage, groupNameJa: ja.homepage }

// ナビリスト
export const defaultNavListZh = new Map<string, string>([
  ['javascript', 'JS基本'],
  ['jsframework', 'js框架'],
])

export const defaultNavListJa = new Map<string, string>([
  ['javascript', 'JSの基本'],
  ['jsframework', 'JSフレームワーク'],
])

export const defaultNavIconList = new Map<string, IconDefinition>([
  ['/', faHouse],
  ['javascript', faJs],
  ['jsframework', faReact],
])
