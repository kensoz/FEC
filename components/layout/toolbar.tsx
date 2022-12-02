import { faCloudArrowDown, faArrowDownWideShort, faArrowUpShortWide, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import GET_LOCALS_TEXT from '../../locales'
import { sortIDState } from '../../scripts/recoil'
import Modal from '../widgets/modal'

// ツールバー
const Toolbar = (): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const router = useRouter()
  const { locale } = useRouter()
  // recoil
  const [isSortID, setIsSortID] = useRecoilState(sortIDState)

  // ---------- 関数 ----------
  // Modal
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // 検索フォーム
  const [query, setQuery] = useState<string>('')
  const sreach = (): void => {
    if (query === '') return
    router.push({
      pathname: '/search',
      query: { key: query },
    })
  }

  // ---------- TSX ----------
  return (
    <div className='fec-box mx-3 flex flex-row items-center justify-between bg-slate-100 px-2 py-1.5 dark:bg-slate-700'>
      <div className='flex flex-row'>
        {/* ソート順ID */}
        <button
          className='icon-btn'
          onClick={() => {
            setIsSortID(!isSortID)
          }}
        >
          <FontAwesomeIcon icon={isSortID ? faArrowDownWideShort : faArrowUpShortWide} />
        </button>

        {/* 検索 */}
        <div className='relative ml-2'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input
            type='text'
            className='fec-clear-input w-44 whitespace-nowrap rounded-md border border-gray-200 bg-white py-2 pl-8 font-normal shadow-sm dark:border-gray-400 dark:bg-transparent'
            placeholder={GET_LOCALS_TEXT(locale, 'sreach')}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(e.target.value)
            }}
            onBlur={() => {
              sreach()
            }}
            onKeyUp={(e) => {
              e.key === 'Enter' && sreach()
            }}
            value={query}
            required
          ></input>
        </div>
      </div>

      {/* Modalのボタン */}
      <button
        type='button'
        onClick={() => {
          setIsOpen(true)
        }}
        className='fec-clear-input group relative inline-block w-24 rounded-md px-4 py-2 text-white'
      >
        <span className='absolute top-0 left-0 h-full w-full rounded-md bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 opacity-50 blur-sm filter'></span>
        <span className='absolute inset-0 h-full w-full rounded-md bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 opacity-50 filter group-active:opacity-0'></span>
        <span className='absolute inset-0 h-full w-full rounded-md bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 shadow-xl filter transition-all duration-200 ease-out group-hover:blur-sm group-active:opacity-0'></span>
        <span className='absolute inset-0 h-full w-full rounded-md bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 transition duration-200 ease-out'></span>
        <span className='relative text-yellow-100'>
          <FontAwesomeIcon icon={faCloudArrowDown} />
        </span>
      </button>

      {/* Modal コンポーネント */}
      <Modal
        isOpen={isOpen}
        mode={'star'}
        closeModal={() => {
          setIsOpen(false)
        }}
      />
    </div>
  )
}

export default Toolbar
