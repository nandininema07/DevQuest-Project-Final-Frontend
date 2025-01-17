import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import toast from 'react-hot-toast';
import { backendurl } from '../../urls';

function ResetPassword() {
  const navigate = useNavigate();
  const { email } = useParams();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNewPasswordVisibility = () => setShowNewPassword(!showNewPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNewPasswordError('');
    setConfirmPasswordError('');

    if (newPassword.trim() === '') {
      setNewPasswordError('New password is required');
      return;
    }
    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Confirm password is required');
      return;
    }
    if (newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    try {
      let res = await fetch(`${backendurl}/reset_password/?email=${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ new_password: newPassword }),
      });

      let response = await res.json();

      if (res.ok) {
        toast.success('Password reset successful');
        setTimeout(() => navigate("/login"), 2000);
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="flex w-full h-screen bg-white">
        {/* Logo and Website Name */}
        <button onClick={() => navigate('/')}>
          <div className="absolute top-4 left-8 flex items-center">
            <img src={require('../../images/LOGO_FINAL.png')} alt="Logo" className="w-10 h-10 mr-3" />
            <span className="text-black text-3xl font-ananda_namaste">AROGYAM</span>
          </div>
        </button>

        {/* Image and Quote Section */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100">
          <img src={require('../../images/loginpage_abovequote.png')} alt="Reset Password" className="w-3/4" />
          <div className="text-center mt-6">
            <p className="ml-5 mr-5 text-2xl font-serif">Reset your password to regain access.</p>
          </div>
        </div>

        {/* Reset Password Section */}
        <div className="w-1/2 flex flex-col justify-center items-center font-istok relative">
          <button
            onClick={() => navigate('/')}
            className="absolute top-7 right-16 text-xl text-gray-600 hover:text-black"
          >
            <FaTimes />
          </button>

          <div className="w-4/5 bg-white shadow-xl p-8 rounded-lg">
            <h2 className="text-4xl font-bold text-600 mb-4 font-istok-web-bold text-left">
              <span className="text-[#B5C18E]">Reset</span> Your Password
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-istok text-left font-medium">Please enter your new password.</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div>
                <label className="text-lg font-bold font-istok">New Password *</label>
                <div className="relative mt-2">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Enter New Password"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button type="button" onClick={toggleNewPasswordVisibility} className="absolute top-3 right-3 text-gray-600">
                    {showNewPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
                {newPasswordError && <p className="text-red-500 text-sm">{newPasswordError}</p>}
              </div>
              <div>
                <label className="text-lg font-bold font-istok">Confirm Password *</label>
                <div className="relative mt-2">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute top-3 right-3 text-gray-600">
                    {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
                {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}
              </div>
              <button className="bg-[#B5C18E] text-white py-3 rounded-lg hover:bg-[#93A851] font-istok">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
