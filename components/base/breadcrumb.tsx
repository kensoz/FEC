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
import { defaultNavListZh, defaultNavListJa } from '../../scripts/default'

/**
 * パンくずリスト
 * @param {IPanel} props
 * @return {JSX.Element}
 */
const Breadcrumb = ({ length }: Record<'length', number>): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const { query, locale } = useRouter()

  // ---------- 関数 ----------
  // パンくずリストのテキスト判定
  const handleText = (q: string | string[] | undefined): string => {
    if (Array.isArray(q) || q === undefined) return GET_LOCALS_TEXT(locale, 'homepage')
    return (locale === 'ja' ? defaultNavListJa.get(q) : defaultNavListZh.get(q)) ?? ''
  }

  // ---------- TSX ----------
  return (
    <div className='py-2 text-xs flex flex-row items-center justify-between text-gray-400'>
      <div className='flex flex-row'>
        <Link href='/' passHref>
          <a className='block'>
            <FontAwesomeIcon className='mr-1' icon={faHome} />
          </a>
        </Link>

        <div className='mx-1'>{handleText(query.group)}</div>
      </div>

      <div>
        {GET_LOCALS_TEXT(locale, 'total')}：{length}
      </div>
    </div>
  )
}

export default Breadcrumb
