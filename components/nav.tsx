import { faJs, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getNavCollection } from '../firebase/collections'
import { defaultNavHome } from '../scripts/defaultData'
import type { INav } from '../types'

// サイドナビバー
const Nav = () => {
  const { locale } = useRouter()

  // nav取得
  const [nav, setNav] = useState<INav[]>([])
  const getNavData = async (): Promise<void> => {
    const navRes = await getNavCollection()
    navRes.unshift(defaultNavHome)
    setNav(navRes)
  }

  useEffect((): void => {
    getNavData()
  }, [])

  // icon判断
  const getIcon = (e: number): IconDefinition => {
    const icon = new Map<number, IconDefinition>([
      [99, faHouse],
      [1, faJs],
      [2, faReact],
    ])

    return icon.get(e) || faXmark
  }

  return (
    <nav className='min-w-max border-r shadow-sm hidden md:flex flex-col bg-slate-100  dark:bg-slate-800 border-gray-200 dark:border-gray-600'>
      {/* ロゴ */}
      <div className='flex justify-center py-4 border-b-2 border-gray-200 dark:border-gray-600'>
        <Link href='/' passHref>
          <a>
            <Image src='/logo.png' objectFit='contain' width={115} height={40} alt='logo' />
          </a>
        </Link>
      </div>

      {/* ナビリスト */}
      <div className='flex flex-col flex-grow p-6 font-bold text-sm'>
        {nav.map((e: INav) => (
          <div key={e.id} className='flex flex-row'>
            <Link as={e.groupName === '/' ? undefined : `/${e.groupName}`} href={e.groupName === '/' ? '/' : '/[group]'} passHref>
              <a className='nav-list-btn'>
                <span className='mr-3'>
                  <FontAwesomeIcon icon={getIcon(e.groupId)} />
                </span>

                <span>{locale === 'ja' ? e.groupNameJa : e.groupNameZh}</span>
              </a>
            </Link>
          </div>
        ))}
      </div>

      {/* SNSコーナー */}
      <div className='flex justify-center pb-2 border-b-2 border-gray-200 dark:border-gray-600'>
        <Link href='/' passHref>
          <a className='nav-list-btn'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </Link>
      </div>

      {/* インフォメーション */}
      <div className='flex flex-col justify-center py-5 px-2 text-gray-400 pointer-events-none'>
        <div>
          <h6>License</h6>
        </div>
        <div className='w-40 text-xs leading-3 font-normal break-all'>
          All brand logos are trademarks of their respective owners. The use of these trademarks is for display only.
        </div>
      </div>
    </nav>
  )
}

export default Nav
