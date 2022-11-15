import Fuse from 'fuse.js'
import { useRouter } from 'next/router'
import Breadcrumb from '../components/base/breadcrumb'
import Contents from '../components/core/content'
import { getListCollection } from '../firebase/collections'
import type { IList, IListStaticProps } from '../types'

// 検索ページ
const Search = ({ list }: Record<'list', IList[]>) => {
  // router
  const router = useRouter()
  const { key } = router.query

  // 検索Fuse.jsインスタント
  const fuse = new Fuse<IList>(list, { keys: ['name', 'groupName'] })
  const ruseResult: Fuse.FuseResult<IList>[] = fuse.search(Array.isArray(key) || key === undefined ? '' : key)
  const rusedList: IList[] = ruseResult.map((r) => r.item)

  return (
    <section className='py-2'>
      {/* パンくずリスト */}
      <Breadcrumb length={rusedList.length} />

      {/* コンテンツカードコンポーネント */}
      <Contents list={rusedList} />
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
