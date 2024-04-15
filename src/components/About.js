import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import resume from '../assets/cv.pdf'

const About = () => {
    return (
        <div className=''>
            <div className='w-full md:flex mt-2 md:mt-[50px]' >
                <div className='w-full md:w-[50%] font-bold text-white '>
                    <div className='md:text-[2.5rem] '>
                        <span>Hello,</span><br />
                        <span>
                            This is <span className='text-[#4feb9d]'>RAJ BARMAIYA</span> , I'm a <span className='text-[#eb4f4f]'> Full Stack Developer</span>
                        </span>
                    </div>
                    <div className='flex mt-[5px] '>
                        <a className='p-2 tez md:text-[2rem]' href='https://github.com/raj0811' target='_blank'>
                            <FaGithub />
                        </a>
                        <a className='p-2 md:text-[2rem]' href='https://www.linkedin.com/in/raj-barmaiya-40885221b/' target='_blank'>
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className='mt-[7px] flex'>
                        {/* <button className='  text-[0.8rem] md:text-[1rem] rounded-full pr-3 pl-3  items-center w-[140px] hover:w-[150px] hover:border-[1px] bg-red-700 border-[#eb4f4f] transition-all duration-20000 p-[8px]'>
                            Contact Me <RiContactsLine />
                        </button> */}
                        <a href={resume} download className='ml-2'>
                            <button className='text-[0.8rem] md:text-[1rem] rounded-full pr-3 pl-3 flex items-center   hover:border-[1px] border-[#eb4f4f] transition-all duration-20000 p-[8px] w-[220px]' >
                                Download Resume <FaDownload className='ml-2' />
                            </button>
                        </a>
                    </div>
                </div>
                <div className='w-full md:w-[50%] mt-4 md:mt-0'>
                    <div className='h-12 rounded-t-lg border-t-[1px] border-l-[1px] border-r-[1px] border-[#7c3aed]' style={{}}>
                        <div className='h-full flex items-center ml-2'>
                            <div className='h-3 w-3 rounded-full bg-[#3a8eed] ml-2'></div>
                            <div className='h-3 w-3 rounded-full bg-[#3aeda8] ml-2'></div>
                            <div className='h-3 w-3 rounded-full bg-[#ed3a70] ml-2'></div>
                        </div>
                    </div>
                    <div className='rounded-b-lg border-[1px] border-[#7c3aed] p-10'>

                        <code className="font-mono text-xs md:text-sm lg:text-base">
                            <div className="blink">
                                <span className="mr-2 text-pink-500">const</span>
                                <span className="mr-2 text-white">coder</span>
                                <span className="mr-2 text-pink-500">=</span>
                                <span className="text-gray-400">{'{'}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                                <span className="text-gray-400">'</span>
                                <span className="text-amber-300">Raj Barmaiya</span>
                                <span className="text-gray-400">'</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className=" text-white">skills:</span>
                                <span className="text-gray-400">['</span>
                                <span className="text-amber-300">React</span>
                                <span className="text-gray-400">', '</span>
                                <span className="text-amber-300">Tailwind</span>
                                <span className="text-gray-400">', '</span>
                                <span className="text-amber-300">NodeJs</span>
                                <span className="text-gray-400">', '</span>
                                <span className="text-amber-300">Express</span>
                                <span className="text-gray-400">', '</span>
                                <span className="text-amber-300">NestJS</span>
                                <span className="text-gray-400">', '</span>
                                <span className="text-amber-300">MongoDB</span>
                                <span className="text-gray-400">', '</span>
                                <span className="text-amber-300">AWS</span>
                                <span className="text-gray-400">'],</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="text-gray-400">{`}`};</span>
                            </div>
                        </code>
                    </div>
                </div>

            </div>
            <div className='w-full mt-10 md:mt-[100px] '>
                <div className='md:w-[60%]'>
                    <span className='text-[#4feb9d] text-[1rem] font-[600]'>WHO I AM</span>
                    <div className='text-white mt-2 md:mt-[30px] text-[0.8rem] md:text-[1rem]'>
                        My name is <span className='text-[#4feb9d]'>RAJ BARMAIYA</span> . I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. My core skill is based on JavaScript  currently I am working in Edviron as SDE
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
