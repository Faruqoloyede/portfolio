import React from 'react'
import { Element } from 'react-scroll'
import { service } from '..'

const Section = () => {
  return (
    <section className='relative lg:px-10 md:px-10 p-0'>
        <Element name="services">
        <div className='flex lg:pt-16 md:pt-16 pt-6 mb-12'>
            <div className='border-[1px] border-[#cecec8] py-2 lg:px-5 px-4 lg:text-sm md:text-sm text-xs flex items-center gap-2 rounded-full text-white font-poppins'>
            <lord-icon target="div" src="https://cdn.lordicon.com/ofwpzftr.json" trigger="hover" colors="primary:#fff" style={{width: "25px", height: "25px"}}></lord-icon>
                Services
            </div>
            </div>
            <h1 className='lg:text-5xl text-white md:text-4xl text-3xl lg:leading-[60px] md:leading-[45px] leading-[36px] mt-12 mb-10 max-w-[670px] font-light'>My <span className='text-red'>Services</span></h1>
            <div className='flex flex-col items-center gap-10 mt-10'>
                {service.map(({icon, title, content, index})=>(
              <div key={index} className="flex flex-col items-start p-6 border-[1px] border-[#cecec8] hover:border-red hover:text-red rounded-2xl">
                <span className='text-5xl text-white mb-6'>{icon}</span>
                <h4 className='text-white font-sora lg:text-2xl md:text-2xl text-xl mb-5'>{title}</h4>
                <p className='text-accent hover:text-accent text-sm leading-loose'>{content}</p>
              </div>
                ))}
            </div>
        </Element>
    </section>
  )
}


export default Section