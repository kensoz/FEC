import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLanguage, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { themeState } from '../../store'

const Header = () => {
  const { asPath } = useRouter()
  const [isDark, setIsDark] = useRecoilState(themeState)

  return (
    <div className='flex flex-row justify-between items-center py-2'>
      {/* <Image src='/logo.png' objectFit='contain' width={30} height={30} alt='logo' /> */}
      <div>123</div>

      <div className='flex flex-row items-center'>
        <div>
          <button onClick={() => setIsDark((e) => !e)} className='base-icon_btn'>
            {isDark ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </button>
        </div>

        <div className='relative inline mx-2'>
          <button className='peer base-icon_btn'>
            <FontAwesomeIcon icon={faLanguage} />
          </button>
          <div className='absolute hidden z-10 peer-hover:block hover:block p-2 bg-slate-200 flex-col'>
            <Link href={asPath === '/' ? 'home' : asPath} locale='zh' passHref>
              中文
            </Link>
            <Link href={asPath === '/' ? 'home' : asPath} locale='ja' passHref>
              日本語
            </Link>
          </div>
        </div>

        <button type='button' className='base-icon_btn'>
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>
  )
}

export default Header
