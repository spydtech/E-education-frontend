import React, { useState } from "react";

function BlockChainIntroduction() {
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
      heading: "What is Blockchain?",
      items: [
        "Blockchain is a decentralized and distributed digital ledger technology.",
        "It records transactions across multiple computers in a way that makes them tamper-resistant and transparent.",
      ],
    },
    {
      heading: "How Does Blockchain Work?",
      items: [
        "Transactions are grouped into blocks and linked together in chronological order to form a chain.",
        "Each block contains a cryptographic hash of the previous block, creating a secure and immutable record of transactions.",
      ],
    },
    {
      heading: "Key Concepts of Blockchain",
      items: [
        "Decentralization: No single entity has control over the network.",
        "Transparency: All transactions are visible to participants.",
        "Immutability: Once recorded, data cannot be altered or deleted.",
        "Consensus Mechanism: Agreement among network participants on the validity of transactions.",
      ],
    },
    {
      heading: "Applications of Blockchain",
      items: [
        "Cryptocurrencies like Bitcoin and Ethereum.",
        "Supply chain management.",
        "Smart contracts and decentralized finance (DeFi).",
        "Identity verification and authentication.",
      ],
    },
    {
      heading: "Challenges and Future of Blockchain",
      items: [
        "Scalability: Handling a large number of transactions per second.",
        "Interoperability: Ensuring compatibility between different blockchain platforms.",
        "Regulatory concerns and legal frameworks.",
        "Integration with existing systems and industries.",
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
            <span className="text-[#f6ac14] inline pl-2">Blockchain</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Brief about Blockchain Technology
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

export default BlockChainIntroduction;
