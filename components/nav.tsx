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
    <nav className='w-60 bg-slate-100 pl-4 pt-2 border-r border-gray-200 shadow-sm'>
      <div>
        <Image src='/logo-long.png' objectFit='contain' width={100} height={40} alt='logo' />
      </div>

      <div className='flex flex-col mt-8 font-bold text-gray-600'>
        {nav.map((e) => (
          <div key={e.id} className='py-1'>
            {e.groupNameJa}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Nav
