// * ------------------------------
// *
// * Star Modal content
// *
// * ------------------------------
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faStar, faSort, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox, Transition } from '@headlessui/react'
import json2md from 'json2md'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { useRecoilState } from 'recoil'
import GET_LOCALS_TEXT from '../../../locales'
import { listState } from '../../../recoil'
import { year } from '../../../scripts/constant'
import makeTemplate from '../../../scripts/template'
import type { IModalContent, IGlobalList } from '../../../types'

/**
 * Star Modal content
 * @param {IModalContent} props
 * @return {JSX.Element}
 */
const Star = (props: IModalContent): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const { locale } = useRouter()
  // recoil
  const [globalList, setListState] = useRecoilState(listState)

  // ---------- 関数 ----------
  // listの更新と削除
  const updateListItem = (key: 'businessEX' | 'personalEX', id: string, value: string): void => {
    setListState(globalList.map((i: IGlobalList): IGlobalList => (i.id === id ? { ...i, [key]: value } : i)))
  }
  const deleteListItem = (id: string): void => {
    const index: number = globalList.findIndex((i: IGlobalList): boolean => i.id === id)
    setListState([...globalList.slice(0, index), ...globalList.slice(index + 1)])
  }

  // MarkDownのダウンロード
  const filename: string = 'FEC-list.md'
  const [markdown, setMarkDown] = useState<string>('')

  const download = async (): Promise<void> => {
    let res: string[][] = []
    await globalList.map((e: IGlobalList): void => {
      res.push([e.name, e.businessEX, e.personalEX])
    })

    const text: string = await json2md(makeTemplate(locale, res))
    setMarkDown('data:text/plain;charset=utf-8,' + encodeURIComponent(text))
  }

  // ---------- TSX ----------
  return (
    <div className='flex flex-col'>
      <div className='m-2 rounded-md text-left font-bold pl-3 py-1.5 relative text-white inline-block'>
        <span className='absolute top-0 left-0 w-full h-full rounded-md opacity-50 filter blur-sm bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400'></span>
        <span className='h-full w-full inset-0 absolute rounded-md bg-gradient-to-br filter opacity-50 from-pink-600 via-purple-700 to-blue-400'></span>
        <span className='absolute inset-0 w-full h-full rounded-md transition-all duration-200 ease-out bg-gradient-to-br filter group-hover:blur-sm from-pink-600 via-purple-700 to-blue-400'></span>
        <span className='absolute inset-0 w-full h-full rounded-md shadow-sm transition duration-200 ease-out bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400'></span>
        <span className='relative text-white'>
          <FontAwesomeIcon className='mr-2 text-yellow-300' icon={faStar} />
          {'MarkDown' + GET_LOCALS_TEXT(locale, 'download')}
        </span>
      </div>

      {/* 技術確認と入力 */}
      {globalList.length === 0 ? (
        <div className='flex flex-col justify-center items-center my-10 text-gray-400 text-sm font-medium'>
          <div>{GET_LOCALS_TEXT(locale, 'noData')}</div>
          <div>{GET_LOCALS_TEXT(locale, 'mySKill')}</div>
        </div>
      ) : (
        <div className='flex flex-col px-2 py-4'>
          <div className='grid grid-cols-3 gap-2 text-xs text-gray-400'>
            <div>{GET_LOCALS_TEXT(locale, 'skillName')}</div>
            <div>{GET_LOCALS_TEXT(locale, 'businessEX')}</div>
            <div>{GET_LOCALS_TEXT(locale, 'personalEX')}</div>
          </div>

          {globalList.map((e: IGlobalList) => (
            <div className='grid grid-cols-3 gap-2 my-1' key={e.id}>
              {/* 削除ボタン&技術名称 */}
              <div className='flex flex-row items-center'>
                <button
                  type='button'
                  className='text-rose-300 hover:text-rose-400 mr-3'
                  onClick={(): void => {
                    deleteListItem(e.id)
                  }}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>

                <div className='font-bold'>{e.name}</div>
              </div>

              {/* 実務経験 */}
              <Listbox
                value={e.businessEX}
                onChange={(value: string): void => {
                  updateListItem('businessEX', e.id, value)
                }}
              >
                <div className='relative'>
                  {/* ボタン */}
                  <Listbox.Button className='z-20 relative w-full base-box cursor-default py-1 text-left focus:outline-none bg-white dark:bg-transparent focus-visible:border-gray-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-500'>
                    <span className='pl-2'>{e.businessEX}</span>
                    <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400'>
                      <FontAwesomeIcon icon={faSort} />
                    </span>
                  </Listbox.Button>

                  {/* オプション */}
                  <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
                    <Listbox.Options className='z-30 w-full absolute overflow-auto base-box bg-white dark:bg-slate-800 p-2'>
                      {year.map((blist) => (
                        <Listbox.Option
                          key={blist.id}
                          className={({ active }) => `relative cursor-default select-none p-2 rounded-md ${active && 'bg-yellow-50 text-yellow-400'}`}
                          value={blist.value}
                        >
                          {blist.value}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>

              {/* 個人経験 */}
              <Listbox
                value={e.personalEX}
                onChange={(value: string): void => {
                  updateListItem('personalEX', e.id, value)
                }}
              >
                <div className='relative'>
                  {/* ボタン */}
                  <Listbox.Button className='z-20 relative w-full base-box cursor-default py-1 text-left focus:outline-none bg-white dark:bg-transparent focus-visible:border-gray-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-500'>
                    <span className='pl-2'>{e.personalEX}</span>
                    <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400'>
                      <FontAwesomeIcon icon={faSort} />
                    </span>
                  </Listbox.Button>

                  {/* オプション */}
                  <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
                    <Listbox.Options className='z-30 w-full absolute overflow-auto base-box bg-white dark:bg-slate-800 p-2'>
                      {year.map((blist) => (
                        <Listbox.Option
                          key={blist.id}
                          className={({ active }) => `relative cursor-default select-none p-2 rounded-md ${active && 'bg-yellow-50 text-yellow-400'}`}
                          value={blist.value}
                        >
                          {blist.value}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          ))}
        </div>
      )}

      {/* ボタングループ */}
      <div className='py-2 flex flex-row justify-center items-center border-t border-gray-200 dark:border-gray-600'>
        <button type='button' className='base-btn px-3 py-1 font-medium' onClick={props.closeModalContent}>
          {GET_LOCALS_TEXT(locale, 'close')}
        </button>

        {globalList.length !== 0 && (
          <a
            className='ml-2 inline-flex items-center px-3 py-1 font-medium text-sm leading-6 shadow-sm text-white bg-amber-400 rounded-md cursor-pointer select-none hover:bg-amber-500'
            href={markdown}
            download={filename}
            onClick={download}
          >
            <FontAwesomeIcon className='mr-2' icon={faCloudArrowDown} />
            {GET_LOCALS_TEXT(locale, 'download')}
          </a>
        )}
      </div>
    </div>
  )
}

export default Star
