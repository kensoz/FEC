import { faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, forwardRef } from 'react'
import { getNavCollection } from '../firebase/collections'
import type { INav } from '../types'

// サイドナビバー
const Nav = () => {
  const { locale } = useRouter()

  // nav取得
  const [nav, setNav] = useState<INav[]>([])
  const getNavData = async (): Promise<void> => {
    const navRes = await getNavCollection()
    setNav(navRes)
  }

  useEffect((): void => {
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
    <nav className='min-w-max border-r shadow-sm flex flex-col bg-slate-100  dark:bg-slate-800 border-gray-200 dark:border-gray-600'>
      {/* ロゴ */}
      <div className='flex justify-center py-4 border-b-2 border-gray-200 dark:border-gray-600'>
        <Link href='/' passHref>
          <a>
            <Image src='/logo-long.png' objectFit='contain' width={110} height={40} alt='logo' />
          </a>
        </Link>
      </div>

      {/* ナビリスト */}
      <div className='flex flex-col flex-grow p-6 font-bold text-sm'>
        {/* ホームページ */}
        <div className='flex flex-row'>
          <Link href='/' passHref>
            <a className='inline-flex items-center justify-center py-2 text-slate-500 hover:text-slate-400 dark:text-slate-200 dark:hover:text-slate-50'>
              <span className='mr-3'>
                <FontAwesomeIcon icon={faHouse} />
              </span>

              <span>{locale === 'ja' ? 'ホームページ' : '首页'}</span>
            </a>
          </Link>
        </div>

        {/* ナビ */}
        {nav.map((e: INav) => (
          <div key={e.id} className='flex flex-row'>
            <Link as={`/${e.groupName}`} href='/[group]' passHref>
              <a className='inline-flex items-center justify-center py-2 text-slate-500 hover:text-slate-400 dark:text-slate-200 dark:hover:text-slate-50'>
                <span className='mr-3'>
                  <FontAwesomeIcon icon={getIcon(e.groupId)} />
                </span>

                <span>{locale === 'ja' ? e.groupNameJa : e.groupNameZh}</span>
              </a>
            </Link>
          </div>
        ))}
      </div>

      {/* インフォメーション */}
      <div className='flex justify-center pb-5'>
        <div className='w-40 text-xs leading-3 indent-2 font-normal text-gray-400 break-all'>
          All brand logos are trademarks of their respective owners. The use of these trademarks is for display only.
        </div>
      </div>
    </nav>
  )
}

export default Nav
