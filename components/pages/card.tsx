// * ------------------------------
// *
// * カード
// *
// * ------------------------------
import { faStar as faRStar } from '@fortawesome/free-regular-svg-icons'
import { faStar, faLink, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRecoilValue, useRecoilState } from 'recoil'
import GET_LOCALS_TEXT from '../../locales'
import { sortIDState, listState } from '../../scripts/recoil'
import type { ICard, IList, IGlobalList } from '../../types'

/**
 * カード
 * @param {ICard} props
 * @return {JSX.Element}
 */
const Card = (props: ICard): JSX.Element => {
  // ---------- Hooksインポート ----------
  // router
  const { locale } = useRouter()
  // recoil
  const isSortID = useRecoilValue(sortIDState)
  const [globalList, setListState] = useRecoilState(listState)

  // ---------- 関数 ----------
  // ソート順
  const sortedList = (): IList[] => {
    return isSortID ? props.list.sort((a, b) => Number(b.id) - Number(a.id)) : props.list.sort((a, b) => Number(a.id) - Number(b.id))
  }

  // スタァ選択
  const onClick = (e: IGlobalList): void => {
    setListState((old: IGlobalList[]): IGlobalList[] => {
      const index: number = old.findIndex((i: IGlobalList): boolean => i.id === e.id)
      if (index !== -1) {
        return [...globalList.slice(0, index), ...globalList.slice(index + 1)]
      }

      return [...old, e]
    })
  }

  // TSXレンダリング判定用
  const checkURL = (ja: string, zh: string): string => {
    return locale === 'ja' ? ja : locale === 'zh' ? zh : ''
  }
  const checkRelatedURL = (ja: string[], zh: string[], en: string[]): string[] => {
    return locale === 'ja' ? ja : locale === 'zh' ? zh : en
  }

  // ---------- TSX ----------
  return props.list.length === 0 ? (
    // データなしの場合
    <div className='flex items-center justify-center pt-20'>
      <div className='flex flex-col font-bold'>
        <div className='text-md text-gray-400'>{GET_LOCALS_TEXT(locale, 'noData')}</div>
      </div>
    </div>
  ) : (
    // 正常の場合、カード表示
    <div className='grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-6 xl:gap-3'>
      {sortedList().map((e: IList) => (
        <div className='fec-box flex flex-col bg-slate-100 dark:bg-slate-700' key={e.id}>
          {/* カード写真 */}
          <Link href={e.url} passHref>
            <a className='block rounded-t-md' target='_blank'>
              <div className='flex flex-row items-center justify-center rounded-t-md border-b border-gray-200 bg-gray-50 py-5 dark:border-gray-500 dark:bg-gray-700'>
                {e.color !== '' && (
                  <Image
                    loader={(): string => `https://cdn.simpleicons.org/${e.name}`}
                    src={`https://cdn.simpleicons.org/${e.name}`}
                    width={40}
                    height={40}
                    alt={e.name}
                  />
                )}

                <div className={`${e.color !== '' ? 'ml-2' : 'min-h-[40px] pt-2'} truncate text-lg font-bold`}>{e.name}</div>
              </div>
            </a>
          </Link>

          {/* カード情報＆スタァ */}
          <div className='flex flex-grow flex-col'>
            {/* 技術名 */}
            <div className='relative px-2 py-2 font-medium text-gray-400'>
              <Link href={e.url} passHref>
                <a className='text-btn truncate py-0' target='_blank'>
                  {e.name}
                  <span className='ml-1 text-xs'>
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </a>
              </Link>

              <div className='absolute right-2 top-[-10px] rounded-full border border-gray-200 bg-white py-0.5 px-1 text-xl text-yellow-300 shadow-sm dark:border-gray-500 dark:bg-slate-700'>
                <button
                  type='button'
                  onClick={() => onClick({ id: e.id, name: e.name, groupId: e.groupId, groupName: e.groupName, businessEX: '-', personalEX: '-' })}
                >
                  {/* <button> */}
                  <FontAwesomeIcon icon={globalList.findIndex((i): boolean => i.id === e.id) !== -1 ? faStar : faRStar} />
                </button>
              </div>
            </div>

            {/* 紹介 */}
            <div className='flex-grow px-2 pt-1 pb-3 text-xs font-medium'>
              {locale === 'ja' ? e.descriptionJa : locale === 'zh' ? e.descriptionZh : e.description}
            </div>

            {/* 関連リンク */}
            {checkURL(e.urlJa, e.urlZh) === '' && checkRelatedURL(e.relatedJa, e.relatedZh, e.related).length === 0 ? null : (
              <div className='flex flex-row flex-wrap items-center border-t border-gray-200 px-2 text-xs dark:border-gray-500'>
                {checkURL(e.urlJa, e.urlZh) !== '' && (
                  <div className='mr-2 py-1'>
                    <Link href={checkURL(e.urlJa, e.urlZh)} passHref>
                      <a className='text-btn py-0' target='_blank'>
                        <span>{GET_LOCALS_TEXT(locale, 'offical')}</span>
                        <FontAwesomeIcon className='ml-0.5' icon={faLink} />
                      </a>
                    </Link>
                  </div>
                )}

                {checkRelatedURL(e.relatedJa, e.relatedZh, e.related).length !== 0 && (
                  <div className='flex flex-row items-center py-1'>
                    {checkRelatedURL(e.relatedJa, e.relatedZh, e.related).map((c: string) => (
                      <Link href={c} key={c} passHref>
                        <a className='text-btn py-0 first:mr-2' target='_blank'>
                          {GET_LOCALS_TEXT(locale, 'about')}
                          <FontAwesomeIcon className='ml-0.5' icon={faArrowUpRightFromSquare} />
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
