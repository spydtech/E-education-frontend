import React, { useState } from "react";

function AgenticAIIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => (
    <div className="w-full flex-shrink-0 px-4 py-4">
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

  const slidesData = [
    {
      heading: "Core Concepts of Agentic AI",
      items: [
        "Autonomous decision-making systems.",
        "Goal-directed behavior in AI agents.",
        "Context-awareness and adaptability.",
        "Integration with large language models (LLMs).",
        "Use cases in automation and robotics.",
      ],
    },
    {
      heading: "Agent Architectures",
      items: [
        "Reactive vs. deliberative agents.",
        "Planning, reasoning, and decision trees.",
        "Agent communication and multi-agent systems.",
      ],
    },
    {
      heading: "Security and Ethics",
      items: [
        "Designing safe and ethical agents.",
        "Bias, fairness, and accountability in AI decisions.",
        "Fail-safe mechanisms for autonomous systems.",
      ],
    },
    {
      heading: "Tools and Libraries",
      items: [
        "LangChain for agent orchestration.",
        "Auto-GPT and similar frameworks.",
        "Integration with APIs and webhooks.",
      ],
    },
    {
      heading: "Real-World Applications",
      items: [
        "Customer service chatbots with reasoning.",
        "Personalized virtual assistants.",
        "Self-optimizing business workflows.",
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
    <div className="flex flex-col space-y-3 md:flex-row md:justify-around md:items-center lg:h-[450px] px-3 md:mb-9 mb-5">
      <div>
        <div>
          <p className="text-[#00d2ff] underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">
            Introduction
          </p>
        </div>
        <div className="mt-2">
          <p className="md:text-lg lg:text-3xl">
            What is
            <span className="text-[#f6ac14] inline pl-2">Agentic AI?</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Learn how agents think, reason, and act in dynamic environments.
          </p>
        </div>
      </div>

      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:min-h-[420px] md:p-3 lg:flex flex-col justify-between">
        <div className="flex text-white">
          <Slide
            heading={slidesData[currentSlide].heading}
            items={slidesData[currentSlide].items}
          />
        </div>

        <div className="flex justify-between max-md:p-4">
          <button
            onClick={goToPreviousSlide}
            className="text-white hover:text-[#00d2ff] font-bold rounded"
          >
            Previous
          </button>
          <div className="text-white text-sm">{`Page ${currentSlide + 1}/${
            slidesData.length
          }`}</div>
          <button
            onClick={goToNextSlide}
            className="text-white hover:text-[#00d2ff] font-bold rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgenticAIIntroduction;
