import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full p-2 flex justify-between h-auto container mx-auto'>
      <span className="text-[rgb(22,242,114)] text-[1rem] md:text-[2rem] font-[600]">
        RAJ BARMAIYA
      </span>
      <div className="hidden md:flex w-[60%] text-white justify-evenly h-full items-center">
        <button onClick={() => scrollToSection('about')}>ABOUT</button>
        <button onClick={() => scrollToSection('experience')}>EXPERIENCE</button>
        <button onClick={() => scrollToSection('skills')}>SKILLS</button>
        <button onClick={() => scrollToSection('projects')}>PROJECTS</button>
        <button onClick={() => scrollToSection('contact')}>CONTACT</button>
      </div>
    </div>

  );
};

export default Navbar;
