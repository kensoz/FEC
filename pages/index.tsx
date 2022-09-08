import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  console.log('index')
  return (
    <section>
      <h1 className='text-3xl'>test</h1>
      <div>
        <FontAwesomeIcon icon={faUser} size={'lg'} />
        <FontAwesomeIcon icon={faTwitter} />
      </div>
    </section>
  )
}

export default Home
