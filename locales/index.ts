// * ------------------------------
// *
// * FEC i18n
// *
// * ------------------------------
import en from './en'
import ja from './ja'
import zh from './zh'

/**
 * 多言語対応テキスト取得
 * @param { Undefined | String } i18n
 * @param { String } item
 * @return { String }
 */
const GET_LOCALS_TEXT = (i18n: string | undefined, item: string): string => {
  if (!i18n) return 'No text'
  return i18n === 'ja' ? ja[item] : i18n === 'zh' ? zh[item] : en[item]
}

export default GET_LOCALS_TEXT
