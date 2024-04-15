import React, { useState } from 'react';
import img from '../assets/971.jpg'
import { experiences } from '../utils/Experiences';
import { FaCaretDown } from "react-icons/fa";
import { RxDot } from "react-icons/rx";


const Experience = () => {
    const [showDropdown, setShowDropdown] = useState(Array(experiences.length).fill(false));
    const toggleDropdown = (index) => {
        const newDropdownState = [...showDropdown];
        newDropdownState[index] = !newDropdownState[index];
        setShowDropdown(newDropdownState);
      };
     
    return (
        <div className='flex justify-center w-full '>
          <div className='hidden md:flex w-1/2'>
            <div className='w-[90%] h-[50vh] p-5'>
              <img src={img} className='h-full w-full' />
            </div>
          </div>
          <div className='w-full md:w-1/2 text-white'>
            <div className='mt-4'>
              {experiences.map((info, index) => (
                <div key={index} className='bg-[#1a23479a] p-4 mb-4 md:m-4 rounded-xl' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 10px 25px 15px' }}>
                  <div>
                    <div>
                      <span className='text-[rgb(80,236,150)]'>{info.title}</span>
                      <span className='text-xs text-[#747474cb]'> ({info.startDate} - {info.endDate})</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>{info.company}</span>
                      <button onClick={() => toggleDropdown(index)} className='hover:text-[rgb(80,236,150)]'><FaCaretDown />
                      </button>
                    </div>
                  </div>
                  {showDropdown[index] && (
                    <div className='mt-5 text-[0.7rem] md:text-[1rem]'>

                      {info.points.map((point, index) => (
                        <div className='flex items-baseline'>
                          <RxDot className='mr-2' />
                          <div key={index}>{point}</div>
                        </div>
                      ))}
                      <div className='flex flex-wrap p-4'>
                        {info.techStack.map((tech, i) => (
                          <div className='flex m-1 font-bold text-[#ec5058] flex-wrap' key={i}>
                            {tech},
                          </div>
                        ))
                        }
                      </div>

                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
    )
}

export default Experience