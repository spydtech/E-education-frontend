import React, { useState } from "react";

function DatavisualisationIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
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
  };

  const slidesData = [
    {
      heading: "Introduction to Data Visualization",
      items: [
        "Data visualization is the graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data.",
        "Key Concepts: Explore fundamental concepts such as the importance of visual context, data storytelling, and effective communication of insights.",
      ],
    },
    {
      heading: "Basics of Data Visualization",
      items: [
        "Understanding Data: Learn about the types of data used in data visualization and their significance in creating meaningful visualizations.",
        "Visualization Techniques: Differentiate between various techniques such as bar charts, line graphs, scatter plots, and more.",
      ],
    },
    {
      heading: "Popular Data Visualization Tools",
      items: [
        "Tableau: An introduction to one of the most popular data visualization tools used for creating interactive and shareable dashboards.",
        "Power BI: Learn about this business analytics tool that delivers insights throughout your organization.",
        "D3.js: Explore this JavaScript library for producing dynamic, interactive data visualizations in web browsers.",
      ],
    },
    {
      heading: "Design Principles for Effective Visualizations",
      items: [
        "Choosing the Right Chart: Understand how to select the appropriate chart type based on the data and the message you want to convey.",
        "Color Theory: Learn how to use colors effectively to enhance readability and highlight key information.",
        "Avoiding Misleading Visuals: Tips on how to avoid common pitfalls that can lead to misinterpretation of data.",
      ],
    },
    {
      heading: "Advanced Data Visualization Techniques",
      items: [
        "Interactive Visualizations: Discover how to create interactive charts and dashboards that allow users to explore data in depth.",
        "Geospatial Visualization: Learn how to visualize data with maps to show spatial patterns and relationships.",
        "Data Storytelling: Techniques for crafting compelling narratives around your data to engage and inform your audience.",
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
              <span className="text-[#f6ac14] inline pl-2">
                Data Visulization
              </span>
            </p>
          </div>
          <div>
            <p className="md:text-lg lg:text-3xl mt-2">
              Brief about Data Visualization
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
    </>
  );
}

export default DatavisualisationIntroduction;
