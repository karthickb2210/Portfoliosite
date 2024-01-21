import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import Cp from './components/Cp';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/education';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <Cp/>
      <Projects />
       <Contact /> 
      <Education />
      
      <div className='h-[400px]'></div> 
    </div>
  );
};

export default App;
