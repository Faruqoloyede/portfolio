import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { CiHome } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { TbMenu } from "react-icons/tb";

const Menues = () => {
   
  return (
    <div className='max-w-[60px] lg:block md:block hidden'>
        <div className='flex flex-col gap-4 fixed top-20'>
            <div className='flex flex-col gap-5 py-6 px-3 border-[1px] border-[#575756] rounded-full'>
                <LinkScroll to='home' offset={-100} spy smooth activeClass='active-class' className='text-white text-xl'>
                    <CiHome />
                </LinkScroll>
                <LinkScroll to='home' offset={-100} spy smooth activeClass='active-class' className='text-white text-xl'>
                    <CiHome />
                </LinkScroll>
                <LinkScroll to='home' offset={-100} spy smooth activeClass='active-class' className='text-white text-xl'>
                    <CiHome />
                </LinkScroll>
                <LinkScroll to='home' offset={-100} spy smooth activeClass='active-class' className='text-white text-xl'>
                    <CiHome />
                </LinkScroll>
            </div>
        </div>
    </div>
  )
}

export default Menues