import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getNav } from '../firebase/nav'
import type { INav } from '../types'

const Nav = () => {
  // ナビデータを取得
  const [nav, setNav] = useState<INav[]>([])
  const requestNav = async () => {
    const nav = await getNav()
    setNav(nav)
  }

  useEffect(() => {
    requestNav()
  }, [])

  return (
    <nav className='w-60 bg-slate-100 p-3'>
      <div>
        <Image className='mt-6 rounded-lg shadow-xl' src='/logo-long.png' width={100} height={40} objectFit='contain' alt='logo' />
      </div>

      {nav.map((e) => (
        <div key={e.id}>{e.groupNameJa}</div>
      ))}
    </nav>
  )
}

export default Nav
