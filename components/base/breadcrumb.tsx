// * ------------------------------
// *
// * パンくずリスト
// *
// * ------------------------------
import { useRouter } from 'next/router'

// パンくずリスト
const Breadcrumb = ({ length }: Record<'length', number>) => {
  const { locale } = useRouter()

  return (
    <div className='py-2 text-left text-xs font-bold text-gray-400'>
      {locale === 'ja' ? 'トータル' : '总计'}：{length}
    </div>
  )
}

export default Breadcrumb
