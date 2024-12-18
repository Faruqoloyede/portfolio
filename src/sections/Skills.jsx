import React from 'react'
import { Element } from 'react-scroll'

const Skills = () => {
  return (
    <section className='relative lg:px-10 md:px-10 p-0'>
        <Element name='skills'>
            <div className='flex lg:pt-16 md:pt-16 pt-6 mb-12'>
            <div class="border-[1px] border-accent py-2 lg:px-5 px-4 lg:text-sm md:text-sm text-white text-xs flex items-center gap-2 rounded-full"><lord-icon target="div" src="https://cdn.lordicon.com/svbmmyue.json" trigger="hover" colors="primary:#fff" style={{width: "25px", height: "25px"}}></lord-icon>My Skills</div>
            </div>
            
        </Element>
    </section>
  )
}

export default Skills