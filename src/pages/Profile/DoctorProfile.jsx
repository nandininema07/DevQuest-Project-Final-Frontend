import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../images/profile-removebg-preview 1.png";
import edit from "../../images/Edit.png";

function DoctorProfile({ registrationData }) {
    const navigate = useNavigate();

    const [profilePicture, setProfilePicture] = useState(profile);
    const [doctorDetails, setDoctorDetails] = useState({
        fullname: registrationData?.fullname || "",
        email: registrationData?.email || "",
        mobile: registrationData?.mobile || "",
    });

    useEffect(() => {
        if (!registrationData) {
            navigate("/login_user"); // Redirect if no registration data
        }
    }, [registrationData, navigate]);

    const handleUpdateDetails = (e) => {
        const { name, value } = e.target;
        setDoctorDetails({ ...doctorDetails, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            setProfilePicture(event.target.result);
        };

        reader.readAsDataURL(file);
    };

    return (
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
                            <label
                                htmlFor="imageUpload"
                                className="absolute top-2/3 right-0 transform translate-x-1/2 -translate-y-1/2 cursor-pointer"
                            >
                                <img src={edit} className="w-10 h-10" alt="Edit" />
                            </label>
                            <input
                                id="imageUpload"
                                type="file"
                                onChange={handleImageChange}
                                accept="image/*"
                                className="hidden"
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
                        <h3 className="text-xl font-bold mb-4">Contact Me</h3>
                        <div className="flex flex-col space-y-3">
                            <div>
                                <label>Email:</label>
                                <input
                                    name="email"
                                    value={doctorDetails.email}
                                    onChange={handleUpdateDetails}
                                    className="w-full h-12 pl-4 border-2 rounded-md mb-2"
                                />
                            </div>
                            <div>
                                <label>Phone:</label>
                                <input
                                    name="mobile"
                                    value={doctorDetails.mobile}
                                    onChange={handleUpdateDetails}
                                    className="w-full h-12 pl-4 border-2 rounded-md mb-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 flex-1">
                        <h3 className="text-xl font-bold mb-4">Information</h3>
                        <div>
                            <label>Experience</label>
                            <input
                                name="experience"
                                value={doctorDetails.experience}
                                onChange={handleUpdateDetails}
                                className="w-full h-12 pl-4 border-2 rounded-md mb-2"
                            />
                        </div>
                        <div>
                            <label>Education</label>
                            <input
                                name="education"
                                value={doctorDetails.education}
                                onChange={handleUpdateDetails}
                                className="w-full h-12 pl-4 border-2 rounded-md mb-2"
                            />
                        </div>
                    </div>
                </div>
                <button
                    className="w-1/5 sm:w-1/2 bg-black text-white font-bold py-3 rounded-lg hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}

export default DoctorProfile;
