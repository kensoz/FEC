// import Footer from './footer'
// import Navbar from './navbar'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <main className='flex flex-col min-h-screen'>
      <div>1</div>
      <div className='grow'>{children}</div>
      <div>1</div>
    </main>
  )
}
