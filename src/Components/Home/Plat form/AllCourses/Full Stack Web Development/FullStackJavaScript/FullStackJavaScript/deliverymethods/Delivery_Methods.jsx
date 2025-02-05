import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
    const sizeClass = isVisible
    ? " w-full md:w-1/3 h-full"
    : "w-1/2 md:w-1/6 h-64";
  const opacityClass = isVisible ? "opacity-100" : "opacity-20";
    return (
      <div
        className={`relative mb-5 md:mb-8 transition-transform duration-500 ease-in-out transform ${sizeClass} ${opacityClass} flex-shrink-0 cursor-pointer`}
        onClick={onClick}
      >
        <img
          src={src}
          alt={title}
          className="w-full h-96 object-cover transition-all duration-500 ease-in-out"
        />
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
              onClick={(e) => e.stopPropagation()}
            >
              Explore Now <FiArrowUpRight />
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="sm:text-lg text-xl md:text-4xl lg:text-5xl font-semibold text-[#0098F1] text-center mb-6 whitespace-nowrap">
        Our <span className="bg-gradient-to-r bg-clip-text from-[#0098f1] to-[#f6ac14] text-transparent">Available Delivery Methods</span>
      </h2>
      <div className="hidden sm:flex flex-wrap justify-center space-x-0 sm:space-x-0">
        <ImageComponent
          src="https://img.freepik.com/free-photo/medium-shot-people-working-with-devices_23-2149097958.jpg?t=st=1723795843~exp=1723799443~hmac=f6ccaef0f9629175f19b804e5b5e8a33d065cff1bc9356eddb4ed9441c548440&w=996"
          isVisible={visibleImage === 1}
          title="Training"
          onClick={() => handleImageClick(1)}
        />
        <ImageComponent
          src="https://img.freepik.com/free-photo/colleagues-working-together-financial-report-using-modern-gadget_273609-5547.jpg?t=st=1723795910~exp=1723799510~hmac=dfaa2e9c1bebf15cab45d70e93f3dc3d6a276135fb748e9687d1e1a4acfcd27c&w=996"
          isVisible={visibleImage === 2}
          title="Guided"
          onClick={() => handleImageClick(2)}
        />
        <ImageComponent
          src="https://img.freepik.com/free-photo/medium-shot-happy-girl-with-cement-background_23-2148294082.jpg?t=st=1723475352~exp=1723478952~hmac=308e0144c1ebe8b68e57b6c24e897b8e767ef7fb87c99963c3fa586474145e85&w=740"
          isVisible={visibleImage === 3}
          title="Autodidac"
          onClick={() => handleImageClick(3)}
        />
        <ImageComponent
          src="https://img.freepik.com/free-photo/businessman-secretary-reading-document_23-2147626560.jpg?t=st=1723795970~exp=1723799570~hmac=34ce3e82c34d16e9cdecfd05f6f9f35eba96285da95a400c95f407590a3ccc66&w=996"
          isVisible={visibleImage === 4}
          title="Clarificat"
          onClick={() => handleImageClick(4)}
        />
      </div>
      <div className="flex sm:hidden justify-center items-center space-x-4">
        <button className="p-2 rounded-full text-white" onClick={handlePrev}>
          <IoIosArrowBack className="text-2xl text-[#F6AC14]" />
        </button>
        <ImageComponent
          src={
            [
              "https://img.freepik.com/free-photo/medium-shot-people-working-with-devices_23-2149097958.jpg?t=st=1723795843~exp=1723799443~hmac=f6ccaef0f9629175f19b804e5b5e8a33d065cff1bc9356eddb4ed9441c548440&w=996",
              "https://img.freepik.com/free-photo/colleagues-working-together-financial-report-using-modern-gadget_273609-5547.jpg?t=st=1723795910~exp=1723799510~hmac=dfaa2e9c1bebf15cab45d70e93f3dc3d6a276135fb748e9687d1e1a4acfcd27c&w=996",
              "https://img.freepik.com/free-photo/medium-shot-happy-girl-with-cement-background_23-2148294082.jpg?t=st=1723475352~exp=1723478952~hmac=308e0144c1ebe8b68e57b6c24e897b8e767ef7fb87c99963c3fa586474145e85&w=740",
              "https://img.freepik.com/free-photo/businessman-secretary-reading-document_23-2147626560.jpg?t=st=1723795970~exp=1723799570~hmac=34ce3e82c34d16e9cdecfd05f6f9f35eba96285da95a400c95f407590a3ccc66&w=996"
            ][visibleImage - 1]
          }
          isVisible={true}
          title={["Training", "Guided", "Autodidac", "Clarificat"][visibleImage - 1]}
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
