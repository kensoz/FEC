import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { themeState } from '../store'

const Index: NextPage = () => {
  const { locale } = useRouter()
  const t = locale === 'ja' ? 'テスト' : 'test'
  const isDark = useRecoilValue(themeState)

  useEffect(() => {})

  return (
    <section>
      <div>{isDark ? '黑色' : '白色'}</div>

      <div className='mb-5'>
        <h2>i18n</h2>
        <p className='text-3xl'>{t}</p>
      </div>

      <div className='mb-5'>
        <button onClick={() => {}}>IsMoblie</button>
      </div>

      <div className='mb-5'>
        <h2>icon</h2>
        <FontAwesomeIcon icon={faUser} size={'lg'} />
        <FontAwesomeIcon icon={faTwitter} />
      </div>

      <div className='mb-5'>
        <h2>link</h2>
        <Link href='/' locale='zh' passHref>
          zh
        </Link>
        <Link href='/' locale='ja' passHref>
          ja
        </Link>
        <Link href='/view' locale='ja' passHref>
          view
        </Link>
      </div>
    </section>
  )
}

export default Index
