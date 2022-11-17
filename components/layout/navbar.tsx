import { faXmark, faList, faSort, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { Fragment, useState, useEffect } from 'react'
import { getNavCollection } from '../../firebase/collections'
import GET_LOCALS_TEXT from '../../locales'
import { defaultNavHome, defaultNavIconList } from '../../scripts/defaultData'
import type { INav, INavBarValue } from '../../types'

// モバイルナビバー
const Navbar = () => {
  // router
  const router = useRouter()
  const { asPath, locale } = useRouter()

  // value処理
  const [selected, setSelected] = useState<INavBarValue>({ nameJa: defaultNavHome.groupNameJa, nameZh: defaultNavHome.groupNameZh, value: '/' })
  const onChange = (e: INavBarValue): void => {
    setSelected(e)
    e.value === '/' ? router.push('/') : router.push('/[group]', `/${e.value}`)
  }

  // navデータ取得
  const [nav, setNav] = useState<INav[]>([])
  const getNavData = async (): Promise<void> => {
    const navRes = await getNavCollection()
    navRes.unshift(defaultNavHome)
    setNav(navRes)
  }
  useEffect(() => {
    getNavData()
  }, [])

  // icon判断
  const getIcon = (e: string): IconDefinition => {
    return defaultNavIconList.get(e) ?? faXmark
  }

  return (
    <div className='md:hidden flex flex-col pb-2 px-3 mb-3 border-b shadow-b-sm border-gray-200 dark:border-gray-600'>
      {/* タイトル */}
      <div className='font-bold text-xs text-gray-400'>
        <FontAwesomeIcon className='ml-1 mr-2' icon={faList} />
        <span>{GET_LOCALS_TEXT(locale, 'skillType')}</span>
      </div>

      {/* ナビリスト */}
      <Listbox value={selected} onChange={onChange}>
        <div className='relative mt-1 w-full'>
          {/* ボタン */}
          <Listbox.Button className='relative w-full base-box cursor-default py-2 pl-3 pr-10 text-left focus:outline-none bg-white dark:bg-transparent focus-visible:border-gray-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-500'>
            <span className='pointer-events-none absolute inset-y-0 left-3 flex items-center'>
              <FontAwesomeIcon icon={getIcon(selected.value)} />
            </span>
            <span className='pl-6 block truncate'>{locale === 'ja' ? selected.nameJa : selected.nameZh}</span>
            <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400'>
              <FontAwesomeIcon icon={faSort} />
            </span>
          </Listbox.Button>

          {/* オプション */}
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Listbox.Options className='z-10 absolute max-h-60 w-full overflow-auto base-box bg-white dark:bg-slate-800 p-2'>
              {nav.map((e: INav) => (
                <Listbox.Option
                  key={e.id}
                  className={({ active }) => `relative cursor-default select-none p-2 rounded-md ${active && 'bg-yellow-50 text-yellow-400'}`}
                  value={{ nameJa: e.groupNameJa, nameZh: e.groupNameZh, value: e.groupName }}
                >
                  <div className={asPath === `/${e.groupName}/` ? 'text-yellow-400' : ''}>
                    <span className='mr-3'>
                      <FontAwesomeIcon icon={getIcon(e.groupName)} />
                    </span>
                    {locale === 'ja' ? e.groupNameJa : e.groupNameZh}
                  </div>
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
