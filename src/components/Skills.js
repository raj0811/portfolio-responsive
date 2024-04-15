
import React from 'react';
import { skills } from '../data/skills';
import Marquee from "react-fast-marquee";
const Skills = () => {
  return (
    <div className='flex flex-col w-full items-center mt-4 md:mt-12'>
      {/* <div className='text-[2rem] font-semibold text-white mb-11'>SKILLS</div> */}
      <div className="hidden md:flex w-full mb-20">
        <div className="flex w-full overflow-hidden">
          <div className='w-full flex justify-evenly items-center ps-2 h-auto'>
            <Marquee
              gradient={false}
              speed={50}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
              className='overflow-y-hidden w-full flex justify-evenly items-center ps-2 h-auto'
            >
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col mr-4 w-[12vh] items-center justify-evenly h-[15vh] m-4">
                  <img src={skill.background} className='h-[70%] w-full' alt='bg' />
                  <span className='text-white'>{skill.name}</span>

                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      <div className='flex md:hidden flex-wrap w-full mb-4 justify-evenly'>
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col mr-4 w-[8vh] items-center justify-evenly h-[10vh] m-4">
            <img src={skill.background} className='h-[70%] w-full' alt='bg' />
            <span className='text-white text-[0.7rem]'>{skill.name}</span>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills