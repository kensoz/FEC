import { faChevronRight, faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { Fragment, useState, useEffect } from 'react'
import { getNavCollection } from '../../firebase/collections'
import { defaultNavHome } from '../../scripts/defaultData'
import type { INav, INavBarValue } from '../../types'

// モバイルナビバー
const Navbar = () => {
  const router = useRouter()
  const { asPath, locale } = useRouter()

  // value処理
  const [selected, setSelected] = useState<INavBarValue>({ nameJa: defaultNavHome.groupNameJa, nameZh: defaultNavHome.groupNameZh, value: '/' })
  const onChange = (e: INavBarValue): void => {
    setSelected(e)
    e.value === '/' ? router.push('/') : router.push('/[group]', `/${e.value}`)
  }

  // nav取得
  const [nav, setNav] = useState<INav[]>([])
  const getNavData = async (): Promise<void> => {
    const navRes = await getNavCollection()
    navRes.unshift(defaultNavHome)
    setNav(navRes)
  }

  useEffect(() => {
    getNavData()
  }, [])

  return (
    <div className='md:hidden flex pb-2 px-3'>
      <Listbox value={selected} onChange={onChange}>
        <div className='relative mt-1 w-full'>
          {/* ボタン */}
          <Listbox.Button className='relative w-full base-box cursor-default py-2 pl-3 pr-10 text-left focus:outline-none bg-white dark:bg-transparent focus-visible:border-gray-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-500'>
            <span className='block truncate'>{locale === 'ja' ? selected.nameJa : selected.nameZh}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
              <FontAwesomeIcon icon={faSort} />
            </span>
          </Listbox.Button>

          {/* オプション */}
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Listbox.Options className='z-10 absolute mt-1 max-h-60 w-full overflow-auto base-box bg-white dark:bg-slate-800 p-2'>
              {nav.map((e: INav) => (
                <Listbox.Option
                  key={e.id}
                  className={({ active }) => `relative cursor-default select-none p-2 rounded-md ${active && 'bg-yellow-50 text-yellow-400'}`}
                  value={{ nameJa: e.groupNameJa, nameZh: e.groupNameZh, value: e.groupName }}
                >
                  <span className={asPath === `/${e.groupName}/` ? 'text-yellow-400' : ''}>{locale === 'ja' ? e.groupNameJa : e.groupNameZh}</span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default Navbar
