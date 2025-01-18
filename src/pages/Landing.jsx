import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/LOGO_FINAL.png";
import backgroundImage from "../images/Hero section image.png";
import PrivacyPolicy from "./Policies_Terms_Contact/privacypolicy";
import TermsOfUse from "./Policies_Terms_Contact/terms_of_use";
import CookiePolicy from "./Policies_Terms_Contact/cookiepolicy";
import ContactUs from "./Policies_Terms_Contact/contact_us";
import TextLoop from "react-text-loop";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxCard from "../components/ParallaxCard"
import Usp from "../components/Usp";


function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.65, 0.90]);
  const highlists = ["Visually", "Developer", "Creator", "Mentally"];


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`fixed top-0  left-0 w-full py-4 transition-all duration-300 z-50 ${
          isScrolled ? "bg-black text-white" : "bg-transparent text-black"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <Link to="/" className="flex items-center">
            <img
              src={require("../images/LOGO_FINAL.png")}
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
      <div className="px-28 pb-10 pt-36 mx-18 bg-prim">
        <p className="text-zinc-800 text-8xl text-left font-semibold">
          Design, Develop, Deploy React and Apps
          <TextLoop interval={2500}>
            {highlists.map((item, index) => (
              <motion.span
                key={index}
                className="coloredText text-8xl mx-5 py-3"
                style={{
                  background: "linear-gradient(to left, #30E8BF, #FF8235)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                {item}
              </motion.span>
            ))}
          </TextLoop>
        </p>
        <div className="flex justify-between p-5 mx-3 my-10 items-center">
          <div className="pr-4">
            <p className="font-light text-zinc-800 text-2xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium, enim!
            </p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-full bg-sec text-xl text-black py-2 px-5 hover:bg-tert border-1 border-black transition-all duration-500">
              Try out demo
            </button>
            <button className="rounded-full border border-black text-xl text-black py-2 px-3 hover:bg-black hover:text-white transition-all duration-500">
              Download
            </button>
          </div>
        </div>
        <motion.div
          className="mx-10 shadow-slate-50/20 shadow-xl"
          style={{ scale }} // Apply the scaling effect
        >
          <img
            src="https://images.pexels.com/photos/30230100/pexels-photo-30230100/free-photo-of-stunning-alpine-mountain-peak-with-clear-blue-sky.jpeg"
            alt=""
            className="rounded-lg"
          />
        </motion.div>
      </div>
      <ParallaxCard></ParallaxCard>
      {/* <Page></Page> */}
      <Usp></Usp>
      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            {/* Logo and Description */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src={require("../images/LOGO_FINAL.png")}
                  alt="Logo"
                  className="w-12 h-12 mr-3"
                />
                <span className="text-4xl font-ananda_namaste">AROGYAM</span>
              </Link>

              {/* Social Media Icons */}
              <div className="mt-4 flex justify-left space-x-6">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/mdi_youtube.png")}
                    alt="YouTube"
                    className="w-8 h-8 hover:opacity-80"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/line-md_instagram.png")}
                    alt="Instagram"
                    className="w-8 h-8 hover:opacity-80"
                  />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/x.png")}
                    alt="X"
                    className="w-10 h-10 hover:opacity-80"
                  />
                </a>
                <a
                  href="https://www.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/ic_baseline-whatsapp.png")}
                    alt="Facebook"
                    className="w-8 h-8 hover:opacity-80"
                  />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/mdi_linkedin.png")}
                    alt="LinkedIn"
                    className="w-8 h-8 hover:opacity-80"
                  />
                </a>
              </div>

              <div className="flex text-right text-sm text-gray-400 mr-4 hover:text-[#B5C18E]">
                <Link to="/privacypolicy">Privacy Policy</Link>
              </div>
              <div className="flex text-right text-sm text-gray-400 mr-4 hover:text-[#B5C18E]">
                <Link to="/cookiepolicy">Cookie Policy</Link>
              </div>
              <div className="flex text-right text-sm text-gray-400 mr-4 hover:text-[#B5C18E]">
                <Link to="/terms_of_use">Terms of Use</Link>
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
                  <Link
                    to="/contact_us"
                    className="text-gray-300 hover:text-[#B5C18E]"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login_user"
                    className="text-gray-300 hover:text-[#B5C18E]"
                  >
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
                    <span className="font-semibold">Phone:</span> +91 98765
                    43211
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-4 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 ml-4">
            <div>© 2025 Arogyam. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
