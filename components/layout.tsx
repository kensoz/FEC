import Footer from './layout/footer'
import Header from './layout/header'
import Navbar from './layout/navbar'
import Toolbar from './layout/toolbar'

const Layout = ({ children }: Record<'children', React.ReactNode>) => {
  return (
    <div className='flex flex-col grow min-h-screen overflow-y-auto px-3 bg-slate-50'>
      {/* ヘーダ */}
      <Header />

      {/*mobile ツールバー */}
      {/* <Navbar /> */}

      {/*ツールバー */}
      <Toolbar />

      {/* コンテンツ */}
      <div className='grow'>{children}</div>

      {/* フッター */}
      <Footer />
    </div>
  )
}

export default Layout
