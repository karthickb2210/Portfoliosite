import React from 'react';
import { BiHomeAlt} from 'react-icons/bi';
import { BsClipboardData} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {Link} from 'react-scroll';
import { FiMail } from "react-icons/fi";
import { GrGithub} from "react-icons/gr";
const Nav = () => {
  return (
   <nav  className='fixed bottom-2 lg:bottom-6 w-full overflow-hidden z-50'>
  <div className='container mx-auto'>
{}
<div className='w-full bg-black/20 h-[66px] backdrop-blur-2xl
rounded-full max-w-[460px] mx-auto px-5 flex 
justify-between items-center text-2x1 text-white/50'>
  <Link to='home' activeClass='active' spy={true} offset={-230} smooth={true}
  className='cursor-pointer w-[60px] h-[60px] flex items-center
  justify-center '>
    <BiHomeAlt />
  </Link>
  <Link to='Cp'  activeClass='active'  spy={true} smooth={true}
  className='cursor-pointer w-[60px] h-[60px] flex items-center
  justify-center'>
    <BsClipboardData />
  </Link>
  <Link to='Projects'  activeClass='active'  spy={true} smooth={true}
  className='cursor-pointer w-[60px] h-[60px] flex items-center
  justify-center'>
    <GrGithub />
  </Link>
 
  <Link to='contact'  activeClass='active'  spy={true} smooth={true}
   className='cursor-pointer w-[60px] h-[60px] flex items-center
  justify-center' >
    <FiMail />
  </Link>
  <Link to='education'  activeClass='active'  spy={true} smooth={true}
   className='cursor-pointer w-[60px] h-[60px] flex items-center
  justify-center' >
    <CgProfile />
  </Link>

  
  

  
  
</div>
  </div>

  </nav>
   );
};

export default Nav;
