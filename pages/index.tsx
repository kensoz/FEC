import Link from 'next/link'
import { useRouter } from 'next/router'
import Breadcrumb from '../components/base/breadcrumb'
import Contents from '../components/core/content'
import { getListCollection } from '../firebase/collections'
import type { IList, IListStaticProps } from '../types'

// ホームページ
const Index = ({ list }: Record<'list', IList[]>) => {
  // const { locale } = useRouter()

  return (
    <section className='py-2'>
      {/* パンくずリスト */}
      <Breadcrumb length={list.length} />

      {/* コンテンツカードコンポーネント */}
      <Contents list={list} />

      {/* テスト */}
      {/* <div>
        <Link
          href={{
            pathname: '/search',
            query: { key: 'TypeScript' },
          }}
        >
          search=TypeScript
        </Link>
      </div> */}
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
