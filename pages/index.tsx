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
    <section className='grid grid-cols-4 gap-4 p-5'>
      {/* <div>
        {isDark ? '黑色' : '白色'}-{locale === 'ja' ? 'テスト' : '测试'}
      </div> */}

      {data.map((e) => (
        <div className='test' key={e.id}>
          <Image src={e.img} layout='responsive' width={300} height={150} alt='brands' />
          <div>{e.groupNameJa}</div>
          <div>{e.name}</div>
          <div>{e.url}</div>
        </div>
      ))}
    </section>
  )
}

export default Index
