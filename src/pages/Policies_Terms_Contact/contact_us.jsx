import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/LOGO_FINAL.png';

function ContactUs() {
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "52c99063-65a7-40ca-9b58-d58fa9a13609");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setShowPopup(true); // Show the popup
      setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <nav className="fixed top-0 left-0 w-full py-4 transition-all duration-300 z-50 bg-black text-white">
          <div className="container mx-auto flex justify-between items-center px-6">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="w-12 h-12 mr-3" />
              <span className="text-xl font-istok-web font-bold">ANTHROPOSYNC</span>
            </Link>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="font-istok-web font-bold text-lg px-4 py-2 rounded transition-all hover:bg-blue-700 hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/Login"
                className="font-istok-web font-bold text-lg px-4 py-2 rounded transition-all hover:bg-blue-700 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="font-istok-web font-bold text-lg px-4 py-2 rounded transition-all hover:bg-blue-700 hover:text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </nav>

        <div className="mt-10 mb-10 flex flex-wrap items-center justify-center h-[calc(100vh-70px)] px-8 lg:px-32 py-16">
          <div className="w-full lg:w-1/2 pr-8">
            <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Contact Us</h1>
            <p className="mb-6">
              We’d love to hear from you! Please reach out to us with any questions, concerns, or feedback.
            </p>
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Your full name"
                  name="name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Your email address"
                  name="email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-lg mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  rows="4"
                  placeholder="Your message"
                  required
                />
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right-side Contact Details */}
          <div className="hidden lg:block w-1/2 pl-8">
            <div className="p-6 bg-white shadow-lg rounded-md">
              <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
              <div className="text-gray-800 space-y-2">
                <p><strong>Email:</strong> info@anthroposync.com</p>
                <p><strong>Phone:</strong> +123 456 7890</p>
                <p><strong>Address:</strong> Anthroposync, 123 Health Street, Wellness City, WC1234</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-4 rounded-md shadow-lg z-50">
          We will get to you shortly!
        </div>
      )}

<footer className="bg-black text-white py-12 mt-10">
                          <div className="container mx-auto px-6">
                            <div className="flex flex-wrap justify-between">
                              {/* Logo and Description */}
                              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                                <Link to="/" className="flex items-center">
                                <img
                                src={require('../../images/LOGO_FINAL.png')}
                                alt="Logo"
                                className="w-12 h-12 mr-3"
                                />
                                <span className="text-2xl font-istok-web font-bold">ANTHROPOSYNC</span>
                                </Link>
                        
                                {/* Social Media Icons */}
                                <div className="mt-4 flex justify-left space-x-6">
                                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <img
                                      src={require('../../images/mdi_youtube.png')}
                                      alt="YouTube"
                                      className="w-8 h-8 hover:opacity-80"
                                    />
                                  </a>
                                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img
                                      src={require('../../images/line-md_instagram.png')}
                                      alt="Instagram"
                                      className="w-8 h-8 hover:opacity-80"
                                    />
                                  </a>
                                  <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                                    <img
                                      src={require('../../images/x.png')}
                                      alt="X"
                                      className="w-10 h-10 hover:opacity-80"
                                    />
                                  </a>
                                  <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                    <img
                                      src={require('../../images/ic_baseline-whatsapp.png')}
                                      alt="WhatsApp"
                                      className="w-8 h-8 hover:opacity-80"
                                    />
                                  </a>
                                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img
                                      src={require('../../images/mdi_linkedin.png')}
                                      alt="LinkedIn"
                                      className="w-8 h-8 hover:opacity-80"
                                    />
                                  </a>
                                </div>
                        
                                <div className='flex text-right text-sm text-gray-400 mr-4 hover:text-blue-500'>
                                  <Link to='/privacypolicy'>Privacy Policy</Link>
                                </div>
                                <div className='flex text-right text-sm text-gray-400 mr-4 hover:text-blue-500'>
                                  <Link to='/cookiepolicy'>Cookie Policy</Link>
                                </div>
                                <div className='flex text-right text-sm text-gray-400 mr-4 hover:text-blue-500'>
                                  <Link to='/terms_of_use'>Terms of Use</Link>
                                </div>
                              </div>
                        
                              {/* Navigation Links */}
                              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                  <li>
                                    <Link to="/" className="text-gray-300 hover:text-blue-500">
                                      Home
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/contact_us" className="text-gray-300 hover:text-blue-500">
                                      Contact Us
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/login" className="text-gray-300 hover:text-blue-500">
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

export default ContactUs;
