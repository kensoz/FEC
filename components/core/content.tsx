// * ------------------------------
// *
// * コンテンツカードコンポーネント
// *
// * ------------------------------

import Image from 'next/image'
import type { IList } from '../../types'

/**
 * ダイアログPanel
 * @param {IList[]} list
 * @return {JSX.Element}
 */
const Contents = ({ list }: Record<'list', IList[]>) => {
  return (
    <div className='grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-3'>
      {list.map((e) => (
        <div className='base-box bg-slate-100 dark:bg-slate-700' key={e.id}>
          {/* 写真 */}
          <Image className='border-b rounded-t-md border-gray-400 ' src={e.img} width={300} height={150} alt='brands' />

          {/* 紹介 */}
          <div className='p-2'>
            <div>{e.groupNameJa}</div>
            <div>{e.name}</div>
            <div className='truncate'>{e.url}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Contents
