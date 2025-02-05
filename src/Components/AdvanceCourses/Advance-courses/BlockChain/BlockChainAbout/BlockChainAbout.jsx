import React from "react";

const BlockChainAbout = () => {
  const ethicalHackingInfo = [
    {
      title: "Career Assistance",
      description:
        "Stay ahead with access to one-on-one career counseling sessions and mock interviews with industry professionals.",
      imgSrc:
        "https://img.freepik.com/premium-vector/software-development-programming-language-coding-isometric-pc-computer-with-digital-application-white-background_284092-318.jpg?w=740",
      imgAlt: "career-assistance",
    },
    {
      title: "Student Support",
      description:
        'Access student support via support@blockchain.com or through the "ask us?" option on our learning platform for urgent queries.',
      imgSrc:
        "https://img.freepik.com/free-vector/hacker-activity-isometric-composition_1284-21475.jpg?t=st=1716550896~exp=1716554496~hmac=5802aeca8133c034a5da30c58e2e1eb86602a116a2c98b917ed68ea329193008&w=740",
      imgAlt: "student-support",
    },
  ];

  return (
    <div className="px-3 text-center">
      <div className="">
        <p className="md:text-2xl font-bold text-[#0098F1]">
          Discover the Block Chain Program
        </p>
      </div>

      <div className="md:flex justify-around">
        {ethicalHackingInfo.map((item, index) => (
          <div
            key={index}
            className=" md:w-2/5 md:h-96 bg-white rounded-lg shadow-lg p-3 my-4"
          >
            <img
              className="md:w-full md:h-64 rounded-md"
              src={item.imgSrc}
              alt={item.imgAlt}
            />
            <div className="my-3">
              <h2 className="md:text-xl font-bold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockChainAbout;
