import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

const Card = ({ deviceType }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
        <p className="font-bold text-2xl text-left ml-16">Our satisfied customers</p>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="rounded-xl bg-gradient-to-l from-teal-400 to-slate-100 p-5 m-10">
          <div>
            <p className="mb-5">
              "I was amazed by how accurately the system diagnosed my issues just by analyzing my nails. The Ayurvedic remedies suggested were easy to follow and highly effective. Truly a revolutionary tool for personalized care!"
            </p>
            <div className="flex gap-3">
              <div>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="SVGRepo_bgCarrier"
                    stroke-width="0"
                    transform="translate(0,0), scale(1)"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="24.00"
                      height="24.00"
                      rx="12"
                      fill="#FFD700" // Adjusting color to gold for a star icon
                    ></rect>
                  </g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g clipPath="url(#clip0_15_82)">
                      <rect width="24" height="24" fill="white"></rect>
                      <g filter="url(#filter0_d_15_82)">
                        <path
                          d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                          fill="#FFD700"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_15_82"
                        x="2.55444"
                        y="3.5"
                        width="18.8911"
                        height="19"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
                        <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        ></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_82"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_82" result="shape"></feBlend>
                      </filter>
                      <clipPath id="clip0_15_82">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </div>
              <div className="">
                <p className="font-bold text-xl">Dr. Meera Sharma</p>
                <p className="font-light">Pediatrician</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-gradient-to-l from-teal-400 to-slate-100 p-5 m-10">
          <div>
            <p className="mb-5">
            "The video analysis process was smooth and hassle-free. The remedies provided for my eye strain worked wonders. I highly recommend this service to anyone looking for natural solutions."
            </p>
            <div className="flex gap-3">
              <div>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="SVGRepo_bgCarrier"
                    stroke-width="0"
                    transform="translate(0,0), scale(1)"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="24.00"
                      height="24.00"
                      rx="12"
                      fill="#FFD700" // Adjusting color to gold for a star icon
                    ></rect>
                  </g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g clipPath="url(#clip0_15_82)">
                      <rect width="24" height="24" fill="white"></rect>
                      <g filter="url(#filter0_d_15_82)">
                        <path
                          d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                          fill="#FFD700"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_15_82"
                        x="2.55444"
                        y="3.5"
                        width="18.8911"
                        height="19"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
                        <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        ></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_82"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_82" result="shape"></feBlend>
                      </filter>
                      <clipPath id="clip0_15_82">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </div>
              <div className="">
                <p className="font-bold text-xl">Rohan Gupta</p>
                <p className="font-light">Software Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-gradient-to-l from-teal-400 to-slate-100 p-5 m-10">
          <div>
            <p className="mb-5">
            "I love how the system integrates technology with Ayurveda. The nail analysis helped me address a vitamin deficiency I wasn’t even aware of. Excellent initiative!"
            </p>
            <div className="flex gap-3">
              <div>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="SVGRepo_bgCarrier"
                    stroke-width="0"
                    transform="translate(0,0), scale(1)"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="24.00"
                      height="24.00"
                      rx="12"
                      fill="#FFD700" // Adjusting color to gold for a star icon
                    ></rect>
                  </g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g clipPath="url(#clip0_15_82)">
                      <rect width="24" height="24" fill="white"></rect>
                      <g filter="url(#filter0_d_15_82)">
                        <path
                          d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                          fill="#FFD700"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_15_82"
                        x="2.55444"
                        y="3.5"
                        width="18.8911"
                        height="19"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
                        <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        ></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_82"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_82" result="shape"></feBlend>
                      </filter>
                      <clipPath id="clip0_15_82">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </div>
              <div className="">
                <p className="font-bold text-xl">Akash Verma</p>
                <p className="font-light">Doctor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-gradient-to-l from-teal-400 to-slate-100 p-5 m-10">
          <div>
            <p className="mb-5">
              "I was amazed by how accurately the system diagnosed my issues just by analyzing my nails. The Ayurvedic remedies suggested were easy to follow and highly effective. Truly a revolutionary tool for personalized care!"
            </p>
            <div className="flex gap-3">
              <div>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="SVGRepo_bgCarrier"
                    stroke-width="0"
                    transform="translate(0,0), scale(1)"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="24.00"
                      height="24.00"
                      rx="12"
                      fill="#FFD700" // Adjusting color to gold for a star icon
                    ></rect>
                  </g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g clipPath="url(#clip0_15_82)">
                      <rect width="24" height="24" fill="white"></rect>
                      <g filter="url(#filter0_d_15_82)">
                        <path
                          d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                          fill="#FFD700"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_15_82"
                        x="2.55444"
                        y="3.5"
                        width="18.8911"
                        height="19"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
                        <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        ></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_82"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_82" result="shape"></feBlend>
                      </filter>
                      <clipPath id="clip0_15_82">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </div>
              <div className="">
                <p className="font-bold text-xl">Dr. Anita Deshmukh</p>
                <p className="font-light">Nurse</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Card;
