// * ------------------------------
// *
// * Star Modal content
// *
// * ------------------------------
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faStar, faSort, faCloudArrowDown, faCircleXmark as faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox, Transition } from '@headlessui/react'
import json2md from 'json2md'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { useRecoilState } from 'recoil'
import GET_LOCALS_TEXT from '../../../locales'
import { year } from '../../../scripts/constant'
import { listState } from '../../../scripts/recoil'
import makeTemplate from '../../../scripts/template'
import type { IModalContent, IGlobalList, IYear } from '../../../types'

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
      <div className='relative m-2 inline-block rounded-md px-3 py-1 text-left font-bold text-white'>
        <span className='absolute top-0 left-0 h-full w-full rounded-md bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 opacity-50 blur-sm filter'></span>
        <span className='absolute inset-0 h-full w-full rounded-md bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 opacity-50 filter'></span>
        <span className='absolute inset-0 h-full w-full rounded-md bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 filter transition-all duration-200 ease-out group-hover:blur-sm'></span>
        <span className='absolute inset-0 h-full w-full rounded-md bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 shadow-sm transition duration-200 ease-out'></span>
        <span className='relative flex flex-row items-center justify-between text-white'>
          <span>
            <FontAwesomeIcon className='mr-2 text-yellow-300' icon={faStar} />
            {GET_LOCALS_TEXT(locale, 'downloadTitle') + ' ' + GET_LOCALS_TEXT(locale, 'download')}
          </span>

          <button type='button' className='fec-clear-input text-lg text-white xl:hover:opacity-70' onClick={props.closeModalContent}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </span>
      </div>

      {/* 技術確認と入力 */}
      {globalList.length === 0 ? (
        <div className='my-10 flex flex-col items-center justify-center text-sm font-medium text-gray-400'>
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
            <div className='my-1 grid grid-cols-3 gap-1 md:gap-2' key={e.id}>
              {/* 削除ボタン&技術名称 */}
              <div className='flex flex-row items-center'>
                <button
                  type='button'
                  data-testid='test-starDelete-btn'
                  className='fec-clear-input mr-1 text-rose-300 hover:text-rose-400 md:mr-3'
                  onClick={(): void => {
                    deleteListItem(e.id)
                  }}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>

                <div className='truncate text-sm font-bold md:text-base'>{e.name}</div>
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
                  <Listbox.Button className='fec-box fec-clear-input relative z-20 w-full cursor-pointer bg-white py-1 text-center font-medium dark:bg-transparent xl:hover:border-gray-300'>
                    <span className='pl-2'>{e.businessEX}</span>
                    <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400'>
                      <FontAwesomeIcon icon={faSort} />
                    </span>
                  </Listbox.Button>

                  {/* オプション */}
                  <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
                    <Listbox.Options className='fec-box fec-clear-input absolute z-30 w-full overflow-auto bg-white p-2 font-medium text-gray-400 dark:bg-slate-800'>
                      {year.map((blist: IYear) => (
                        <Listbox.Option
                          key={blist.id}
                          className={({ active }) =>
                            `fec-clear-input relative cursor-default rounded-md py-1 text-center ${active && 'bg-yellow-50 text-yellow-400'}`
                          }
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
                  <Listbox.Button className='fec-box fec-clear-input relative z-20 w-full cursor-pointer bg-white py-1 text-center font-medium dark:bg-transparent xl:hover:border-gray-300'>
                    {e.personalEX}
                    <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400'>
                      <FontAwesomeIcon icon={faSort} />
                    </span>
                  </Listbox.Button>

                  {/* オプション */}
                  <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
                    <Listbox.Options className='fec-box fec-clear-input absolute z-30 w-full overflow-auto bg-white p-2 font-medium text-gray-400 dark:bg-slate-800'>
                      {year.map((blist: IYear) => (
                        <Listbox.Option
                          key={blist.id}
                          className={({ active }) =>
                            `fec-clear-input relative cursor-default rounded-md py-1 text-center ${active && 'bg-yellow-50 text-yellow-400'}`
                          }
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
      {globalList.length !== 0 && (
        <div className='flex flex-row items-center justify-center border-t border-gray-200 py-2 dark:border-gray-600'>
          <a
            className='fec-clear-input ml-2 inline-flex items-center rounded-md bg-yellow-400 px-3 py-2 text-sm font-medium text-white shadow-sm xl:hover:opacity-70'
            href={markdown}
            download={filename}
            onClick={download}
          >
            <FontAwesomeIcon className='mr-2' icon={faCloudArrowDown} />
            {'MD' + GET_LOCALS_TEXT(locale, 'download')}
          </a>
        </div>
      )}
    </div>
  )
}

export default Star
