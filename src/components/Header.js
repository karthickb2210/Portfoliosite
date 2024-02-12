import React from 'react';
//import logo from '../assets/logo.svg'
import Personal from './Personal';

const Header = () => {
  return <header className='py-4'>
  <div className='container mx-auto '>
    <div className='flex justify-between items-center pr-8'>
      {/* <a href='#'>
        <img src={logo} alt='logo' />
       </a> */}
       {}
        <button className='btn btn-sm'><a href='https://drive.google.com/file/d/166-G5TEXSSqvcxjawvEfloVPriLfMRT1/view?usp=sharing'>MY RESUME</a></button> 
        <div className='container'>
        <Personal />
        </div>
      
        

    </div>
  </div>
  </header>;
};

export default Header;
