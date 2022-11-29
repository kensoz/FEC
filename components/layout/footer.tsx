import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Modal from '../../components/widgets/modal'
import GET_LOCALS_TEXT from '../../locales'

// Footer
const Footer = (): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const { locale } = useRouter()

  // ---------- 関数 ----------
  // Modal
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // ---------- TSX ----------
  return (
    <footer className='text-xs mt-2 flex flex-col justify-center items-center text-gray-400'>
      {/* インフォメーション */}
      <div className='md:hidden w-full text-xs py-2 flex flex-row justify-center font-normal border-t shadow-t-sm border-gray-200 dark:border-gray-600'>
        <Link href='mailto:renhoujob@gmail.com' passHref>
          <a className='block mr-4'>
            <FontAwesomeIcon className='mr-1.5' icon={faEnvelope} />
            お問い合わせ
          </a>
        </Link>

        <button
          type='button'
          onClick={() => {
            setIsOpen(true)
          }}
        >
          <FontAwesomeIcon className='mr-1.5' icon={faScaleBalanced} />
          {GET_LOCALS_TEXT(locale, 'disclaimer')}
        </button>
      </div>

      {/* FEC */}
      <div className='flex mb-3'>
        <p>© renhou</p>
        <p className='mx-2'>🍋</p>
        <p>Front-End-Collection</p>
      </div>

      {/* Modal コンポーネント */}
      <Modal
        isOpen={isOpen}
        mode={'disclaimer'}
        closeModal={() => {
          setIsOpen(false)
        }}
      />
    </footer>
  )
}

export default Footer
