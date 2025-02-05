import React from "react";
import { Link } from "react-router-dom";
const TryaDemoCard2 = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="container mx-auto pt-12 pb-20">
          <h1 className="text-4xl font-bold bg-gradient-to-r text-center from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Explore our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-radial from-blue-500 via-purple-500 to-pink-500">
              E-education
            </span>{" "}
            Courses
          </h1>
          <p className="text-gray-700 text-lg text-center mb-12">
            Welcome to our platform! Start your journey of learning with our
            comprehensive E-education courses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/pricing">
              <div
                className="relative bg-[#0098F1]  shadow-custom p-8  ring-blue/10 chamfer-corner"
                style={{
                  clipPath:
                    "polygon(0 0, 92% 0, 100% 6%, 100% 100%, 0 100%, 0% 50%)",
                }}
              >
                <h2 className="text-xl font-bold text-white mb-4">Courses</h2>
                <p className="text-white">
                  Delve into the narrative of E-education, our innovative
                  platform committed to delivering inclusive and accessible
                  educational opportunities. With a steadfast dedication to our
                  mission of empowering individuals through learning, we strive
                  to create an environment where knowledge knows no bounds. Join
                  us in our journey to foster a community of lifelong learners
                  and drive positive change through education.
                </p>
              </div>
            </Link>
            <Link to="/about_us">
              <div
                className="relative bg-[#0098F1]  shadow-custom p-8  ring-blue/10 chamfer-corner"
                style={{
                  clipPath:
                    "polygon(0 0, 92% 0, 100% 6%, 100% 100%, 0 100%, 0% 50%)",
                }}
              >
                <h2 className="text-xl font-bold text-white mb-4">About Us</h2>
                <p className="text-white">
                  Delve into the narrative of E-education, our innovative
                  platform committed to delivering inclusive and accessible
                  educational opportunities. With a steadfast dedication to our
                  mission of empowering individuals through learning, we strive
                  to create an environment where knowledge knows no bounds. Join
                  us in our journey to foster a community of lifelong learners
                  and drive positive change through education.
                </p>
              </div>
            </Link>
            <Link to="/contect-us">
              <div
                className="relative bg-[#0098F1]  shadow-custom p-8  ring-blue/10 chamfer-corner"
                style={{
                  clipPath:
                    "polygon(0 0, 92% 0, 100% 6%, 100% 100%, 0 100%, 0% 50%)",
                }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-white">
                  Delve into the narrative of E-education, our innovative
                  platform committed to delivering inclusive and accessible
                  educational opportunities. With a steadfast dedication to our
                  mission of empowering individuals through learning, we strive
                  to create an environment where knowledge knows no bounds. Join
                  us in our journey to foster a community of lifelong learners
                  and drive positive change through education.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TryaDemoCard2;
