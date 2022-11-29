// * ------------------------------
// *
// * Disclaimer Modal content
// *
// * ------------------------------
import { faStar, faSort, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import GET_LOCALS_TEXT from '../../../locales'
import type { IModalContent } from '../../../types'

/**
 * Disclaimer Modal content
 * @param {IModalContent} props
 * @return {JSX.Element}
 */
const Disclaimer = (props: IModalContent): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const { locale } = useRouter()

  // ---------- 関数 ----------

  // ---------- TSX ----------
  return (
    <div className='flex flex-col'>
      {/* ボタングループ */}
      <div className='py-2 flex flex-row justify-center items-center border-t border-gray-200 dark:border-gray-600'>
        <button type='button' className='base-btn px-3 py-1 font-medium' onClick={props.closeModalContent}>
          {GET_LOCALS_TEXT(locale, 'close')}
        </button>
      </div>
    </div>
  )
}

export default Disclaimer
