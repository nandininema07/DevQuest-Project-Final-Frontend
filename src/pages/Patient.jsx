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
//import { getAuthToken } from "..";
import BackButton from "../components/Backbutton";
import axios from 'axios'
import DoctorProfile from "./Profile/Doctor_Profile";
import logo from "../images/LOGO_FINAL.png"

function Patient() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { patientDetailsList: pdetails, setPatientDetailsList } =
    useContext(PatientContext);
  const [searchField, setSearchField] = useState("");
  const [doctorDetails, setDoctorDetails] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.removeItem('AnthropometricToken');
    axios.post('http://localhost:3001/logout')
    navigate('/login_user');
  };
  //const token = getAuthToken();
  //const tokenJson = JSON.parse(token);

  // Fetch User's Full Name
  //const userFullName = tokenJson?.user?.fullname || "User";
  const userFullName = "User";

  axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get('http://localhost:3001/patient')
            .then(result => {
                console.log(result)
                if (result.data !== "Success") {
                    navigate('/login_user')
                }
            })
            .catch(err => {
                console.log(err)
                navigate('/login_user')
            })
    }, [])

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalItems = pdetails?.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filterData = Array.isArray(pdetails)
    ? pdetails.filter((item) =>
        item.fullname.toLowerCase().includes(searchField.toLowerCase())
      )
    : [];
  const paginatedData = filterData?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Declare initialPatientDetails here to avoid the error
  const initialPatientDetails = {
    fullname: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    height: "",
    weight: "",
  };

  const [patientDetailsAdd, setPatientDetailsAdd] = useState(initialPatientDetails);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientDetailsAdd({ ...patientDetailsAdd, [name]: value });
  };

  const handleAddPatient = async () => {
    try {
      const response = await fetch(`${backendurl}/add_patient/`, {
        method: "POST",
        headers: {
          //Authorization: `Bearer ${tokenJson?.token?.access}`,
          //Authorization: `Bearer ${access}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientDetailsAdd),
      });

      if (response.ok) {
        fetchPatientDetails();
        const responseData = await response.json();
        toast.success("Patient Added Successfully", {
          duration: 4000,
          position: "top-center",
          iconTheme: {
            primary: "#008000",
            secondary: "#fff",
          },
        });
        setIsModalOpen(!isModalOpen);
        
        // Reset form after successful submission
        setPatientDetailsAdd(initialPatientDetails);  // <-- This line resets the form
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const responseData = await response.json();
          let firstErrorKEY = Object.keys(responseData)[0];
          let firstErrorValue = responseData[firstErrorKEY];
          toast.success(firstErrorValue, {
            duration: 4000,
            position: "top-center",
            iconTheme: {
              primary: "red",
              secondary: "#fff",
            },
          });
        }
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  const fetchPatientDetails = async () => {
    try {
      const response = await fetch(`${backendurl}/dashboard/`, {
        method: "GET",
        headers: {
          //Authorization: `Bearer ${tokenJson?.token?.access}`,
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

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const result = await axios.get(`${backendurl}/patient`, {
          headers: {
            Authorization: `Bearer ${'User'}`,
          },
          withCredentials: true,
        });
  
        if (result.data !== "Success") {
          navigate('/login');
        }
      } catch (err) {
        console.error("Token verification failed:", err);
        navigate('/login');
      }
    };

    const fetchDoctorDetails = async () => {
            try {
              // if (!tokenJson?.token?.access) {
              //   navigate("/login");
              //   return;
              // }
    
              const response = await fetch(`${backendurl}/profile/`, {
                method: "GET",
                headers: {
                  //Authorization: `Bearer ${tokenJson?.token?.access}`,
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

    fetchPatientDetails();

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-500" />
      </div>
    );
  } else {
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
        <Link className="px-4 py-2 font-medium text-white rounded-lg hover:opacity-80 bg-black" to="/Patient">
          Patient Information
        </Link>
        <Link className="px-4 py-2 font-medium text-white rounded-lg hover:opacity-80 hover:bg-black" to="/doctor-profile">
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
        </div>

<div className="flex flex-col items-center justify-center w-full mt-20 mx-10">

<div className="flex flex-col items-center justify-center shadow-xl rounded-lg px-10 py-3 ">
<div className="flex flex-col items-center justify-center w-full overflow-y-auto">
  <div className="">
    <h2 className="text-2xl font-bold text-left">Patient Information</h2>
    <hr />
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },
        success: {
          duration: 3000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
    

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
{paginatedData &&
paginatedData.map((patient, index) => (
<tr
  className="bg-[#FAFAFC] border-b border-[#D9D9D9] rounded-lg"
  key={index}
>
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
</div>

<Pagination
  totalItems={totalItems}
  itemsPerPage={itemsPerPage}
  currentPage={currentPage}
  onPageChange={handlePageChange}
/>
</div>

</div>
        
      </div>   
      
    );
  }
}

export default Patient;
