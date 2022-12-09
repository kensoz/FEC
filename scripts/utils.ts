// * ------------------------------
// *
// * Common Utils
// *
// * ------------------------------
import { faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { navIconList } from '../scripts/constant'

// ----- nav -----
/**
 * icon判断
 * @param { String } e
 * @return { IconDefinition }
 */
const getIcon = (e: string): IconDefinition => {
  return navIconList.get(e) ?? faXmark
}

/**
 * 現在のパス判断
 * @param { String } asPath
 * @param { String } e
 * @return { Boolean }
 */
const isCurrentPath = (asPath: string, e: string): boolean => {
  if (e === asPath) return true
  if (`/${e}/` === asPath) return true

  return false
}

export { getIcon, isCurrentPath }
