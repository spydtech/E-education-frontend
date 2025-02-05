<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
function Explore() {
  return (
    <div>
      <h1 className="md:text-xl text-base bg-gray-500  border-l-8 border-green-500 rounded-md md:px-3 md:py-2">
        Explore Here Courses List
      </h1>
      <div className="flex flex-col md:flex-row gap-5 pt-5 md:p-5 overflow-y-scroll">
        <div className=" w-[250px]">
          <h1 className="shyam cursor-pointer relative font-extrabold uppercase transition-colors duration-400 ease-cubic">
            Course
          </h1>
          <div className="pt-6 text-xs">
            <Link
              to="/fullStack_WebDevelopment/fullStack-Web-Development"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Web Development
            </Link>
          </div>

          <div className="pt-6 text-xs">
            <Link
              to="/php"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Php
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/java"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Java
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/wordpress"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Wordpress
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/javaScript"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              JavaScript
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/c_c++"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              C/C++
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/ui_ux_design"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              UI/UX Design
            </Link>
          </div>
        </div>
        <div class="md:flex md:h-48 md:items-center ">
          <div class="h-full border-l-2 border-[#64748b] hidden"></div>
        </div>

        <div className=" w-[250px]">
          <h1 className="shyam cursor-pointer relative font-extrabold uppercase transition-colors duration-400 ease-cubic">
            Advanced Course
          </h1>
          <div className="pt-6 text-xs">
            <Link
              to="/fullStack_WebDevelopment/mean-Stack-Developer"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              MEAN Stack
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/fullStack_WebDevelopment/fullStack-Java-Development"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Java Programming Mastery
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/advance-php"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Advanced PHP Programming
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/masteringWordPressDevelopment"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Mastering WordPress Development
            </Link>
          </div>

          <div className="pt-6 text-xs">
            <Link
              to="/fullStack_WebDevelopment/full-stack-javascript"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              JavaScript for Advanced Developers
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/data_Science"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Data Science Techniques
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/network_security"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Network Security
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/erp"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              ERP-Software-Development
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/power-bi"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Power BI Development
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/fullStackMobileAppDevelopment"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Full Stack Mobile App Development
            </Link>
          </div>
        </div>
        <div class="md:flex md:h-48 md:items-center ">
          <div class="h-full border-l-2 border-[#64748b] hidden"></div>
        </div>

        <div className=" w-[250px]">
          <h1 className="shyam cursor-pointer relative font-extrabold uppercase transition-colors duration-400 ease-cubic">
            Premium Course
          </h1>
          <div className="pt-6 text-xs">
            <Link
              to="/fullStack_WebDevelopment/fullStack-Web-Development"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Full Stack Development
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/software_testing"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Software Testing
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/data_Science/machine-Learning"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Machine Learning with AI
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/fullStack_WebDevelopment/fullStack-Devops"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              DevOps Mastery
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/cloud-computing"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Cloud with AWS
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/ethical_Hacking"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Ethical Hacking
            </Link>
          </div>
          <div className="pt-6 text-xs">
            <Link
              to="/blockchain"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Blockchain Development
            </Link>
          </div>

          <div className="pt-6 text-xs">
            <Link
              to="/cyber_security"
              class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Cyber Security
            </Link>
          </div>
          <style jsx>{`
            .shyam {
              font-size: 18px;
              color: black;
              font-family: inherit;
              border: none;
              background: none;
            }

            .shyam:focus,
            .shyam:hover {
              color: #0369a1;
            }

            .shyam:focus::after,
            .shyam:hover::after {
              width: 100%;
              left: 0%;
            }

            .shyam::after {
              content: "";
              pointer-events: none;
              bottom: -2px;
              left: 50%;
              position: absolute;
              width: 0%;
              height: 2px;
              background-color: #0369a1;
              transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
              transition-duration: 400ms;
              transition-property: width, left;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}

export default Explore;
=======
// import React from "react";
// import { Link } from "react-router-dom";
// function Explore() {
//   return (
//     <div>
//       <h1 className="md:text-xl text-base bg-gray-500  border-l-8 border-green-500 rounded-md md:px-3 md:py-2">
//         Explore Here Courses List
//       </h1>
//       <div className="flex flex-col md:flex-row gap-5 pt-5 md:p-5 overflow-y-scroll">
//         <div className=" w-[250px]">
//           <h1 className="shyam cursor-pointer relative font-extrabold uppercase transition-colors duration-400 ease-cubic">
//             Course
//           </h1>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/fullStack_WebDevelopment/fullStack-Web-Development"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Web Development
//             </Link>
//           </div>

//           <div className="pt-6 text-xs">
//             <Link
//               to="/php"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Php
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/java"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Java
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/wordpress"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Wordpress
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/javaScript"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               JavaScript
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/c_c++"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               C/C++
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/ui_ux_design"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               UI/UX Design
//             </Link>
//           </div>
//         </div>
//         <div class="md:flex md:h-48 md:items-center ">
//           <div class="h-full border-l-2 border-[#64748b] hidden"></div>
//         </div>

//         <div className=" w-[250px]">
//           <h1 className="shyam cursor-pointer relative font-extrabold uppercase transition-colors duration-400 ease-cubic">
//             Advanced Course
//           </h1>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/fullStack_WebDevelopment/mean-Stack-Developer"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               MEAN Stack
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/fullStack_WebDevelopment/fullStack-Java-Development"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Java Programming Mastery
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/advance-php"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Advanced PHP Programming
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/masteringWordPressDevelopment"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Mastering WordPress Development
//             </Link>
//           </div>

//           <div className="pt-6 text-xs">
//             <Link
//               to="/fullStack_WebDevelopment/full-stack-javascript"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               JavaScript for Advanced Developers
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/data_Science"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Data Science Techniques
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/network_security"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Network Security
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/erp"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               ERP-Software-Development
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/power-bi"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Power BI Development
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/fullStackMobileAppDevelopment"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Full Stack Mobile App Development
//             </Link>
//           </div>
//         </div>
//         <div class="md:flex md:h-48 md:items-center ">
//           <div class="h-full border-l-2 border-[#64748b] hidden"></div>
//         </div>

//         <div className=" w-[250px]">
//           <h1 className="shyam cursor-pointer relative font-extrabold uppercase transition-colors duration-400 ease-cubic">
//             Premium Course
//           </h1>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/fullStack_WebDevelopment/fullStack-Web-Development"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Full Stack Development
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/software_testing"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Software Testing
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/data_Science/machine-Learning"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Machine Learning with AI
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/fullStack_WebDevelopment/fullStack-Devops"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               DevOps Mastery
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/cloud-computing"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Cloud with AWS
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/ethical_Hacking"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Ethical Hacking
//             </Link>
//           </div>
//           <div className="pt-6 text-xs">
//             <Link
//               to="/blockchain"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Blockchain Development
//             </Link>
//           </div>

//           <div className="pt-6 text-xs">
//             <Link
//               to="/cyber_security"
//               class="bg-gray-100  text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
//             >
//               Cyber Security
//             </Link>
//           </div>
//           <style jsx>{`
//             .shyam {
//               font-size: 18px;
//               color: black;
//               font-family: inherit;
//               border: none;
//               background: none;
//             }

//             .shyam:focus,
//             .shyam:hover {
//               color: #0369a1;
//             }

//             .shyam:focus::after,
//             .shyam:hover::after {
//               width: 100%;
//               left: 0%;
//             }

//             .shyam::after {
//               content: "";
//               pointer-events: none;
//               bottom: -2px;
//               left: 50%;
//               position: absolute;
//               width: 0%;
//               height: 2px;
//               background-color: #0369a1;
//               transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
//               transition-duration: 400ms;
//               transition-property: width, left;
//             }
//           `}</style>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Explore;



import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

function Explore() {
  return (
    <div>
        <div className=" bg-[#0098F1] border-white border-2 rounded-xl  text-white h-auto w-auto   ">
                              <h3 className="lg:text-xl text-lg text-center p-4 bg-white  text-[#0098F1] w-full font-bold ">
                                Explore Here Courses List
                              </h3>
                              <div className="grid ">
                                {/* Column 1: Courses */}
                                <div className="flex  justify-between  ">
                                  <div className="p-4  text-nowrap text-start mx-4 my-2">
                                    <h4 className="font-bold text-white text-start ml-4 mb-2 text-lg">
                                      Basic
                                    </h4>
                                    <ul className="grid text-[16px] ">
                                      <li className="py-[2px] ">
                                        <Link
                                          className="group   text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/php"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Php
                                          </span>
                                        </Link>
                                      </li>
      
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/java"
                                        >
                                          <span className=" flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Java
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/c_c++"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black  ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            C/C++
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/wordpress"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Wordpress
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/javascript"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            JavaScript
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/ui_ux_design"
                                        >
                                          <span className=" flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            UI/UX Design
                                          </span>
                                        </Link>
                                      </li>
                                      <li className=" py-[2px]">
                                        <Link
                                          className="group   transition-all duration-100 ease-in-out"
                                          to="/fullStack_WebDevelopment/fullStack-Web-Development"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black  ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Web Development
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
      
                                  {/* Column 3: Premium Courses */}
                                  <div className="p-4  text-start text-nowrap  mx-4 my-2">
                                    <h4 className="font-bold text-white mb-2 text-start ml-4 text-lg ">
                                      Premium
                                    </h4>
                                    <ul className="grid text-[16px] ">
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/cyber_security"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Cyber Security
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/ethical_hacking"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Ethical Hacking
                                          </span>
                                        </Link>
                                      </li>
      
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/cloud-computing"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Cloud with AWS
                                          </span>
                                        </Link>
                                      </li>
      
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/fullStack_WebDevelopment/fullStack-Devops"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            DevOps Mastery
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/reactjs"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            ReactJs Mastery
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/software_testing"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Software Testing
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/fullStack_WebDevelopment/fullStack-Web-Development"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Full Stack Development
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/blockchain"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Blockchain Development
                                          </span>
                                        </Link>
                                      </li>
      
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/data_Science/machine-Learning"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Machine Learning with AI
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* Column 2: Advance Courses */}
      
                                  <div className="p-2 text-lg text-start text-nowrap  mx-4 my-2">
                                    <h4 className="font-bold text-white mb-2 pt-2  text-start ml-4  text-lg ">
                                      Advance
                                    </h4>
                                    <ul className="grid text-[16px] ">
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/power-bi"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Power BI
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/data_Science"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Data Science
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/fullStack_WebDevelopment/mean-Stack-Developer"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            MEAN Stack
                                          </span>
                                        </Link>
                                      </li>
      
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/fullStack_WebDevelopment/fullStack-Java-Development"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Java Mastery
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/erp"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            ERP-Software
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/advancedPhpProgramming"
                                        >
                                          <span className="flex pb-[2px] text-white">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Advance PHP
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/network_security"
                                        >
                                          <span className=" flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Network Security
                                          </span>
                                        </Link>
                                      </li>
      
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/fullStack_WebDevelopment/full-stack-javascript"
                                        >
                                          <span className=" flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Advance JavaScript
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/masteringWordPressDevelopment"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Mastering Wordpress
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="py-[2px]">
                                        <Link
                                          className="group  text-blue-400 transition-all duration-100 ease-in-out"
                                          to="/fullStackMobileAppDevelopment"
                                        >
                                          <span className="flex pb-[2px]    text-white hover:text-black   ">
                                            <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
                                            Full Stack Mobile App
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
    </div>
  )
}

export default Explore
>>>>>>> b6ac7ce (updatng the code)
