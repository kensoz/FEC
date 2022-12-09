// * ------------------------------
// *
// * Constant
// *
// * ------------------------------
import { faJs, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import {
  faPalette,
  faBox,
  faPuzzlePiece,
  faSitemap,
  faFlask,
  faMobile,
  faToolbox,
  faHouse,
  IconDefinition,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons'
import en from '../locales/en'
import ja from '../locales/ja'
import zh from '../locales/zh'
import type { INav, IGroupSSGPath, IYear } from '../types/index'

// ----- URL -----
export const github: string = 'https://github.com/kensoz/FEC'
export const fecUrl: string = 'https://fec-tau.vercel.app'
export const mailto: string = 'mailto:renhoujob@gmail.com'

// ----- SSG -----
export const ssgPath: IGroupSSGPath[] = [
  { params: { group: 'javascript' }, locale: 'ja' },
  { params: { group: 'css' }, locale: 'ja' },
  { params: { group: 'node' }, locale: 'ja' },
  { params: { group: 'project' }, locale: 'ja' },
  { params: { group: 'lib' }, locale: 'ja' },
  { params: { group: 'deploy' }, locale: 'ja' },
  { params: { group: 'test' }, locale: 'ja' },
  { params: { group: 'mixed' }, locale: 'ja' },
  { params: { group: 'tool' }, locale: 'ja' },
  { params: { group: 'other' }, locale: 'ja' },
  { params: { group: 'javascript' }, locale: 'zh' },
  { params: { group: 'css' }, locale: 'zh' },
  { params: { group: 'node' }, locale: 'zh' },
  { params: { group: 'project' }, locale: 'zh' },
  { params: { group: 'lib' }, locale: 'zh' },
  { params: { group: 'deploy' }, locale: 'zh' },
  { params: { group: 'test' }, locale: 'zh' },
  { params: { group: 'mixed' }, locale: 'zh' },
  { params: { group: 'tool' }, locale: 'zh' },
  { params: { group: 'other' }, locale: 'zh' },
  { params: { group: 'javascript' }, locale: 'en' },
  { params: { group: 'css' }, locale: 'en' },
  { params: { group: 'node' }, locale: 'en' },
  { params: { group: 'project' }, locale: 'en' },
  { params: { group: 'lib' }, locale: 'en' },
  { params: { group: 'deploy' }, locale: 'en' },
  { params: { group: 'test' }, locale: 'en' },
  { params: { group: 'mixed' }, locale: 'en' },
  { params: { group: 'tool' }, locale: 'en' },
  { params: { group: 'other' }, locale: 'en' },
]

// ----- Nav -----
export const navHome: INav = { id: '99', groupId: 99, groupName: '/', groupNameEn: en.homepage, groupNameZh: zh.homepage, groupNameJa: ja.homepage }

export const navListZh = new Map<string, string>([
  ['javascript', 'JavaScript与框架'],
  ['css', 'CSS与UI相关'],
  ['node', 'Node.js相关'],
  ['project', '前端工程化'],
  ['lib', '常用库'],
  ['deploy', '部署'],
  ['test', '测试'],
  ['mixed', '混合开发'],
  ['tool', 'IDE与工具软件'],
  ['other', '其他'],
])

export const navListJa = new Map<string, string>([
  ['javascript', 'JSとフレームワーク'],
  ['css', 'CSSとUI関連'],
  ['node', 'Node.js関連'],
  ['project', 'バンドルとビルド'],
  ['lib', '常用ライブラリ'],
  ['deploy', 'デプロイ'],
  ['test', 'テスト'],
  ['mixed', 'クロスプラットフォーム'],
  ['tool', 'IDEとソフトウェア'],
  ['other', 'その他'],
])

export const navListEn = new Map<string, string>([
  ['javascript', 'JS & Framework'],
  ['css', 'CSS & UI Framework'],
  ['node', 'Node.js'],
  ['project', 'Bundle & Build'],
  ['lib', 'Library'],
  ['deploy', 'Deploy'],
  ['test', 'Test'],
  ['mixed', 'Cross Platform'],
  ['tool', 'Tool & Software'],
  ['other', 'Other'],
])

export const navIconList = new Map<string, IconDefinition>([
  ['/', faHouse],
  ['javascript', faJs],
  ['css', faPalette],
  ['node', faNodeJs],
  ['project', faBox],
  ['lib', faPuzzlePiece],
  ['deploy', faSitemap],
  ['test', faFlask],
  ['mixed', faMobile],
  ['tool', faToolbox],
  ['other', faEllipsis],
])

// ----- Modal -----
export const year: IYear[] = [
  { value: '~ 1', id: 1 },
  { value: '1 ~ 2', id: 2 },
  { value: '2 ~ 3', id: 3 },
  { value: '3 ~ 5', id: 4 },
  { value: '5 ~ ', id: 5 },
  { value: '-', id: 6 },
]
