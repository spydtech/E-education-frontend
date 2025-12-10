// import React from "react";
// import LeftSide from "./LeftSide";
// import Post from "./Post";
// import RightSide from "./RightSide";
// import Navbar from "../../Navbar";

// const MainPost = () => {
//   return (
//     <>
//       <Navbar></Navbar>
//       <div className="grid  grid-cols-1 lg:grid-cols-4   lg:w-auto  p-2 gap-4">
//         {/* Left Side */}
//         <div className=" lg:mt-0 mt-20 flex justify-center ">
//           <LeftSide />
//         </div>

//         {/* Middle Post Section */}
//         <div className="lg:mx-auto ">
//           <Post />
//         </div>

//         {/* Right Side */}
//         {/* <div className=" absolute right-3  ">
//           <RightSide />
//         </div> */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:right-3">
//           <RightSide />
//         </div>
//       </div>
//     </>
//   );
// };

// export default MainPost;




import React from "react";
import LeftSide from "./LeftSide";
import Post from "./Post";
import RightSide from "./RightSide";
import Navbar from "../../Navbar";

const MainPost = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16 md:pt-20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4">
          {/* Mobile layout: Stack all components vertically */}
          <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-6">
            
            {/* Left Side - Hidden on mobile except in drawer, shown on desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <LeftSide />
              </div>
            </div>

            {/* Middle Post Section - Full width on mobile, col-span-2 on desktop */}
            <div className="lg:col-span-2 w-full mx-auto">
              <div className="lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
                <Post />
              </div>
            </div>

            {/* Right Side - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <RightSide />
              </div>
            </div>
          </div>

          {/* Mobile Navigation Bar for Left and Right Side */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="flex justify-around items-center h-16 px-4">
              {/* Mobile Left Side Button */}
              <button
                onClick={() => document.getElementById('mobileLeftSide').classList.remove('hidden')}
                className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <span className="text-xs mt-1">Profile</span>
              </button>

              {/* Mobile Right Side Button (Notifications) */}
              <button
                onClick={() => document.getElementById('mobileRightSide').classList.remove('hidden')}
                className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600 relative"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                  </svg>
                </div>
                <span className="text-xs mt-1">Alerts</span>
              </button>

              {/* Add Post Button (Center) */}
              <button
                onClick={() => document.getElementById('postModal').classList.remove('hidden')}
                className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600 -mt-8"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
                <span className="text-xs mt-1">Post</span>
              </button>
            </div>
          </div>

          {/* Mobile Left Side Drawer */}
          <div id="mobileLeftSide" className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
            <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl">
              <div className="p-4">
                <button
                  onClick={() => document.getElementById('mobileLeftSide').classList.add('hidden')}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
                <LeftSide />
              </div>
            </div>
          </div>

          {/* Mobile Right Side Drawer */}
          <div id="mobileRightSide" className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
            <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl">
              <div className="p-4">
                <button
                  onClick={() => document.getElementById('mobileRightSide').classList.add('hidden')}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
                <RightSide />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPost;