import React, { useState } from "react";

function CloudComputingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [currentSlide, setCurrentSlide] = useState(0);

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
      heading: "Introduction to Cloud Computing",
      items: [
        "Cloud computing refers to the delivery of computing services over the Internet (the cloud) to offer faster innovation, flexible resources, and economies of scale.",
        "AWS (Amazon Web Services) is a secure cloud services platform that offers computing power, database storage, content delivery, and other functionalities to help businesses scale and grow.",
      ],
    },
    {
      heading: "Benefits of Cloud Computing",
      items: [
        "Cost-Efficiency: Pay only for the resources you use.",
        "Scalability: Easily scale resources up or down based on demand.",
        "Flexibility: Access resources from anywhere with an internet connection.",
        "Reliability: Redundant systems ensure high availability and uptime.",
      ],
    },
    {
      heading: "AWS Services",
      items: [
        "Compute: EC2, Lambda, Elastic Beanstalk",
        "Storage: S3, EBS, Glacier",
        "Database: RDS, DynamoDB, Redshift",
        "Networking: VPC, Route 53, CloudFront",
        "Security: IAM, KMS, WAF",
        "AI/ML: SageMaker, Rekognition, Polly",
        "And many more...",
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
      <div className="">
        <div>
          <p className="text-[#0098F1] underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">
            Introduction
          </p>
        </div>
        <div className="mt-2">
          <p className="md:text-lg lg:text-3xl">
            Discover
            <span className="text-[#f6ac14] inline pl-2"> Cloud Computing</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Brief about Cloud Computing with AWS
          </p>
        </div>
      </div>

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
    </div>
  );
}

export default CloudComputingIntroduction;
