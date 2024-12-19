import React, { useState, useEffect } from 'react'
import Home from './sections/Home'
import Profile from './components/Profile'
import Menues from './components/Menues'
import { Link as LinkScroll } from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from './components/Spinner'

const App = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main data-aos-easing ="ease" data-aos-duration="400">
      <div className='max-w-[1440px] mx-auto flex lg:px-12 md:px-8 px-4'>
        <Profile />
        <Home />
        <Menues />
      </div>

      <div className='relative lg:hidden md:hidden block'>
        <div className='flex flex-col fixed bottom-3 left-10 right-10'>
          <div className='flex items-center justify-between py-3 px-9 bg-base border-[1px] border-[#bbb] rounded-full'>
            <LinkScroll to='home' offset={-100} spy smooth activeClass='active-class' className='flex flex-col items-center'>
            <lord-icon src="https://cdn.lordicon.com/osuxyevn.json" trigger="hover" class="current-color" style={{ width: "25px", height: "25px" }}></lord-icon>
              <span className='text-white'>Home</span>
            </LinkScroll>
            <a href='/cv.pdf' download className='flex flex-col items-center'>
              <lord-icon
                src="https://cdn.lordicon.com/winbdcbm.json"
                trigger="hover"
                class="current-color"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
              <span className='text-white'>Resume</span>
            </a>
            <LinkScroll to='project' offset={-100} spy smooth className='flex flex-col text-white items-center'>
              <lord-icon
                src="https://cdn.lordicon.com/fpmskzsv.json"
                trigger="hover"
                class="current-color"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
              <span className='text-white'>Project</span>
            </LinkScroll>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
