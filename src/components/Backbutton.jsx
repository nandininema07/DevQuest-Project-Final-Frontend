import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Import the arrow icon from react-icons

const BackButton = ({ className }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigates to the previous page in the browser's history
  };

  return (
    <button
      onClick={handleBack}
      className={`flex items-center space-x-2 px-4 py-4 bg-gray-500 text-white rounded-full hover:bg-gray-600 ${className}`}
    >
      <FaArrowLeft className="w-4 h-4   " />
      {/* <span>Back</span> */}
    </button>
  );
};

export default BackButton;
