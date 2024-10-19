import React from 'react'
import { CiHome } from "react-icons/ci";
import {Link as LinkScroll} from 'react-scroll'

const Main = () => {
  return (
    <section className='block mb-32 lg:ml-20'>
        <div className='flex mb-16'>
            <div className='border-[1px] border-[#575756] py-2 lg:px-5 px-4 lg:text-sm md:text-sm text-xs flex items-center gap-2 rounded-full text-white font-poppins'>
                <CiHome className='text-xl' />
                introduction
            </div>
        </div>
        <h1 className='lg:text-[68px] lg:leading-[75px] md:text-[50px] md:leading-[60px] text-[28px] leading-[40px] text-white font-sora font-light'>Hi, from <span className='text-red'>faruq</span>, Frontend Developer</h1>
        <div className='flex items-center justify-between mt-40'>
          <div className='flex items-center gap-12'>
          <div className='flex flex-col items-center'>
            <span className='text-red lg:text-[70px] md:text-[60px] text-[50px] leading-[100px] font-sora font-light'>2+</span>
            <p className='text-accent font-poppins uppercase text-sm -mt-2'>years of experience</p>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-red lg:text-[70px] md:text-[60px] text-[50px] leading-[100px] font-sora font-light'>5+</span>
            <p className='text-accent font-poppins uppercase text-sm -mt-2'>project completed</p>
          </div>
          </div>
          {/* <div className='flex items-center mt-10 cursor-pointer current-color'>
            <span className='text-2xl text-white font-poppins font-light '>my project</span>
            <lord-icon target="div" src="https://cdn.lordicon.com/rxufjlal.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
          </div> */}
            <LinkScroll to='projects' spy smooth className='flex items-center text-2xl  cursor-pointer icon mt-10 text-white hover:text-red'>
              my project
            <lord-icon target="div" src="https://cdn.lordicon.com/rxufjlal.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
            </LinkScroll>
        </div>
    </section>
  )
}

export default Main