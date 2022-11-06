import Image from 'next/image'
import type { IData } from '../../types'

const Contents = ({ data }: Record<'data', IData[]>) => {
  return (
    <div className='grid grid-cols-5 gap-4'>
      {data.map((e) => (
        <div className='border border-gray-200 rounded-md shadow-sm font-medium text-gray-600  bg-slate-100' key={e.id}>
          {/* 写真 */}
          <Image className='border-b border-gray-200' src={e.img} layout='responsive' width={300} height={150} alt='brands' />

          {/* 紹介 */}
          <div className='p-2'>
            <div>{e.groupNameJa}</div>
            <div>{e.name}</div>
            <div>{e.url}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Contents
