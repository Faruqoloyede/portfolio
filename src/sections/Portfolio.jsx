import React from 'react'
import { Element } from 'react-scroll'
// import pr1 from '../assets/pr1.png'
import react from '../assets/react.webp'
import tailwind from '../assets/tailwind.png'
import { LuExternalLink } from "react-icons/lu";
import { useState, useEffect } from 'react'
import {client, UrlFor } from '../client.js'

const Portfolio = () => {
    const [work, setWork] = useState([])

    useEffect(()=>{
        const query = '*[_type == "work"]'
        client.fetch(query)
        .then((data)=>{
            setWork(data)
        })
    },[])
  return (
    <section className='relative lg:px-10 md:px-10 p-0'>
        <Element name="project">
        <div className='flex lg:pt-16 md:pt-16 pt-6 mb-12'>
        <div class="border-[1px] border-accent py-2 lg:px-5 px-4 lg:text-sm md:text-sm text-xs text-white flex items-center gap-2 rounded-full"><lord-icon target="div" src="https://cdn.lordicon.com/fpmskzsv.json" trigger="hover" colors="primary:#fff" style={{width: "25px", height: "25px"}}></lord-icon>Projects</div>
            </div>
            <h1 className='lg:text-5xl md:text-4xl text-white text-3xl lg:leading-[60px] md:leading-[45px] leading-[36px] mt-12 mb-10 max-w-[670px] font-light'>My <span className='text-red'>Projects</span></h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-10 gap-5 mt-10'>
                
               {work.map((project)=>(
                     <div key={project._id} className='rounded-lg shadow-lg relative border-[1px] border-accent w-full'>
                     <div className=''>
                     <img src={UrlFor(project.image).url()} alt="pr1" className='rounded-lg w-full' />
                     </div>
                    <div className='p-4'>
                     <h4 className='text-white font-sora font-bold lg:text-2xl md:text-2xl text-xl mb-5'>{project.title}</h4>
                     <div className="flex items-center justify-between">
                         <a href={project.liveSiteUrl} target='_blank' className='bg-[#3B82F6] px-4 py-2 text-white rounded-full flex items-center gap-2'><LuExternalLink />Live site</a>
                         <div className='flex items-center gap-3'>
                             <img src={react} alt="" />
                             <img src={tailwind} alt="" className='w-[20px]' />
                         </div>
                    </div>
                    </div>
                 </div>
               ))}
            </div>
        </Element>
    </section>
  )
}

export default Portfolio