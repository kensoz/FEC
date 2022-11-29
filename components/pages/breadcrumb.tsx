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
import { navListZh, navListJa } from '../../scripts/constant'
import type { IBreadcrumb } from '../../types'

/**
 * パンくずリスト
 * @param {IBreadcrumb} props
 * @return {JSX.Element}
 */
const Breadcrumb = (props: IBreadcrumb): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const { query, locale } = useRouter()

  // ---------- 関数 ----------
  // パンくずリストのテキスト判定
  const handleText = (q: string | string[] | undefined): string => {
    if (Array.isArray(q) || q === undefined) return GET_LOCALS_TEXT(locale, 'homepage')
    return (locale === 'ja' ? navListJa.get(q) : navListZh.get(q)) ?? ''
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
        {GET_LOCALS_TEXT(locale, 'total')}：{props.length}
      </div>
    </div>
  )
}

export default Breadcrumb
