  import React, { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import profile from "../../images/profile-removebg-preview 1.png";
  import edit from "../../images/Edit.png";
  import { FaLocationDot } from "react-icons/fa6";
  import { FaPhoneAlt } from "react-icons/fa";
  import { IoMailSharp } from "react-icons/io5";
  import experienceimg from "../../images/Experience.png";
  import education from "../../images/Education.png";
  import aboutme from "../../images/Bio.png";
  import { backendurl } from "../../urls";
  import toast, { Toaster } from "react-hot-toast";
  import { getAuthToken } from "../..";

  function DoctorProfile() {
    const navigate = useNavigate();
    const token = getAuthToken();
    const tokenJson = JSON.parse(token);
    const [loading, setLoading] = useState(true);
    const [profilePicture, setProfilePicture] = useState("");
    const [imageSrc, setImageSrc] = useState(profile);
    const [doctorDetails, setDoctorDetails] = useState({});
    const [editableFields, setEditableFields] = useState({
      experience: false,
      education: false,
      about_me: false,
      contactDetails: false,
      designation: false
    });

    useEffect(() => {
      const fetchDoctorDetails = async () => {
        try {
          if (!tokenJson?.token?.access) {
            navigate("/login");
            return;
          }

          const response = await fetch(`${backendurl}/profile/`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${tokenJson?.token?.access}`,
            },
          });

          if (!response.ok) {
            console.error("Error fetching data:", response.statusText);
            return;
          }

          const responseData = await response.json();
          setDoctorDetails(responseData);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchDoctorDetails();
    }, []);

    const updateDoctorDetails = async () => {
      setLoading(true);
      const formData = new FormData();
      formData.append("about_me", doctorDetails?.about_me);
      formData.append("education", doctorDetails?.education);
      formData.append("profile_photo", profilePicture);
      formData.append("experience", doctorDetails?.experience);

      try {
        const response = await fetch(`${backendurl}/profile_update/`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${tokenJson?.token?.access}`,
          },
          body: formData,
        });
        const responseData = await response.json();
        if (response.ok) {
          setLoading(false);
          toast.success("Profile Updated Successfully", {
            duration: 4000,
            position: "top-center",
          });
          window.location.reload();
        } else {
          setLoading(false);
          toast.error("Profile not updated", {
            duration: 4000,
            position: "top-center",
          });
        }
      } catch (err) {
        console.error(err);
        toast.error("Could not update profile", {
          duration: 4000,
          position: "top-center",
        });
        setLoading(false);
      }
    };

    const handleUpdateDetails = (e) => {
      const { name, value } = e.target;
      setDoctorDetails({ ...doctorDetails, [name]: value });
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        setImageSrc(event.target.result);
        setProfilePicture(file);
      };

      reader.readAsDataURL(file);
    };

    const toggleEditable = (field) => {
      setEditableFields((prev) => ({
        ...prev,
        [field]: !prev[field],
      }));
    };

    if (loading) {
      return (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-500" />
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 h-[89vh] w-[100%] ">
          <div className="w-[90vw] max-w-[100%] bg-white-lg overflow-y-auto p-4 mt-20">
            <Toaster position="top-center" />
            
            {/* Profile Section */}
            <div className="flex flex-col sm:flex-row bg-white rounded-lg p-5 mt-0 mb-5 mx-auto w-full">
  <div className="flex justify-center sm:justify-start sm:w-1/4 w-full mb-0 sm:mb-0 pl-5">
    <div className="relative">
      <img
        src={
          profilePicture
            ? imageSrc
            : doctorDetails.profile_photo || profile
        }
        className="rounded-full w-[100px] h-[100px] sm:w-[25px] sm:h-[25px] object-cover border-4 border-grey-200"
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
                <h2 className="text-2xl font-bold text-gray-800 text-center ">
                  Dr. {doctorDetails?.fullname
                  }
                </h2>                
              </div>
            </div>
            {/* Contact, Information, About Me Section */}
            <div className="flex sm:flex-row  gap-4 mb-6 text-left">
              {/* Contact */}
              <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 flex-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Contact Me</h3>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="items-center">
                <label className="text-left">Email: </label>
                <input
                name="email"
                value={doctorDetails?.email}
                onChange={handleUpdateDetails}
                disabled={!editableFields.contactDetails}
                className="w-full h-12 pl-4 border-2 rounded-md mb-2"
                />

                <label className="text-left">Phone: </label>
                <input
                name="mobile"
                value={doctorDetails?.mobile}
                onChange={handleUpdateDetails}
                disabled={!editableFields.contactDetails}
                className="w-full h-12 pl-4 border-2 rounded-md mb-2"
                />
                </div>
              </div>
              </div>

              {/* Information */}
              <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Information</h3>
                  <img
                  src={edit}
                  className="w-8 h-8 cursor-pointer"
          onClick={() => toggleEditable("education")}
          alt="Edit"
        />
      </div>
      <div>
        <label className="text-left">Experience</label>
        <input
          name="experience"
          value={doctorDetails?.experience}
          onChange={handleUpdateDetails}
          disabled={!editableFields.education}
          className={`w-full h-12 pl-4 border-2 rounded-md mb-2 ${editableFields.education ? 'text-blue-500' : ''}`}
        />
      </div>
      <div>
        <label className="text-left">Education</label>
        <input
          name="education"
          value={doctorDetails?.education}
          onChange={handleUpdateDetails}
          disabled={!editableFields.education}
          className={`w-full h-12 pl-4 border-2 rounded-md mb-2 ${editableFields.education ? 'text-blue-500' : ''}`}
        />
      </div>
    </div>

    {/* About Me */}
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 flex-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">About Me</h3>
        <img
          src={edit}
          className="w-8 h-8 cursor-pointer"
          onClick={() => toggleEditable("about_me")}
          alt="Edit"
        />
      </div>
      <textarea
        name="about_me"
        value={doctorDetails?.about_me}
        onChange={handleUpdateDetails}
        disabled={!editableFields.about_me}
        className={`w-full h-40 p-4 border-2 rounded-md ${editableFields.about_me ? 'text-blue-500' : ''}`}
      />
    </div>
  </div>
            {/* Save Button */}
            <button
              onClick={updateDoctorDetails}
              className="w-1/5 sm:w-1/2 bg-black text-white font-bold py-3 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      );
    }
  }

  export default DoctorProfile;
