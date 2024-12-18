import React from 'react'
import { Element } from 'react-scroll'
import html from '../assets/html.png'
import { useState, useEffect } from 'react'
import {client, UrlFor } from '../client.js'
import { frontend } from '../index.jsx'
import { backend } from '../index.jsx'
import { tools } from '../index.jsx'


const Skills = () => {
    const [skillFrontend, setSkillFrontend] = useState([]);
    const [skillBackend, setSkillBackend] = useState([]);
    const [tool, setTools] = useState([]);
    useEffect(()=>{
            const query = '*[_type == "frontend"]'
            client.fetch(query)
            .then((data)=>{
                setSkillFrontend(data)
            })
        },[])

    useEffect(()=>{
            const query = '*[_type == "backend"]'
            client.fetch(query)
            .then((data)=>{
                setSkillBackend(data)
            })
        },[])

    useEffect(()=>{
            const query = '*[_type == "tools"]'
            client.fetch(query)
            .then((data)=>{
                setTools(data)
            })
        },[])
  return (
    <section className='relative lg:px-10 md:px-10 p-0'>
        <Element name='skills'>
            <div className='flex lg:pt-16 md:pt-16 pt-6 mb-12'>
            <div class="border-[1px] border-accent py-2 lg:px-5 px-4 lg:text-sm md:text-sm text-white text-xs flex items-center gap-2 rounded-full"><lord-icon target="div" src="https://cdn.lordicon.com/svbmmyue.json" trigger="hover" colors="primary:#fff" style={{width: "25px", height: "25px"}}></lord-icon>My Skills</div>
            </div>
            <h1 className='lg:text-5xl text-white md:text-4xl text-3xl lg:leading-[60px] md:leading-[45px] leading-[36px] mt-12 mb-10 max-w-[670px] font-light'>My Skills <span className='text-red'>Expertise</span></h1>
                <h4 className='flex items-center text-white gap-5 text-3xl '>
                    <span className='text-white text-3xl'>{frontend}</span>
                    Frontend
                </h4>
                <div className='flex flex-wrap items-center gap-10 my-10'>
                    {skillFrontend.map((item)=>(
                        <div className="flex flex-col items-center hover:border-red">
                        <div className='w-24 h-36 border-[1px] border-accent rounded-3xl flex items-center justify-center'>
                            <img src={UrlFor(item.icon).url()} className='w-14 h-14' alt="" />
                        </div>
                        <span className='text-accent font-medium mt-4 text-[18px]'>{item.name}</span>
                        </div>
                    ))}
                </div>
                <h4 className='flex items-center text-white gap-5 text-3xl mt-16'>
                    <span className='text-white text-3xl'>{backend}</span>
                    Backend
                </h4>
                <div className='flex flex-wrap items-center gap-10 my-10'>
                    {skillBackend.map((item)=>(
                        <div className="flex flex-col items-center hover:border-red">
                        <div className='w-24 h-36 border-[1px] border-accent rounded-3xl flex items-center justify-center'>
                            <img src={UrlFor(item.icon).url()} className='w-14 h-14' alt="" />
                        </div>
                        <span className='text-accent font-medium mt-4 text-[18px]'>{item.name}</span>
                        </div>
                    ))}
                </div>
                <h4 className='font-normal flex items-center text-white gap-5 text-3xl mt-16'>
                    <span className='text-white text-3xl'>{tools}</span>
                    Tools
                </h4>
                <div className='flex flex-wrap items-center gap-10 my-10'>
                    {tool.map((item)=>(
                        <div className="flex flex-col items-center hover:border-red">
                        <div className='w-24 h-36 border-[1px] border-accent rounded-3xl flex items-center justify-center'>
                            <img src={UrlFor(item.icon).url()} className='w-14 h-14' alt="" />
                        </div>
                        <span className='text-accent font-medium mt-4 text-[18px]'>{item.name}</span>
                        </div>
                    ))}
                </div>
        </Element>
    </section>
  )
}

export default Skills