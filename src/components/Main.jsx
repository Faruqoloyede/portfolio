import React from 'react'
import { CiHome } from "react-icons/ci";

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
        
    </section>
  )
}

export default Main