import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faXmark, IconDefinition, faEnvelope, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getNavCollection } from '../firebase/collections'
import GET_LOCALS_TEXT from '../locales'
import { navHome, navIconList } from '../scripts/constant'
import type { INav } from '../types'
import Modal from './widgets/modal'

// サイドナビバー
const Nav = (): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const { locale } = useRouter()

  // ---------- 関数 ----------
  // Modal
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // navデータ取得
  const [nav, setNav] = useState<INav[]>([])
  const getNavData = async (): Promise<void> => {
    const navRes = await getNavCollection()
    navRes.unshift(navHome)
    setNav(navRes)
  }
  useEffect((): void => {
    getNavData()
  }, [])

  // icon判断
  const getIcon = (e: string): IconDefinition => {
    return navIconList.get(e) ?? faXmark
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

                <span>{locale === 'ja' ? e.groupNameJa : locale === 'zh' ? e.groupNameZh : e.groupNameEn}</span>
              </a>
            </Link>
          </div>
        ))}
      </div>

      {/* インフォメーション */}
      <div className='flex flex-col py-4 px-2.5 border-t-2 border-gray-200 dark:border-gray-600 text-gray-400 text-xs'>
        {/* TODO */}
        {/* <div className='flex mb-1 ml-1'>
          <Link href='/' passHref>
            <a className='nav-list-btn'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Link>
        </div> */}

        <div className=''>
          <Link href='mailto:renhoujob@gmail.com' passHref>
            <a className=''>
              <FontAwesomeIcon className='mr-2' icon={faEnvelope} />
              {GET_LOCALS_TEXT(locale, 'inquiry')}
            </a>
          </Link>
        </div>

        <div className=''>
          <button
            type='button'
            onClick={() => {
              setIsOpen(true)
            }}
          >
            <FontAwesomeIcon className='mr-2' icon={faScaleBalanced} />
            {GET_LOCALS_TEXT(locale, 'disclaimer')}
          </button>
        </div>
      </div>

      {/* Modal コンポーネント */}
      <Modal
        isOpen={isOpen}
        mode={'disclaimer'}
        closeModal={() => {
          setIsOpen(false)
        }}
      />
    </nav>
  )
}

export default Nav
