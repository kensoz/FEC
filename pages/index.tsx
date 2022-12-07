import Breadcrumb from '../components/contents/breadcrumb'
import Card from '../components/contents/card'
import { getListCollection } from '../firebase/api'
import type { IList, IListStaticProps } from '../types'

// ----- ホームページ -----
const Index = ({ list }: Record<'list', IList[]>): JSX.Element => {
  return (
    <section className='py-2'>
      {/* パンくずリスト */}
      <Breadcrumb length={list.length} />

      {/* カード */}
      <Card list={list} />
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
