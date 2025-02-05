import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcPositiveDynamic } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";

function RegressionTestingCareersOutcomes() {
  const stats = [
    {
      icon: <BsGraphUpArrow className="w-10 h-10 text-green-700 mb-2" />,
      stat: "60%",
      description: "Average salary hike",
    },
    {
      icon: <FaPeopleGroup className="w-10 h-10 text-blue-700 mb-2" />,
      stat: "120+",
      description: "Hiring partners",
    },
    {
      icon: <FcPositiveDynamic className="w-10 h-10 text-yellow-500 mb-2" />,
      stat: "6/7",
      description: "Learners saw positive career growth",
    },
    {
      icon: <GrTransaction className="w-10 h-10 text-red-800 mb-2" />,
      stat: "400+",
      description: "Career Transitions",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-around md:my-9 px-3 mb-4 md:px-10">
      {/* Left Content */}
      <div className="mb-8 ">
        <p className="md:text-2xl font-bold text-[#0098F1]">
        Career Outcomes in Regression Testing
        </p>
        <p className="md:text-xl text-gray-500 mt-4">
          Snapshot of Alumni Placement Support
        </p>
      </div>

      {/* Right Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 cursor-pointer text-xl font-medium border-2 border-transparent hover:border-[#750e5c] bg-gray-100 rounded-md overflow-hidden shadow-lg"
            >
              {item.icon}
              <p>{item.stat}</p>
              <p className="text-gray-500 text-[16px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
}

export default RegressionTestingCareersOutcomes;
