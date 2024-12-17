import React from 'react'
import { Element} from 'react-scroll'
import Main from '../components/Main';
import About from './About';
import Services from './Services';


const Home = () => {
  return (
    <section className='relative'>
        <Element name='home'>
          <Main />
          <About />
          <Services />
        </Element>
        
    </section>
  )
}

export default Home