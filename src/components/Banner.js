import React from 'react';
import Image from '../assets/img1.png';
import {FaGithub,FaLinkedinIn,FaInstagram} from 'react-icons/fa';
import {TypeAnimation} from'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh]
  flex items-center' id='home'>
  <div className='container mx-auto'>
    <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
    lg:gap-x-12'>
      <div className='flex-1 text-center font-secondary lg:text-left'>
      <motion.h1 variants={fadeIn('down',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='text-[55px] font-bold leading-[0.8]
      lg:text-[110px]'>KARTHICK
      <span> B
      </span></motion.h1> 
      
      <div className='mb-6 text-[36px] lg:text-[60px] font-secondary
      font-semibold uppercase leading-[1]'>
      <span className='mI-4 text-white '>Myself a </span>
      <TypeAnimation sequence={[
        'Developer',2000,
        'Gamer',2000,
        'BasketBaller',2000,
        'Designer',2000,

      ]} speed={50}
        className='text-accent'
        wrapper='span'
        repeat={Infinity}
      />
      </div>
      <p className='mb-8 max-w-lg mx-auto lg:mx-0'>I Am a Young College fresher with some good problem solving
      skills and a good understanding of react and data struture concepts 
      </p>
      <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
        <button className='btn btn-lg'>Conatct me</button>
        <a href='#' className='text-gradient btn-link'>MY PORTFOLIO</a>
      </div>
   { /* social media */}
      <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
      <a href='#'>
        <FaLinkedinIn />
      </a>
      <a href='#'>
        <FaGithub />
      </a>
      <a href='#'>
        <FaInstagram />
      </a>
      </div>
      </div>
      <div className='hidden lg:flex flex-1 max-w-[400px] bg-top bg-no-repeat mix-blend-lighten  max-h-[550px] lg:max-w-[480px] mx-auto'>
       <img src={Image} alt='image' />
      </div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
