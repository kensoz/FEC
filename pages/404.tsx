import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

// ----- 404ページ -----
const Custom404 = (): JSX.Element => {
  return (
    <section className='flex h-full items-center justify-center pb-20'>
      <div className='flex flex-col font-bold'>
        <div className='mb-5 text-xl text-gray-400'>
          <span className='mr-2 text-5xl'>404</span>page not found
        </div>

        <div>お探しのページは見つけることはできません</div>
        <div>无法找到指定页面</div>

        <div className='mt-3 text-xs'>
          <Link href='/' passHref>
            <a className='inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-gray-500 shadow-sm hover:bg-gray-200 hover:text-gray-600'>
              <span>
                <FontAwesomeIcon className='mr-2' icon={faHome} />
              </span>
              <span>HOME</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Custom404
