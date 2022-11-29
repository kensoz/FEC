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
  const [isDisplay, setIsDisplay] = useState<boolean>(true)
  const changeLanage = (str: 'zh' | 'ja'): void => {
    router.push(asPath, undefined, { locale: str })
    setIsDisplay(false)
  }

  // ---------- TSX ----------
  return (
    <div className='flex flex-row justify-between items-center py-2 px-3'>
      {/* モバイルロゴ */}
      <Image className='block md:invisible' src='/logo.png' objectFit='contain' width={90} height={40} alt='logo' />

      {/* ボタングループ */}
      <div className='flex flex-row items-center'>
        {/* ダークモードボタン */}
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='base-icon_btn text-yellow-300'>
          {isMounted && <>{theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}</>}
        </button>

        {/* i18nボタン */}
        <div className='relative inline mx-2'>
          <button className='peer base-icon_btn text-slate-400' onClick={() => setIsDisplay(true)}>
            <FontAwesomeIcon icon={faEarthAsia} />
          </button>

          {isDisplay && (
            <div className='absolute right-0 hidden z-10 peer-hover:block hover:block base-box bg-slate-50 dark:bg-slate-800'>
              <div className='flex flex-col w-32 p-2'>
                <button className='p-2 inline-flex items-center rounded-md hover:bg-yellow-50 hover:text-yellow-400' onClick={() => changeLanage('ja')}>
                  <span className='mr-2'>
                    <Flag code='jp' width={20} />
                  </span>
                  <span className={locale === 'ja' ? 'text-yellow-400' : ''}>日本語</span>
                </button>

                <button className='p-2 inline-flex items-center rounded-md hover:bg-yellow-50 hover:text-yellow-400' onClick={() => changeLanage('zh')}>
                  <span className='mr-2'>
                    <Flag code='cn' width={20} />
                  </span>
                  <span className={locale === 'zh' ? 'text-yellow-400' : ''}>简体中文</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* GitHubボタン */}
        <Link href={github} passHref>
          <a className='base-icon_btn text-slate-400' target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Header
