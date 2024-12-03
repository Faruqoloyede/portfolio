import React from 'react'
import { CiHome } from "react-icons/ci";
import {Link as LinkScroll} from 'react-scroll'
import profile from "../assets/profile.png"

const Main = () => {
  return (
    <section className='lg:max-w-[1000px]'>
        <div className='mb-32'>
        <div className='flex lg:pt-16 md:pt-16 pt-6 mb-16'>
            <div className='border-[1px] border-[#cecec8] py-2 lg:px-5 px-4 lg:text-sm md:text-sm text-xs flex items-center gap-2 rounded-full text-white font-poppins'>
                <CiHome className='text-xl' />
                introduction
            </div>
        </div>
        <div className="flex flex-col items-center">
        <h1 className='lg:text-[68px] lg:leading-[75px] md:text-[50px] md:leading-[60px] text-[28px] leading-[40px] text-white font-sora font-light'>Hi, from <span className='text-red'>faruq</span>, Frontend Developer</h1>
        <img src={profile} alt="" className='lg:hidden sm:block' />
        </div>
        <div className='flex items-center justify-between mt-40'>
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
            <LinkScroll to='projects' spy smooth className='flex items-center text-2xl  cursor-pointer icon mt-10 text-white hover:text-red'>
              my projects
            <lord-icon target="div" src="https://cdn.lordicon.com/rxufjlal.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
            </LinkScroll>
        </div>
        </div>
    </section>
  )
}

export default Main