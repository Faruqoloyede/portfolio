import React from 'react'

const Button = ({ text }) => {
  return (
    <div className='relative w-[16rem] mt-8 bg-red text-white flex items-center justify-center font-semibold font-poppins h-10 cursor-pointer rounded-3xl '>{text}</div>
  )
}

export default Button