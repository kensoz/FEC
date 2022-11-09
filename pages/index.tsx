import Link from 'next/link'
import { useRouter } from 'next/router'
import Contents from '../components/core/content'
import { getListCollection } from '../firebase/collections'
import type { IList, IListStaticProps } from '../types'

// ホームページ
const Index = ({ list }: Record<'list', IList[]>) => {
  const { locale } = useRouter()

  return (
    <section className='pt-5'>
      {/* コンテンツカードコンポーネント */}
      <Contents list={list} />

      {/* インフォメーション */}
      <div className='pt-3 text-center text-xs font-bold text-gray-400'>
        {locale === 'ja' ? 'トータル' : '总计'}：{list.length}
      </div>

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
