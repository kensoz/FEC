// * ------------------------------
// *
// * パンくずリスト
// *
// * ------------------------------
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

/**
 * パンくずリスト
 * @param {IPanel} props
 * @return {JSX.Element}
 */
const Breadcrumb = ({ length }: Record<'length', number>) => {
  const { query, locale } = useRouter()

  // パンくずリストのテキスト
  const handleText = (q: string | string[] | undefined): string => {
    if (Array.isArray(q) || q === undefined) return locale === 'ja' ? 'ホーム' : '首页'
    const listZh = new Map<string, string>([
      ['javascript', 'JS基本'],
      ['jsframework', 'js框架'],
    ])
    const listJa = new Map<string, string>([
      ['javascript', 'JSの基本'],
      ['jsframework', 'JSフレームワーク'],
    ])

    return (locale === 'ja' ? listJa.get(q) : listZh.get(q)) || ''
  }

  return (
    <div className='py-2 text-xs flex flex-row items-center text-gray-400'>
      <div>
        <FontAwesomeIcon className='mr-1' icon={faHome} />
        <span>{handleText(query.group)}</span>
      </div>

      <div className='ml-1'>
        <FontAwesomeIcon className='mr-1' icon={faChevronRight} />
        <span>
          {locale === 'ja' ? 'トータル' : '总计'}：{length}
        </span>
      </div>
    </div>
  )
}

export default Breadcrumb
