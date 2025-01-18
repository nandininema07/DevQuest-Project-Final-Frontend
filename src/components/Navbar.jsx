import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import logo from '../images/LOGO_FINAL.png';
import { FaBars } from 'react-icons/fa';
import { backendurl } from '../urls';
import avatar from '../images/profile-removebg-preview 1.png';
import { getAuthToken } from '..';
import axios from 'axios';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  // const token = getAuthToken();
  // const tokenJson = JSON.parse(token);

  const [doctorDetails, setDoctorDetails] = useState({});
  const isDoctorRoute = location.pathname === '/doctor-profile';
  const isPatientRoute = location.pathname === '/patient';

  axios.defaults.withCredentials = true
      useEffect(() => {
          axios.get('http://localhost:3001/home')
              .then(result => {
                  console.log(result)
                  if (result.data !== "Success") {
                      navigate('/login')
                  }
              })
              .catch(err => {
                  console.log(err)
                  navigate('/login')
              })
      }, [])

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`${backendurl}/profile/`, {
          method: 'GET',
          headers: {
            // Authorization: `Bearer ${tokenJson?.token?.access}`,
          },
        });

        if (!response.ok) {
          console.error('Error fetching data:', response.statusText);
          return;
        }

        const responseData = await response.json();
        setDoctorDetails(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDoctorDetails();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.removeItem('AnthropometricToken');
    axios.post('http://localhost:3001/logout')
    navigate('/login_user');
  };

  return (
    <nav className="fixed flex w-full bg-[#0051AB] shadow-md p-2 items-center justify-between h-16 z-10">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img src={logo} className="h-10 w-10" alt="Logo" />
        <span className="ml-3 font-bold text-lg text-white">ANTHROPOSYNC</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <Link className={`px-4 py-2 font-medium text-white rounded-lg hover:opacity-80 ${isPatientRoute ? 'bg-black' : ''}`} to="/patient">
          Patient Information
        </Link>
        <Link className={`px-4 py-2 font-medium text-white rounded-lg hover:opacity-80 ${isDoctorRoute ? 'bg-black' : ''}`} to="/doctor-profile">
          My Profile
        </Link>
        <div className="relative">
          <img
            className="h-10 w-10 rounded-full cursor-pointer"
            src={doctorDetails.profile_photo || avatar}
            alt="Profile"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg py-2">
              <button className="block px-4 py-2 text-black hover:bg-gray-100" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
