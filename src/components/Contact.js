import React from 'react';
import contact from '../assets/contact.png'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='w-full flex mt-4'>
      <div className='hidden md:flex w-1/2'>
        <div className='w-[90%] h-[90%]'>
          <img src={contact} className='h-full w-full' />
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <div className='w-full text-white flex flex-col justify-evenly'>
          <div className='flex p-2 text-[1rem] md:text-[1.5rem] items-center'>
            <MdOutlineAlternateEmail className='hover:text-[rgb(80,236,150)] text-[1.5rem] md:text-[3rem] m-4' />
            <span className='pl-3'>
              rpbarmaiya@gmail.com
            </span>
          </div>
          <div className='flex p-2 text-[1rem] md:text-[1.5rem] items-center'>
            <FaPhone className='hover:text-[rgb(80,236,150)] text-[1.5rem] md:text-[3rem] m-4' />
            <span className='pl-3'>
              7000061754
            </span>
          </div>
          <div className='flex p-2 text-[1rem] md:text-[1.5rem] items-center'>
            <FaLocationDot className='hover:text-[rgb(80,236,150)] text-[1.5rem] md:text-[3rem] m-4' />
            <span className='pl-3'>
              Mandla,(MP)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact