import React from 'react'
import { Element } from 'react-scroll'
import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    useEffect(() => {
        AOS.init(); 
      }, []);

  return (
    <section className='relative lg:px-10 md:px-10 px-0'>
        <Element name='contact'>
        <div class="flex lg:pt-16 md:pt-16 pt-6 mb-16">
            <div class="border-[1px] border-accent text-white py-2 lg:px-5 px-4 lg:text-sm md:text-sm text-xs flex items-center gap-2 rounded-full"><lord-icon target="div" src="https://cdn.lordicon.com/diihvcfp.json" trigger="hover" colors="primary:#fff" style={{width: "25px", height: "25px"}}></lord-icon>Contact Me</div>
            </div>
            <h2 class="lg:text-5xl text-white md:text-4xl text-3xl lg:leading-[60px] md:leading-[45px] leading-[36px] mt-12 mb-10 max-w-[670px] font-light">Let's Work <span class="text-red">Together</span></h2>
            <form className='my-12'data-aos="fade-up" >
                <div className='flex lg:flex-row md:flex-row flex-col items-start gap-10 mb-5'>
                    <div className='flex flex-col items-start gap-10 lg:w-1/2 md:w-1/2'>
                        <label htmlFor="name" className='text-sm text-white'>Full Name</label>
                        <input type="text" name='name' value={name} placeholder='Your Name' className='w-full px-0 outline-none border-none bg-bg text-white focus:outline-none placeholder:text-accent' required onChange={(e)=> setName(e.target.value) } />
                    </div>
                    <div className='flex flex-col items-start gap-10 lg:w-1/2 md:w-1/2'>
                        <label htmlFor="email" className='text-sm text-white'>Email</label>
                        <input type="email" name='email' value={email} placeholder='Your Email' className='w-full px-0 outline-none border-none bg-bg text-white focus:outline-none placeholder:text-accent' required onChange={(e)=> setEmail(e.target.value) } />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className='text-sm text-white'>Message</label>
                    <textarea name="message" placeholder='Your message' required className='w-full mt-2 p-0 h-64 bg-bg text-white focus:outline-none border-b-[1px] border-accent'></textarea>
                </div>
                <input type="submit" value="Send" className='bg-red rounded-3xl text-white font-bold cursor-pointer mt-10 px-6 h-[3rem] w-[16rem]' />
            </form>
            <p className='text-accent lg:text-[20px] md:text-[18px] text-sm text-center mb-24'>Allrights reserved to ©Faruq Oloyede</p>
        </Element>
    </section>
  )
}

export default Contact