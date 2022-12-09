import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCodePullRequest, faEnvelopeCircleCheck, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { TwitterShareButton } from 'react-share'
import Modal from '../../components/widgets/modal'
import GET_LOCALS_TEXT from '../../locales'
import { fecUrl, github, mailto } from '../../scripts/constant'

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
        <Link href={github + '/issues'} passHref>
          <a className='nav-text-btn' aria-label='issues'>
            <FontAwesomeIcon className='mr-1' icon={faCodePullRequest} />
            {GET_LOCALS_TEXT(locale, 'issue')}
          </a>
        </Link>

        <div className='mx-1.5'>·</div>

        {/* mail */}
        <Link href={mailto} passHref>
          <a className='nav-text-btn' aria-label='contact'>
            <FontAwesomeIcon className='mr-1' icon={faEnvelopeCircleCheck} />
            {GET_LOCALS_TEXT(locale, 'inquiry')}
          </a>
        </Link>

        <div className='mx-1.5'>·</div>

        {/* disclaimer */}
        <button
          type='button'
          aria-label='check disclaimer'
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
        <TwitterShareButton url={fecUrl} title={GET_LOCALS_TEXT(locale, 'twitter')}>
          <a className='nav-text-btn' aria-label='Tweet'>
            <FontAwesomeIcon icon={faTwitter} />
            <span className='ml-1'>Tweet</span>
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
