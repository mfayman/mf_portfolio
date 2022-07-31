import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import BootstrapImg from '../assets/bootstrap.png';
import Sass from '../assets/sass.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  const mySkills = [
    { text: 'HTML', img: HTML },
    { text: 'CSS', img: CSS },
    { text: 'JavaScript', img: JavaScript },
    { text: 'React', img: ReactImg },
    { text: 'Bootstrap', img: BootstrapImg },
    { text: 'Sass', img: Sass },
    { text: 'GitHub', img: GitHub },
    { text: 'Tailwind CSS', img: Tailwind },
  ];

  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-screen'>
        <div className='pt-[80px] md:pt-0'>
          <p className='text-4xl font-bold inline border-b-4 border-[#9C6700]'>Skills</p>
          <p className='py-4'>These are the main technologies that I work with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {
            mySkills.map((skill) => (
              <div key={skill.text} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={skill.img} alt={`${skill.text} Icon`} />
                <p className='my-4'>{skill.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;