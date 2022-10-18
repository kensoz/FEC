import Footer from './layout/footer'
import Header from './layout/header'
import Navbar from './layout/navbar'
import Toolbar from './layout/toolbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col grow min-h-screen overflow-y-auto p-3 bg-slate-50'>
      {/* ヘーダ */}
      <Header />

      {/*ツールバー */}
      <Navbar />

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
