import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { getAuthToken } from '../..';
import { backendurl } from '../../urls';

function Register() {
  const navigate = useNavigate();
  const token = getAuthToken();
  const tokenJson = JSON.parse(token);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (tokenJson?.token?.access) {
      navigate('/patient');
    }
  }, [tokenJson, navigate]);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const validate = () => {
    const errors = {};
    if (!fullname.trim()) errors.fullname = 'Full Name is required';
    if (!username.trim()) errors.username = 'Username is required';
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email.trim() || !emailRegex.test(email)) errors.email = 'Valid Email is required';
    const phoneRegex = /^\d{10}$/;
    if (!mobile.trim() || !phoneRegex.test(mobile)) errors.mobile = '10 digit Phone Number is required';
    if (!password.trim() || password.length < 8) errors.password = 'Password must be at least 8 characters';
    if (!confirmPassword.trim() || password !== confirmPassword) errors.confirmPassword = 'Passwords must match';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const formData = { fullname, username, email, mobile, password };
        const res = await fetch(`${backendurl}/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const response = await res.json();

        if (res.ok) {
          toast.success('Registered Successfully');
          setTimeout(() => navigate('/login'), 2000);
        } else {
          toast.error(response.message);
        }
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  return (
    <>
      <div className="flex w-full h-screen bg-white">
        <button onClick={() => navigate('/')}>
          <div className="absolute top-4 left-8 flex items-center">
            <img src={require('../../images/LOGO_FINAL.png')} alt="Logo" className="w-12 h-12 mr-3" />
            <span className="text-black text-xl font-istok-web font-bold">ANTHROPOSYNC</span>
          </div>
        </button>
        <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100">
          <img src={require('../../images/registerpage_abovequote.png')} alt="Register" className="w-3/4" />
          <div className="text-center mt-6">
            <p className="ml-5 mr-5 text-2xl font-serif">"Every measurement brings us closer to personalized perfection."</p>
            <p className="text-lg font-serif mt-2 ml-10">— Dr. Alan Hughes, Anthropometric Specialist</p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center font-istok relative">
          <button 
            onClick={() => navigate('/')} 
            className="absolute top-7 right-16 text-xl text-gray-600 hover:text-black"
          >
            <FaTimes />
          </button>
          <div className="w-4/5 bg-white shadow-xl p-8 rounded-lg">
            <h2 className="text-4xl font-bold text-600 mb-4 font-istok-web-bold text-left">
              <span className="text-[#0051AB]">Create</span> an Account
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-istok text-left font-medium">Please sign up to continue.</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-left">
                  <label className="text-lg font-bold font-istok">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name"
                    className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                  {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
                </div>
                <div className="text-left">
                  <label className="text-lg font-bold font-istok">Username</label>
                  <input 
                    type="text" 
                    placeholder="Enter your username"
                    className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-left">
                  <label className="text-lg font-bold font-istok">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="text-left">
                  <label className="text-lg font-bold font-istok">Phone Number</label>
                  <input 
                    type="text" 
                    placeholder="Enter your phone number"
                    className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-left">
                  <label className="text-lg font-bold font-istok">Password</label>
                  <div className="relative mt-2">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Enter your password"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={togglePasswordVisibility} className="absolute top-3 right-3 text-gray-600">
                      {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div className="text-left">
                  <label className="text-lg font-bold font-istok">Confirm Password</label>
                  <div className="relative mt-2">
                    <input 
                      type={showConfirmPassword ? "text" : "password"} 
                      placeholder="Confirm your password"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute top-3 right-3 text-gray-600">
                      {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </div>
              </div>

              <button type="submit" className="bg-[#0051AB] text-white py-3 rounded-lg hover:bg-blue-900 font-istok">SIGN UP</button>
            </form>
            <div className="text-center mt-3">
              <p className="text-lg font-istok">Already have an account? <span onClick={() => navigate('/login')} className="text-[#0051AB] cursor-pointer">LOGIN</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
