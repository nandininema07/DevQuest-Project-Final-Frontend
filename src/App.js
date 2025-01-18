import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { useState,useEffect } from 'react';
import axios from 'axios';

import LoginUser from './pages/LoginRegister/Login_user';
import LoginExpert from './pages/LoginRegister/Login_expert';
import RegisterUser from './pages/LoginRegister/Register_user';
import RegisterExpert from './pages/LoginRegister/Register_expert';
import ForgotPasswordUser from './pages/LoginRegister/ForgotPassword_user';
import ForgotPasswordExpert from './pages/LoginRegister/ForgotPassword_expert';
import ResetPasswordUser from './pages/LoginRegister/ResetPassword_user';
import ResetPasswordExpert from './pages/LoginRegister/ResetPassword_expert';

import PrivacyPolicy from './pages/Policies_Terms_Contact/privacypolicy';
import TermsOfUse from './pages/Policies_Terms_Contact/terms_of_use';
import CookiePolicy from './pages/Policies_Terms_Contact/cookiepolicy';
import ContactUs from './pages/Policies_Terms_Contact/contact_us';
import ScrollToTop from './components/ScrollToTop';

import Landing from './pages/Landing';
import { PatientProvider } from './context/PatientContext';

import Measurements from './pages/Profile/Measurements';

import './App.css';
import Layout_Navbar_only from './components/Layout_navbar_only';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile/Profile';
import TakeTest from './pages/Profile/TakeTest';
import VideoRecord from './components/video/VideoRecord';
import GiveTest from './components/video/GiveTest';
import FileUpload from './pages/FileUpload';

//import Layout_Navbar_only_expert from './components/Navbar_expert';
import Patient from './pages/Patient';
import DoctorProfile from './pages/Profile/Doctor_Profile';
import MsrmtTable from './components/MsrmtTable'



function App() {
  const [email, setEmail] = useState(""); // State to store email

  // Fetch email from backend
  useEffect(() => {
    axios
      .get("http://localhost:3001/getemail")
      .then((result) => {
        setEmail(result.data); // Update email state
      })
      .catch((err) => console.log(err));
  }, []);

  // MeasurementsWrapper component that passes email to Measurements component
  function MeasurementsWrapper({ email }) {
       
    return <Measurements email={email} />;
  }

  const data = [
    {
      "date": "2025-01-18",
      "weight": "70 kg",
      "height": "175 cm",
      "response": "Test response 1"
    },
    {
      "date": "2025-01-19",
      "weight": "68 kg",
      "height": "176 cm",
      "response": "Test response 2"
    }
  ]; 
  return (
    <div className="App">
      <PatientProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route exact path="/terms_of_use" element={<TermsOfUse />} />
            <Route exact path="/cookiepolicy" element={<CookiePolicy />} />
            <Route exact path="/contact_us" element={<ContactUs />} />
            <Route exact path="/login_user" element={<LoginUser />} />
            <Route exact path="/login_expert" element={<LoginExpert />} />
            <Route exact path="/register_user" element={<RegisterUser />} />
            <Route exact path="/register_expert" element={<RegisterExpert />} />
            <Route exact path="/forgot-password-user" element={<ForgotPasswordUser />} />
            <Route exact path="/forgot-password-expert" element={<ForgotPasswordExpert />} />
            <Route exact path="/reset-password-user/:email" element={<ResetPasswordUser />} />
            <Route exact path="/reset-password-expert/:email" element={<ResetPasswordExpert />} />
            
            <Route exact path="/patient" element={<Patient />} />
            {/* <Route exact path="/patient" element={<Layout_Navbar_only_expert><Patient /></Layout_Navbar_only_expert>} /> */}
            <Route exact path="/doctor-profile" element={<DoctorProfile />} />
            <Route exact path="/measurements_expert/:id" element={<Measurements />}/>

            {/* User Routes */}
            <Route
              exact
              path="/patient-profile"
              element={
                  <Profile />
              }
            />
            <Route
              exact
              path="/dashboard"
              element={
                <Layout_Navbar_only>
                  <Dashboard />
                </Layout_Navbar_only>
              }
            />
            <Route
              exact
              path="/take-test/:email"
              element={
                <Layout_Navbar_only>
                  <GiveTest />
                </Layout_Navbar_only>
              }
            />
            <Route
              exact
              path="/measurements_user/:email?"
              element={
                <Layout_Navbar_only>
                  <MeasurementsWrapper email={email} />
                </Layout_Navbar_only>
              }
            />
            <Route path = "/MsrmtTbl" element = {<MsrmtTable data={data}/>}/>
            <Route path="/video-recorder" element={<VideoRecord />} />
            <Route path="/FileUpload" element={<FileUpload />} />
          </Routes>
        </Router>
      </PatientProvider>
    </div>
  );
}

export default App;
