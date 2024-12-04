import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import Lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

defineElement(Lottie.loadAnimation);

const Menues = () => {
   
  return (
    <div className='max-w-[60px] lg:block md:block hidden'>
        <div className='flex flex-col gap-4 sticky top-20'>
            <div className='flex flex-col gap-5 py-6 px-3 border-[1px] border-[#575756] rounded-full'>
                <LinkScroll to='home' offset={-100} spy smooth activeClass='active-class' className='text-white text-xl'>
                    <lord-icon
                        target= "button"
                        src="https://cdn.lordicon.com/cnpvyndp.json"
                        trigger="hover"
                        state="morph-home-2"
                        class= "current-color"
                        style={{width: "25px", height: "25px"}}>
                    </lord-icon>
                </LinkScroll>
                <LinkScroll to='about' offset={-100} spy smooth>
                <lord-icon src="https://cdn.lordicon.com/bhfjfgqz.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                </LinkScroll>
                <LinkScroll to='home' offset={-100} spy smooth>
                <lord-icon src="https://cdn.lordicon.com/ofwpzftr.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                </LinkScroll>
                <LinkScroll to='home' offset={-100} spy smooth>
                <lord-icon src="https://cdn.lordicon.com/svbmmyue.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                </LinkScroll>
                <LinkScroll to='home' offset={-100} spy smooth>
                <lord-icon src="https://cdn.lordicon.com/fpmskzsv.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                </LinkScroll>
                <LinkScroll to='home' offset={-100} spy smooth>
                <lord-icon src="https://cdn.lordicon.com/diihvcfp.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                </LinkScroll>
                <a href='/'>
                <lord-icon src="https://cdn.lordicon.com/winbdcbm.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Menues