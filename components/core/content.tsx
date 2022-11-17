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
import { useRecoilValue } from 'recoil'
import GET_LOCALS_TEXT from '../../locales'
import { sortState } from '../../scripts/recoil'
import type { IList } from '../../types'

/**
 * ダイアログPanel
 * @param {IList[]} list
 * @return {JSX.Element}
 */
const Contents = ({ list }: Record<'list', IList[]>) => {
  // router
  const { locale } = useRouter()

  // recoil
  const isSort = useRecoilValue(sortState)
  // TODO
  // const [sortList, setSortList] = useState<IList[]>(list)
  // useEffect(() => {
  //   list.sort()
  // }, [])

  // heart
  const [isHeart, setisHeart] = useState<boolean>(false)
  const toggle = (): void => {
    setisHeart(!isHeart)
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
          <Image className='flex border-b rounded-t-md border-gray-400 ' src={e.img} width={300} height={150} alt='brands' />

          {/* カード情報 */}
          <div className='flex flex-col flex-grow'>
            {/* 技術名とほしいマック */}
            <div className='px-2 font-bold text-base truncate flex flex-row text-gray-400'>{e.name}</div>

            {/* 紹介 */}
            <div className='flex-grow p-2 text-xs font-bold'>{locale === 'ja' ? e.descriptionJa : e.descriptionZh}</div>

            {/* リンク */}
            <div className='px-2 flex flex-row justify-between items-center border-t border-gray-200 dark:border-gray-500'>
              <div className='text-xs'>
                <Link href={e.url} passHref>
                  <a className='nav-list-btn py-0' target='_blank'>
                    {GET_LOCALS_TEXT(locale, 'offical')}
                    <span className='ml-0.5'>
                      <FontAwesomeIcon icon={faLink} />
                    </span>
                  </a>
                </Link>

                <span className='mx-2 font-bold'>·</span>

                <Link href={locale === 'ja' ? e.urlJa : e.urlZh} passHref>
                  <a className='nav-list-btn py-0' target='_blank'>
                    {GET_LOCALS_TEXT(locale, 'about')}
                    <span className='ml-0.5'>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  </a>
                </Link>
              </div>

              <div className='text-yellow-300 text-lg'>
                <button onClick={toggle}>
                  <FontAwesomeIcon icon={isHeart ? faStar : faRStar} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Contents
