import React, { useState } from "react";
import { HiCursorArrowRays } from "react-icons/hi2";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import DeliveryMethods from "./../deliverymethods/Delivery_Methods";

const Card = ({
  imageSrc,
  text,
  isFlipped,
  isArrowClicked,
  toggleCard,
  isMobile,
}) => {
  return (
    <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full border-8 border-[#0098F1] flex items-center justify-center">
      <img
        src={imageSrc}
        alt="Front Image"
        className={`rounded-full transition-opacity duration-300 ${
          isFlipped ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center bg-white rounded-full transition-opacity duration-300 ${
          isFlipped ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-center text-[#0098F1] text-xs px-3">{text}</p>
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

const MeanStackDevelopmentTestimonioals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const testimonials = [
    {
      imageSrc:
        "https://img.freepik.com/free-photo/international-day-education-celebration_23-2150930946.jpg?semt=ais_hybrid",
      text: "Learning React and Node.js gave me the confidence to build dynamic web apps from scratch. I landed my first full-stack developer job thanks to the MERN stack!",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/medium-shot-smiley-young-traveller_23-2148570581.jpg?semt=ais_hybrid",
      text: "Understanding MongoDB and Express helped me create scalable APIs and structure real-world data. Now, I contribute to backend systems like a pro!",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/beautiful-girl-with-blue-t-shirt-books_144627-10275.jpg?t=st=1722908122~exp=1722911722~hmac=8aa7ae7dc155eeb4d2e2ff2b66e84e5134f42a13a09bdb484baaf9a405e9270a&w=740",
      text: "The MERN stack training transformed how I approach web development. From interactive UIs to REST APIs—now I can build full apps all by myself!",
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

      {/* Desktop view */}
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

      {/* Mobile view */}
      <div className="flex md:hidden items-center space-x-4">
        <button onClick={handlePrev}>
          <IoIosArrowBack className="text-2xl text-[#F6AC14]" />
        </button>
        <Card
          imageSrc={testimonials[currentIndex].imageSrc}
          text={testimonials[currentIndex].text}
          isFlipped={isFlipped}
          isArrowClicked={isArrowClicked}
          toggleCard={() => toggleCard(currentIndex)}
          isMobile={true}
        />
        <button onClick={handleNext}>
          <IoIosArrowForward className="text-2xl text-[#F6AC14]" />
        </button>
      </div>

      <DeliveryMethods />
    </div>
  );
};

export default MeanStackDevelopmentTestimonioals;
