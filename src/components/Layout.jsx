import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className='flex flex-col w-full h-dvh overflow-auto tracking-tight font-inter antialiased'>
        <div className='flex w-full h-fit'>
          <Navbar toggleSidebar={toggleSidebar} />
        </div>
        <div className='w-full flex flex-1	'>
          <div className={`w-1/6 sm:w-1/2 sm:z-20 sm:absolute flex items-start justify-start ${showSidebar ? 'sm:block' : 'sm:hidden'}`}>
            <Sidebar />
          </div>
          <div className='flex flex-row h-fit w-5/6 sm:w-full'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
