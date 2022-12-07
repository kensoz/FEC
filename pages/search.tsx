import Fuse from 'fuse.js'
import { useRouter } from 'next/router'
import Breadcrumb from '../components/contents/breadcrumb'
import Card from '../components/contents/card'
import { getListCollection } from '../firebase/api'
import type { IList, IListStaticProps } from '../types'

// ----- 検索ページ -----
const Search = ({ list }: Record<'list', IList[]>): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const router = useRouter()
  const { key } = router.query

  // ---------- 関数 ----------
  // 検索Fuse.jsインスタント
  const fuse = new Fuse<IList>(list, { keys: ['name', 'groupName'] })
  const ruseResult: Fuse.FuseResult<IList>[] = fuse.search(Array.isArray(key) || key === undefined ? '' : key)
  const rusedList: IList[] = ruseResult.map((r: Fuse.FuseResult<IList>) => r.item)

  return (
    <section className='py-2'>
      {/* パンくずリスト */}
      <Breadcrumb length={rusedList.length} />

      {/* カード */}
      <Card list={rusedList} />
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
