import React from 'react'
import { CiHome } from "react-icons/ci";
import {Element, Link as LinkScroll} from 'react-scroll'
import profile from "../assets/profile.png"

const Main = () => {
  return (
    <Element name='home'>
      <section className='lg:max-w-[1000px] lg:px-10 md:px-10 p-0'>
        <div className='mb-32'>
        <div className='flex lg:flex-col md:flex-col flex-col'>
          <div className='flex items-center justify-between pt-6 lg:hidden'>
            <h2 className='text-4xl font-bold text-red'>Faruq</h2>
            <h2 className='text-white leading-[20px] text-right text-xl'>Frontend developer</h2>
          </div>
        <img src={profile} alt="" className='lg:hidden sm:block' />
        <div className='flex lg:pt-16 md:pt-16 pt-6 mb-16'>
            <div className='border-[1px] border-[#cecec8] py-2 lg:px-5 px-4 lg:text-sm md:text-sm text-xs flex items-center gap-2 rounded-full text-white font-poppins'>
                <CiHome className='text-xl' />
                introduction
            </div>
        </div>
        <div className="flex flex-col items-center">
        <h1 className='lg:text-[68px] lg:leading-[75px] md:text-[50px] md:leading-[60px] text-[28px] leading-[40px] text-white font-sora lg:font-light font-bold'>Hi, from <span className='text-red'>faruq</span>, Frontend Developer</h1>
        </div>
        </div>
        <div className='flex max-md:flex-row max-sm:flex-col items-center justify-between max-sm:justify-center mt-40 max-sm:mt-16  '>
          <div className='flex items-center gap-12'>
          <div className='flex flex-col items-center'>
            <span className='text-red lg:text-[70px] md:text-[60px] text-[50px] leading-[100px] font-sora font-medium'>2+</span>
            <p className='text-accent font-poppins uppercase text-sm -mt-2'>years of experience</p>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-red lg:text-[70px] md:text-[60px] text-[50px] leading-[100px] font-sora font-medium'>5+</span>
            <p className='text-accent font-poppins uppercase text-sm -mt-2'>project completed</p>
          </div>
          </div>
            <LinkScroll to='project' spy smooth className='flex items-center text-2xl gap-3  cursor-pointer icon mt-10 text-white hover:text-red'>
              my projects
            <lord-icon target="div" src="https://cdn.lordicon.com/rxufjlal.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
            </LinkScroll>
        </div>
        </div>
    </section>
    </Element>
  )
}

export default Main