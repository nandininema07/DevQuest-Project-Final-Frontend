import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getAuthToken } from '../..';
import { backendurl } from '../../urls';
import axios from 'axios'

function Login() {
  const navigate = useNavigate();
  const token = getAuthToken();
  const tokenJson = JSON.parse(token);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // useEffect(() => {
  //   if (tokenJson?.token?.access) {
  //     navigate('/patient');
  //   }
  // }, [tokenJson, navigate]);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  axios.defaults.withCredentials = true
    const handleSubmit = (e) => {
        e.preventDefault();
        //window.localStorage.setItem("isLogedIn", true)
        axios.post('http://localhost:3001/login',{username, password})
        .then(result => {console.log(result)
            if(result.data === "Success"){
                navigate('/patient')
            }
        })
        .catch(err => console.log(err))
    }

  return (
    <>
      <div className="flex w-full h-screen bg-white">
        {/* Logo and Website Name */}
        <button onClick={() => navigate('/')}>
          <div className="absolute top-4 left-8 flex items-center">
            <img src={require('../../images/LOGO_FINAL.png')} alt="Logo" className="w-12 h-12 mr-3" />
            <span className="text-black text-xl font-istok-web font-bold">ANTHROPOSYNC</span>
          </div>
        </button>

        {/* Image and Quote Section */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100">
          <img src={require('../../images/loginpage_abovequote.png')} alt="Login" className="w-3/4" />
          <div className="text-center mt-6">
            <p className="ml-5 mr-5 text-2xl font-serif">"Understanding the human form is the first step in shaping a better future."</p>
            <p className="text-lg font-serif mt-2 ml-10">— Dr. Jane Thompson, Anthropologist</p>
          </div>
        </div>

        {/* Login Section */}
        <div className="w-1/2 flex flex-col justify-center items-center font-istok relative">
          {/* Cross button to Homepage */}
          <button 
            onClick={() => navigate('/')} 
            className="absolute top-7 right-16 text-xl text-gray-600 hover:text-black"
          >
            <FaTimes />
          </button>

          <div className="w-4/5 bg-white shadow-xl p-8 rounded-lg">
            <h2 className="text-4xl font-bold text-600 mb-4 font-istok-web-bold text-left">
              <span className="text-[#0051AB]">Welcome</span> Back!
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-istok text-left font-medium">Please login to continue.</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="text-left">
                <label className="text-lg font-bold font-istok">Username</label>
                <input 
                  type="text" 
                  placeholder="Enter your username"
                  className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {usernameError && <p className="text-red-500 text-sm">{usernameError}</p>}
              </div>
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
                {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
              </div>
              <div className="flex items-center font-istok">
                <input 
                  type="checkbox" 
                  checked={rememberMe} 
                  onChange={() => setRememberMe(!rememberMe)} 
                  className="w-4 h-4" 
                />
                <label className="ml-2 text-sm text-gray-600">Remember Me</label>
                <Link to="/forgot-password" className="ml-auto text-sm text-[#0051AB]">Forgot Password?</Link>
              </div>
              <button type="submit" className="bg-[#0051AB] text-white py-3 rounded-lg hover:bg-blue-900 font-istok">LOGIN</button>
            </form>
            <div className="text-center mt-6">
              <p className="text-lg font-istok">New User? <Link to="/register" className="text-[#0051AB]">SIGNUP</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
