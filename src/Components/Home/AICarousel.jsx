import React, { useState, useEffect, useRef } from "react";

const AICarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef(null);

  const slides = [
    {
      title: "Wanna Build the Next Large Language Model?",
      subtitle: "Get started with Generative AI!",
      description:
        "Generative AI lets you build smart systems like ChatGPT. Master transformers, train on massive datasets, and fine-tune with RLHF to create your own intelligent model.",
      steps: [
        "Master PyTorch or TensorFlow",
        "Collect and clean massive datasets",
        "Train using high-performance GPUs",
        "Fine-tune with Reinforcement Learning (RLHF)",
      ],
      bgColor: "bg-[#0098f1]",
    },
    {
      title: "Build Agentic AI That Thinks & Acts",
      subtitle: "Step into the future with AI agents!",
      description:
        "Agentic AI goes beyond chat—it reasons, makes decisions, and takes action. Learn LangChain, build loops, and deploy AI agents in real-world apps.",
      steps: [
        "Add reasoning & planning logic",
        "Integrate real-time APIs",
        "Design intelligent action loops",
        "Deploy fully autonomous agents",
      ],
      bgColor: "bg-[#f19e22]",
    },
    {
      title: "Secure the Digital World",
      subtitle: "Become a Cyber Security Expert!",
      description:
        "Cyber Security is more crucial than ever. Learn to defend systems, detect threats, and build secure networks to keep organizations safe.",
      steps: [
        "Understand network protocols & firewalls",
        "Master ethical hacking & penetration testing",
        "Implement secure authentication systems",
        "Analyze real-world cyber threats",
      ],
      bgColor: "bg-[#1d3557]",
    },
    {
      title: "Master Data Pipelines with ETL Tools",
      subtitle: "Automate data workflows at scale!",
      description:
        "ETL tools help you move and transform data efficiently. Learn how to build scalable data pipelines and keep your analytics up-to-date.",
      steps: [
        "Extract data from diverse sources",
        "Transform data with mapping & cleansing",
        "Load into data warehouses",
        "Use tools like Apache NiFi, Talend, or Airbyte",
      ],
      bgColor: "bg-[#2a9d8f]",
    },
  ];
  

  useEffect(() => {
    if (!isPaused) {
      autoScrollRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(autoScrollRef.current);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`min-w-full h-screen flex items-center justify-center ${slide.bgColor}`}
          >
            <div className="text-center text-white px-6 md:px-12 max-w-4xl animate-slideIn">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
                {slide.title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-90">
                {slide.subtitle}
              </h2>
              <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                {slide.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {slide.steps.map((step, i) => (
                  <div
                    key={i}
                    className="bg-white bg-opacity-20 p-4 rounded-xl shadow-lg hover:scale-105 hover:bg-opacity-30 transition-transform duration-300"
                  >
                    <span className="font-semibold text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2   p-4 rounded-full  hover:scale-110 transition-transform duration-200"
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2   p-4 rounded-full  hover:scale-110 transition-transform duration-200"
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-125 shadow"
                : "bg-white bg-opacity-50 hover:bg-opacity-80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default AICarousel;
