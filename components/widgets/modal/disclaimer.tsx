// * ------------------------------
// *
// * Disclaimer Modal content
// *
// * ------------------------------
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
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

  // ---------- TSX ----------
  return (
    <div className='flex flex-col p-2 font-mDisclaimer text-gray-600 dark:text-gray-300'>
      {/* タイトル */}
      <div className='flex flex-row justify-between items-center px-2 py-1 border rounded-md shadow-sm bg-slate-100 dark:bg-slate-700 border-gray-200 dark:border-gray-600'>
        <div className='font-bold'>{GET_LOCALS_TEXT(locale, 'disclaimer')}</div>

        <button type='button' className='text-lg' onClick={props.closeModalContent}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>

      <div className='flex flex-col py-2 mt-2'>
        <div className='font-bold border-b-2 border-gray-200 dark:border-gray-600'>{GET_LOCALS_TEXT(locale, 'dtBehavior')}</div>
        <div className='text-xs leading-4 pt-2'>{GET_LOCALS_TEXT(locale, 'dcBehavior')}</div>
      </div>

      <div className='flex flex-col py-2'>
        <div className='font-bold border-b-2 border-gray-200 dark:border-gray-600'>{GET_LOCALS_TEXT(locale, 'dtCopyright')}</div>
        <div className='text-xs leading-4 pt-2'>{GET_LOCALS_TEXT(locale, 'dcCopyright')}</div>
      </div>

      <div className='flex flex-col py-2'>
        <div className='font-bold border-b-2 border-gray-200 dark:border-gray-600'>{GET_LOCALS_TEXT(locale, 'dtSource')}</div>
        <div className='text-xs leading-4 pt-2'>{GET_LOCALS_TEXT(locale, 'dcSource')}</div>
      </div>

      <div className='flex flex-col py-2'>
        <div className='font-bold border-b-2 border-gray-200 dark:border-gray-600'>{GET_LOCALS_TEXT(locale, 'dtContact')}</div>
        <div className='text-xs leading-4 pt-2'>{GET_LOCALS_TEXT(locale, 'dcContact')}</div>
        <ul className='list-disc list-inside text-xs pt-2'>
          <li>Mail：renhoujob@gmail.com</li>
          <li>GitHub：https://github.com/kensoz/FEC</li>
        </ul>
      </div>

      <div className='flex flex-col py-2 mb-2'>
        <div className='font-bold border-b-2 border-gray-200 dark:border-gray-600'>{GET_LOCALS_TEXT(locale, 'dtAbout')}</div>
        <div className='text-xs leading-4 pt-2'>{GET_LOCALS_TEXT(locale, 'dcAbout')}</div>
        <ul className='list-disc list-inside text-xs pt-2'>
          <li>Copyright © 2022 renhou Front-End-Collection</li>
          <li>Code License：MIT</li>
        </ul>
      </div>
    </div>
  )
}

export default Disclaimer
