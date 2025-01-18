import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';


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
import DoctorProfile from './pages/Profile/DoctorProfile';



function App() {
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

            {/* Routes for user password management */}
            <Route exact path="/forgot-password-user" element={<ForgotPasswordUser />} />
            <Route exact path="/forgot-password-expert" element={<ForgotPasswordExpert />} />
            <Route exact path="/reset-password-user/:email" element={<ResetPasswordUser />} />
            <Route exact path="/reset-password-expert/:email" element={<ResetPasswordExpert />} />
            
            <Route exact path="/patient" element={<Patient />} />
            {/* <Route exact path="/patient" element={<Layout_Navbar_only_expert><Patient /></Layout_Navbar_only_expert>} /> */}
            <Route exact path="/doctor-profile" element={<DoctorProfile />} />
            <Route exact path="/measurements_expert/:id" element={<Layout_Navbar_only><Measurements /></Layout_Navbar_only>} />

            
            <Route exact path="/patient-profile" element={<Layout_Navbar_only><Profile /></Layout_Navbar_only>} />
            <Route exact path="/dashboard" element={<Layout_Navbar_only><Dashboard /></Layout_Navbar_only>} />            
            <Route exact path="/take-test/:id" element={<Layout_Navbar_only><GiveTest /></Layout_Navbar_only>} />
            <Route exact path="/measurements_user/:id" element={<Layout_Navbar_only><Measurements /></Layout_Navbar_only>} />
            <Route path="/video-recorder" element={<VideoRecord />} />
            <Route path="/FileUpload" element={<FileUpload />} />
            
          </Routes>
        </Router>
      </PatientProvider>
    </div>
  );
}

export default App;
