import PubSub from 'pubsub-js'

const Header = () => {
  const lai = () => {
    PubSub.publish('themeMode', 'caonimabi')
  }

  return (
    <div className='flex flex-row justify-between'>
      <div>text</div>

      <div>
        <button
          type='button'
          onClick={lai}
          className='px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        >
          Button
        </button>
      </div>
    </div>
  )
}

export default Header
