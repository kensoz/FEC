import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { getData } from '../firebase/data'
import { getNav } from '../firebase/nav'
import { themeState } from '../store'
import type { INav, IData } from '../types'

const Index: NextPage = () => {
  const { locale } = useRouter()
  const t = locale === 'ja' ? 'テスト' : 'test'
  const isDark = useRecoilValue(themeState)

  const [output, setOutput] = useState<INav[]>([])
  const nav = async () => {
    const nav = await getNav()
    setOutput(nav)
  }

  const [output2, setOutput2] = useState<IData[]>([])
  const data = async () => {
    const data = await getData()
    setOutput2(data)
  }

  const testnav = [
    {
      groupNameZh: '全部',
      url: '/',
      group: 1,
      groupNameJa: '全て',
      id: '1',
    },
    {
      groupNameJa: 'JSの基本',
      groupNameZh: 'JS基本',
      url: '/js',
      group: 2,
      id: '2',
    },
    {
      group: 3,
      groupNameJa: 'JSフレームワーク',
      url: '/jsfw',
      groupNameZh: 'JS框架',
      id: '3',
    },
  ]

  const testdata = [
    {
      descriptionZh: '-',
      descriptionJa: '-',
      urlZh: '-',
      urlJa: '-',
      group: 2,
      url: '-',
      sort: 1,
      name: 'JavaScript',
      groupNameZh: 'JS基本',
      groupNameJa: 'JSの基本',
      img: '-',
      id: '1',
    },
  ]

  useEffect(() => {
    nav()
    data()
  }, [])

  console.log(output)
  console.log(output2)

  return (
    <section>
      <div>{isDark ? '黑色' : '白色'}</div>

      <div className='mb-5'>
        <h2>i18n</h2>
        <p className='text-3xl'>{t}</p>
      </div>

      <div className='mb-5'>
        <button onClick={() => {}}>IsMoblie</button>
      </div>

      <div className='mb-5'>
        <h2>icon</h2>
        <FontAwesomeIcon icon={faUser} size={'lg'} />
        <FontAwesomeIcon icon={faTwitter} />
      </div>

      <div className='mb-5'>
        <h2>link</h2>
        <Link href='/' locale='zh' passHref>
          zh
        </Link>
        <Link href='/' locale='ja' passHref>
          ja
        </Link>
        <Link href='/view' locale='ja' passHref>
          view
        </Link>
      </div>
    </section>
  )
}

export default Index
