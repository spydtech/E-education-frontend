import React from "react";
import img1 from "../../../../assetss/homepageimages/imgstudents.png";
import img2 from "../../../../assetss/homepageimages/img2students.png";
import img3 from "../../../../assetss/homepageimages/img3students.png";

const data = [
  {
    imgSrc: img1,
    altText: "Popular",
    title: "It's Popular",
    description:
      "Helps To Gain Knowledge And Jobs Worldwide Which Requires High Technical Skills",
  },
  {
    imgSrc: img2,
    altText: "Promising",
    title: "It's Promising",
    description:
      "Enter With Zero Skills And Gain The Advanced Level Skills To Start And Having A Dream Career",
  },
  {
    imgSrc: img3,
    altText: "Fun",
    title: "It's Fun",
    description:
      " Collaborate Into Passion With Your Creativity To Experience Something New Every Day",
  },
];

const ImageHomePage = () => {
  return (
    <div className="container mx-auto px-4 py-10 my-6 md:my-14">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:lg:xl:grid-cols-3 gap-6 justify-items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white  border-2 border-[#F19E22]  hover:border-[#F19E22] border-opacity-30 px-6 shadow-md text-center w-[300px]   sm:w-[350px] h-[250px] flex flex-col items-center"
          >
            <img
              src={item.imgSrc}
              alt={item.altText}
              className="w-[130px] h-[130px]"
            />
            <h2 className="text-[26px] font-bold mb-2 bg-gradient-to-r from-[#0098f1] to-[#F19E22] bg-clip-text text-transparent">
              {item.title}
            </h2>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageHomePage;
