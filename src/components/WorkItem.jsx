import React from 'react';

const WorkItem = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.itemImg})` }}
      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
    >
      <div className='opacity-0 group-hover:opacity-100'>
        <span className='text-2xl font-bold text-white tracking-wider'>
          {props.itemName}
        </span>
        <div className='pt-8 text-center'>
          {props.demoLink &&
            (
              <a href={props.demoLink} target='_blank' rel='noreferrer noopener'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-[#9C6700]'>
                  Demo
                </button>
              </a>
            )
          }
          {props.codeLink &&
            (
              <a href={props.codeLink} target='_blank' rel='noreferrer noopener'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-[#9C6700]'>
                  Code
                </button>
              </a>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default WorkItem;