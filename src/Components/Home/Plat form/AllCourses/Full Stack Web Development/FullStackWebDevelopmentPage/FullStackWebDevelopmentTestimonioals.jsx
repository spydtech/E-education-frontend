import React, { useState } from "react";
import { HiCursorArrowRays } from "react-icons/hi2";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import DeliveryMethods from "./deliverymethods/Delivery_Methods";

const Card = ({
  imageSrc,
  text,
  isFlipped,
  isArrowClicked,
  toggleCard,
  isMobile,
}) => {
  return (
    <div className="relative w-48 h-48 lg:w-56 lg:h-56  rounded-full border-8 border-[#0098F1] flex items-center justify-center">
      <img
        src={imageSrc}
        alt="Front Imagee"
        className={`rounded-full transition-opacity duration-300 ${
          isFlipped ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center bg-white rounded-full transition-opacity duration-300 ${
          isFlipped ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-center text-[#0098F1] text-xs px-3 ">{text}</p>
      </div>
      <button
        className={`absolute bottom-6 right-4 rounded-full p-2 transition-colors duration-300 ${
          isArrowClicked
            ? "bg-[#F6AC14] text-white"
            : "bg-white shadow-lg text-[#F6AC14]"
        }`}
        onClick={toggleCard}
      >
        <HiCursorArrowRays className="text-3xl" />
      </button>
    </div>
  );
};

const FullStackWebDevelopmentTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const testimonials = [
    {
      imageSrc:
        "https://img.freepik.com/free-photo/international-day-education-celebration_23-2150930946.jpg?semt=ais_hybrid",
      text: "Having the flexibility to learn at my own speed and on my own time has been incredible. I can study when it's most convenient for me.",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/medium-shot-smiley-young-traveller_23-2148570581.jpg?semt=ais_hybrid",
      text: "The knowledge and skills I gained from my courses allowed me to tackle an innovative project at my job with confidence.",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/beautiful-girl-with-blue-t-shirt-books_144627-10275.jpg?t=st=1722908122~exp=1722911722~hmac=8aa7ae7dc155eeb4d2e2ff2b66e84e5134f42a13a09bdb484baaf9a405e9270a&w=740",
      text: "Education goes beyond improving work skills; it's about personal growth. E-learning empowers me to learn without boundaries.",
    },
  ];

  const toggleCard = (index) => {
    if (index === flippedCardIndex) {
      setIsFlipped(!isFlipped);
      setIsArrowClicked(!isArrowClicked);
    } else {
      setFlippedCardIndex(index);
      setIsFlipped(true);
      setIsArrowClicked(true);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsFlipped(false);
    setIsArrowClicked(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsFlipped(false);
    setIsArrowClicked(false);
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <h2 className="text-xl md:text-4xl lg:text-5xl font-semibold text-[#0098F1] text-center">
        Why&nbsp;
        <span className=" bg-gradient-to-r bg-clip-text from-[#0098f1] to-[#f6ac14] text-transparent">
          People Choose
        </span>
        <span className=" text-[#F6AC14]"> Us</span>
      </h2>
      <div className="hidden md:flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            imageSrc={testimonial.imageSrc}
            text={testimonial.text}
            isFlipped={isFlipped && flippedCardIndex === index}
            isArrowClicked={isArrowClicked && flippedCardIndex === index}
            toggleCard={() => toggleCard(index)}
            isMobile={false}
          />
        ))}
      </div>
      <div className="flex md:hidden items-center space-x-4">
        <button className="" onClick={handlePrev}>
          <IoIosArrowBack className="text-2xl text-[#F6AC14]" />
        </button>
        <Card
          imageSrc={testimonials[currentIndex].imageSrc}
          text={testimonials[currentIndex].text}
          isFlipped={isFlipped}
          isArrowClicked={isArrowClicked}
          toggleCard={toggleCard}
          isMobile={true}
        />
        <button className="" onClick={handleNext}>
          <IoIosArrowForward className="text-2xl text-[#F6AC14]" />
        </button>
      </div>
      <DeliveryMethods />
    </div>
  );
};
export default FullStackWebDevelopmentTestimonials;

// // src/App.js
// import React, { useState } from 'react';

// function FullStackWebDevelopmentTestimonials() {
//   const [selectedCircle, setSelectedCircle] = useState(null);
//   const [visibleImage, setVisibleImage] = useState(null);

//   const handleCircleClick = (circle) => {
//     setSelectedCircle(circle);
//   };

//   const handleImageClick = (image) => {
//     setVisibleImage(visibleImage === image ? null : image);
//   };

//   return (
//     <div className="p-4">
//       <div className="flex space-x-4 mb-8">
//         <div
//           className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
//           onClick={() => handleCircleClick(1)}
//         >
//           Circle 1
//         </div>
//         <div
//           className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
//           onClick={() => handleCircleClick(2)}
//         >
//           Circle 2
//         </div>
//         <div
//           className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
//           onClick={() => handleCircleClick(3)}
//         >
//           Circle 3
//         </div>
//       </div>
//       <div className="flex ">
//         <div
//           className={`w-32 h-32 m-4 transition-opacity duration-300 ${visibleImage === 1 ? 'opacity-100' : 'opacity-50'}`}
//           onClick={() => handleImageClick(1)}
//         >
//           <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Content 1" className="w-full h-full object-cover" />
//         </div>
//         <div
//           className={`w-32 h-32 m-4 transition-opacity duration-300 ${visibleImage === 2 ? 'opacity-100' : 'opacity-50'}`}
//           onClick={() => handleImageClick(2)}
//         >
//           <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Content 2" className="w-full h-full object-cover" />
//         </div>
//         <div
//           className={`w-32 h-32 m-4 transition-opacity duration-300 ${visibleImage === 3 ? 'opacity-100' : 'opacity-50'}`}
//           onClick={() => handleImageClick(3)}
//         >
//           <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Content 3" className="w-full h-full object-cover" />
//         </div>
//         <div
//           className={`w-32 h-32 m-4 transition-opacity duration-300 ${visibleImage === 4 ? 'opacity-100' : 'opacity-50'}`}
//           onClick={() => handleImageClick(4)}
//         >
//           <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Content 4" className="w-full h-full object-cover" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FullStackWebDevelopmentTestimonials ;

// import React, { useState } from 'react';

// const FullStackWebDevelopmentTestimonials = () => {
//   const [selectedCircle, setSelectedCircle] = useState(null);
//   const [visibleImage, setVisibleImage] = useState(null);

//   const handleCircleClick = (circle) => {
//     setSelectedCircle(circle);
//   };

//   const handleImageClick = (image) => {
//     setVisibleImage(visibleImage === image ? null : image);
//   };

//   const CircleComponent = ({ onClick, children }) => (
//     <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer" onClick={onClick}>
//       {children}
//     </div>
//   );

//   const ImageComponent = ({ src, isVisible, onClick }) => {
//     const opacityClass = isVisible ? 'opacity-100' : 'opacity-50';
//     return (
//       <div className={`w-32 h-32 m-4 transition-opacity duration-300 ${opacityClass}`} onClick={onClick}>
//         <img src={src} alt="Content" className="w-full h-full object-cover" />
//       </div>
//     );
//   };

//   return (
//     <div className="p-4">
//       <div className="flex space-x-4 mb-8">
//         <CircleComponent onClick={() => handleCircleClick(1)}>Circle 1</CircleComponent>
//         <CircleComponent onClick={() => handleCircleClick(2)}>Circle 2</CircleComponent>
//         <CircleComponent onClick={() => handleCircleClick(3)}>Circle 3</CircleComponent>
//       </div>
//       <div className="flex space-x-4">
//         <ImageComponent src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" isVisible={visibleImage === 1} onClick={() => handleImageClick(1)} />
//         <ImageComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9niDmCKB_LJC45mi0XIqmL_Min0CavQTMNDek_FhgOQiW7no0XmecYIO-OIRju0wuvA&usqp=CAU" isVisible={visibleImage === 2} onClick={() => handleImageClick(2)} />
//         <ImageComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzrukBxdcNZro7rANZ6r4JhvnRT7rINwRsIOkcnINB8cpmm_RdDEj54EEbt4EaKn5AUA&usqp=CAU" isVisible={visibleImage === 3} onClick={() => handleImageClick(3)} />
//       </div>
//     </div>
//   );
// }

// export default FullStackWebDevelopmentTestimonials;

// import React, { useState } from 'react';
// import { HiCursorArrowRays } from "react-icons/hi2";
// import DeliveryMethods from './deliverymethods/Delivery_Methods';

// const Card = ({ imageSrc, text }) => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [isArrowClicked, setIsArrowClicked] = useState(false);

//   const toggleCard = () => {
//     setIsFlipped(!isFlipped);
//     setIsArrowClicked(!isArrowClicked);
//   };

//   return (
//     <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-8 border-[#0098F1] flex items-center justify-center">
//       <img
//         src={imageSrc}
//         alt="Front Image"
//         className={`rounded-full transition-opacity duration-300 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
//       />
//       <div
//         className={`absolute inset-0 flex items-center justify-center bg-white rounded-full transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
//       >
//         <p className="text-center text-[#0098F1] p-4">
//           {text}
//         </p>
//       </div>
//       <button
//         className={`absolute bottom-6 right-4 rounded-full p-2 transition-colors duration-300 ${isArrowClicked ?  'bg-[#F6AC14] text-white':'bg-white shadow-lg text-[#F6AC14]'}`}
//         onClick={toggleCard}
//       >
//         <HiCursorArrowRays className='text-3xl' />
//       </button>
//     </div>
//   );
// };

// const FullStackWebDevelopmentTestimonials = () => {
//   return (
//     <div className="flex flex-col items-center pt-4 space-y-8">
//       <h2 className="text-4xl font-semibold text-[#0098F1] text-center mb-4">
//         Why<span className=" bg-gradient-to-r bg-clip-text from-[#0098f1] to-[#f6ac14] text-transparent">People Choose </span>{" "}<span className=" text-[#F6AC14]"> Us</span>
//       </h2>
//       <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
//         <Card
//           imageSrc="https://img.freepik.com/free-photo/beautiful-girl-with-blue-t-shirt-books_144627-10275.jpg?t=st=1722908122~exp=1722911722~hmac=8aa7ae7dc155eeb4d2e2ff2b66e84e5134f42a13a09bdb484baaf9a405e9270a&w=740"
//           text="Having the flexibility to learn at my own speed and on my own time has been incredible. I can study when it's most convenient for me."
//         />
//         <Card
//           imageSrc="https://img.freepik.com/free-photo/beautiful-girl-with-blue-t-shirt-books_144627-10275.jpg?t=st=1722908122~exp=1722911722~hmac=8aa7ae7dc155eeb4d2e2ff2b66e84e5134f42a13a09bdb484baaf9a405e9270a&w=740"
//           text="The knowledge and skills I gained from my courses allowed me to tackle an innovative project at my job with confidence."
//         />
//         <Card
//           imageSrc="https://img.freepik.com/free-photo/beautiful-girl-with-blue-t-shirt-books_144627-10275.jpg?t=st=1722908122~exp=1722911722~hmac=8aa7ae7dc155eeb4d2e2ff2b66e84e5134f42a13a09bdb484baaf9a405e9270a&w=740"
//           text="Education goes beyond improving work skills; it's about personal growth. E-learning empowers me to learn without boundaries."
//         />
//       </div>
//       <DeliveryMethods />
//     </div>
//   );
// };

// export default FullStackWebDevelopmentTestimonials;
