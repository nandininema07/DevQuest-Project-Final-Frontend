import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/LOGO_FINAL.png';

function TermsOfUse() {
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
                <h1 className="text-5xl font-extrabold mb-8 text-blue-700">Terms of Service</h1>
                <p className="mb-6">
                    Welcome to Anthroposync! These terms and conditions outline the rules and regulations for the use of our website, located at www.anthroposync.com.
                </p>
                <p className="mb-6">
                    By accessing or using our website, you agree to comply with and be bound by the following terms of service. If you disagree with any part of these terms, you must not use our website.
                </p>

                <h2 className="text-2xl font-semibold mb-4">1. Use of the Website</h2>
                <p className="mb-4">
                    By using this website, you warrant that you are at least 18 years old or have the permission of a parent or legal guardian to use this website. You agree to use the website for lawful purposes only and in a way that does not infringe the rights of, restrict, or inhibit the use and enjoyment of this website by others.
                </p>

                <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
                <p className="mb-4">
                    All content on this website, including text, images, graphics, logos, and software, is the property of Anthroposync or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any of the content without our explicit written consent.
                </p>

                <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                <p className="mb-4">
                    To access certain features of the website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.
                </p>

                <h2 className="text-2xl font-semibold mb-4">4. Prohibited Activities</h2>
                <p className="mb-4">
                    You agree not to engage in any of the following prohibited activities:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li>Using the website in any unlawful or fraudulent manner</li>
                    <li>Attempting to interfere with the proper functioning of the website</li>
                    <li>Using automated tools to scrape or collect data</li>
                    <li>Uploading or transmitting viruses or malicious code</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
                <p className="mb-4">
                    The website is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the website will be uninterrupted, error-free, or free of viruses.
                </p>

                <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="mb-4">
                    To the fullest extent permitted by law, Anthroposync and its affiliates will not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the website or inability to use the website.
                </p>

                <h2 className="text-2xl font-semibold mb-4">7. Modifications to Terms</h2>
                <p className="mb-4">
                    We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the website after changes have been made constitutes your acceptance of the revised terms.
                </p>

                <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
                <p className="mb-4">
                    These terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
                </p>

                <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfUse;
