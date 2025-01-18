import { React, useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import icon from "../images/profile-removebg-preview 1.png";
import { Link } from "react-router-dom";
import { backendurl } from "../urls";
import toast, { Toaster } from "react-hot-toast";
import avatar from "../images/profile-removebg-preview 1.png";
import PatientContext from "../context/PatientContext";
import Pagination from "../components/Pagination";
import axios from 'axios'

function Patient() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { patientDetailsList: pdetails, setPatientDetailsList } = useContext(PatientContext);
  const [searchField, setSearchField] = useState("");
  const [doctorDetails, setDoctorDetails] = useState({});

  const userFullName = "User";

  useEffect(() => {
    // Fetch the doctor details and patient data
    const fetchPatientDetails = async () => {
      try {
        const response = await fetch(`${backendurl}/dashboard/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.error("Error fetching data:", response.statusText);
          return;
        }

        const responseData = await response.json();
        setPatientDetailsList(responseData["patient_data"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`${backendurl}/profile/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
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
      }
    };

    fetchPatientDetails();
    fetchDoctorDetails();

  }, []);

  // Add some mock patient data
  const mockData = [
    { id: 1, profile_photo: avatar, fullname: "John Doe", mobile: "9876543210", gender: "Male", dob: "1990-05-15" },
    { id: 2, profile_photo: avatar, fullname: "Jane Smith", mobile: "9123456789", gender: "Female", dob: "1995-02-25" },
    { id: 3, profile_photo: avatar, fullname: "Mark Johnson", mobile: "9876123456", gender: "Male", dob: "1988-08-30" },
    { id: 4, profile_photo: avatar, fullname: "Sarah Williams", mobile: "9087654321", gender: "Female", dob: "2000-12-12" },
    { id: 5, profile_photo: avatar, fullname: "David Lee", mobile: "9001234567", gender: "Male", dob: "1992-03-18" }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalItems = mockData.length; // Using mock data length
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filterData = mockData.filter((item) =>
    item.fullname.toLowerCase().includes(searchField.toLowerCase())
  );
  const paginatedData = filterData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-500" />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center w-full mt-20 mx-10">
        <div className="flex flex-col items-center justify-center shadow-xl rounded-lg px-10 py-3">
          <div className="flex flex-col items-center justify-center w-full overflow-y-auto">
            <h2 className="text-2xl font-bold text-left">Patient Information</h2>
            <hr />
            <Toaster position="top-center" reverseOrder={false} gutter={8} />
            
            <div className="flex justify-end mt-4 mb-3 w-full">
              <div className="relative flex items-right justify-end">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full h-12 pl-16 pr-16 bg-floralwhite border-2 shadow-sm rounded-[50vw]"
                    placeholder="Search Patient Name"
                    value={searchField}
                    onChange={handleSearch}
                  />
                  <FaSearch className="w-4 h-4 absolute top-1/2 left-[10%] transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="w-full overflow-auto flex items-center justify-center">
              <table className="sm:w-11/12 sm:ml-64 overflow-auto sm:text-lg rounded-lg border border-gray-300">
                <thead>
                  <tr className="bg-white text-black font-medium rounded-t-lg border-b border-[#D9D9D9]">
                    <th className="py-4 px-4 sm:py-4 sm:px-4">SR NO.</th>
                    <th className="py-4 px-4 sm:py-4 sm:px-4">PROFILE PHOTO</th>
                    <th className="py-4 px-4 sm:py-4 sm:px-4">FULL NAME</th>
                    <th className="py-4 px-4 sm:py-4 sm:px-4">PHONE NUMBER</th>
                    <th className="py-4 px-4 sm:py-4 sm:px-4">GENDER</th>
                    <th className="py-4 px-4 sm:py-4 sm:px-4">DOB</th>
                    <th className="py-4 px-4 sm:py-4 sm:px-4">DETAILED VIEW</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((patient, index) => (
                    <tr className="bg-[#FAFAFC] border-b border-[#D9D9D9] rounded-lg" key={index}>
                      <td className="py-4 px-6 sm:py-2 sm:px-2">
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </td>
                      <td className="py-2 px-2 sm:py-4 sm:px-6 flex items-center justify-center">
                        <img
                          className="w-14 h-14 rounded-full"
                          src={patient?.profile_photo || avatar}
                          alt="patient image"
                        />
                      </td>
                      <td className="py-4 px-6 sm:py-2 sm:px-2">{patient?.fullname}</td>
                      <td className="py-4 px-6 sm:py-2 sm:px-2">+91 {patient?.mobile}</td>
                      <td className="py-4 px-6 sm:py-2 sm:px-2">{patient?.gender}</td>
                      <td className="py-4 px-6 sm:py-2 sm:px-2">{patient?.dob}</td>
                      <td className="py-4 px-6 sm:py-2 sm:px-2 hover:underline cursor-pointer">
                        <Link to={`/doctor-profile/${patient?.id}`}>View Details</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Patient;
