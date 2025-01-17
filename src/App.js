import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Layout from './components/Layout';
import Layout_Navbar_only from './components/Layout_navbar_only';
import Patient from './pages/Patient'
import DoctorProfile from './pages/Profile/DoctorProfile';
import Login from './pages/LoginRegister/Login';
import Register from './pages/LoginRegister/Register';
import ScrollToTop from './components/ScrollToTop'

import './App.css';
import Profile from './pages/Profile/Profile';
import Measurements from './pages/Profile/Measurements';
import TakeTest from './pages/Profile/TakeTest';
import Landing from './pages/Landing';
import { PatientProvider } from './context/PatientContext';
import PrivacyPolicy from './pages/Policies_Terms_Contact/privacypolicy';
import TermsOfUse from './pages/Policies_Terms_Contact/terms_of_use';
import CookiePolicy from './pages/Policies_Terms_Contact/cookiepolicy';
import ContactUs from './pages/Policies_Terms_Contact/contact_us';


import VideoRecord from './components/video/VideoRecord';
import GiveTest from './components/video/GiveTest'
import ForgotPassword from './pages/LoginRegister/ForgotPassword';
import ResetPassword from './pages/LoginRegister/ResetPassword';



function App() {
  return (
    <div className="App">
      <PatientProvider>
      <Router>
      <ScrollToTop />
        <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/patient" element={<Layout_Navbar_only><Patient/></Layout_Navbar_only>} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route exact path="/terms_of_use" element={<TermsOfUse />} />
        <Route exact path="/cookiepolicy" element={<CookiePolicy />} />
        <Route exact path="/contact_us" element={<ContactUs />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/forgot-password" element={<ForgotPassword/>} />
          <Route exact path="/reset-password/:email" element={<ResetPassword/>} />
          <Route exact path="/patient-profile/:patientId" element={<Layout_Navbar_only><Profile/></Layout_Navbar_only>} />
          <Route exact path="/take-test/:id" element={<Layout_Navbar_only> <GiveTest/> </Layout_Navbar_only>} />
          <Route exact path="/measurements/:id" element={<Layout_Navbar_only> <Measurements/> </Layout_Navbar_only>} />
          <Route exact path="/measurements/:id" element={<Layout_Navbar_only> <Measurements/> </Layout_Navbar_only>} />
          <Route exact path="/doctor-profile" element={<Layout_Navbar_only><DoctorProfile/></Layout_Navbar_only>} />
          <Route path='/video-recorder' element={<VideoRecord />}></Route>
        </Routes>
    </Router>
    </PatientProvider>
    </div>
  );
}

export default App;
