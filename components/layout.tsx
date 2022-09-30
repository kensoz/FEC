import Footer from './layout/footer'
import Header from './layout/header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col grow min-h-screen overflow-y-auto p-3 bg-slate-50'>
      {/* <div className='grid grid-rows-3 grid-flow-col'> */}
      {/* ヘーダ */}
      <Header />

      {/* コンテンツ */}
      <div className='grow'>{children}</div>

      {/* フッター */}
      <Footer />
    </div>
  )
}

export default Layout
