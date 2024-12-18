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
                <LinkScroll to='home' offset={-100} spy smooth activeClass='active-class' className='text-white text-xl tooltip'>
                    <lord-icon
                        target= "button"
                        src="https://cdn.lordicon.com/cnpvyndp.json"
                        trigger="hover"
                        state="morph-home-2"
                        class= "current-color"
                        style={{width: "25px", height: "25px"}}>
                    </lord-icon>
                    <span className='tooltiptext'>home</span>
                </LinkScroll>
                <LinkScroll to='about' offset={-100} spy smooth className='tooltip'>
                <lord-icon src="https://cdn.lordicon.com/bhfjfgqz.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                <span className="tooltiptext">about</span>
                </LinkScroll>
                <LinkScroll to='services' offset={-100} spy smooth className='tooltip'>
                <lord-icon src="https://cdn.lordicon.com/ofwpzftr.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                <span className="tooltiptext">services</span>
                </LinkScroll>
                <LinkScroll to='skills' offset={-100} spy smooth className='tooltip'>
                <lord-icon src="https://cdn.lordicon.com/svbmmyue.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                 <span className="tooltiptext">skills</span>
                </LinkScroll>
                <LinkScroll to='project' offset={-100} spy smooth className='tooltip'>
                <lord-icon src="https://cdn.lordicon.com/fpmskzsv.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                 <span className="tooltiptext">projects</span>
                </LinkScroll>
                <LinkScroll to='contact' offset={-100} spy smooth className='tooltip'>
                <lord-icon src="https://cdn.lordicon.com/diihvcfp.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                 <span className="tooltiptext">contact</span>
                </LinkScroll>
                <a href='/' className='tooltip'>
                <lord-icon src="https://cdn.lordicon.com/winbdcbm.json" trigger="hover" class="current-color" style={{width: "25px", height: "25px"}}></lord-icon>
                 <span className="tooltiptext">resume</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Menues