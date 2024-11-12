import React from 'react'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <section className='relative mb-32'>
        <Element name='about'>
            <div className='flex lg:pt-16 md:pt-16 pt-6 mb-16'>
            <div className='border-[1px] border-[#cecec8] py-2 lg:px-5 px-4 lg:text-sm md:text-sm text-xs flex items-center gap-2 rounded-full text-white font-poppins'>
            <lord-icon target="div" src="https://cdn.lordicon.com/bhfjfgqz.json" trigger="hover" colors="primary:#fff" style={{width: "25px", height: "25px"}}></lord-icon>
                About Me
            </div>
            </div>
            <p className='max-w-[800px] text-accent leading-loose font-poppins font-normal'>Hi, I'm Faruq Oloyede, a passionate frontend developer dedicated to building responsive, user-friendly, and visually appealing web applications. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React, I enjoy turning ideas into dynamic, interactive digital experiences. I focus on clean, efficient code and stay up-to-date with the latest industry trends and best practices. I take pride in creating seamless user interfaces and constantly strive to improve my skills. Whether it's implementing complex features or fine-tuning the smallest details, I aim to deliver high-quality solutions that meet users' needs.</p>
        </Element>
    </section>
  )
}

export default About