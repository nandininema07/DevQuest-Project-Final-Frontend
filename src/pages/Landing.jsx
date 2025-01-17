import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/LOGO_FINAL.png';
import backgroundImage from '../images/Hero section image.png';
import PrivacyPolicy from './Policies_Terms_Contact/privacypolicy';
import TermsOfUse from './Policies_Terms_Contact/terms_of_use';
import CookiePolicy from './Policies_Terms_Contact/cookiepolicy';
import ContactUs from './Policies_Terms_Contact/contact_us';

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full py-4 transition-all duration-300 z-50 ${
        isScrolled ? 'bg-black text-white' : 'bg-transparent text-black'
        }`}
        >
        <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="flex items-center">
        <img
        src={require('../images/LOGO_FINAL.png')}
        alt="Logo"
        className="w-10 h-10 mr-3"
        />  
        <span className="text-3xl font-ananda_namaste ">AROGYAM</span>
        </Link>
        <div className="flex space-x-4">
        <Link
            to="/"
            className="font-istok-web font-bold text-lg px-4 py-2 rounded transition-all hover:bg-[#B5C18E] hover:text-white"
        >
            Home
        </Link>
        <Link
            to="/login_user"
            className="font-istok-web font-bold text-lg px-4 py-2 rounded transition-all hover:bg-[#B5C18E] hover:text-white"
        >
            Login
        </Link>
        <Link
            to="/register_user"
            className="font-istok-web font-bold text-lg px-4 py-2 rounded transition-all hover:bg-[#B5C18E] hover:text-white"
        >
            Register
        </Link>
        </div>
    </div>
    </nav>

      {/* Hero Section */}
      <header className="relative">
        <img
          src={backgroundImage}
          alt="Hero Section"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white  bg-opacity-40">
          <h1 className="text-6xl sm:text-3xl font-bold font-istok-web text-center">
            Empowering Doctors, <br /> Enhancing Care.
          </h1>
          <p className="mt-4 text-3xl text-center font-istok-web">
            Seamlessly Track, Test, and Monitor Patients' Progress.
          </p>
          
        </div>
      </header>

      
      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        {/* Overlapping Card */}
        <div className="absolute bottom-[-7.5rem] left-1/2 transform -translate-x-1/2 w-[90%] md:w-1/2 bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold font-serif mb-4">
            Welcome to the future of anthropometric measurement!
          </h2>
          <p className="text-md text-2xl font-serif">
            Say goodbye to cumbersome manual methods and embrace precision, efficiency, and comfort like never before.
          </p>
          
        </div>
        
        <div className="container mx-auto px-6 text-center">
          
          <div className="flex flex-wrap justify-center gap-20 font-serif">
            {[
              {
                title: 'Advanced Measurement Technology',
                description:
                  'Our system uses Computer Vision and Machine Learning to deliver quick, accurate, non-contact body measurements.',
              },
              {
                title: 'Industry-Wide Applications',
                description:
                  'Ideal for healthcare, fitness, fashion, and ergonomics, our platform ensures precise measurements for personalized solutions.',
              },
              {
                title: 'Precision for Personalization',
                description:
                  'Capture exact anthropometric data effortlessly, enabling a future of tailored products and services.',
              },
            ].map((card, index) => (
              <div
                key={index}
                className="w-80 p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:bg-[#B5C18E] hover:text-white"
              >
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-md">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        
      </section>

      {/* YouTube Video Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold font-istok-web text-center mb-6">
            Hear From the Experts
          </h2>
          <div className="flex justify-center">
            <iframe
              width="860"
              height="480"
              src="https://www.youtube.com/embed/XRXa6HVS6PQ?si=IWqUaY_IGkzhD_VO"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

        <Link to='/register'>
        <button className="mt-6 px-8 py-3 bg-black text-white text-lg rounded-lg hover:bg-blue-700">
          Get Started 
        </button>
        </Link>
          
      </section>

      {/* Footer */}
<footer className="bg-black text-white py-12">
  <div className="container mx-auto px-6">
    <div className="flex flex-wrap justify-between">
      {/* Logo and Description */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <Link to="/" className="flex items-center">
        <img
        src={require('../images/LOGO_FINAL.png')}
        alt="Logo"
        className="w-12 h-12 mr-3"
        />
        <span className="text-4xl font-ananda_namaste">AROGYAM</span>
        </Link>

        {/* Social Media Icons */}
<div className="mt-4 flex justify-left space-x-6">
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <img
      src={require('../images/mdi_youtube.png')}
      alt="YouTube"
      className="w-8 h-8 hover:opacity-80"
    />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <img
      src={require('../images/line-md_instagram.png')}
      alt="Instagram"
      className="w-8 h-8 hover:opacity-80"
    />
  </a>
  <a href="https://x.com" target="_blank" rel="noopener noreferrer">
    <img
      src={require('../images/x.png')}
      alt="X"
      className="w-10 h-10 hover:opacity-80"
    />
  </a>
  <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
    <img
      src={require('../images/ic_baseline-whatsapp.png')}
      alt="Facebook"
      className="w-8 h-8 hover:opacity-80"
    />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <img
      src={require('../images/mdi_linkedin.png')}
      alt="LinkedIn"
      className="w-8 h-8 hover:opacity-80"
    />
  </a>
</div>

        <div className='flex text-right text-sm text-gray-400 mr-4 hover:text-[#B5C18E]'>
        <Link to='/privacypolicy'>Privacy Policy</Link>
      </div>
      <div className='flex text-right text-sm text-gray-400 mr-4 hover:text-[#B5C18E]'>
        <Link to='/cookiepolicy'>Cookie Policy</Link>
      </div>
      <div className='flex text-right text-sm text-gray-400 mr-4 hover:text-[#B5C18E]'>
        <Link to='/terms_of_use'>Terms of Use</Link>
      </div>
      </div>

      {/* Navigation Links */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="text-gray-300 hover:text-[#B5C18E]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact_us" className="text-gray-300 hover:text-[#B5C18E]">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/login_user" className="text-gray-300 hover:text-[#B5C18E]">
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-1/3">
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-2 text-gray-300">
          <li>
            <p>
              <span className="font-semibold">Email:</span> xyz@gmail.com
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Phone:</span> +91 98765 43211
            </p>
          </li>
          
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-4 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 ml-4">
      <div>
        © 2025 Anthroposync. All rights reserved.
      </div>
      
    </div>
  </div>
</footer>

    </div>
  );
}

export default HomePage;
