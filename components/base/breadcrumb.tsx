// * ------------------------------
// *
// * パンくずリスト
// *
// * ------------------------------
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import GET_LOCALS_TEXT from '../../locales'
import { defaultNavListZh, defaultNavListJa } from '../../scripts/defaultData'

/**
 * パンくずリスト
 * @param {IPanel} props
 * @return {JSX.Element}
 */
const Breadcrumb = ({ length }: Record<'length', number>) => {
  // router
  const { query, locale } = useRouter()

  // パンくずリストのテキスト
  const handleText = (q: string | string[] | undefined): string => {
    if (Array.isArray(q) || q === undefined) return GET_LOCALS_TEXT(locale, 'homepage')
    return (locale === 'ja' ? defaultNavListJa.get(q) : defaultNavListZh.get(q)) ?? ''
  }

  return (
    <div className='py-2 text-xs flex flex-row items-center text-gray-400'>
      <Link href='/' passHref>
        <a className='block'>
          <FontAwesomeIcon className='mr-1' icon={faHome} />
        </a>
      </Link>

      <div className='mx-1'>{handleText(query.group)}</div>

      <div>
        <span className='mr-1 font-bold'>/</span>
        <span>
          {GET_LOCALS_TEXT(locale, 'total')}：{length}
        </span>
      </div>
    </div>
  )
}

export default Breadcrumb
