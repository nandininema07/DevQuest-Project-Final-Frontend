import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-dvh overflow-auto tracking-tight font-inter antialiased'>
      <div className='flex w-full h-fit'>
        <Navbar />
      </div>
      <div className='flex flex-row h-fit w-full'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
