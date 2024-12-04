import React from 'react'
import Home from './sections/Home'
import Profile from './components/Profile'
import Menues from './components/Menues'
import { Link as LinkScroll } from 'react-scroll'
const App = () => {
  return (
    <main className='max-w-[1440px] mx-auto gap-10 flex lg:px-12 md:px-8 px-4'>
      <Profile />
      <Home />
      <Menues />
      <div className='relative lg:hidden md:hidden block'>
      <div className='flex flex-col fixed bottom-3 left-10 right-10'>
            <div className='flex items-center justify-between  py-3 px-9 bg-base border-[1px] border-[#bbb] rounded-full'>
                <LinkScroll to='home' offset={-100} spy smooth activeClass='active-class' className='flex flex-col items-center'>
                    <lord-icon
                        target= "button"
                        src="https://cdn.lordicon.com/cnpvyndp.json"
                        trigger="hover"
                        state="morph-home-2"
                        class= "current-color"
                        style={{width: "25px", height: "25px"}}>
                    </lord-icon>
                    <span className='text-white'>Home</span>
                </LinkScroll>
                <a href='/' className='flex flex-col items-center'>
                <lord-icon src="https://cdn.lordicon.com/winbdcbm.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                <span className='text-white'>Resume</span>
                </a>
                <LinkScroll to='project' offset={-100} spy smooth className='flex flex-col items-center'>
                <lord-icon src="https://cdn.lordicon.com/fpmskzsv.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                <span className='text-white'>Project</span>
                </LinkScroll>
            </div>
        </div>
      </div>
    </main>
  )
}

export default App