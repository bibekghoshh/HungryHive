import React from 'react'
import {BsLinkedin,BsGithub} from "react-icons/bs";

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-16 mt-4'>
      
        <div><img className='w-48 rounded-full shadow-2xl shadow-black' src="https://avatars.githubusercontent.com/u/58251209?v=4" alt="" /></div>
        <div className='flex gap-10'>
          <a href="https://www.linkedin.com/in/bibekghoshh/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='text-3xl text-blue-600 transition hover:scale-110'/></a>
          <a href="https://github.com/bibekghoshh" target="_blank" rel="noopener noreferrer"><BsGithub className='text-3xl transition hover:scale-110'/></a> 
        </div>
        <div>
          <p>Mail : bibek7478@gmail.com</p>
        </div>
      
    </div>
  )
}

export default About;