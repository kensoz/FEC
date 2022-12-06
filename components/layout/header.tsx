import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEarthAsia, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Flag from 'react-world-flags'
import { github } from '../../scripts/constant'

// Header
const Header = (): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const router = useRouter()
  const { asPath, locale } = useRouter()

  // ---------- 関数 ----------
  // ダークモード
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect((): void => setIsMounted(true), [])

  // i18nメニュー
  const [isDisplay, setIsDisplay] = useState<boolean>(false)
  const changeLanage = (lang: 'zh' | 'ja' | 'en'): void => {
    router.push(asPath, undefined, { locale: lang })
    setIsDisplay(false)
  }

  // ---------- TSX ----------
  return (
    <div className='flex flex-row items-center justify-between px-3 pt-2 pb-1'>
      {/* モバイルロゴ */}
      <Link href='/' passHref>
        <a className='fec-clear-input block lg:invisible'>
          <Image src='/logo.png' objectFit='contain' width={90} height={40} alt='logo' />
        </a>
      </Link>

      {/* ボタングループ */}
      <div className='flex flex-row items-center'>
        {/* ダークモードボタン */}
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='icon-btn text-yellow-300'>
          {isMounted && <>{theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}</>}
        </button>

        {/* i18nボタン */}
        <div className='relative mx-2 inline'>
          <button className='icon-btn peer text-slate-400' onClick={() => setIsDisplay(true)}>
            <FontAwesomeIcon icon={faEarthAsia} />
          </button>

          {isDisplay && (
            <div className='fec-box absolute right-0 z-10 hidden bg-slate-50 hover:block peer-hover:block dark:bg-slate-800'>
              <div className='flex w-32 flex-col p-2'>
                <button className={`i18n-list-btn ${locale === 'ja' && 'bg-yellow-50'}`} onClick={() => changeLanage('ja')}>
                  <span className='mr-2'>
                    <Flag code='jp' width={20} />
                  </span>
                  <span className={locale === 'ja' ? 'bg-yellow-50 text-yellow-300 dark:text-yellow-300' : ''}>日本語</span>
                </button>

                <button className={`i18n-list-btn ${locale === 'zh' && 'bg-yellow-50'}`} onClick={() => changeLanage('zh')}>
                  <span className='mr-2'>
                    <Flag code='cn' width={20} />
                  </span>
                  <span className={locale === 'zh' ? 'bg-yellow-50 text-yellow-300 dark:text-yellow-300' : ''}>简体中文</span>
                </button>

                <button className={`i18n-list-btn ${locale === 'en' && 'bg-yellow-50'}`} onClick={() => changeLanage('en')}>
                  <span className='mr-2'>
                    <Flag code='us' width={20} />
                  </span>
                  <span className={locale === 'en' ? 'bg-yellow-50 text-yellow-300 dark:text-yellow-300' : ''}>English</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* GitHubボタン */}
        <Link href={github} passHref>
          <a className='icon-btn text-slate-400' target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Header
