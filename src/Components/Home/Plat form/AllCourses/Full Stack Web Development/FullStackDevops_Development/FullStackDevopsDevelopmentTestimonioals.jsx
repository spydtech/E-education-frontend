import React, { useState } from "react";
import { HiCursorArrowRays } from "react-icons/hi2";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import DeliveryMethods from "./../FullStackDevops_Development/Community/deliveryMethods";

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

const FullStackDevopsDevelopmentTestimonioals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const testimonials = [
    {
      imageSrc:
        "https://img.freepik.com/free-photo/international-day-education-celebration_23-2150930946.jpg?semt=ais_hybrid",
      text: "Education goes beyond improving work skills; it's about personal growth. E-learning empowers me to learn without boundaries.",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/medium-shot-smiley-young-traveller_23-2148570581.jpg?semt=ais_hybrid",
      text: "The courses offered deep insights and practical knowledge.I've grown both professionally and personally.",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/beautiful-girl-with-blue-t-shirt-books_144627-10275.jpg?t=st=1722908122~exp=1722911722~hmac=8aa7ae7dc155eeb4d2e2ff2b66e84e5134f42a13a09bdb484baaf9a405e9270a&w=740",
      text: "The structured learning paths helped me focus and progress quickly, The flexibility is unparalleled.",
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

export default FullStackDevopsDevelopmentTestimonioals;

// import React from "react";

// const FullStackDevopsDevelopmentTestimonioals = () => {
//   return (
//     <>
//       <div className="md:px-14 px-4 max-w-screen-2xl mx-auto">
//         <div className="py-8">
//           <h3 className="mt-3 font-extrabold text-violet-800 sm:mt-5 sm:text-xl lg:text-lg xl:text-4xl font">
//             Why people choose E-education for their career
//           </h3>
//           <p className="text-base text-gray-600 text-md font mt-4 pl-2">
//             As E-education continues to evolve and expand, its transformative
//             impact on the future of learning and career development remains
//             undeniable. By embracing the flexibility, accessibility, and
//             opportunities offered by online education, individuals can unlock
//             their full potential and pursue rewarding career paths with
//             confidence and resilience.
//           </p>
//         </div>
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
//           {/* featured card */}
//           <div className="w-full">
//             <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 items-start">
//               <div className="testimonial-card">
//                 <img
//                   src="https://media.istockphoto.com/id/1185326263/photo/happy-student-in-london.jpg?s=612x612&w=0&k=20&c=SQHdU5QJpdgZ65uYc-LkYIC1F-vgfEk5ID3kN3o8L-0="
//                   alt=""
//                   className="rounded-full h-48 w-48 mx-auto"
//                 />
//                 <div className="text-center mt-5">
//                   <div>Stone .G</div>
//                   <h5 className="text-gray-800 px-5 text-center mt-5">
//                     "The structured learning paths helped me focus and progress
//                     quickly. The flexibility is unparalleled."
//                   </h5>
//                 </div>
//               </div>
//               <div className="testimonial-card">
//                 <img
//                   src="https://media.istockphoto.com/id/1144287280/photo/focused-african-student-looking-at-laptop-holding-book-doing-research.jpg?s=612x612&w=0&k=20&c=Ee2sGNsiZXbkCchKwZPX8Z9JDzcBscr4fGAjx5kDnUc="
//                   alt=""
//                   className="rounded-full h-52 w-52 mx-auto"
//                 />
//                 <div className="text-center mt-5">
//                   <div>Gwen K.</div>
//                   <h5 className="text-gray-800 px-5 text-center mt-5">
//                     "The courses offered deep insights and practical knowledge.I've grown both professionally and personally."
//                   </h5>
//                 </div>
//               </div>
//               <div className="testimonial-card">
//                 <img
//                   src="https://img.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg?t=st=1715830841~exp=1715834441~hmac=2346133ec64dcee998aeefeb1d577beec37175baa1f0c5b0c16db1c232342ccf&w=996"
//                   alt=""
//                   className="rounded-full h-48 w-48 mx-auto"
//                 />
//                 <div className="text-center mt-5">
//                   <div>Julie S.</div>
//                   <h5 className="text-gray-800 px-5">
//                     "Education goes beyond improving work skills; it's about personal growth. E-learning empowers me to learn without boundaries."
//                   </h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FullStackDevopsDevelopmentTestimonioals;
