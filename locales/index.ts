// * ------------------------------
// *
// * FEC i18n
// *
// * ------------------------------
import ja from './ja'
import zh from './zh'

const GET_LOCALS_TEXT = (i18n: string | undefined, item: string): string => {
  if (!i18n) return 'No text'
  return i18n === 'ja' ? ja[item] : zh[item]
}

export default GET_LOCALS_TEXT
