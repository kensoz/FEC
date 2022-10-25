import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className='text-xs flex'>
      <p>Front End Collection</p>
      <FontAwesomeIcon className='text-yellow-300 mx-2' icon={faStar} />
      <p>By renhou</p>
    </div>
  )
}

export default Footer
