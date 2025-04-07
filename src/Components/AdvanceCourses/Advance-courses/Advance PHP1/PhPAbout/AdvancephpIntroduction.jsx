import React, { useState } from "react";

function AdvancephpIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8 font-poppins">
        <div className="h-[400px] flex justify-center">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-[#f9ac13] font">
              {heading}
            </h2>
            <ul className="list-disc list-inside text-xl font">
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
      heading: "Advanced PHP Programming",
      items: [
        "Explore advanced PHP features like closures, generators, and namespaces.",
        "Learn how to use traits to reuse code in multiple classes.",
      ],
    },
    {
      heading: "Object-Oriented Programming in PHP",
      items: [
        "Understand the principles of OOP: inheritance, polymorphism, and encapsulation.",
        "Implement design patterns like Singleton, Factory, and Strategy.",
      ],
    },
    {
      heading: "PHP and Databases",
      items: [
        "Advanced database interactions using PDO.",
        "Best practices for securing database interactions against SQL injection.",
      ],
    },
    {
      heading: "PHP Frameworks",
      items: [
        "Introduction to popular PHP frameworks like Laravel and Symfony.",
        "Building scalable and maintainable applications with MVC architecture.",
      ],
    },
    {
      heading: "Testing and Debugging PHP",
      items: [
        "Implement unit testing using PHPUnit.",
        "Debugging techniques and tools for PHP development.",
      ],
    },
  ];

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 w-fit md:lg:grid-cols-2 h-full bg-[#d90429] mb-12 font-poppins"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div
            id="headings"
            className="grid grid-cols-1 text-start px-10 font"
          >
            <div>
              <p className="text-[#f9ac13] text-xl font-medium">Introduction</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font">
                So what is
                <p className="text-[#f9ac13] inline pl-2">
                  Advanced PHP Development?
                </p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500">
                Discover the deeper aspects of PHP development
              </p>
            </div>
          </div>
        </div>
        <div id="div2" className="px-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="bg-white p-5 mb-2 overflow-hidden shadow-xl sm:rounded-lg">
              <div className="relative w-full overflow-hidden">
                <div className="flex">
                  <Slide
                    heading={slidesData[currentSlide].heading}
                    items={slidesData[currentSlide].items}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={goToPreviousSlide}
                  className="hover:text-yellow-600 text-black font-bold py-2 px-4 rounded"
                >
                  Previous
                </button>
                <div>{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
                <button
                  onClick={goToNextSlide}
                  className="hover:text-yellow-600 text-black font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvancephpIntroduction;
