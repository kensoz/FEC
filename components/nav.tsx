import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCodePullRequest, faEnvelopeCircleCheck, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { TwitterShareButton } from 'react-share'
import { getNavCollection } from '../firebase/collections'
import GET_LOCALS_TEXT from '../locales'
import { navHome } from '../scripts/constant'
import { getIcon, isCurrentPath } from '../scripts/utils'
import type { INav } from '../types'
import Modal from './widgets/modal'

// サイドナビバー
const Nav = (): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const { asPath, locale } = useRouter()

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

  // ---------- TSX ----------
  return (
    <nav className='my-2 ml-1 lg:ml-2 min-w-[14rem] max-h-[1300px] border rounded-md shadow-sm hidden md:flex flex-col bg-slate-100 dark:bg-slate-800 border-gray-200 dark:border-gray-600'>
      {/* ロゴ */}
      <div className='flex justify-center py-2 lg:py-4 border-b-2 border-gray-200 dark:border-gray-600'>
        <Link href='/' passHref>
          <a>
            <Image src='/logo.png' objectFit='contain' width={115} height={40} alt='logo' />
          </a>
        </Link>
      </div>

      {/* ナビリスト */}
      <div className='flex flex-col flex-grow p-2 lg:p-3 font-bold text-sm'>
        {nav.map((e: INav) => (
          <div key={e.id} className='flex flex-row'>
            <Link as={e.groupName === '/' ? undefined : `/${e.groupName}`} href={e.groupName === '/' ? '/' : '/[group]'} passHref>
              <a className={isCurrentPath(asPath, e.groupName) ? 'text-yellow-300 dark:text-yellow-300 bg-yellow-50 nav-list-btn' : 'nav-list-btn'}>
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
      <div className='flex flex-col text-xs p-3 border-t-2 border-gray-200 dark:border-gray-600 text-gray-400'>
        {/* issues */}
        <Link href='https://github.com/kensoz/FEC/issues' passHref>
          <a className='nav-text-btn'>
            <FontAwesomeIcon className='mr-2' icon={faCodePullRequest} />
            {GET_LOCALS_TEXT(locale, 'issue')}
          </a>
        </Link>

        {/* twitter */}
        <div>
          <TwitterShareButton url='https://fec-tau.vercel.app/' title='FEC'>
            <a className='nav-text-btn'>
              <FontAwesomeIcon className='' icon={faTwitter} />
              <span className='ml-2'>{GET_LOCALS_TEXT(locale, 'twitter')}</span>
            </a>
          </TwitterShareButton>
        </div>

        {/* mail */}
        <Link href='mailto:renhoujob@gmail.com' passHref>
          <a className='nav-text-btn'>
            <FontAwesomeIcon className='mr-2' icon={faEnvelopeCircleCheck} />
            {GET_LOCALS_TEXT(locale, 'inquiry')}
          </a>
        </Link>

        {/* disclaimer */}
        <button
          type='button'
          className='nav-text-btn'
          onClick={() => {
            setIsOpen(true)
          }}
        >
          <FontAwesomeIcon className='mr-2' icon={faScaleBalanced} />
          {GET_LOCALS_TEXT(locale, 'disclaimer')}
        </button>
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
