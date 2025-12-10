import React, { useState, useEffect, useRef } from "react";

const AICarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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
      textColor: "text-white",
      accentColor: "text-yellow-300",
    },
    {
      title: "Acts",
      subtitle: "Step into the future with AI agents!",
      description:
        "Agentic AI goes beyond chat—it reasons, makes decisions, and takes action. Learn LangChain, build loops, and deploy AI agents in real-world apps.",
      steps: [
        "Add reasoning & planning logic",
        "Integrate real-time APIs",
        "Design intelligent action loops",
        "Deploy fully autonomous agents",
      ],
      bgColor: "bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900",
      textColor: "text-white",
      accentColor: "text-purple-300",
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
      bgColor: "bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900",
      textColor: "text-white",
      accentColor: "text-blue-300",
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
      bgColor: "bg-gradient-to-br from-teal-800 via-teal-700 to-green-800",
      textColor: "text-white",
      accentColor: "text-teal-300",
    },
  ];

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const difference = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        // Swipe left - next slide
        nextSlide();
      } else {
        // Swipe right - previous slide
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`min-w-full h-full flex flex-col lg:flex-row items-center justify-between ${slide.bgColor} ${slide.textColor}`}
          >
            {/* Image/Illustration Side - Left on desktop, top on mobile */}
            <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <div className="relative w-full max-w-md lg:max-w-2xl h-full flex items-center justify-center">
                {/* Placeholder for AI agent illustration */}
                <div className="relative w-full aspect-square max-w-sm lg:max-w-xl">
                  {/* Abstract AI Agent Illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-white/20 to-transparent border-2 border-white/30 backdrop-blur-sm"></div>
                  </div>
                  
                  {/* Floating elements representing AI components */}
                  <div className="absolute top-1/4 left-1/4 w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 backdrop-blur-sm border border-white/30 animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/4 w-12 h-12 lg:w-20 lg:h-20 rounded-lg bg-gradient-to-br from-blue-500/40 to-cyan-500/40 backdrop-blur-sm border border-white/30 animate-bounce"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-14 h-14 lg:w-22 lg:h-22 rounded-full bg-gradient-to-br from-green-500/40 to-teal-500/40 backdrop-blur-sm border border-white/30 animate-ping"></div>
                  
                  {/* Central AI Brain */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-24 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-white/30 to-transparent backdrop-blur-lg border-2 border-white/50 flex items-center justify-center">
                      <svg className="w-12 h-12 lg:w-20 lg:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side - Right on desktop, bottom on mobile */}
            <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center p-4 sm:p-6 lg:p-12">
              <div className="w-full max-w-lg lg:max-w-2xl">
                {/* Title with accent */}
                <div className="mb-4 sm:mb-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                    {slide.title}
                    <span className={`block text-2xl sm:text-3xl md:text-4xl font-bold mt-2 ${slide.accentColor}`}>
                      {slide.subtitle}
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed opacity-90">
                  {slide.description}
                </p>

                {/* Steps */}
                <div className="space-y-3 sm:space-y-4">
                  {slide.steps.map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start group cursor-pointer transform hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-white/30 transition-colors duration-300">
                        <span className="font-bold text-lg sm:text-xl">
                          {i + 1}
                        </span>
                      </div>
                      <div className="pt-1">
                        <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                          {step}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8 sm:mt-10 lg:mt-12">
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-bold text-sm sm:text-base rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Start Learning Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-200 z-10"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-200 z-10"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators - Desktop */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-10">
        <button
          onClick={prevSlide}
          className="bg-white/20 p-2 rounded-full"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-white/20 p-2 rounded-full"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-10">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Slide Counter - Desktop */}
      <div className="hidden lg:flex absolute top-8 right-8 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium z-10">
        <span className="opacity-90">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
};

export default AICarousel;