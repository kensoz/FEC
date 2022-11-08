import { faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faXmark, IconDefinition, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { getNavCollection } from '../firebase/collections'
import { themeState } from '../store/index'
import type { INav } from '../types'

// サイドナビバー
const Nav = () => {
  const { locale } = useRouter()
  const isDark = useRecoilValue(themeState)

  // nav取得
  const [nav, setNav] = useState<INav[]>([])
  const getNavData = async (): Promise<void> => {
    const navRes = await getNavCollection()
    setNav(navRes)
  }

  useEffect(() => {
    getNavData()
  }, [])

  // icon判断
  const getIcon = (e: number): IconDefinition => {
    const icon = new Map<number, IconDefinition>([
      [1, faJs],
      [2, faReact],
    ])

    return icon.get(e) || faXmark
  }

  return (
    <nav className='w-60 bg-slate-100 pt-2 border-r border-gray-200 shadow-sm flex flex-col items-center'>
      {/* ロゴ */}
      <div className='flex'>
        <Image src='/logo-long.png' objectFit='contain' width={100} height={40} alt='logo' />
      </div>

      <div className='flex flex-col mt-8 font-bold text-gray-600'>
        {/* ホームページ */}
        <div className='py-2 flex flex-row'>
          <div className='mr-3'>
            <FontAwesomeIcon icon={faHouse} />
          </div>

          <Link href='/' passHref>
            {locale === 'ja' ? 'ホームページ' : '首页'}
          </Link>
        </div>

        {/* ナビリスト */}
        {nav.map((e) => (
          <div key={e.id} className='py-2 flex flex-row'>
            <div className='mr-3'>
              <FontAwesomeIcon icon={getIcon(e.groupId)} />
            </div>

            <Link as={`/${e.groupName}`} href='/[group]' passHref>
              {locale === 'ja' ? e.groupNameJa : e.groupNameZh}
            </Link>
          </div>
        ))}

        {/* テスト */}
        <div className='mt-5'>{isDark ? '是isDark' : '不是isDark'}</div>
      </div>
    </nav>
  )
}

export default Nav
