import { faList, faSort, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { Fragment, useState, useEffect } from 'react'
import { getNavCollection } from '../../firebase/collections'
import GET_LOCALS_TEXT from '../../locales'
import { navHome } from '../../scripts/constant'
import { getIcon, isCurrentPath } from '../../scripts/utils'
import type { INav, INavBarValue } from '../../types'

// モバイルナビバー
const Navbar = (): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const router = useRouter()
  const { asPath, locale } = useRouter()

  // ---------- 関数 ----------
  // value処理
  const [selected, setSelected] = useState<INavBarValue>({ nameEn: navHome.groupNameEn, nameJa: navHome.groupNameJa, nameZh: navHome.groupNameZh, value: '/' })
  const onChange = (e: INavBarValue): void => {
    setSelected(e)
    e.value === '/' ? router.push('/') : router.push('/[group]', `/${e.value}`)
  }

  // navデータ取得
  const [nav, setNav] = useState<INav[]>([])
  const getNavData = async (): Promise<void> => {
    const navRes = await getNavCollection()
    navRes.unshift(navHome)
    setNav(navRes)
  }
  useEffect(() => {
    getNavData()
  }, [])

  // ---------- TSX ----------
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
            <span className='pl-6 block truncate'>{locale === 'ja' ? selected.nameJa : locale === 'zh' ? selected.nameZh : selected.nameEn}</span>
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
                  className={({ active }) => `relative cursor-default select-none ${active && 'bg-yellow-50 text-yellow-400'}`}
                  value={{ nameEn: e.groupNameEn, nameJa: e.groupNameJa, nameZh: e.groupNameZh, value: e.groupName }}
                >
                  <div className={`${isCurrentPath(asPath, e.groupName) ? 'text-yellow-400 dark:text-yellow-300 bg-yellow-50' : ''} nav-list-btn`}>
                    <span className='mr-3'>
                      <FontAwesomeIcon icon={getIcon(e.groupName)} />
                    </span>

                    <span>{locale === 'ja' ? e.groupNameJa : locale === 'zh' ? e.groupNameZh : e.groupNameEn}</span>
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
