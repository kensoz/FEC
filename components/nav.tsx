import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faXmark, IconDefinition, faEnvelope, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getNavCollection } from '../firebase/collections'
import GET_LOCALS_TEXT from '../locales'
import { defaultNavHome, defaultNavIconList } from '../scripts/default'
import type { INav } from '../types'

// サイドナビバー
const Nav = (): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const { locale } = useRouter()

  // ---------- 関数 ----------
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

      {/* インフォメーション */}
      <div className='flex flex-col py-4 px-2.5 border-t-2 leading-4 border-gray-200 dark:border-gray-600 text-gray-400 text-xs'>
        {/* TODO */}
        {/* <div className='flex mb-1 ml-1'>
          <Link href='/' passHref>
            <a className='nav-list-btn'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Link>
        </div> */}

        <div className=''>
          <FontAwesomeIcon className='mr-2' icon={faEnvelope} />
          お問い合わせ
        </div>

        <div className=''>
          <FontAwesomeIcon className='mr-2' icon={faGithub} />
          PullRequest & Star
        </div>

        <div className=''>
          <FontAwesomeIcon className='mr-2' icon={faScaleBalanced} />
          Disclaimer・免責事項
        </div>

        <div className=''>FEC: 2.0.0</div>
      </div>
    </nav>
  )
}

export default Nav
