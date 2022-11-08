import { faArrowDownWideShort, faCloudArrowDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Panel from '../core/panel'

// ツールバー
const Toolbar = () => {
  let [isOpen, setIsOpen] = useState(false)

  const closePanel = () => {
    setIsOpen(false)
  }

  const openPanel = () => {
    setIsOpen(true)
  }

  return (
    <div className='flex flex-row justify-between items-center p-1.5 bg-slate-100 border border-gray-200 rounded-md shadow-sm'>
      <div className='flex flex-row'>
        {/* ソート順 */}
        <button className='base-icon_btn'>
          <FontAwesomeIcon icon={faArrowDownWideShort} />
        </button>

        {/* 検索 */}
        <div className='relative ml-2'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none text-gray-600'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input
            type='text'
            className='text-gray-600 bg-white border border-gray-200 rounded-md shadow-sm font-medium pl-8 py-2 whitespace-nowrap'
            placeholder='検索'
            required
          ></input>
        </div>
      </div>

      {/* Panelのボタン */}
      <button type='button' onClick={openPanel} className='w-24 px-4 py-2 relative rounded-md group font-medium text-white inline-block'>
        <span className='absolute top-0 left-0 w-full h-full rounded-md opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500'></span>
        <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-md opacity-50 from-purple-600 to-blue-500'></span>
        <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-md shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500'></span>
        <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded-md bg-gradient-to-br to-purple-600 from-blue-500'></span>
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
