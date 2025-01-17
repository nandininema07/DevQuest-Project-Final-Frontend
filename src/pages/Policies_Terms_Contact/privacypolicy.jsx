import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/LOGO_FINAL.png';
import TermsOfUse from './terms_of_use';
import CookiePolicy from './cookiepolicy';
import ContactUs from './contact_us';

function PrivacyPolicy() {
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
                className={`fixed top-0 left-0 w-full py-4 transition-all duration-300 z-50 bg-black text-white`}
            >
                <div className="container mx-auto flex justify-between items-center px-6">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-12 h-12 mr-3"
                        />
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

            <div className="mt-20 px-8 lg:px-32 py-16 text-left">
                <h1 className="text-5xl font-extrabold mb-8 text-blue-700">Privacy Policy</h1>
                <p className="mb-6">
                    This privacy policy sets out how Anthroposync uses and protects any information that you give us when you use this website.
                </p>

                <h2 className="text-2xl font-semibold mb-4 ">Information We Collect</h2>
                <p className="mb-4">
                    We may collect the following information:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li>Your name and contact information</li>
                    <li>Demographic information</li>
                    <li>Other information relevant to customer surveys and/or offers</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">How We Use the Information</h2>
                <p className="mb-4">
                    We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li>Internal record keeping</li>
                    <li>Improving our products and services</li>
                    <li>Sending promotional emails about new products, special offers, or other information which we think you may find interesting</li>
                    <li>Contacting you for market research purposes</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Security</h2>
                <p className="mb-6">
                    We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
                <p className="mb-4">
                    A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree, the file is added, and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual.
                </p>
                <p className="mb-6">
                    Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Links to Other Websites</h2>
                <p className="mb-6">
                    Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Controlling Your Personal Information</h2>
                <p className="mb-6">
                    You may choose to restrict the collection or use of your personal information in the following ways:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li>
                        If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at info@anthroposync.com.
                    </li>
                    <li>
                        We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
                    </li>
                    <li>
                        You may request details of personal information which we hold about you. If you would like a copy of the information held on you, please write to: Anthroposync, 123 Health Street, Wellness City, WC1234.
                    </li>
                    <li>
                        If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible at the above address. We will promptly correct any information found to be incorrect.
                    </li>
                </ul>

                <p className="mb-6">
                    This privacy policy is subject to change without notice.
                </p>
            </div>
            {/* Footer */}
            <footer className="bg-black text-white py-12">
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
                  alt="Facebook"
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

export default PrivacyPolicy;
