import { faArrowDownWideShort, faCloudArrowDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Panel from '../core/panel'

// ツールバー
const Toolbar = () => {
  let [isOpen, setIsOpen] = useState(false)

  // Panel
  const closePanel = () => {
    setIsOpen(false)
  }

  const openPanel = () => {
    setIsOpen(true)
  }

  return (
    <div className='base-box flex flex-row justify-between items-center px-2 py-1.5 bg-slate-100 dark:bg-slate-700'>
      <div className='flex flex-row'>
        {/* ソート順 */}
        <button className='base-icon_btn'>
          <FontAwesomeIcon icon={faArrowDownWideShort} />
        </button>

        {/* 検索 */}
        <div className='relative ml-2 w-44'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input
            type='text'
            className='border border-gray-200 dark:border-gray-400 rounded-md shadow-sm  bg-white dark:bg-transparent font-normal pl-8 py-2 whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-gray-500 dark:focus:ring-gray-100'
            placeholder='検索'
            required
          ></input>
        </div>
      </div>

      {/* Panelのボタン */}
      <button type='button' onClick={openPanel} className='w-24 px-4 py-2 relative rounded-md group text-white inline-block'>
        <span className='absolute top-0 left-0 w-full h-full rounded-md opacity-50 filter blur-sm bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400'></span>
        <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-md opacity-50 from-pink-600 via-purple-700 to-blue-400'></span>
        <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-md shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-pink-600 via-purple-700 to-blue-400'></span>
        <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded-md bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400'></span>
        <span className='relative'>
          <FontAwesomeIcon icon={faCloudArrowDown} />
        </span>
      </button>

      {/* ダイアログPanelコンポーネント */}
      <Panel isOpen={isOpen} closePanel={closePanel} />
    </div>
  )
}

export default Toolbar
