import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { getData } from '../firebase/data'
import { themeState } from '../store'
import type { IData } from '../types'

const Index: NextPage = () => {
  const { locale } = useRouter()
  const isDark = useRecoilValue(themeState)

  const [data, setData] = useState<IData[]>([])
  const requestData = async () => {
    const data = await getData()
    setData(data)
  }

  useEffect(() => {
    requestData()
  }, [])

  return (
    <section className='pt-5'>
      {/* カード */}
      <div className='grid grid-cols-5 gap-4'>
        {data.map((e) => (
          <div className='bg-white border border-gray-200 rounded-md shadow-sm font-medium text-gray-600' key={e.id}>
            {/* 写真 */}
            <Image src={e.img} layout='responsive' width={300} height={150} alt='brands' />

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

export default Index
