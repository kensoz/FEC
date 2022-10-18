import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLanguage, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { themeState } from '../../store'

const Header = () => {
  const [isDark, setIsDark] = useRecoilState(themeState)

  return (
    <div className='flex flex-row justify-between'>
      <div>mobile logo</div>

      <div className='flex flex-row'>
        <div>
          <button onClick={() => setIsDark((e) => !e)} className='header_btn'>
            {isDark ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </button>
        </div>

        <div className='relative inline mx-2'>
          <button className='peer header_btn'>
            <FontAwesomeIcon icon={faLanguage} />
          </button>
          <div className='absolute hidden peer-hover:block hover:block'>
            <Link href='/' locale='zh' passHref>
              中文
            </Link>
            <Link href='/' locale='ja' passHref>
              日本語
            </Link>
          </div>
        </div>

        <button type='button' className='header_btn'>
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>
  )
}

export default Header
