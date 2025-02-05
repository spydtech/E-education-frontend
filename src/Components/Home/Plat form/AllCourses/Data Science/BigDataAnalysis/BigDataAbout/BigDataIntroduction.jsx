import React, { useState } from "react";

function BigDataIntroduction() {
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
      heading: "Introduction to Big Data Analysis",
      items: [
        "Big Data Analysis refers to the process of examining large and varied data sets to uncover hidden patterns, unknown correlations, market trends, customer preferences, and other useful information.",
        "Key Concepts: Understand the significance of big data in today's data-driven world.",
      ],
    },
    {
      heading: "Basics of Big Data",
      items: [
        "Understanding Big Data: Learn about the characteristics of big data, such as volume, velocity, variety, and veracity.",
        "Big Data Technologies: Get introduced to technologies like Hadoop and Spark that enable big data processing.",
      ],
    },
    {
      heading: "Popular Big Data Tools",
      items: [
        "Hadoop Ecosystem: Explore components like HDFS, MapReduce, Hive, and Pig.",
        "Spark: Learn about Apache Spark and its capabilities in big data processing.",
      ],
    },
    {
      heading: "Data Processing and Analysis",
      items: [
        "ETL Processes: Understand Extract, Transform, Load processes for data integration.",
        "Data Warehousing: Learn about data warehousing concepts and tools like Amazon Redshift and Google BigQuery.",
      ],
    },
    {
      heading: "Big Data Analytics Techniques",
      items: [
        "Descriptive Analytics: Gain insights into data using descriptive analytics techniques.",
        "Predictive Analytics: Learn how to build predictive models to forecast future trends.",
        "Prescriptive Analytics: Understand how to recommend actions based on data analysis.",
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
          <span className="text-[#f6ac14] inline pl-2">BigData</span>
        </p>
      </div>
      <div>
        <p className="md:text-lg lg:text-3xl mt-2">
          Brief about BigData
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

export default BigDataIntroduction;
