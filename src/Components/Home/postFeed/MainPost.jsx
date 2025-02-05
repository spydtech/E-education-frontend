import React from "react";
import LeftSide from "./LeftSide";
import Post from "./Post";
import RightSide from "./RightSide";
import Navbar from "../../Navbar";

const MainPost = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="grid  grid-cols-1 lg:grid-cols-4   lg:w-auto  p-2 gap-4">
        {/* Left Side */}
        <div className=" lg:mt-0 mt-20 flex justify-center ">
          <LeftSide />
        </div>

        {/* Middle Post Section */}
        <div className="lg:mx-auto ">
          <Post />
        </div>

        {/* Right Side */}
        {/* <div className=" absolute right-3  ">
          <RightSide />
        </div> */}
        <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:right-3">
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default MainPost;
