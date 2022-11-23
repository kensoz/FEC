// * ------------------------------
// *
// * コンテンツカードコンポーネント
// *
// * ------------------------------
import { faStar as faRStar } from '@fortawesome/free-regular-svg-icons'
import { faStar, faLink, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import GET_LOCALS_TEXT from '../../locales'
import { sortIDState, listState } from '../../scripts/recoil'
import type { IList, IGlobalList } from '../../types'

/**
 * ダイアログPanel
 * @param {IList[]} list
 * @return {JSX.Element}
 */
const Contents = ({ list }: Record<'list', IList[]>) => {
  // router
  const { locale } = useRouter()

  // recoil
  const isSortID = useRecoilValue(sortIDState)
  const [globalList, setListState] = useRecoilState(listState)

  // ソート順
  useEffect((): void => {
    isSortID ? list.sort((a, b) => Number(a.id) - Number(b.id)) : list.sort((a, b) => Number(b.id) - Number(a.id))
  })

  // 選択
  // TODO 排序问题
  const onClick = (e: IGlobalList): void => {
    setListState((old: IGlobalList[]): IGlobalList[] => {
      const index = old.findIndex((i): boolean => i.id === e.id)

      if (index !== -1) {
        // TODO 研究一下咋回事
        return [...globalList.slice(0, index), ...globalList.slice(index + 1)]
      }

      return [...old, e]
    })
  }

  useEffect((): void => {
    console.log(globalList)
  })

  // JSXレンダリング判定用
  const checkRelatedURL = (ja: string[], zh: string[]): string[] => {
    return locale === 'ja' ? ja : zh
  }

  return list.length === 0 ? (
    // データなしの場合
    <div className='flex justify-center items-center pt-20'>
      <div className='flex flex-col font-bold'>
        <div className='text-gray-400 text-md'>{GET_LOCALS_TEXT(locale, 'noData')}</div>
      </div>
    </div>
  ) : (
    // 正常の場合、カード表示
    <div className='grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-3'>
      {list.map((e: IList) => (
        <div className='flex flex-col base-box bg-slate-100 dark:bg-slate-700' key={e.id}>
          {/* カード写真 */}
          <Link href={e.url} passHref>
            <a className='block' target='_blank'>
              <div className='py-5 flex flex-row justify-center items-center border-b border-gray-200 dark:border-gray-500 bg-gray-50 dark:bg-gray-700'>
                <Image
                  loader={(): string => `https://cdn.simpleicons.org/${e.name}`}
                  src={`https://cdn.simpleicons.org/${e.name}`}
                  width={40}
                  height={40}
                  alt={e.name}
                />

                <div className='ml-2 font-bold text-lg'>{e.name}</div>
              </div>
            </a>
          </Link>

          {/* カード情報 */}
          <div className='flex flex-col flex-grow'>
            {/* 技術名 */}
            <div className='relative px-2 py-2 font-medium text-gray-400'>
              <Link href={e.url} passHref>
                <a className='nav-list-btn py-0' target='_blank'>
                  {e.name}
                  <span className='ml-1 text-xs'>
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </a>
              </Link>

              <div className='text-yellow-300 text-xl absolute right-2 top-[-10px] bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-500 shadow-sm py-0.5 px-1 rounded-full'>
                <button onClick={() => onClick({ id: e.id, name: e.name, groupName: e.groupName })}>
                  <FontAwesomeIcon icon={globalList.findIndex((i): boolean => i.id === e.id) !== -1 ? faStar : faRStar} />
                </button>
              </div>
            </div>

            {/* 紹介 */}
            <div className='flex-grow px-2 pt-1 pb-3 text-xs font-medium'>{locale === 'ja' ? e.descriptionJa : e.descriptionZh}</div>

            {/* 関連リンク */}
            {checkRelatedURL(e.relatedJa, e.relatedZh).length !== 0 && (
              <div className='px-2 py-0.5 flex flex-row items-center text-xs border-t border-gray-200 dark:border-gray-500'>
                <div className='pr-1 text-gray-400'>{GET_LOCALS_TEXT(locale, 'about')}</div>
                {checkRelatedURL(e.relatedJa, e.relatedZh).map((c: string) => (
                  <Link href={c} key={c} passHref>
                    <a className='nav-list-btn py-0 mr-2' target='_blank'>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Contents
