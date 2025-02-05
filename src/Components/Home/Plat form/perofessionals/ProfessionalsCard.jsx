import React, { useState, useEffect } from "react";

const images = [
  "https://i.pinimg.com/736x/10/5b/ec/105beccc09e559a4dc9189d6cf3ff8ab.jpg",
  "https://st2.depositphotos.com/2208684/11323/i/450/depositphotos_113234786-stock-photo-professional-woman-using-laptop.jpg",
  "https://media.istockphoto.com/id/1332113666/photo/young-businesswoman-using-digital-tablet.jpg?s=612x612&w=0&k=20&c=N_YLBRcbTGIykJRI7XjXXitH7TUTfr8orLzuV1mxWJc=",
];

function ProfessionalsCard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change the time interval here (in milliseconds) for auto-sliding

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="py-6 md:my-36">
      <div class="relative flex flex-col  items-center mx-auto md:flex-row lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div class="md:w-full md:h-full lg:w-1/2 lg:h-auto ">
          <div className="relative">
            <div className="overflow-hidden">
              <img
                className="w-full h-full md:py-10 py-4"
                src={images[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
              />
             
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-4"></div>
          </div>
        </div>
        <div class="max-w-lg md:bg-[#81b29a] bg-gray-200 py-6 mb-9 md:max-w-2xl md:z-10 md:shadow-2xl md:absolute md:bottom-48 md:mt-20 lg:w-3/5 lg:left-[450px] lg:mt-20 lg:ml-20 xl:mt-20 xl:ml-12">
          <div class="flex flex-col md:p-12 md:px-16">
            <h2 class="md:text-2xl text-xl font-bold  text-[#264653] lg:text-4xl pl-4">
              Professional Development Made Simple
            </h2>
            <p class="mt-4 pl-4">
              Elevate your career with our curated professional courses designed
              to sharpen your skills and propel you towards success. Embrace the
              flexibility of online learning and seize the opportunity to grow,
              no matter where you are located.
            </p>

            <div class="mt-8 pl-4">
              <a
                href="#"
                class="inline-block text-center text-lg font-medium text-gray-100 bg-[#264653] p-2  py-2 hover:bg-blue-800 hover:shadow-md w-48"
              >
                Discover Courses
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-lg md:bg-[#b5e48c] md:mb-32 bg-gray-200 py-6 md:max-w-2xl md:z-10 md:shadow-2xl md:absolute md:top-56 md:mt-20 lg:w-3/5 lg:left-[250px] lg:mt-20 lg:ml-20 xl:mt-20 xl:ml-12">
          <div class="flex flex-col md:p-12  md:px-16">
            <h2 class="md:text-2xl text-xl font-bold text-[#023047] lg:text-4xl pl-4">
              Enhance Your Professional Skills
            </h2>
            <p class="mt-4 pl-4">
              In today's dynamic job market, staying ahead requires continuous
              learning. Our professional courses provide targeted skills and
              knowledge to propel your career forward. Experience the
              convenience and effectiveness of online learning, tailored to suit
              your busy schedule and professional goals.
            </p>

            <div class="mt-8 pl-4">
              <a
                href="#"
                class="inline-block  text-center text-lg font-medium text-gray-100 bg-[#023047] p-2  py-2 hover:bg-blue-800 hover:shadow-md w-48"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalsCard;
