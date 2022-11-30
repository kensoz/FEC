import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCodePullRequest, faEnvelope, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { TwitterShareButton } from 'react-share'
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
    <footer className='text-xs mt-3 flex flex-col justify-center items-center text-gray-400'>
      {/* インフォメーション */}
      <div className='md:hidden w-full text-xs py-3 flex flex-row justify-center font-normal border-t shadow-t-sm border-gray-200 dark:border-gray-600'>
        {/* issues */}
        <Link href='https://github.com/kensoz/FEC/issues' passHref>
          <a className='nav-text-btn'>
            <FontAwesomeIcon className='mr-1' icon={faCodePullRequest} />
            {GET_LOCALS_TEXT(locale, 'issue')}
          </a>
        </Link>

        <div className='mx-1.5'>·</div>

        {/* mail */}
        <Link href='mailto:renhoujob@gmail.com' passHref>
          <a className='nav-text-btn'>
            <FontAwesomeIcon className='mr-1' icon={faEnvelope} />
            {GET_LOCALS_TEXT(locale, 'inquiry')}
          </a>
        </Link>

        <div className='mx-1.5'>·</div>

        {/* disclaimer */}
        <button
          type='button'
          className='nav-text-btn'
          onClick={() => {
            setIsOpen(true)
          }}
        >
          <FontAwesomeIcon className='mr-1' icon={faScaleBalanced} />
          {GET_LOCALS_TEXT(locale, 'disclaimer')}
        </button>

        <div className='mx-1.5'>·</div>

        {/* twitter */}
        <TwitterShareButton url='https://fec-tau.vercel.app/' title='FEC'>
          <a className='nav-text-btn'>
            <FontAwesomeIcon icon={faTwitter} />
            <span className='ml-1'>Tweet</span>
          </a>
        </TwitterShareButton>
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
