import React from 'react'
import { Element} from 'react-scroll'
import Main from '../components/Main';
import About from './About';


const Home = () => {
  return (
    <section className='relative'>
        <Element name='home'>
          <Main />
          <About />
        </Element>
    </section>
  )
}

export default Home