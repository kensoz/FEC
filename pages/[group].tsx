import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRecoilValue, useRecoilState } from 'recoil'
import Contents from '../components/core/content'
import { getData } from '../firebase/data'
import { themeState, dataState } from '../store'
import type { IData, IDataStaticProps } from '../types'

const Group = ({ data }: Record<'data', IData[]>) => {
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

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { group: 'javascript' }, locale: 'ja' },
      { params: { group: 'jsframework' }, locale: 'ja' },
      { params: { group: 'javascript' }, locale: 'zh' },
      { params: { group: 'jsframework' }, locale: 'zh' },
    ],
    fallback: false,
  }
}

export const getStaticProps = async (): Promise<IDataStaticProps> => {
  const data: IData[] = await getData()
  // console.log(path.params.group)

  return {
    props: {
      data,
    },
  }
}

export default Group
