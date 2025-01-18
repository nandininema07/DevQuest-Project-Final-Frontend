import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import profile from "../../images/profile-removebg-preview 1.png";
import edit from "../../images/Edit.png";
import BackButton from "../../components/Backbutton";
import axios from 'axios'

function Profile() {
    const navigate = useNavigate();
    const [patientDetails, setPatientDetails] = useState({});
    const [profilePicture, setProfilePicture] = useState(null);
    const [imageSrc, setImageSrc] = useState(profile); // Default profile image

    // Update patient details locally
    const handleUpdatePatientDetails = (e) => {
        const { name, value } = e.target;
        setPatientDetails({ ...patientDetails, [name]: value });
    };

    useEffect(() => {
        // Fetch the patient details from the backend (email, fullname, mobile)
        axios
            .get("http://localhost:3001/profileInfo")
            .then((response) => {
                const data = response.data;
                // Assuming the API response contains 'email', 'fullname', and 'mobile'
                setPatientDetails({
                    email: data.email || "",
                    fullname: data.fullname || "",
                    mobile: data.mobile || "",
                });
            })
            .catch((error) => {
                console.error("Error fetching patient details:", error);
            });
    }, []);
    
    // Handle profile picture change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            setImageSrc(event.target.result); // Set the image preview
            setProfilePicture(file); // Set the file for upload
        };

        if (file) {
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    const calculateCoordinates = (index, total) => {
        const angle = (index / total) * Math.PI * 2; // Distribute elements around a circle
        const x = Math.cos(angle) * 50; // X coordinate
        const y = Math.sin(angle) * 50; // Y coordinate
        return { x, y };
    };

    return (
        <div className="w-full h-screen flex items-center justify-center relative mt-20">
            <div className="absolute top-0 left-0 flex items-center">
                <BackButton className={"mb-4 ml-2 mt-3"} />
                <h2 className="text-xl font-bold ml-4">PATIENT DETAILS</h2>
            </div>

            <div className="flex w-11/12 shadow-lg p-4 rounded-xl -mt-10">
                {/* Profile Section */}
                <div className="w-1/3 flex-col flex items-center justify-center">
                    <div className="flex rounded-full bg-gray-300 relative">
                        <img
                            src={profilePicture ? imageSrc : patientDetails?.profile_photo || profile}
                            className="rounded-full p-2 w-24 h-24"
                            alt=""
                        />
                        <label
                            htmlFor="imageUpload"
                            className="absolute"
                            style={{
                                top: `${calculateCoordinates(1, 4).y}%`,
                                left: `${calculateCoordinates(1, 4).x}%`,
                                transform: "translate(220%, 69%)",
                            }}
                        >
                            <img src={edit} style={{ marginRight: "3%" }} alt="" />
                        </label>
                        <input
                            id="imageUpload"
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="flex">Fullname</label>
                        <input
                            value={patientDetails?.fullname}
                            disabled
                            name="fullname"
                            onChange={handleUpdatePatientDetails}
                            className="w-full h-12 pl-2 bg-fieldbg border-2 border-fieldborder rounded-md"
                        />
                    </div>
                </div>

                {/* Details Section */}
                <div className="w-2/3 flex-col flex items-center justify-center">
                    <div className="flex w-full item-center">
                        <div className="pl-6 pr-2 w-1/2 items-start flex flex-col">
                            <label className="w-full flex mt-3">Email</label>
                            <input
                                value={patientDetails?.email}
                                name="email"
                                disabled
                                className="w-full h-12 pl-2 bg-fieldbg border-2 border-fieldborder rounded-md"
                            />

                            <label className="w-full flex mt-3">Date of Birth</label>
                            <input
                                value={patientDetails?.dob}
                                type="date"
                                name="dob"
                                onChange={handleUpdatePatientDetails}
                                className="w-full pl-2 h-12 bg-fieldbg border-2 border-fieldborder rounded-md"
                            />

                            <label className="w-full flex mt-3">Weight</label>
                            <input
                                value={patientDetails?.weight}
                                type="number"
                                name="weight"
                                onChange={handleUpdatePatientDetails}
                                className="w-full pl-2 h-12 bg-fieldbg border-2 border-fieldborder rounded-md"
                            />
                        </div>

                        <div className="pr-6 pl-2 w-1/2 items-start flex flex-col">
                            <label className="w-full flex mt-3">Phone Number</label>
                            <input
                                value={`${patientDetails?.mobile}`}
                                name="mobile"
                                onChange={handleUpdatePatientDetails}
                                className="w-full pl-2 h-12 bg-fieldbg border-2 border-fieldborder rounded-md"
                            />

                            <label className="flex mt-3">Gender *</label>
                            <select
                                name="gender"
                                value={patientDetails?.gender}
                                onChange={handleUpdatePatientDetails}
                                className="h-12 pl-2 bg-fieldbg border-2 sm:pl-0 border-fieldborder rounded-md"
                            >
                                <option value="" className="text-gray-100">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>

                            <label className="w-full flex mt-3">Height</label>
                            <input
                                value={patientDetails?.height}
                                name="height"
                                onChange={handleUpdatePatientDetails}
                                className="w-full pl-2 h-12 bg-fieldbg border-2 border-fieldborder rounded-md"
                            />
                        </div>
                    </div>

                    {/* Actions Section */}
                    <div className="w-11/12 justify-right  mt-4 flex sm:grid sm:grid-cols-2 sm:gap-3">
                        <Link
                            to={`/take-test/${patientDetails?.id}`}
                            className="w-2/9 relative hover:bg-blue-700 inline-flex mt-6 mr-5 items-center justify-center px-10 py-2 overflow-hidden font-medium tracking-tighter text-white bg-black rounded-lg sm:w-full"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-navbg rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 from-transparent via-transparent to-gray-700"></span>
                            <span className="relative">Take Test</span>
                        </Link>

                        <button
                            onClick={() => navigate(`/measurements/${patientDetails?.id}`)}
                            className="w-2/9 sm:w-full hover:bg-blue-700 relative inline-flex mt-6 mr-5 items-center justify-center px-10 py-2 overflow-hidden font-medium tracking-tighter text-white bg-black rounded-lg"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-navbg rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 from-transparent via-transparent to-gray-700"></span>
                            <span className="relative">Measurements</span>
                        </button>

                        <button
                            onClick={() => alert("Profile Updated!")}
                            className="w-2/9 sm:w-full hover:bg-blue-700 relative inline-flex mt-6 items-center justify-center px-10 py-2 overflow-hidden font-medium tracking-tighter text-white bg-black rounded-lg"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-navbg rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 from-transparent via-transparent to-gray-700"></span>
                            <span className="relative">Update</span>
                        </button>

                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
