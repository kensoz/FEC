// * ------------------------------
// *
// * FEC i18n
// *
// * ------------------------------
import en from './en'
import ja from './ja'
import zh from './zh'

const GET_LOCALS_TEXT = (i18n: string | undefined, item: string): string => {
  if (!i18n) return 'No text'
  return i18n === 'ja' ? ja[item] : i18n === 'zh' ? zh[item] : en[item]
}

export default GET_LOCALS_TEXT
