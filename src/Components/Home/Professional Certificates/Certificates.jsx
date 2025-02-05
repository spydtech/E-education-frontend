import React from "react";
import Navbar from "../../Navbar";
import Professional from "./Professional";
import Footer from "../footer/Footer";
import img1 from '../../../assetss/certifications_images/image1.png'
import img2 from '../../../assetss/certifications_images/image2.png'
import { LuArrowUpRight } from "react-icons/lu";

function Certificates() {
  return (
    <div>
      <Navbar />
      <div className="">
        {/* <nav class="flex p-10 " aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  class="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center">     
                <svg    
                  class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"   
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Professional Certificates
                </a>
              </div>
            </li>
          </ol>
        </nav> */}

        <div class=" max-w-7xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-12 justify-center py-10 lg:py-14 dark:bg-gray-800">
          <div class="lg:w-[650px] lg:px-5 flex flex-col gap-y-6">
          <h1 class="text-2xl md:text-5xl xl:text-[50px] space-x-2 leading-[1.2] md:max-w-xl md:mx-auto text-center md:text-center lg:mb-[90px] lg:text-left lg:mx-0 lg:max-w-full font-semibold dark:text-white">
  <span>Professional</span> 
  <span class="text-2xl md:text-5xl xl:text-[50px] leading-[1.2] font-semibold dark:text-white">
    <span class="text-[#f6ac14]">Cert</span>
    <span class="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
      ificate
    </span>
  </span>
  <p class="md:text-lg text-base font-normal md:max-w-xl mt-4 md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
              Get job-ready for an in-demand career
            </p>
</h1>
            
            <div class="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
              <a
                href="#"
                class="flex w-full lg:w-fit items-center text-white justify-center rounded-md bg-gradient-to-r from-[#0098F1] to-[#00588B] px-12 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
              >
                <span>Get Start</span>
              </a>
              <a
                href="#"
                class="flex w-full lg:w-fit items-center text-[#0098F1] justify-center rounded-md border border-[#0098F1] px-10 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 bg-[#5138EE]/10 dark:text-white dark:bg-transparent dark:border-gray-500/50"
              >
                <span>Learn more</span>
              </a>
            </div>
          </div>
          <div class="hero-image md:px-5 lg:px-0 w-[75%] mb-10 md:mb-4 lg:w-[40%] rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
            <img
              class="rounded-3xl w-full"
              src={img1}
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="flex justify-center lg:justify-start items-center h-screen md:mt-24 xl:mt-20 mb-[240px] md:mb-[110px] xl:mb-20 mt-[240px]">
        <div class="">
          {/* <!-- Card 1 --> */}
          <div class="bg-white md:flex-row px-4 flex-col justify-center items-center space-x-6 rounded-lg pt-10 pb-14 gap-x-3 flex">
            <img
              src={img2}
              alt="Map 1"
              class="w-[260px] h-[180px] object-cover rounded-t-lg md:mr-4"
            />
            <div className="flex flex-col justify-center text-center md:text-start">
              <div class="flex md:justify-start justify-center items-center mb-3">
                <h2 class="text-xl md:text-start text-center font-semibold text-[#0098F1]">
                  Data Analyst Professional Certificate
                </h2>
              </div>
              <p>6 months at 10 hours per week</p>
              <p>prepare an a entry-level job as Data Analyst</p>
              <a
                href="#"
                class="flex w-1/2 mx-auto md:mx-0 mt-7 lg:w-fit items-center text-white justify-center rounded-md bg-gradient-to-r from-[#0098F1] to-[#00588B] px-7 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
              >
                <span className="flex justify-center items-center gap-x-2">Certificate<LuArrowUpRight /></span>
              </a>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-white md:flex-row px-4 flex-col justify-center items-center space-x-6 rounded-lg pt-10 pb-14 gap-x-3 flex">
            <img
              src={img2}
              alt="Map 2"
              class="w-[260px] h-[180px] object-cover rounded-t-lg md:mr-4"
            />
            <div className="flex flex-col justify-center text-center md:text-start">
              <div class="flex md:justify-start justify-center items-center mb-3">
                <h2 class="text-xl md:text-start text-center font-semibold text-[#0098F1]">
                Digital Marketing
                </h2>
              </div>
              <p>5 to 6 months 6-10 hours</p>
              <p>Prepare for an entry-level job as a social media<p className="inline md:block"> marketer</p></p>
              <a
                href="#"
                class="flex w-1/2 mx-auto md:mx-0 mt-7 lg:w-fit items-center text-white justify-center rounded-md bg-gradient-to-r from-[#0098F1] to-[#00588B] px-7 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
              >
                <span className="flex justify-center items-center gap-x-2">Certificate<LuArrowUpRight /></span>
              </a>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div class="bg-white md:flex-row px-4 flex-col justify-center items-center space-x-6 rounded-lg pt-10 pb-14 gap-x-3 flex">
            <img
              src={img2}
              alt="Map 2"
              class="w-[260px] h-[180px] object-cover rounded-t-lg mr-4"
            />
            <div className="flex flex-col justify-center md:text-start text-center">
              <div class="flex items-center md:justify-start justify-center mb-3">
                <h2 class="text-xl md:text-start text-center font-semibold text-[#0098F1]">
                IT Support Specialist
                </h2>
              </div>
              <p>6 months at 10 hours</p>
              <p>Prepare for an entry-level job as an IT support<p className="inline md:block">  specialist </p></p>
              <a
                href="#"
                class="flex w-1/2 mx-auto md:mx-0 mt-7 lg:w-fit items-center text-white justify-center rounded-md bg-gradient-to-r from-[#0098F1] to-[#00588B] px-7 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
              >
                <span className="flex justify-center items-center gap-x-2">Certificate<LuArrowUpRight /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Professional />
      <Footer />
    </div>
  );
}

export default Certificates;
