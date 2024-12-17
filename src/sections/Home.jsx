import React from 'react'
import { Element} from 'react-scroll'
import Main from '../components/Main';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Skills from './Skills';


const Home = () => {
  return (
    <section className='relative'>
          <Main />
          <About />
          <Services />
          <Portfolio />
          <Skills />
        
    </section>
  )
}

export default Home