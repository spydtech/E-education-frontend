import React, { useState } from "react";

function GenerativeAIIntroduction() {
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
      heading: "What is Generative AI?",
      items: [
        "A subset of AI focused on generating content like text, images, audio, and code.",
        "Uses deep learning models such as GANs, VAEs, and transformers.",
        "Popularized by models like GPT, DALL·E, and Midjourney.",
      ],
    },
    {
      heading: "Applications of Generative AI",
      items: [
        "Text generation, summarization, and translation.",
        "AI art, image upscaling, and video generation.",
        "Voice synthesis and music composition.",
        "Code generation and software automation.",
      ],
    },
    {
      heading: "Working with Large Language Models (LLMs)",
      items: [
        "Introduction to models like GPT-4 and Claude.",
        "Tokenization and prompt engineering.",
        "Fine-tuning vs. using pre-trained models via APIs.",
        "Best practices for safety and performance.",
      ],
    },
    {
      heading: "Tools and Platforms",
      items: [
        "OpenAI API, Hugging Face Transformers, and LangChain.",
        "AutoML and custom model building with TensorFlow & PyTorch.",
        "Using cloud platforms like Azure, AWS, and GCP for deployment.",
      ],
    },
    {
      heading: "Ethics and Challenges",
      items: [
        "Bias and fairness in AI-generated content.",
        "Misuse, hallucination, and misinformation risks.",
        "Content ownership and intellectual property concerns.",
        "The future of work and human-AI collaboration.",
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
    <div className="flex flex-col space-y-3 md:flex-row md:justify-around md:items-center lg:h-[450px] px-3 md:mb-9 mb-5 ">
      <div className="">
        <div>
          <p className="text-[#0098F1] underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">
            Introduction
          </p>
        </div>
        <div className="mt-2">
          <p className="md:text-lg lg:text-3xl">
            So what is
            <span className="text-[#f6ac14] inline pl-2">Generative AI</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            A brief overview of this cutting-edge field
          </p>
        </div>
      </div>

      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:min-h-[420px] md:p-3 lg:flex flex-col justify-between ">
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
    </div>
  );
}

export default GenerativeAIIntroduction;
