import { useRouter } from 'next/router'
import GET_LOCALS_TEXT from '../../locales'

// Footer
const Footer = () => {
  // router
  const { locale } = useRouter()

  // ---------- TSX ----------
  return (
    <div className='text-xs flex flex-col justify-center items-center text-gray-400'>
      {/* インフォメーション */}
      <div className='block md:hidden pointer-events-none text-xs text-center leading-3 font-normal py-3 border-t shadow-t-sm border-gray-200 dark:border-gray-600'>
        <span className='font-bold'> {GET_LOCALS_TEXT(locale, 'license')} </span>
        {GET_LOCALS_TEXT(locale, 'licenseText')}
      </div>

      {/* FEC */}
      <div className='flex mb-2'>
        <p>© renhou</p>
        <p className='mx-2'>🍋</p>
        <p>Front-End-Collection</p>
      </div>
    </div>
  )
}

export default Footer
