import React, { useState } from 'react';
import toast from 'react-hot-toast';
import avatar from "../images/profile-removebg-preview 1.png"; // Assuming avatar path

function AddPatientModal({ isModalOpen, toggleModal, addPatient }) {
  return (
    isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Add New Patient</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const newPatient = {
                fullname: formData.get("fullname"),
                mobile: formData.get("mobile"),
                gender: formData.get("gender"),
                dob: formData.get("dob"),
                profile_photo: avatar, // Default avatar for now
              };
              addPatient(newPatient);
              toggleModal();
              toast.success("Patient added successfully!");
            }}
          >
            <div className="mb-4">
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="fullname"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Mobile</label>
              <input
                type="text"
                name="mobile"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Gender</label>
              <select
                name="gender"
                className="w-full px-3 py-2 border rounded-md"
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                name="dob"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={toggleModal}
                className="px-4 py-2 mr-2 text-gray-600 bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-lg"
              >
                Add Patient
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

function AddPatientButton({ addPatient }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="relative inline-flex items-center justify-center px-6 py-2 text-white bg-black rounded-lg"
      >
        Add Patient
      </button>
      <AddPatientModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        addPatient={addPatient}
      />
    </div>
  );
}

export default AddPatientButton;
