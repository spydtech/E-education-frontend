import React, { useState } from "react";

function  WordpressIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8 font-poppins">
        <div className="h-auto flex justify-center">
          <div>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-medium mb-4 text-white font-sans">
              {heading}
            </h2>
            <ul className="list-disc list-outside pl-5 text-md lg:text-xl text-white">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

   const slidesData = [
    {
      heading: "Introduction to WordPress",
      items: [
        "WordPress is a powerful content management system (CMS) that enables users to create and manage websites with ease.",
        "Key Concepts: Learn about the WordPress interface, themes, and plugins to customize your site.",
      ],
    },
    {
      heading: "Types of WordPress Websites",
      items: [
        "Blog: Share your thoughts, ideas, and updates with a blog website.",
        "E-commerce: Build online stores using WordPress and WooCommerce.",
      ],
    },
    {
      heading: "Essential WordPress Plugins",
      items: [
        "Yoast SEO: Optimize your website for search engines.",
        "WooCommerce: Turn your site into a powerful e-commerce platform.",
      ],
    },
    {
      heading: "WordPress Security Measures",
      items: [
        "Use Security Plugins: Protect your site with plugins like Wordfence and Sucuri.",
        "Regular Backups: Ensure you have regular backups of your site to prevent data loss.",
      ],
    },
    {
      heading: "Best Practices for WordPress",
      items: [
        "Keep WordPress Updated: Regularly update WordPress, themes, and plugins to the latest versions.",
        "Optimize for Performance: Use caching plugins and optimize images for faster load times.",
      ],
    },
  ];

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < slidesData.length - 1 ? prevSlide + 1 : prevSlide
    );
  };

  return (
    <div className="flex flex-col space-y-3 md:flex-row md:justify-around md:items-center lg:h-[450px] px-3 md:mb-9 mb-5 font-poppins">
      {/* Text Section */}
      <div className="">
        <div>
          <p className="text-[#0098F1] underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">
            Introduction
          </p>
        </div>
        <div className="mt-2">
          <p className="md:text-lg lg:text-3xl">
            So what is
            <span className="text-[#f6ac14] inline pl-2">WordPress?</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
          Brief about WordPress
          </p>
        </div>
      </div>

      {/* Slider Section */}
      {/* <div className=" lg:h-[468px]"> */}
      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:min-h-[420px] md:p-5 lg:flex flex-col justify-between ">
        <div className="flex text-white">
          <Slide
            heading={slidesData[currentSlide].heading}
            items={slidesData[currentSlide].items}
          />
        </div>

        <div className="flex justify-between max-md:p-4">
          <button
            onClick={goToPreviousSlide}
            className="text-white hover:text-black font-bold  rounded"
          >
            Previous
          </button>
          <div className="text-white text-sm">{`Page ${currentSlide + 1}/${
            slidesData.length
          }`}</div>
          <button
            onClick={goToNextSlide}
            className="text-white hover:text-black font-bold  rounded"
          >
            Next
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default  WordpressIntroduction;