import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Comp_vision from "../images/Comp vision.jpg"
import Aur from "../images/ayurv prac.jpg"

const ParallaxCard = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2 }); // Trigger earlier
  const [ref2, inView2] = useInView({ threshold: 0.2 }); // Trigger even earlier
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const navigate= useNavigate();

  React.useEffect(() => {
    if (inView1) {
      controls1.start({
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls1.start({ y: 150, scale: 0.8 });
    }
  }, [inView1, controls1]);

  React.useEffect(() => {
    if (inView2) {
      controls2.start({
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls2.start({ y: 300, scale: 0.8 });
    }
  }, [inView2, controls2]);

  return (
    <div className="h-[150vh] text-black px-16 py-10">
      <div className="text-left mb-10">
        <p className="text-6xl font-semibold">Your Health, Captured in Every Frame</p>
        <p className="text-2xl">
        Unlock Personalized Ayurvedic Insights with Just a Video.
        </p>
      </div>

      <div className="relative">
        {/* First Card */}
        <motion.div
          ref={ref1}
          animate={controls1}
          initial={{ y: 100, scale: 0.8 }}
          className="border-2 bg-[#f7dcb9] text-black rounded-xl absolute top-0 left-0 right-0 z-10 h-[50vh]"
        >
          <div className="flex items-center justify-evenly my-10">
            <img src={Comp_vision} alt="Computer vision" className="h-60"/>
            <div className="text-left space-y-3">
              <h3 className="text-3xl font-bold">What does Arogyam offer to you?</h3>
              <ol className="space-y-1 ml-5">
                <li className="font-light">
                • Get personalized health insights with advanced facial and nail analysis <br /> powered by AI and machine learning.
                </li>
                <li className="font-light">
                • Receive tailored Ayurvedic recommendations that align with your unique health profile.
                </li>
                <li className="font-light">
                • Enjoy a simple, user-friendly interface that makes health analysis effortless.
                </li>
                <li className="font-light">
                • Track your health progress over time with easy-to-understand results and improvements.
                </li>
              </ol>
              <button onClick={()=> navigate('/register_user')} className="rounded-full bg-black text-white py-2 px-5">
                Try out Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          ref={ref2}
          animate={controls2}
          initial={{ y: 200, scale: 0.8 }}
          className="border-2 bg-[#b382db] text-black rounded-xl absolute top-20 left-0 right-0 z-20 h-[50vh]"
        >
          <div className="flex items-center justify-evenly my-10">
          <img src={Aur} alt="Ayurvedic Prac" className="h-60"/>
            <div className="text-left space-y-3">
              <h3 className="text-3xl font-bold">Are you an Ayurveda Practitioner?</h3>
              <ol className="space-y-1 ml-5">
                <li className="font-light">
                • Track and manage patient health with personalized Ayurvedic insights.
                </li>
                <li className="font-light">
                • Access patient profiles for precise Ayurvedic treatment recommendations.
                </li>
                <li className="font-light">
                • Monitor patient progress and provide ongoing Ayurvedic guidance
                </li>
                <li className="font-light">
                • Give feedback to help patients refine their Ayurvedic wellness journey.
                </li>
              </ol>
              <button onClick={()=> navigate('/register_expert')} className="rounded-full bg-black text-white py-2 px-5">
                Try out Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxCard;
