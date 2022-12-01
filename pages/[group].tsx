import Breadcrumb from '../components/pages/breadcrumb'
import Card from '../components/pages/card'
import { getListCollection } from '../firebase/api'
import { ssgPath } from '../scripts/constant'
import type { IGroupSSGPath, IList, IListStaticProps } from '../types'

// ----- 動的ルーティングページ -----
const Group = ({ list }: Record<'list', IList[]>): JSX.Element => {
  return (
    <section className='py-2'>
      {/* パンくずリスト */}
      <Breadcrumb length={list.length} />

      {/* カード */}
      <Card list={list} />
    </section>
  )
}

// ----- SSG動的パス -----
export const getStaticPaths = async () => {
  return { paths: ssgPath, fallback: false }
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
