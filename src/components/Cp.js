import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
const Cp = () => {
  const [ref,inView] = useInView({
    threshold:0.5,
  });
  return (
  <section className='section' id='Cp' ref={ref}>
  <div className='container mx-auto'>
    <div className='flex flex-col gap-y-10 lg:flex-row
    lg:items-center lg:gap-x-20'>
      <motion.div variants={fadeIn('right',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex-1 bg-about bg-contain bg-no-repeat flex
      h-[550px] mix-blend-lighten bg-top '></motion.div>
      <div className='flex-1'>
        <h2 className='h2 text-accent'>
          COMPETITIVE PROGRAMMING
        </h2>
        <h3 className='h3 mb-4'>
          I am an efficient problem solver in codechef and leetcode   
        </h3>
        <p className='mb-6'> Solved more than a 300 plus problems that include the topics of math,
        array, binnary search, linked list, linear search etc.. </p>
        {/* stats */}
        <tr className='flex gap-x-6 lg:gap-x-10 mb-12'><td>
        <div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {
                inView ?
              
                <CountUp start={0} end={2} duration={5} /> :null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              years of <br />experience</div>
            </div>
        </div></td>
        <td>
        <div className='flex '>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {
                inView ?
              
                <CountUp start={0} end={80} duration={7} /> :null}+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              problems in <br /> LEETCODE</div>
            </div>
        </div></td>
        <td>
        <div className='flex '>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {
                inView ?
              
                <CountUp start={0} end={250} duration={5} /> :null}+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              problems in <br />CODECHEF</div>
            </div>
        </div></td></tr>
        <div className='flex gap-x-8 items-center'>
          <button className='btn btn-lg'><a href='https://leetcode.com/Karthickb2210/'>LEET CODE</a></button>
          <button className='btn btn-lg'><a href='https://www.codechef.com/users/karthickb2210'></a>CODE CHEF</button>
        </div>
      </div>
    </div>
  </div>
  </section>
  );
};

export default Cp;
