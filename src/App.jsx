import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className='md:w-[1280px] mx-auto w-full'>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;