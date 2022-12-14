import { faList, faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { Fragment, useState, useEffect } from 'react'
import { getNavCollection } from '../../firebase/api'
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
    setNav(navRes)
  }
  useEffect((): void => {
    getNavData()
  }, [])

  // ---------- TSX ----------
  return (
    <div className='shadow-b-sm mb-3 flex flex-col border-b border-gray-200 px-3 pb-2 dark:border-gray-600 lg:hidden'>
      {/* タイトル */}
      <div className='text-xs font-bold text-gray-400'>
        <FontAwesomeIcon className='ml-1 mr-2' icon={faList} />
        <span>{GET_LOCALS_TEXT(locale, 'skillType')}</span>
      </div>

      {/* ナビリスト */}
      <Listbox value={selected} onChange={onChange}>
        <div className='relative mt-1 w-full'>
          {/* ボタン */}
          <Listbox.Button className='fec-box fec-clear-input relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left dark:bg-transparent'>
            <span className='pointer-events-none absolute inset-y-0 left-3 flex items-center'>
              <FontAwesomeIcon icon={getIcon(selected.value)} />
            </span>
            <span className='block truncate pl-6'>{locale === 'ja' ? selected.nameJa : locale === 'zh' ? selected.nameZh : selected.nameEn}</span>
            <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400'>
              <FontAwesomeIcon icon={faSort} />
            </span>
          </Listbox.Button>

          {/* オプション */}
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Listbox.Options className='fec-box fec-clear-input absolute z-10 w-full overflow-auto bg-white p-2 dark:bg-slate-800'>
              {nav.map((e: INav) => (
                <Listbox.Option
                  key={e.id}
                  className={({ active }) => `fec-clear-input relative cursor-default ${active && 'bg-yellow-50 text-yellow-400'}`}
                  value={{ nameEn: e.groupNameEn, nameJa: e.groupNameJa, nameZh: e.groupNameZh, value: e.groupName }}
                >
                  <div className={`${isCurrentPath(asPath, e.groupName) ? 'bg-yellow-50 text-yellow-400 dark:text-yellow-300' : ''} nav-list-btn`}>
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
