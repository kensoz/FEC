import { faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faXmark, IconDefinition, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
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

  // icon判断
  const getIcon = (e: number): IconDefinition => {
    const icon = new Map<number, IconDefinition>([
      [1, faHouse],
      [2, faJs],
      [3, faReact],
    ])

    return icon.get(e) || faXmark
  }

  return (
    <nav className='w-60 bg-slate-100 pt-2 border-r border-gray-200 shadow-sm flex flex-col items-center'>
      <div className='flex'>
        <Image src='/logo-long.png' objectFit='contain' width={100} height={40} alt='logo' />
      </div>

      <div className='flex flex-col mt-8 font-bold text-gray-600'>
        {nav.map((e) => (
          <div key={e.id} className='py-2 flex flex-row'>
            <div className='mr-3'>
              <FontAwesomeIcon icon={getIcon(e.groupId)} />
            </div>

            <Link as={`/${e.url}`} href='/[index]' passHref>
              {e.groupNameJa}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Nav
