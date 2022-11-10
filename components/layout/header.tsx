import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEarthAsia, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Flag from 'react-world-flags'

// Header
const Header = () => {
  const { asPath } = useRouter()
  const gitHubURL: string = 'https://github.com/kensoz/FEC'

  // ダークモード
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect((): void => setMounted(true), [])

  return (
    <div className='flex flex-row justify-between items-center py-2'>
      {/* モバイルロゴ */}
      <Image className='invisible' src='/logo.png' objectFit='contain' width={30} height={30} alt='logo' />

      {/* ボタングループ */}
      <div className='flex flex-row items-center'>
        {/* ダークモードボタン */}
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='base-icon_btn text-yellow-300'>
          {mounted && <>{theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}</>}
        </button>

        {/* i18nボタン */}
        <div className='relative inline mx-2'>
          <button className='peer base-icon_btn text-slate-400'>
            <FontAwesomeIcon icon={faEarthAsia} />
          </button>

          <div className='absolute hidden z-10 peer-hover:block hover:block base-box bg-slate-100 dark:bg-slate-700'>
            <div className='flex flex-col min-w-max'>
              <Link href={asPath} locale='zh'>
                <a className='py-1 px-3 border-b-2 inline-flex items-center border-gray-200 dark:border-gray-600 text-slate-500 hover:text-slate-400 dark:text-slate-200 dark:hover:text-slate-50'>
                  <span className='mr-2'>
                    <Flag code='cn' width={20} />
                  </span>
                  <span>中文</span>
                </a>
              </Link>

              <Link href={asPath} locale='ja'>
                <a className='py-1 px-3 inline-flex items-center text-slate-500 hover:text-slate-400 dark:text-slate-200 dark:hover:text-slate-50'>
                  <span className='mr-2'>
                    <Flag code='jp' width={20} />
                  </span>
                  <span>日本語</span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* GitHubボタン */}
        <Link href={gitHubURL} passHref>
          <a className='base-icon_btn text-slate-400' target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Header
