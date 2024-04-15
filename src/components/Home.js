import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import '../App.css'
// import React, { useEffect, useState } from 'react';
const Home = () => {
 return (
    <div className='w-full h-screen flex justify-center  container mx-auto'>
      <div className='w-[90%] md:w-[80%] flex flex-col items-center' >
        <Navbar />
        <span className='text-white font-semibold text-[2rem] mb-4' id='about'></span>
        <About  />
        <span className='mt-8 md:mt-[70px] md:text-[2rem] md:mb-5 text-white font-semibold' id='experience'>EXPERIENCE</span>
        <Experience />
        <span className='text-white font-semibold md:text-[2rem] mb-4 mt-4' id='skills'>SKILLS</span>
        <Skills />
        <span className='text-white font-semibold md:text-[2rem] mb-4' id='projects'>Projects</span>
        <Projects />
        <span className='text-white font-semibold md:text-[2rem] mt-4 md:mt-11' id='contact'>Contact</span>
        <Contact />
      </div>

    </div>
  );
};

export default Home;
