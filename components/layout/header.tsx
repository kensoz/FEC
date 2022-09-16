import { useRecoilState } from 'recoil'
import { themeState } from '../../store'

const Header = () => {
  const [isDark, setisDark] = useRecoilState(themeState)

  return (
    <div className='flex flex-row justify-between'>
      <div>{isDark ? '黑色' : '白色'}</div>

      <div>
        <button
          type='button'
          onClick={() => setisDark((e) => !e)}
          className='px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        >
          Button
        </button>
      </div>
    </div>
  )
}

export default Header
