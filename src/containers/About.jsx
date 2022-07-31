import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full min-h-screen'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#9C6700]'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hello, my name is Mike, it's a pleasure to meet you. Have a look around to learn about me.</p>
          </div>
          <div>
            <p>
              My journey began many moons ago when I first began to learn how to build webpages using basic HTML in Notepad. From there I moved 
              on to learning how to make these pages look nicer by using CSS. However, once I started to add reactive content to pages using JavaScript 
              my enjoyment of this hobby grew into a passion. It was not long after that I found myself doing freelance work and eventually moved into 
              a full-time position as a developer. To this day web development still feels more like a hobby than a job to me and I continue to learn and 
              grow with it while loving every minute.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;