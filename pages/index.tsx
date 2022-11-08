import { useRouter } from 'next/router'
import { useRecoilValue, useRecoilState } from 'recoil'
import Contents from '../components/core/content'
import { getData } from '../firebase/data'
import type { IData, IDataStaticProps } from '../types'

const Index = ({ data }: Record<'data', IData[]>) => {
  const { locale } = useRouter()
  // const isDark = useRecoilValue(themeState)

  return (
    <section className='pt-5'>
      {/* カード */}
      <Contents data={data} />

      {/* インフォメーション */}
      <div className='pt-3 text-center text-xs font-bold text-slate-400'>
        {locale === 'ja' ? 'トータル' : '总计'}：{data.length}
      </div>
    </section>
  )
}

export const getStaticProps = async (): Promise<IDataStaticProps> => {
  const data: IData[] = await getData()

  return {
    props: {
      data,
    },
  }
}

export default Index
