import React, { useState } from 'react';
import { experiences } from '../utils/Experiences';
import { FaCaretDown } from "react-icons/fa";
import { RxDot } from "react-icons/rx";

import styles from '../style/Home.module.css'
import { projects } from '../data/projects';


const Projects = () => {
  const [showDropdown, setShowDropdown] = useState(Array(experiences.length).fill(false));
  const toggleDropdown = (index) => {
    const newDropdownState = [...showDropdown];
    newDropdownState[index] = !newDropdownState[index];
    setShowDropdown(newDropdownState);
  };
  return (
    <div className='w-full'>
      <div className='hidden w-full p-2 md:flex flex-wrap justify-evenly'>
        {projects.map((project, index) => (

          <div className={`flex flex-col justify-evenly items-center m-2 h-[85vh] w-[40%] ${styles.custom}`}>
            <span className=' text-white font-semibold m-2'>{project.name}</span>
            <div className='w-[80%] bg-red-300 h-[40vh]'>
              <img src={project.background} className='h-full w-full' alt='bg' />
            </div>
            <div className='flex flex-wrap w-[85%] text-white mt-5'>
              {project.desc}
            </div>
            <div className='flex justify-evenly w-[80%] font-semibold text-[rgb(80,236,150)]'>
              {project.tech.map((tech) => (
                <span>
                  {tech}
                </span>

              ))}
            </div>
            <div className='mt-6 pb-4'>
              <a href={project.git} target='_blank' className='rounded-xl border-[1px] border-[#7c3aed] pr-4 pl-4 p-2 text-white font-semibold'>
                source code
              </a>
            </div>

          </div>
        ))}

      </div>
      <div className='flex md:flex w-full'>

        <div className='md:hidden w-full p-2 flex-col flex-wrap justify-evenly'>
          {projects.map((info, index) => (
            <div key={index} className='bg-[#1a23479a] p-4 mb-4 rounded-xl' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 10px 25px 15px' }}>
              <div>
                <div>
                  <span className='text-white'>{info.name}</span>
                </div>
                <div className='flex justify-between'>
                  <a href={info.git} target='_blank' className='text-gray-400'>
                    Source Code
                  </a>
                  <button onClick={() => toggleDropdown(index)} className='text-yellow-100'><FaCaretDown />
                  </button>
                </div>
              </div>
              {showDropdown[index] && (
                <div className='text-white mt-5 text-[0.7rem] md:text-[1rem]'>
                  <div className='flex'>
                    {info.desc}
                  </div>

                  <div className='flex flex-wrap p-4'>
                    {info.tech.map((tech, i) => (
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
  );
};

export default Projects;
