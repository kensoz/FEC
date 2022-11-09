import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import Contents from '../components/core/content'
import { getListCollection } from '../firebase/collections'
import { themeState } from '../store/index'
import type { IList, IListStaticProps } from '../types'

// ホームページ
const Index = ({ list }: Record<'list', IList[]>) => {
  const { locale } = useRouter()
  const isDark = useRecoilValue(themeState)

  return (
    <section className='pt-5'>
      {/* コンテンツカードコンポーネント */}
      <Contents list={list} />

      {/* インフォメーション */}
      <div className='pt-3 text-center text-xs font-bold text-slate-400'>
        {locale === 'ja' ? 'トータル' : '总计'}：{list.length}
      </div>

      {/* テスト */}
      <div>来了{isDark ? '是isDark' : '不是isDark'}</div>
      <div>
        <Link
          href={{
            pathname: '/search',
            query: { key: 'TypeScript' },
          }}
        >
          search=TypeScript
        </Link>
      </div>
    </section>
  )
}

// ----- SSGデータ取得 -----
export const getStaticProps = async (): Promise<IListStaticProps> => {
  const list: IList[] = await getListCollection()

  return {
    props: {
      list,
    },
  }
}

export default Index
