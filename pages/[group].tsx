import Breadcrumb from '../components/base/breadcrumb'
import Contents from '../components/core/content'
import { getListCollection } from '../firebase/collections'
import { defaultNavPath } from '../scripts/default'
import type { IGroupSSGPath, IList, IListStaticProps } from '../types'

// ----- 動的ルーティングページ -----
const Group = ({ list }: Record<'list', IList[]>): JSX.Element => {
  return (
    <section className='py-2'>
      {/* パンくずリスト */}
      <Breadcrumb length={list.length} />

      {/* コンテンツカードコンポーネント */}
      <Contents list={list} />
    </section>
  )
}

// ----- SSG動的パス -----
export const getStaticPaths = async () => {
  return { paths: defaultNavPath, fallback: false }
}

// ----- SSGデータ取得 -----
export const getStaticProps = async (path: IGroupSSGPath): Promise<IListStaticProps> => {
  const list: IList[] = await getListCollection(path.params.group)

  return {
    props: {
      list,
    },
  }
}

export default Group
