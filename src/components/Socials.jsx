import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from '../assets/Mike_Fayman_Resume.pdf';

const Socials = (props) => {
  const mySocials = [
    { link: 'https://www.linkedin.com/in/mikefayman', name: 'LinkedIn', icon: FaLinkedin, color: 'bg-blue-600' },
    { link: 'https://github.com/mfayman', name: 'GitHub', icon: FaGithub, color: 'bg-[#333333]' },
    { link: 'mailto:mfayman82@gmail.com', name: 'Email', icon: HiOutlineMail, color: 'bg-[#6fc2b0]' },
    { link: Resume, name: 'Resume', icon: BsFillPersonLinesFill, color: 'bg-[#565f69]' },
  ];

  const classes = {
    menu: {
      container: 'absolute bottom-8',
      ul: 'flex justify-center items-center gap-8',
      li: `w-[40px] h-[40px] flex justify-center items-center`,
      a: ''
    },
    page: {
      container: 'hidden md:flex fixed flex-col top-[35%] left-0',
      ul: '',
      li: `w-[130px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 pr-[4px]`,
      a: 'flex justify-between items-center w-full text-gray-300'
    }
  };

  return (
    <div className={classes[props.section].container}>
      <ul className={classes[props.section].ul}>
        {
          mySocials.map((item) => (
            <li key={item.name} className={`${classes[props.section].li} ${item.color}`}>
              <a className={classes[props.section].a} href={item.link} target='_blank' rel='noreferrer noopener'>
                {props.section === 'page' ? item.name : ''} <item.icon size={25} />
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Socials;