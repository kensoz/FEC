import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCodePullRequest, faEnvelopeCircleCheck, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { TwitterShareButton } from 'react-share'
import { getNavCollection } from '../firebase/api'
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
    <nav className='my-2 ml-1 hidden max-h-[1300px] min-w-[14rem] flex-col rounded-md border border-gray-200 bg-slate-100 shadow-sm dark:border-gray-600 dark:bg-slate-800 md:flex lg:ml-2'>
      {/* ロゴ */}
      <div className='flex justify-center border-b-2 border-gray-200 py-2 dark:border-gray-600 lg:py-4'>
        <Link href='/' passHref>
          <a>
            <Image src='/logo.png' objectFit='contain' width={115} height={40} alt='logo' />
          </a>
        </Link>
      </div>

      {/* ナビリスト */}
      <div className='flex flex-grow flex-col p-2 text-sm font-bold lg:p-3'>
        {nav.map((e: INav) => (
          <div key={e.id} className='flex flex-row'>
            <Link as={e.groupName === '/' ? undefined : `/${e.groupName}`} href={e.groupName === '/' ? '/' : '/[group]'} passHref>
              <a className={isCurrentPath(asPath, e.groupName) ? 'nav-list-btn bg-yellow-50 text-yellow-300 dark:text-yellow-300' : 'nav-list-btn'}>
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
      <div className='flex flex-col border-t-2 border-gray-200 p-3 text-xs text-gray-400 dark:border-gray-600'>
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
