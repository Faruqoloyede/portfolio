import React from 'react'
import profile from '../assets/profile.png'
import { FaLinkedinIn, FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa6";
import { Link as LinkScroll } from 'react-scroll';
import Button from './Button';

const Links = [
    {
        id: 1,
        icon: <FaGithub />,
        href: "https://github.com/Faruqoloyede"
    },
    {
        id: 2,
        icon: <FaLinkedinIn />,
        href: "https://www.linkedin.com/in/faruq-oloyede-3a42a2248"
    },
    {
        id: 3,
        icon: <FaFacebookF />,
        href: "https://web.facebook.com/abu.jabbar.50"
    },
    {
        id: 4,
        icon: <FaWhatsapp />,
        href: "https://api.whatsapp.com/send?phone=2348083043094"
    },
]
const Profile = () => {
  return (
    <div className='w-[380px] lg:block hidden '>
        <div className='lg:w-[380px] border-2 border-[#575756] px-6 py-10 sticky top-16 h-[auto]  rounded-3xl'>
        <div className='flex items-center justify-between mb-6 gap-2'>
            <h2 className='text-white text-4xl font-bold font-poppins'>Faruq</h2>
            <h2 className='text-white text-xl leading-[20px] text-right'>Frontend Developer</h2>
        </div>
        <div className="flex items-center justify-center">
        <img src={profile} alt="faruq" className='w-64' />
        </div>
        <div className='flex flex-col items-center font-poppins'>
            <h2 className='text-white text-lg mt-8'><a href="mailto:oloyedefaruq2@gmail.com">oloyedefaruq2@gmail.com</a></h2>
            <h2 className='text-white text-lg text-center mt-2 mb-6'>Lagos, Nigeria</h2>
            <div className='flex items-center gap-5 text-white mb-3'>
                {Links.map(({ id, icon, href })=>(
                    <a href={href} key={id} target='_blank' className='text-xl border-2 border-[#575756] rounded-full p-3 hover:text-red hover:border-red transition-all delay-[.1s]'>
                        {icon}
                    </a>
                ))}
            </div>
            <LinkScroll to='contact' offset={-100} spy smooth >
                <Button text= "HIRE ME" />
            </LinkScroll>
        </div>
    </div>
    </div>
  )
}

export default Profile