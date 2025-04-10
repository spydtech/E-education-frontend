import React, { useState } from "react";

function MachineLearningIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => (
    <div className="w-full flex-shrink-0 px-4 py-8">
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
      heading: "Introduction to Machine Learning",
      items: [
        "Machine learning is a subset of artificial intelligence that focuses on developing algorithms capable of learning from data to make predictions or decisions without being explicitly programmed.",
        "Key Concepts: Explore fundamental concepts such as supervised learning, unsupervised learning, and reinforcement learning.",
      ],
    },
    {
      heading: "Basics of Machine Learning",
      items: [
        "Understanding Data: Learn about the types of data used in machine learning and their significance in model training.",
        "Types of Machine Learning: Differentiate between supervised, unsupervised, and semi-supervised learning approaches.",
      ],
    },
    {
      heading: "Popular Machine Learning Algorithms",
      items: [
        "Regression Algorithms: Introduce linear regression, logistic regression, and other regression techniques for predictive modeling.",
        "Classification Algorithms: Explore decision trees, support vector machines, and other classification algorithms for pattern recognition.",
      ],
    },
    {
      heading: "Tools and Technologies for Machine Learning",
      items: [
        "Programming Languages: Overview of popular languages like Python and R used for machine learning development.",
        "Libraries and Frameworks: Introduction to libraries like TensorFlow, scikit-learn, and PyTorch for implementing machine learning algorithms.",
      ],
    },
    {
      heading: "Model Evaluation and Validation",
      items: [
        "Cross-Validation Techniques: Understand k-fold cross-validation and other methods for assessing model performance.",
        "Metrics for Evaluation: Learn about accuracy, precision, recall, F1 score, and other metrics used to evaluate machine learning models.",
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
      {/* Text Section */}
      <div className="">
        <div>
          <p className="text-[#0098F1] underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">
            Introduction
          </p>
        </div>
        <div className="mt-2">
          <p className="md:text-lg lg:text-3xl">
            So what is
            <span className="text-[#f6ac14] inline pl-2">Machine Learning</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Brief about Machine Learning
          </p>
        </div>
      </div>

      {/* Slider Section */}
      {/* <div className=" lg:h-[468px]"> */}
      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:min-h-[420px] md:p-5 lg:flex flex-col justify-between ">
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
      {/* </div> */}
    </div>
  );
}

export default MachineLearningIntroduction;
