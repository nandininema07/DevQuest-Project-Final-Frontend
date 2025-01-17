import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/LOGO_FINAL.png';

function CookiePolicy() {
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
                <h1 className="text-5xl font-extrabold mb-8 text-blue-700">Cookie Policy</h1>
                <p className="mb-6">
                    This Cookie Policy explains how Anthroposync ("we," "us," or "our") uses cookies and similar technologies to recognize you when you visit our website at www.anthroposync.com. It explains what these technologies are, why we use them, and your rights to control their use.
                </p>

                <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
                <p className="mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. Cookies help website owners provide a better user experience and functionality. Some cookies are strictly necessary for the website to function, while others are used to gather analytics, provide personalized content, and enable targeted advertising.
                </p>

                <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
                <p className="mb-4">
                    We use cookies to enhance your experience while using our website. Specifically, we use cookies for:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li>Remembering your preferences and settings</li>
                    <li>Understanding how you interact with our website</li>
                    <li>Improving our website's performance</li>
                    <li>Delivering personalized content and advertisements based on your interests</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
                <ul className="list-disc pl-6 mb-6">
                    <li>
                        <strong>Essential Cookies:</strong> These cookies are necessary for the operation of our website. They enable core functionality such as security, network management, and accessibility.
                    </li>
                    <li>
                        <strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </li>
                    <li>
                        <strong>Functional Cookies:</strong> These cookies enable our website to provide enhanced functionality and personalization. They may be set by us or by third-party providers.
                    </li>
                    <li>
                        <strong>Advertising Cookies:</strong> These cookies are used to deliver advertisements that are relevant to you. They may track your browsing habits across different websites.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
                <p className="mb-4">
                    We may also allow third-party services to set cookies on your device when you visit our website. These third parties include analytics services and advertising networks. We do not control these third-party cookies, and their use is subject to their own privacy and cookie policies.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
                <p className="mb-4">
                    You can manage your cookie preferences at any time by adjusting your browser settings. Most browsers allow you to block or delete cookies, but please note that doing so may affect the functionality of our website.
                </p>
                <p className="mb-6">
                    To learn more about how to manage cookies, visit <a href="www.allaboutcookies.org." className='text-blue-500 underline'>www.allaboutcookies.org.</a>
                </p>

                <h2 className="text-2xl font-semibold mb-4">Changes to This Cookie Policy</h2>
                <p className="mb-6">
                    We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-6">
                    If you have any questions about our use of cookies, please contact us at:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li><strong>Email:</strong> info@anthroposync.com</li>
                    <li><strong>Address:</strong> Anthroposync, 123 Health Street, Wellness City, WC1234</li>
                </ul>
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

export default CookiePolicy;
