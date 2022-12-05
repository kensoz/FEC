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
    <footer className='mt-3 flex flex-col items-center justify-center text-xs text-gray-400'>
      {/* インフォメーション */}
      <div className='shadow-t-sm flex w-full flex-row justify-center border-t border-gray-200 py-3 text-xs font-normal dark:border-gray-600 lg:hidden'>
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
            <span className='ml-1'>{GET_LOCALS_TEXT(locale, 'twitter')}</span>
          </a>
        </TwitterShareButton>
      </div>

      {/* FEC */}
      <div className='mb-6 flex font-medium md:mb-3'>
        <p>© 2022 renhou Front-End-Collection</p>
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
