import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import home from '../images/Home Page.png';
import profile from '../images/Account.png';
import patient from '../images/Patient Oxygen Mask.png';
import patientBlack from '../images/Patient Oxygen Mask Black.png';
import logout from '../images/Logout.png';
import downArrow from '../images/Expand Arrow.png';
import downArrowWhite from '../images/down-arrow (1).png';
import takeTest from '../images/TakeTest.png';
import lines from '../images/lines.png';
import listView from '../images/List View.png';
import listViewBlack from '../images/List View Black.png';
import TakeTestWhite from '../images/TakeTestWhite.png';
import profileWhite from '../images/AccountWhite.png';

function Sidebar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPatientExpanded, setIsPatientExpanded] = useState(false);
  const navigate = useNavigate();

  const isPatientRoute = location.pathname === '/patient';
  const isTakeTest = location.pathname.startsWith('/take-test/');
  const isMeasurements = location.pathname.startsWith('/measurements/');
  const isHomeRoute = location.pathname === '/';
  const isProfileRoute = location.pathname === '/doctor-profile';
  const isPatientProfileRoute = location.pathname.startsWith('/patient-profile/');

  const togglePatientExpansion = () => {
    setIsPatientExpanded(!isPatientExpanded);
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.removeItem('AnthropometricToken');
    navigate('/login');
  };

  return (
    <>
      <div className={`sm:hidden ${isMenuOpen ? 'flex' : 'hidden'}`}>
        {/* Your menu items go here */}
        <div className='bg-gray-200 p-4'>
          <Link to='/' className='block mb-2'>
            Home
          </Link>
          <Link to='/login' className='block mb-2'>
            Login
          </Link>
          <Link to='/register' className='block mb-2'>
            Register 
          </Link>
        </div>
      </div>

      <div className='flex flex-col justify-between flex-1 h-full sm:h-[93vh] p-4 w-full bg-navbg '>
        <div className='flex flex-col'>
          <div className={`flex items-center justify-start text-base lg:text-xl mt-2 py-2 w-full rounded-2xl font-bold cursor-pointer ${isMeasurements || isTakeTest || isPatientRoute || isPatientProfileRoute ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <img src={isMeasurements || isTakeTest || isPatientRoute || isPatientProfileRoute ? patient : patientBlack} className='w-7 h-7 ml-2 lg:w-10 lg:h-10 lg:ml-4' alt='Patient' />
            <Link to='/patient'>
              <p className={`ml-2 lg:ml-4 ${isMeasurements || isTakeTest || isPatientRoute || isPatientProfileRoute ? 'text-white' : 'text-black'}`}>Patient</p>
            </Link>
          </div>
          {isPatientExpanded && (
            <div className='flex mt-0'>
              <img src={lines} className='ml-2 h-36' />
              <div className='flex flex-col gap-8'>
                <Link to='/take-test' className={`flex items-center mt-8 justify-start ml-1 text-md py-3 w-full rounded-2xl font-bold $ ${isTakeTest ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  <img src={isTakeTest ? TakeTestWhite : takeTest} className='w-6 h-6 ml-2' alt='Test' />
                  <p className='ml-1 mr-2'>   Take Test </p>
                </Link>
                <Link to='/measurements' className={`flex mt-2 items-center justify-start ml-1 text-md py-3 w-full rounded-2xl font-bold  ${isMeasurements ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  <img src={isMeasurements ? listView : listViewBlack} className='w-6 h-6 ml-2' alt='Test' />
                  <p className='ml-1 mr-2'>Measurements </p>
                </Link>
              </div>
            </div>
          )}
          <Link className={`flex items-center mt-10 justify-start text-xl py-2 w-full rounded-2xl font-bold ${isProfileRoute ? 'bg-black text-white' : 'bg-white text-black'}`} to='/doctor-profile'>
            <img src={isProfileRoute ? profileWhite : profile} className='w-7 h-7 ml-2 lg:w-10 lg:h-10 lg:ml-4' alt='Profile' />
            <p className='ml-2 lg:ml-4 text-base lg:text-xl'>Profile</p>
          </Link>
        </div>
        <Link to='/' onClick={handleLogout} className='flex items-center justify-start text-xl py-2 w-full rounded-2xl font-bold bg-white'>
          <img src={logout} className='w-7 h-7 ml-2 lg:w-10 lg:h-10 lg:ml-4' alt='Logout' />
          <p className='ml-2 text-base lg:text-xl lg:ml-4'>Logout</p>
        </Link>
      </div>

      {/* Menu toggle button */}
      <div className='sm:hidden fixed bottom-4 right-4'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='hidden bg-gray-900 text-white p-3 rounded-full focus:outline-none'>
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </>
  );
}

export default Sidebar;
