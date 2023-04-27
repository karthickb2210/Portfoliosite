import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';


const service = [
  {
    name: 'Intergrated Information system',
    description:'--> It is a webite build for the proper recognise of courses that are provided by the Indian universities in a single webpage and the technology used in this projects are HTML,CSS, javascript and Bootstrap5.',
    // link :'Proofs',
  },
  {
    name: 'PortFolio Site',
    description:'--> It is a portfolio site that was created by me using the skill i obtained by learning React. It basically showcases the skills and personl details and profile links of myself.',
    // link :'Proofs',
  },
  {
    name: 'On Progress',
    description:'Yet to Come',
    // link :'Proofs',
  }
]
const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>
      {/* txt */}
      <div className='flex-1 lg:bg-services lg:bg-bottom
      bg-no-repeat mix-blend-lighten mb-5 lg:mb-0'>
      <h2 className='h2 text-accent mb-6'>My Projects</h2>
      <h3 className='h3 max-w-[455px] mb-16'>
        Take a look at my GIT
      </h3>
      <button className='btn btn-sm'>GIT HUB</button>
      </div>
      <div className='flex-1'>
        {/* projects */}
        <div>
          {service.map((service,index)=>{
           const{name,description ,link} = service;
            return( 
              <div className='border-b border-white/20 h-[146px] mb-[38px]' key={index}>
            <div className='max-w-[476px]'>
              <h4 className='text-[20px] tracking-wider
              font-primary font-semibold mb-6'>{name}</h4>
              <p className='font-secondary leading-tight'>{description}</p>
            </div> 
            <div className='flex flex-col flex-1 items-end  '>
              <a href='#' className='btn w-9 h-9 mb-[22px]
              flex justify-center items-center'><BsArrowUpRight /></a>
              <a href='#' className='text-gradient text-sm'>{link}</a>
            </div> 
            </div>
            );
          })}
        </div>
      </div>
       
    </div>

    </div>
  </section>
  );
};

export default Services;
