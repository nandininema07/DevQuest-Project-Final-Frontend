import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Usp = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="mt-8 p-5">
      <p className="text-4xl font-bold text-left" data-aos="fade-up">
        Lorem ipsum dolor sit amet.
      </p>

      <div
        className=" relative rounded-full"
        data-aos="zoom-in"
      >
        <div>
          <div
            className="bg-[#f7dcb9] absolute rounded-full h-48 w-48 top-40 left-10 flex items-center justify-center"
            data-aos="fade-right"
          >
            <p className="font-bold text-center px-4">
              Lorem ipsum dolor sit amet adipisicing elit.
              Explicabo, natus!
            </p>
          </div>
          
          
          <div
            className="bg-[#f7dcb9] absolute rounded-full h-48 w-48 top-40 right-72 flex items-center justify-center"
            data-aos="fade-left"
          >
            <p className="font-bold text-center px-4">
              Lorem ipsum dolor sit amet consec
              Explicabo, natus!
            </p>
          </div>
          <div
            className="bg-[#f7dcb9] absolute rounded-full h-48 w-48 bottom-40 right-10 flex items-center justify-center"
            data-aos="fade-right"
          >
            <p className="font-bold text-center px-4">
              Lorem ipsum dolor sit ame.
              Explicabo, natus!
            </p>
          </div>
          <div
            className="bg-[#f7dcb9] absolute rounded-full h-48 w-48 bottom-40 left-72 flex items-center justify-center"
            data-aos="fade-left"
          >
            <p className="font-bold text-center px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, natus!
            </p>
          </div>
        </div>

        <div
          className="mx-auto my-40 h-60 w-60 rounded-full bg-[#b5c18e]"
          style={{
            backgroundImage: `url("https://cdni.iconscout.com/illustration/premium/thumb/ayurveda-medicine-8633556-6873743.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          data-aos="flip-up"
        ></div>
      </div>
    </div>
  );
};

export default Usp;
