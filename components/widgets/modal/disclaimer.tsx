// * ------------------------------
// *
// * Disclaimer Modal content
// *
// * ------------------------------
import { faStar, faSort, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
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
    <div className='flex flex-col'>
      {/* タイトル */}
      <div className='flex flex-row justify-between items-center p-2 border-b shadow-sm bg-slate-100 dark:bg-slate-700 border-gray-200 dark:border-gray-600'>
        <div className='font-bold'>{GET_LOCALS_TEXT(locale, 'disclaimer')}</div>

        <button type='button' className='text-lg' onClick={props.closeModalContent}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>

      <div className='flex flex-col p-2'>
        <div>版权信息</div>
        <div className='text-xs'>
          FEC（）刊载的所有内容，包括文字、图标、网址均在下述搜集。
          FEC提供的内容仅用于个人学习、研究或欣赏。不保证内容的正确性。通过使用本站内容随之而来的风险与本站无关
          访问者可将本网站提供的内容或服务用于个人学习、研究或欣赏，以及其他非商业性或非盈利性用途，但同时应遵守著作权法及其他相关法律的规定，不得侵犯本网站及相关权利人的合法权利。
          本网站内容原作者如不愿意在本网站刊登内容，请及时通知本站，予以删除。
        </div>

        <ul className='list-disc list-inside'>
          <li>---</li>
          <li>---</li>
        </ul>
      </div>

      <div className='flex flex-col p-2'>
        <div>图标信息</div>
        <div className='text-xs'>FEC（）刊载图标来源于Simple Icons并遵守Simple Icons协议内容，详细想看</div>
      </div>

      <div className='flex flex-col p-2'>
        <div>您的行为</div>
        <div className='text-xs'>当您使用本站点时，说明您已经同意并接受本页面的所有信息。</div>
      </div>

      <div className='flex flex-col p-2'>
        <div>关于本站</div>
        <div className='text-xs'>可以联系</div>
      </div>
    </div>
  )
}

export default Disclaimer
