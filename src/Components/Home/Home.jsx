import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Main from "../Main";
import DataAnalyst from "./StartNew Car/DataAnalyst/DataAnalyst";
import DigitalMarketing from "./StartNew Car/DigitalMarketing/DigitalMarketing";
import ItSupport from "./StartNew Car/Itsupport/ItSupport";
import FrontEnd from "./StartNew Car/Front-End Developer/FrontEnd";
import Cybersecurity from "./StartNew Car/Cybersecurity/Cybersecurity";
import UiUx from "./StartNew Car/Ui-Ux/UiUx";
import Aurora from "./aurora/Aurora";
import Footer from "./footer/Footer";
import FinalTestimonials from "./testimonials/Testimonialss";
import Platform from "./Plat form/Platform";
import Pricing from "./Pricing/Pricing";
// import SlideInTimer from "./Timer/SlideInTimer";
import ImageHomePage from "../Home/Plat form/AllCourses/ImageHomepage";
import SingupHome from "../Home/SingUpHome/SignUpHome";

import LoginForm from "./loginForm/LoginForm";
import StartNewCarrer from "./StartNewCarrer/Carrer";
import { useSelector } from "react-redux";
function Home() {
  // const [activeTab, setActiveTab] = useState("tab1");

  // useEffect(() => {
  //   // Initialize the first tab
  //   showTab("tab1");
  // }, []);

  // function showTab(tabId) {
  //   // Update active tab
  //   setActiveTab(tabId);
  // }
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Main />
      <StartNewCarrer />
      {/* <div className="w-full mt-10 px-16">
      
        {/* <div className="p-2 rounded-t-lg overflow-x-auto">
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${
                activeTab === "tab1" ? "active" : ""
              }`}
              onClick={() => showTab("tab1")}
            >
              Data Analyst
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${
                activeTab === "tab2" ? "active" : ""
              }`}
              onClick={() => showTab("tab2")}
            >
              Digital Marketer
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${
                activeTab === "tab3" ? "active" : ""
              }`}
              onClick={() => showTab("tab3")}
            >
              IT Support Specialist
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${
                activeTab === "tab4" ? "active" : ""
              }`}
              onClick={() => showTab("tab4")}
            >
              Cybersecurity
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg  hover:bg-blue-100 focus:outline-none tab-button ${
                activeTab === "tab5" ? "active" : ""
              }`}
              onClick={() => showTab("tab5")}
            >
              Front-End Developer
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg  hover:bg-blue-100 focus:outline-none tab-button ${
                activeTab === "tab6" ? "active" : ""
              }`}
              onClick={() => showTab("tab6")}
            >
              UX Designer
            </button>
          </div>
        </div>

     
        <div className="border-2 rounded-lg border-blue-100  pb-5">
          <div
            id="tab1"
            className={`p-4 tab-content bg-white  rounded-lg ${
              activeTab === "tab1" ? "" : "hidden"
            }`}
          >
            <DataAnalyst />
          </div>
          <div
            id="tab2"
            className={`p-4 tab-content bg-white  rounded-lg ${
              activeTab === "tab2" ? "" : "hidden"
            }`}
          >
            <DigitalMarketing />
          </div>
          <div
            id="tab3"
            className={`p-4 tab-content bg-white  rounded-lg ${
              activeTab === "tab3" ? "" : "hidden"
            }`}
          >
            <ItSupport />
          </div>
          <div
            id="tab4"
            className={`p-4 tab-content bg-white  rounded-lg ${
              activeTab === "tab4" ? "" : "hidden"
            }`}
          >
            <Cybersecurity />
          </div>
          <div
            id="tab5"
            className={`p-4 tab-content bg-white  rounded-lg ${
              activeTab === "tab5" ? "" : "hidden"
            }`}
          >
            <FrontEnd />
          </div>
          <div
            id="tab6"
            className={`p-4 tab-content bg-white  rounded-lg ${
              activeTab === "tab6" ? "" : "hidden"
            }`}
          >
            <UiUx />
          </div>
          <div class=" text-base font-semibold leading-7 text-center justify-center  ">
            <p>
              <a
                href="/Certificates"
                class="text-sky-500  transition-all duration-300 group-hover:text-white "
              >
                Explore all Certificates &rarr;
              </a>
            </p>
          </div>
        </div>
      </div> */}
      <Platform />
      <ImageHomePage />
      <Aurora />

      <Pricing />
      <LoginForm></LoginForm>
      {/* <SlideInTimer /> */}
      {/* {!auth.user && <SingupHome />} */}
      <FinalTestimonials />
      <Footer />
    </>
  );
}

export default Home;
