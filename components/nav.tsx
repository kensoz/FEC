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
        <Image src='/logo-long.png' objectFit='contain' width={100} height={40} alt='logo' />
      </div>

      {nav.map((e) => (
        <div key={e.id}>{e.groupNameJa}</div>
      ))}
    </nav>
  )
}

export default Nav
