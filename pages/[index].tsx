import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { getData } from '../firebase/data'
import { themeState } from '../store'
import type { IData, IDataStaticProps } from '../types'

const Index = ({ data }: Record<'data', IData[]>) => {
  const { locale } = useRouter()
  // const isDark = useRecoilValue(themeState)

  return (
    <section className='pt-5'>
      {/* カード */}
      <div className='grid grid-cols-5 gap-4'>
        {data.map((e) => (
          <div className='border border-gray-200 rounded-md shadow-sm font-medium text-gray-600  bg-slate-100' key={e.id}>
            {/* 写真 */}
            <Image className='border-b border-gray-200' src={e.img} layout='responsive' width={300} height={150} alt='brands' />

            {/* 紹介 */}
            <div className='p-2'>
              <div>{e.groupNameJa}</div>
              <div>{e.name}</div>
              <div>{e.url}</div>
            </div>
          </div>
        ))}
      </div>

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
      { params: { index: 'home' }, locale: 'ja' },
      { params: { index: 'javascript' }, locale: 'ja' },
      { params: { index: 'jsframework' }, locale: 'ja' },
      { params: { index: 'home' }, locale: 'zh' },
      { params: { index: 'javascript' }, locale: 'zh' },
      { params: { index: 'jsframework' }, locale: 'zh' },
    ],
    fallback: false,
  }
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
