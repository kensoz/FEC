import { useRouter } from 'next/router'
import Contents from '../components/core/content'
import { getListCollection } from '../firebase/collections'
import type { IList, IListStaticProps } from '../types'

// 検索ページ
const Search = ({ list }: Record<'list', IList[]>) => {
  const router = useRouter()
  const { locale } = useRouter()
  const { key } = router.query

  return (
    <section className='pt-5'>
      {/* コンテンツカードコンポーネント */}
      <Contents list={list.filter((e) => e.name === key && e)} />

      {/* インフォメーション */}
      <div className='pt-3 text-center text-xs font-bold text-gray-400'>
        {locale === 'ja' ? 'トータル' : '总计'}：{list.length}
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

export default Search
