import React from 'react';

const Contact = () => {
  return (
  <section className=' py-16 lg:section ' id='contact'>
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row '>
    {/* text */}
    <div className='mr-8'>
      <h4 className='text-xl uppercase text-accent font-medium
      mb-2 tracking-wide'>
        Get in touch
      </h4>
      <h2 className='text-[20px] lg:text-[70px] leading-none mb-12'>Join  <br /> together</h2>
    </div>
      {/* form */}
     <form className=' flex-1 border rounded-2x1 flex flex-col
     gap-y-6 pb-24 p-6 items-start'>
      <input className='bg-transparent border-b py-3 transition-all
      outline-none w-full placeholder:text-white focus:border-accent' type='text'
      placeholder='Your Name' />
      <input className='bg-transparent border-b py-3 transition-all
      outline-none w-full placeholder:text-white focus:border-accent' type='text'
      placeholder='Your Mail' />
      <textarea className=' mb-12 resize-none bg-transparent border-b py-3 transition-all
      outline-none w-full placeholder:text-white focus:border-accent' 
      placeholder='Your Message'  ></textarea>
      <button className='btn btn-lg'>Send</button>
     </form>
    </div>
  </div>
  </section>
  );
};

export default Contact;
