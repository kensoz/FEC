import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEarthAsia, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// Header
const Header = () => {
  const { asPath } = useRouter()

  // ダークモード
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect((): void => setMounted(true), [])

  return (
    <div className='flex flex-row justify-between items-center py-2'>
      {/* モバイルロゴ */}
      {/* <Image src='/logo.png' objectFit='contain' width={30} height={30} alt='logo' /> */}
      <div className='font-normal'>開発中</div>

      {/* ボタングループ */}
      <div className='flex flex-row items-center'>
        {/* ダークモードボタン */}
        <div>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='base-icon_btn text-yellow-300'>
            {mounted && <>{theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}</>}
          </button>
        </div>

        {/* i18nボタン */}
        <div className='relative inline mx-2'>
          <button className='peer base-icon_btn text-slate-400'>
            <FontAwesomeIcon icon={faEarthAsia} />
          </button>
          <div className='absolute hidden z-10 peer-hover:block hover:block p-2 bg-slate-200 flex-col'>
            <Link href={asPath} locale='zh' passHref>
              中文
            </Link>
            <Link href={asPath} locale='ja' passHref>
              日本語
            </Link>
          </div>
        </div>

        {/* GitHubボタン */}
        <button type='button' className='base-icon_btn text-slate-400'>
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>
  )
}

export default Header
