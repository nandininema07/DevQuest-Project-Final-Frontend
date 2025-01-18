import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ParallaxCard = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2 }); // Trigger earlier
  const [ref2, inView2] = useInView({ threshold: 0.2 }); // Trigger even earlier
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  React.useEffect(() => {
    if (inView1) {
      controls1.start({
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls1.start({ y: 200, scale: 0.8 });
    }
  }, [inView1, controls1]);

  React.useEffect(() => {
    if (inView2) {
      controls2.start({
        y: -50,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls2.start({ y: 200, scale: 0.8 });
    }
  }, [inView2, controls2]);

  return (
    <div className="relative h-[250vh] bg-slate-100 text-black p-16">
      <div className="text-left mb-10">
        <p className="text-6xl font-semibold">Smooth Scroll Parallax</p>
        <p className="text-xl">
          Experience smooth animations with Framer Motion.
        </p>
      </div>

      <div className="relative">
        {/* First Card */}
        <motion.div
          ref={ref1}
          animate={controls1}
          initial={{ y: 200, scale: 0.8 }}
          className="border-2 bg-[#f7dcb9] text-black p-10 rounded-xl absolute top-0 left-0 right-0 z-10 h-[50vh]"
        >
          <div className="flex items-center justify-evenly my-10">
            <p className="text-3xl font-bold">First Card</p>
            <div className="text-left space-y-3">
              <ul className="space-y-1">
                <li className="font-light">
                  &rarr; Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit.
                </li>
                <li className="font-light">
                  &rarr; Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit.
                </li>
              </ul>
              <button className="rounded-full bg-black text-white py-2 px-5">
                Try out Now
              </button>
            </div>
          </div>
          <p className="px-10 m-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </motion.div>

        {/* Second Card */}
        <motion.div
          ref={ref2}
          animate={controls2}
          initial={{ y: 200, scale: 0.8 }}
          className="border-2 bg-[#b382db] text-black p-10 rounded-xl absolute top-20 left-0 right-0 z-20 h-[60vh]"
        >
          <div className="flex items-center justify-evenly my-10">
            <p className="text-3xl font-bold">Second Card</p>
            <div className="text-left space-y-3">
              <ul className="space-y-1">
                <li className="font-light">
                  &rarr; Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit.
                </li>
                <li className="font-light">
                  &rarr; Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit.
                </li>
              </ul>
              <button className="rounded-full bg-black text-white py-2 px-5">
                Try out Now
              </button>
            </div>
          </div>
          <p className="px-10 m-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxCard;
