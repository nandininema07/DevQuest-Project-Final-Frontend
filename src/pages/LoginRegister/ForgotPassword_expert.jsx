import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import toast from 'react-hot-toast';
import { backendurl } from '../../urls';

function ForgotPasswordExpert() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setIsLoading(true);
    const toastID = toast.loading("Please wait...");

    if (email.trim() === '') {
      setEmailError('Email is required');
      toast.dismiss(toastID);
      setIsLoading(false);
      return;
    }

    try {
      let res = await fetch(`${backendurl}/forgot_password/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      let response = await res.json();

      toast.dismiss(toastID);

      if (res.ok) {
        toast.success('Password reset link sent to your email');
      } else {
        toast.error(response.error);
      }
    } catch (err) {
      toast.dismiss(toastID);
      toast.error('An error occurred');
    } finally {
      setIsLoading(false);
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
          <img src={require('../../images/forgot-password.jpg')} alt="Forgot Password" className="w-2/3" />
          <div className="text-center mt-6">
            <p className="ml-5 mr-5 text-2xl font-serif">Forgot your password? We'll help you reset it.</p>
          </div>
        </div>

        {/* Forgot Password Section */}
        <div className="w-1/2 flex flex-col justify-center items-center font-istok relative">
          <button
            onClick={() => navigate('/login_expert')}
            className="absolute top-7 right-16 text-xl text-gray-600 hover:text-black"
          >
            <FaTimes />
          </button>

          <div className="w-4/5 bg-white shadow-xl p-8 rounded-lg">
            <h2 className="text-4xl font-bold text-600 mb-4 font-istok-web-bold text-left">
              <span className="text-[#B5C18E]">Forgot</span> Password
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-istok text-left font-medium">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div>
                <label className="text-lg font-bold font-istok">Email Address <span className='text-red-500'>*</span></label>
                <div className="relative mt-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B5C18E]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#B5C18E] text-white py-3 rounded-lg hover:bg-[#93A851] font-istok ${isLoading && 'opacity-50 cursor-not-allowed'}`}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordExpert;
