import React, { useState, useEffect } from "react";
import profile from "../../images/profile-removebg-preview 1.png";
import logo from "../../images/LOGO_FINAL.png"
import avatar from "../../images/profile-removebg-preview 1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DoctorProfile() {
    const navigate = useNavigate();
    const [profilePicture, setProfilePicture] = useState(profile);
    const [doctorDetails, setDoctorDetails] = useState({
        fullname: "",
        email: "",
        mobile: "",
        experience: "",
        education: "",
        about_me: "",
    });

    const [showMenu, setShowMenu] = useState(false);
    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.removeItem('AnthropometricToken');
        axios.post('http://localhost:3001/logout')
        navigate('/login_user');
      };

    useEffect(() => {
        // Placeholder: Replace this with actual data-fetching logic
        const fetchDoctorDetails = () => {
            const mockData = {
                fullname: "Nandini Nema",
                email: "nandininema@gmail.com",
                mobile: "9876543211",
                experience: "10 years",
                education: "MBBS, MD",
                about_me: "Passionate about holistic healthcare and patient well-being.",
            };
            setDoctorDetails(mockData);
        };

        fetchDoctorDetails();
    }, []);

    return (
        <div>
            <div>
            <nav className="fixed flex w-full bg-[#97a36d] shadow-md p-2 items-center justify-between h-16 z-10 absolute top-0">
  {/* Logo and Title */}
  <div className="flex items-center">
    <img src={logo} className="h-10 w-10" alt="Logo" />
    <span className="ml-3 text-3xl text-white font-ananda_namaste">AROGYAM</span>
  </div>

  {/* Right Side */}
  <div className="flex items-center gap-6">
    <a
      href="/Patient"
      className="px-4 py-2 font-medium text-white rounded-lg hover:opacity-80 bg-black"
    >
      Patient Information
    </a>
    <a
      href="/doctor-profile"
      className="px-4 py-2 font-medium text-white rounded-lg hover:opacity-80 hover:bg-black"
    >
      My Profile
    </a>
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

            </div>

<div className="flex flex-col items-center justify-center h-screen bg-gray-100 w-[100%]">
            <div className="w-[90vw] max-w-[100%] bg-white-lg overflow-y-auto p-4 mt-20">
                <div className="flex flex-col sm:flex-row bg-white rounded-lg p-5 mt-0 mb-5 mx-auto w-full">
                    <div className="flex justify-center sm:justify-start sm:w-1/4 w-full mb-0 sm:mb-0 pl-5">
                        <div className="relative">
                            <img
                                src={profilePicture}
                                className="rounded-full w-[100px] h-[100px] object-cover border-4 border-grey-200"
                                alt="Profile"
                            />
                        </div>
                    </div>
                    <div className="sm:w-3/4 w-full sm:pl-8">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">
                            Dr. {doctorDetails.fullname}
                        </h2>
                    </div>
                </div>
                <div className="flex sm:flex-row gap-4 mb-6 text-left">
                    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 flex-1">
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                        <div className="space-y-3">
                            <p><strong>Email:</strong> {doctorDetails.email}</p>
                            <p><strong>Phone:</strong> {doctorDetails.mobile}</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 flex-1">
                        <h3 className="text-xl font-bold mb-4">Professional Information</h3>
                        <div className="space-y-3">
                            <p><strong>Experience:</strong> {doctorDetails.experience}</p>
                            <p><strong>Education:</strong> {doctorDetails.education}</p>
                            <p><strong>About Me:</strong> {doctorDetails.about_me}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default DoctorProfile;
