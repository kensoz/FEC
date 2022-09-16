import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PubSub from 'pubsub-js'
import { useEffect } from 'react'

const Index: NextPage = () => {
  const { locale } = useRouter()
  const t = locale === 'ja' ? 'テスト' : 'test'

  useEffect((): (() => void) => {
    PubSub.subscribe('themeMode', (_, data: string): void => {
      console.log(data)
    })

    return (): void => {
      PubSub.unsubscribe('themeMode')
    }
  })

  return (
    <section>
      <div className='mb-5'>
        <h2>i18n</h2>
        <p className='text-3xl'>{t}</p>
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
