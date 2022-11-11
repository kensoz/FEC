// Footer
const Footer = () => {
  return (
    <div className='text-xs flex flex-col justify-center items-center text-gray-400'>
      {/* インフォメーション */}
      <div className='block md:hidden pointer-events-none text-xs text-center leading-3 font-normal py-3 border-t shadow-t-sm border-gray-200 dark:border-gray-600'>
        <span className='font-bold'>License: </span>
        All brand logos are trademarks of their respective owners. The use of these trademarks is for display only.
      </div>

      {/* FEC */}
      <div className='flex mb-2'>
        <p>© renhou</p>
        <p className='mx-2'>🍅</p>
        <p>Front-End-Collection</p>
      </div>
    </div>
  )
}

export default Footer
