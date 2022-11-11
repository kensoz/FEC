import { useRouter } from 'next/router'
import Breadcrumb from '../components/base/breadcrumb'
import Contents from '../components/core/content'
import { getListCollection } from '../firebase/collections'
import type { IList, IListStaticProps } from '../types'

// 検索ページ
const Search = ({ list }: Record<'list', IList[]>) => {
  const router = useRouter()
  const { key } = router.query
  // const { locale } = useRouter()

  return (
    <section className='py-2'>
      {/* パンくずリスト */}
      <Breadcrumb length={list.length} />

      {/* コンテンツカードコンポーネント */}
      <Contents list={list.filter((e) => e.name === key && e)} />
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
