import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import del1 from "../../../../../../../assetss/fullstackwebdev/delivery1.avif";
import del2 from "../../../../../../../assetss/fullstackwebdev/delivery2.jpg";
import del3 from "../../../../../../../assetss/fullstackwebdev/delivery3.avif";
import del4 from "../../../../../../../assetss/fullstackwebdev/delivery4.jpg";

const Delivery_Methods = () => {
  const [visibleImage, setVisibleImage] = useState(1);

  const handleImageClick = (image) => {
    setVisibleImage(visibleImage === image ? null : image);
  };

  const handlePrev = () => {
    setVisibleImage((prevImage) => (prevImage === 1 ? 4 : prevImage - 1));
  };

  const handleNext = () => {
    setVisibleImage((prevImage) => (prevImage === 4 ? 1 : prevImage + 1));
  };

  const ImageComponent = ({ src, isVisible, title, onClick }) => {
    const sizeClass = isVisible ? "w-full md:w-1/3 h-full" : "w-1/2 md:w-1/6 h-64";
    const opacityClass = isVisible ? "opacity-100" : "opacity-20";
    return (
      <div
        className={`relative transition-transform duration-500 ease-in-out transform ${sizeClass} ${opacityClass} flex-shrink-0 cursor-pointer`}
        onClick={onClick}
      >
        <img src={src} alt={title} className="w-full h-96 md:h-64 object-cover transition-all duration-500 ease-in-out" />
        {isVisible && (
          <div
            className="absolute bottom-0 left-0 bg-[#F6AC14] h-28 text-white p-4 w-full md:w-40 transition-all duration-500 ease-in-out"
            style={{ borderTopRightRadius: "32px" }}
          >
            <span className="font-medium text-xl">{title}</span>
            <a
              href="#"
              className="text-[#F6AC14] bg-white flex pt-2 h-12 items-center mt-2 p-1 font-semibold"
              style={{ borderTopRightRadius: "18px" }}
            >
              Explore Now <FiArrowUpRight />
            </a>
          </div>
        )}
      </div>
    );
  };

  // Array of images and titles
  const images = [del1, del2, del3, del4];
  const titles = ["Training", "Guided", "Autodidac", "Clarificat"];

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="sm:text-lg text-xl md:text-4xl lg:text-5xl font-semibold text-[#0098F1] text-center mb-6 whitespace-nowrap">
        Our{" "}
        <span className="bg-gradient-to-r bg-clip-text from-[#0098f1] to-[#f6ac14] text-transparent">
          Available Delivery Methods
        </span>
      </h2>
      <div className="hidden sm:flex flex-wrap justify-center space-x-0 sm:space-x-0">
        {images.map((src, index) => (
          <ImageComponent
            key={index}
            src={src}
            isVisible={visibleImage === index + 1}
            title={titles[index]}
            onClick={() => handleImageClick(index + 1)}
          />
        ))}
      </div>
      <div className="flex sm:hidden justify-center items-center space-x-4">
        <button className="p-2 rounded-full text-white" onClick={handlePrev}>
          <IoIosArrowBack className="text-2xl text-[#F6AC14]" />
        </button>
        <ImageComponent
          src={images[visibleImage - 1]}
          isVisible={true}
          title={titles[visibleImage - 1]}
          onClick={() => handleImageClick(visibleImage)}
        />
        <button className="p-2 rounded-full text-white" onClick={handleNext}>
          <IoIosArrowForward className="text-2xl text-[#F6AC14]" />
        </button>
      </div>
    </div>
  );
};

export default Delivery_Methods;
