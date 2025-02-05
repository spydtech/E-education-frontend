import React from 'react';
import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcPositiveDynamic } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";

const DBCareersOutcomes = () => {
  return (
    <div className="bg-white px-20 mb-20">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <div className="text-start">
            <div className="py-5">
              <p className="text-xl font-bold mt-2 text-[#0098f1]">
                Discover What our Learners Have Achieved
              </p>
              <p className="text-lg text-gray-500 mt-2">
                Snapshot of Alumni Placement Support
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col items-center lg:items-end">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <BsGraphUpArrow className="w-10 h-10 text-green-700 mb-2" />
                ),
                stat: "60%",
                description: "Average salary hike",
              },
              {
                icon: (
                  <FaPeopleGroup className="w-10 h-10 text-blue-700 mb-2" />
                ),
                stat: "120+",
                description: "Hiring partners",
              },
              {
                icon: (
                  <FcPositiveDynamic className="w-10 h-10 text-yellow-500 mb-2" />
                ),
                stat: "6/7",
                description: "Learners saw positive career growth",
              },
              {
                icon: <GrTransaction className="w-10 h-10 text-red-800 mb-2" />,
                stat: "400+",
                description: "Career Transitions",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 cursor-pointer text-xl font-medium border-2 border-transparent hover:border-[#750e5c] bg-white rounded-md overflow-hidden shadow-lg"
              >
                {item.icon}
                <p>{item.stat}</p>
                <p className="text-gray-500 text-[16px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DBCareersOutcomes;
