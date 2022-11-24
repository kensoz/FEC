import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getNavCollection } from '../firebase/collections'
import GET_LOCALS_TEXT from '../locales'
import { defaultNavHome, defaultNavIconList } from '../scripts/defaultData'
import type { INav } from '../types'

// サイドナビバー
const Nav = () => {
  // router
  const { locale } = useRouter()

  // navデータ取得
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
  const getIcon = (e: string): IconDefinition => {
    return defaultNavIconList.get(e) ?? faXmark
  }

  // ---------- TSX ----------
  return (
    <nav className='my-2 ml-2 min-w-[14rem] border rounded-md shadow-sm hidden md:flex flex-col bg-slate-100 dark:bg-slate-800 border-gray-200 dark:border-gray-600'>
      {/* ロゴ */}
      <div className='flex justify-center py-4 border-b-2 border-gray-200 dark:border-gray-600'>
        <Link href='/' passHref>
          <a>
            <Image src='/logo.png' objectFit='contain' width={115} height={40} alt='logo' />
          </a>
        </Link>
      </div>

      {/* ナビリスト */}
      <div className='flex flex-col flex-grow p-5 font-bold text-sm'>
        {nav.map((e: INav) => (
          <div key={e.id} className='flex flex-row'>
            <Link as={e.groupName === '/' ? undefined : `/${e.groupName}`} href={e.groupName === '/' ? '/' : '/[group]'} passHref>
              <a className='nav-list-btn'>
                <span className='mr-3'>
                  <FontAwesomeIcon icon={getIcon(e.groupName)} />
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
      <div className='w-56 flex flex-col justify-center py-5 px-2.5 text-gray-400 text-xs pointer-events-none'>
        <div className='font-bold'>{GET_LOCALS_TEXT(locale, 'license')}</div>
        <div className='leading-3 font-normal break-all'>{GET_LOCALS_TEXT(locale, 'licenseText')}</div>
      </div>
    </nav>
  )
}

export default Nav
