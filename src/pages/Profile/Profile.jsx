import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import profile from "../../images/profile-removebg-preview 1.png";
import edit from "../../images/Edit.png";
import { backendurl } from "../../urls";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import PatientContext from "../../context/PatientContext";
import { getAuthToken } from "../..";
import BackButton from "../../components/Backbutton";
import axios from "axios";

function Profile() {
    const navigate = useNavigate();
    const [profilePicture, setProfilePicture] = useState(null);
    const [loading, setLoading] = useState(false);
    // const token = getAuthToken();
    // const tokenJson = JSON.parse(token);
    const { patientId } = useParams();
    const { patientDetailsList: pdetails = [], fetchPatientDetails } = useContext(PatientContext);
    const [imageSrc, setImageSrc] = useState(profile); // Profile default image

    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get('http://localhost:3001/profile')
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

    // Safeguard against pdetails being null or undefined
    const singlePatientDetail = Array.isArray(pdetails)
        ? pdetails.filter((data) => data.id == patientId)
        : [];
    const [patientDetails, setPatientDetails] = useState(singlePatientDetail?.[0] || {});

    useEffect(() => {
        // Update patient details when context data changes
        if (Array.isArray(pdetails)) {
            const details = pdetails.find((data) => data.id == patientId) || {};
            setPatientDetails(details);
        }
    }, [pdetails, patientId]);

    const updatePatientDetails = async () => {
        const formData = new FormData();
        formData.append("email", patientDetails?.email);
        formData.append("height", patientDetails?.height);
        formData.append("weight", patientDetails?.weight);
        formData.append("fullname", patientDetails?.fullname);
        formData.append("mobile", patientDetails?.mobile);
        formData.append("dob", patientDetails?.dob);
        formData.append("gender", patientDetails?.gender);

        // Append profile photo if selected
        if (profilePicture) {
            formData.append("profile_photo", profilePicture);
        }

        try {
            setLoading(true);
            const response = await fetch(`${backendurl}/update_patient_profile/`, {
                method: "POST",
                headers: {
                    //Authorization: `Bearer ${tokenJson?.token?.access}`,
                },
                body: formData,
            });

            if (response.ok) {
                toast.success("Profile Updated Successfully", {
                    duration: 4000,
                    position: "top-center",
                    iconTheme: {
                        primary: "#008000",
                        secondary: "#fff",
                    },
                });
                fetchPatientDetails();
            } else {
                toast.error("Failed to update patient details", {
                    duration: 4000,
                    position: "top-center",
                    iconTheme: {
                        primary: "red",
                        secondary: "#fff",
                    },
                });
            }
        } catch (err) {
            toast.error("An error occurred while updating details", {
                duration: 4000,
                position: "top-center",
                iconTheme: {
                    primary: "red",
                    secondary: "#fff",
                },
            });
        } finally {
            setLoading(false);
        }
    };

    const deletePatientDetails = async () => {
        try {
            const response = await fetch(`${backendurl}/patient_delete/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    //Authorization: `Bearer ${tokenJson?.token?.access}`,
                },
                body: JSON.stringify({ email: patientDetails?.email }),
            });
    
            // Handle response
            if (response.ok) {
                toast.success("Profile Deleted Successfully", {
                    duration: 4000,
                    position: "top-center",
                    iconTheme: {
                        primary: "#008000",
                        secondary: "#fff",
                    },
                });
                fetchPatientDetails(); // Refresh patient list
                navigate("/patient"); // Redirect to patient list page
            } else {
                const errorData = await response.json(); // Parse error message
                console.error("Error deleting patient", errorData);
                toast.error(`Failed to delete patient ${errorData.message || response.statusText}`, {
                    duration: 4000,
                    position: "top-center",
                    iconTheme: {
                        primary: "red",
                        secondary: "#fff",
                    },
                });
            }
        } catch (error) {
            console.error("Delete patient error:", error);
            toast.error("Failed to delete patient record. Please try again later.", {
                duration: 4000,
                position: "top-center",
                iconTheme: {
                    primary: "red",
                    secondary: "#fff",
                },
            });
        }
    };
    

    const handleUpdatePatientDetails = (e) => {
        const { name, value } = e.target;

        if (name === "height" || name === "weight" || name === "mobile") {
            if (!/^\d*$/.test(value)) {
                return;
            }
            if (name === "mobile" && value.length > 10) {
                return;
            }
            if (name === "mobile" && value.length > 0 && !/^[6-9]/.test(value)) {
                toast.error("Mobile number must start with a digit between 6 and 9.", {
                    duration: 3000,
                    position: "top-center",
                    iconTheme: {
                        primary: "red",
                        secondary: "#fff",
                    },
                });
                return;
            }
        }

        setPatientDetails({ ...patientDetails, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (event) => {
            setImageSrc(event.target.result); // Set the image preview
            setProfilePicture(file);         // Set the file for upload
        };
    
        if (file) {
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };
    

    const calculateCoordinates = (index, total) => {
        const angle = (index / total) * Math.PI * 2; // Distribute elements around a circle
        const x = Math.cos(angle) * 50;             // X coordinate
        const y = Math.sin(angle) * 50;             // Y coordinate
        return { x, y };
    };
    
    

    return (
            <>
                <div className='w-full h-95vh flex items-center justify-center relative mt-20'>
                    <div className="absolute top-0 left-0 flex items-center">
                        <BackButton className={"mb-4 ml-2 mt-3"} />
                        <h2 className="text-xl font-bold ml-4">PATIENT DETAILS</h2>
                    </div>
                    <div className='flex w-11/12 shadow-lg p-4 rounded-xl'>
                        <div className='w-1/3 flex-col flex items-center justify-center'>
                            <div className='flex rounded-full bg-gray-300 relative'>
                                <img src={profilePicture ? imageSrc : patientDetails?.profile_photo || profile} className='rounded-full p-2 w-24 h-24' alt="" />
                                {[1].map((index) => (
                                    <label key={index} htmlFor={`imageUpload${index}`} className="absolute" style={{ top: `${calculateCoordinates(index, 4).y}%`, left: `${calculateCoordinates(index, 4).x}%`, transform: 'translate(220%, 69%)' }}>
                                        <img src={edit} style={{ marginRight: '3%' }} alt="" />
                                    </label>
                                ))}
                                {[1].map((index) => (
                                    <input key={index} id={`imageUpload${index}`} type='file' onChange={handleImageChange} accept='image/*' className='hidden' />
                                ))}
                            </div>
                            <div className='mt-4'>
                                <label className='flex'>Fullname</label>
                                <input value={patientDetails?.fullname} disabled name='fullname' onChange={handleUpdatePatientDetails} className='w-full h-12 pl-2 bg-fieldbg border-2 border-fieldborder rounded-md' />
                            </div>
                        </div>
                        <div className='w-2/3 flex-col flex items-center justify-center'>
                            <div className='flex w-full item-center'>
                                <div className='pl-6 pr-2 w-1/2 items-start flex flex-col'>
                                    <label className='w-full flex mt-3'>Email</label>
                                    <input value={patientDetails?.email} name='email' disabled className='w-full h-12 pl-2 bg-fieldbg border-2 border-fieldborder rounded-md' />
                                    <label className='w-full flex mt-3'>Date of Birth</label>
                                    <input value={patientDetails?.dob} type='date' name='dob' onChange={handleUpdatePatientDetails} className='w-full pl-2 h-12 bg-fieldbg border-2 border-fieldborder rounded-md' />
                                    <label className='w-full flex mt-3'>Weight</label>
                                    <input value={patientDetails?.weight} type='number' name='weight' onChange={handleUpdatePatientDetails} className='w-full pl-2 h-12 bg-fieldbg border-2 border-fieldborder rounded-md' />
                                </div>
                                <div className='pr-6 pl-2 w-1/2 items-start flex flex-col'>
                                    <label className='w-full flex mt-3'>Phone Number</label>
                                    <input value={`${patientDetails?.mobile}`} name='mobile' onChange={handleUpdatePatientDetails} className='w-full pl-2 h-12 bg-fieldbg border-2 border-fieldborder rounded-md' />
                                    <div className='w-full flex flex-col'>
                                        <label className='flex mt-3'>Gender *</label>
                                        <select
                                            name='gender'
                                            value={patientDetails?.gender}
                                            onChange={handleUpdatePatientDetails}
                                            className='h-12 pl-2 bg-fieldbg border-2 sm:pl-0 border-fieldborder rounded-md'
                                        >
                                            <option value="" className='text-gray-100'>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <label className='w-full flex mt-3'>Height</label>
                                    <input value={patientDetails?.height} name='height' onChange={handleUpdatePatientDetails} className='w-full pl-2 h-12 bg-fieldbg border-2 border-fieldborder rounded-md' />
                                </div>
                            </div>
                            <div className='w-11/12 justify-between mt-4 flex sm:grid sm:grid-cols-2 sm:gap-3'>
                                <Link to={`/take-test/${patientDetails?.id}`} className="w-2/9 relative hover:bg-blue-700 inline-flex mt-6 items-center justify-center px-10 py-2 overflow-hidden font-medium tracking-tighter text-white bg-black rounded-lg sm:w-full">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-navbg rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative">Take Test</span>
                                </Link>
                                <button onClick={() => navigate(`/measurements/${patientDetails?.id}`)} className="w-2/9 sm:w-full hover:bg-blue-700 relative inline-flex mt-6 items-center justify-center px-10 py-2 overflow-hidden font-medium tracking-tighter text-white bg-black rounded-lg ">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-navbg rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative">Measurements</span>
                                </button>
                                <button onClick={updatePatientDetails} className="w-2/9 sm:w-full hover:bg-blue-700 relative inline-flex mt-6 items-center justify-center px-10 py-2 overflow-hidden font-medium tracking-tighter text-white bg-black rounded-lg">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-navbg rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative">Update</span>
                                </button>
                                <Link to='/patient' onClick={deletePatientDetails} className="w-2/9 sm:w-full hover:bg-blue-700 relative inline-flex mt-6 items-center justify-center px-6 sm:px-2 py-2 overflow-hidden font-medium tracking-tighter text-white bg-black rounded-lg">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-navbg rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative">Remove Patient</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default Profile;
