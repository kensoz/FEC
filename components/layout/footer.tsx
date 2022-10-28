import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className='text-xs font-medium flex justify-center text-slate-400 py-2'>
      <div className='flex'>
        <p>© renhou</p>
        <FontAwesomeIcon className='text-yellow-300 mx-2' icon={faStar} />
        <p>Front-End-Collection</p>
      </div>
    </div>
  )
}

export default Footer
