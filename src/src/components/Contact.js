import React from 'react';
import { useState } from 'react';
const Contact = () => {
  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
  const [message,setMessage] = useState("");
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
		'http://localhost:5000/register', {
			method: "post",
			body: JSON.stringify({ name, email, message }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setEmail("");
			setName("");
      setMessage("");
		}
	}
  return (
  <section className=' py-16 lg:section font-secondary ' id='contact'>
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row '>
    <div className='mr-8'>
      <h4 className='text-xl uppercase text-accent font-medium
      mb-2 tracking-wide'>
        Get in touch
      </h4>
      <h2 className='text-[20px] lg:text-[70px] leading-none mb-12'>Join  <br /> together</h2>
    </div>
     <form className=' flex-1 border rounded-2x1 flex flex-col
     gap-y-6 pb-24 p-6 items-start' action="">
      <input className='bg-transparent border-b py-3 transition-all
      outline-none w-full placeholder:text-white focus:border-accent' type='text'
      placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)}/>
      <input className='bg-transparent border-b py-3 transition-all
      outline-none w-full placeholder:text-white focus:border-accent' type='text'
      placeholder='Your Mail' 
      value={email} onChange={(e) => setEmail(e.target.value)} 
      />
      <textarea className=' mb-12 resize-none bg-transparent border-b py-3 transition-all
      outline-none w-full placeholder:text-white focus:border-accent' 
      placeholder='Your Message' 
      value={message} onChange={(e) => setMessage(e.target.value)}  ></textarea>
      <button className='btn btn-lg' type='submit'
      onClick={handleOnSubmit}>Send</button>
     </form>
    </div>
  </div>
  </section>
  );
};

export default Contact;
