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
 * @param { IModalContent } props
 * @return { JSX.Element }
 */
const Disclaimer = (props: IModalContent): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const { locale } = useRouter()

  // ---------- TSX ----------
  return (
    <div className='flex flex-col p-2 text-gray-600 dark:text-gray-300'>
      {/* タイトル */}
      <div className='flex flex-row items-center justify-between rounded-md border border-gray-200 bg-slate-100 px-2 py-1 shadow-sm dark:border-gray-600 dark:bg-slate-700'>
        <div className='font-bold'>{GET_LOCALS_TEXT(locale, 'disclaimer')}</div>

        <button type='button' aria-label='close modal' className='fec-clear-input text-lg xl:hover:opacity-70' onClick={props.closeModalContent}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>

      <div className='mt-2 flex flex-col py-2'>
        <div className='border-b-2 border-gray-200 font-bold dark:border-gray-600'>{GET_LOCALS_TEXT(locale, 'dtBehavior')}</div>
        <div className='pt-2 text-xs leading-4'>{GET_LOCALS_TEXT(locale, 'dcBehavior')}</div>
      </div>

      <div className='flex flex-col py-2'>
        <div className='border-b-2 border-gray-200 font-bold dark:border-gray-600'>{GET_LOCALS_TEXT(locale, 'dtCopyright')}</div>
        <div className='pt-2 text-xs leading-4'>{GET_LOCALS_TEXT(locale, 'dcCopyright')}</div>
      </div>

      <div className='flex flex-col py-2'>
        <div className='border-b-2 border-gray-200 font-bold dark:border-gray-600'>{GET_LOCALS_TEXT(locale, 'dtSource')}</div>
        <div className='pt-2 text-xs leading-4'>{GET_LOCALS_TEXT(locale, 'dcSource')}</div>
      </div>

      <div className='flex flex-col py-2'>
        <div className='border-b-2 border-gray-200 font-bold dark:border-gray-600'>{GET_LOCALS_TEXT(locale, 'dtContact')}</div>
        <div className='pt-2 text-xs leading-4'>{GET_LOCALS_TEXT(locale, 'dcContact')}</div>
        <ul className='list-inside list-disc pt-2 text-xs'>
          <li>Mail：renhoujob@gmail.com</li>
          <li>GitHub：https://github.com/kensoz/FEC</li>
        </ul>
      </div>

      <div className='mb-2 flex flex-col py-2'>
        <div className='border-b-2 border-gray-200 font-bold dark:border-gray-600'>{GET_LOCALS_TEXT(locale, 'dtAbout')}</div>
        <div className='pt-2 text-xs leading-4'>{GET_LOCALS_TEXT(locale, 'dcAbout')}</div>
        <ul className='list-inside list-disc pt-2 text-xs'>
          <li>Copyright © 2023 renhou Front-End-Collection（FEC）</li>
          <li>Code License：MIT</li>
          <li>Link Free</li>
        </ul>
      </div>
    </div>
  )
}

export default Disclaimer
