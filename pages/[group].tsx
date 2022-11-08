import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import Contents from '../components/core/content'
import { getListCollection } from '../firebase/collections'
import { themeState } from '../store/index'
import type { IGroupSSGPath, IList, IListStaticProps } from '../types'

// 動的ルーティング
const Group = ({ list }: Record<'list', IList[]>) => {
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
      <div>{isDark ? '是isDark' : '不是isDark'}</div>
    </section>
  )
}

// ----- SSGパス -----
const paths: IGroupSSGPath[] = [
  { params: { group: 'javascript' }, locale: 'ja' },
  { params: { group: 'jsframework' }, locale: 'ja' },
  { params: { group: 'javascript' }, locale: 'zh' },
  { params: { group: 'jsframework' }, locale: 'zh' },
]

export const getStaticPaths = async () => {
  return { paths, fallback: false }
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
