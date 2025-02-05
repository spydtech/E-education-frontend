import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Delivery_Methods = () => {
  const [visibleImage, setVisibleImage] = useState(1);

  const handleImageClick = (image) => {
    setVisibleImage(visibleImage === image ? null : image);
  };

  const handlePrev = () => {
    setVisibleImage((prevImage) => (prevImage === 1 ? 4 : prevImage - 1));
  };

  const handleNext = () => {
    setVisibleImage((prevImage) => (prevImage === 4 ? 1 : prevImage + 1));
  };

  const ImageComponent = ({ src, isVisible, title, onClick }) => {
    const sizeClass = isVisible ? "w-full md:w-1/3 h-full" : "w-1/2 md:w-1/6 h-64";
    const opacityClass = isVisible ? "opacity-100" : "opacity-60";
    return (
      <div
        className={`relative transition-all duration-500 ease-in-out ${sizeClass} ${opacityClass} flex-shrink-0 cursor-pointer`}
        onClick={onClick}
      >
        <img src={src} alt={title} className="w-full h-96 object-cover transition-all duration-500 ease-in-out" />
        {isVisible && (
          <div className="absolute bottom-0 left-0 bg-[#F6AC14] h-28 text-white p-4 w-full md:w-40 transition-all duration-500 ease-in-out" style={{ borderTopRightRadius: "32px" }}>
            <span className="font-medium text-xl">{title}</span>
            <a href="#" className="text-[#F6AC14] bg-white flex pt-2 h-12 items-center mt-2 p-1 font-semibold" style={{ borderTopRightRadius: "18px" }}>
              Explore Now <FiArrowUpRight />
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-semibold text-[#0098F1] text-center mb-6">
        Our <span className="bg-gradient-to-r bg-clip-text from-[#0098f1] to-[#f6ac14] text-transparent">Available Delivery Methods</span>
      </h2>
      <div className="hidden sm:flex flex-wrap justify-center space-x-0 sm:space-x-0">
        <ImageComponent
          src="https://img.freepik.com/free-photo/medium-shot-people-working-with-devices_23-2149097958.jpg?t=st=1723474799~exp=1723478399~hmac=217c88974ab5f14fd4a378e03ee9699b5050b3942fa352834eaff7a9d9e4ab7a&w=996"
          isVisible={visibleImage === 1}
          title="Training"
          onClick={() => handleImageClick(1)}
        />
        <ImageComponent
          src="https://img.freepik.com/free-photo/colleagues-working-together-financial-report-using-modern-gadget_273609-5547.jpg?t=st=1723475315~exp=1723478915~hmac=5b20bfadfb37b945002dfa9b4744c3908c924b5f139bad9c305bb3470f8800e2&w=996"
          isVisible={visibleImage === 2}
          title="Guided"
          onClick={() => handleImageClick(2)}
        />
        <ImageComponent
          src="https://img.freepik.com/free-photo/medium-shot-happy-girl-with-cement-background_23-2148294082.jpg?t=st=1723475352~exp=1723478952~hmac=308e0144c1ebe8b68e57b6c24e897b8e767ef7fb87c99963c3fa586474145e85&w=740"
          isVisible={visibleImage === 3}
          title="Autodidac"
          onClick={() => handleImageClick(3)}
        />
        <ImageComponent
          src="https://img.freepik.com/free-photo/businessman-secretary-reading-document_23-2147626560.jpg?t=st=1723475407~exp=1723479007~hmac=e6f4ef0437d36ac09e0d680dfddba29345db1bba1894f89cc98879ed90b43618&w=996"
          isVisible={visibleImage === 4}
          title="Clarificat"
          onClick={() => handleImageClick(4)}
        />
      </div>
      <div className="flex sm:hidden justify-center items-center space-x-4">
        <button className="p-2 rounded-full text-white" onClick={handlePrev}>
          <IoIosArrowBack className="text-2xl text-[#F6AC14]" />
        </button>
        <ImageComponent
          src={
            [
              "https://img.freepik.com/free-photo/medium-shot-people-working-with-devices_23-2149097958.jpg?t=st=1723474799~exp=1723478399~hmac=217c88974ab5f14fd4a378e03ee9699b5050b3942fa352834eaff7a9d9e4ab7a&w=996",
              "https://img.freepik.com/free-photo/colleagues-working-together-financial-report-using-modern-gadget_273609-5547.jpg?t=st=1723475315~exp=1723478915~hmac=5b20bfadfb37b945002dfa9b4744c3908c924b5f139bad9c305bb3470f8800e2&w=996",
              "https://img.freepik.com/free-photo/medium-shot-happy-girl-with-cement-background_23-2148294082.jpg?t=st=1723475352~exp=1723478952~hmac=308e0144c1ebe8b68e57b6c24e897b8e767ef7fb87c99963c3fa586474145e85&w=740",
              "https://img.freepik.com/free-photo/businessman-secretary-reading-document_23-2147626560.jpg?t=st=1723475407~exp=1723479007~hmac=e6f4ef0437d36ac09e0d680dfddba29345db1bba1894f89cc98879ed90b43618&w=996"
            ][visibleImage - 1]
          }
          isVisible={true}
          title={["Training", "Guided", "Autodidac", "Clarificat"][visibleImage - 1]}
          onClick={() => handleImageClick(visibleImage)}
        />
        <button className="p-2 rounded-full text-white" onClick={handleNext}>
          <IoIosArrowForward className="text-2xl text-[#F6AC14]" />
        </button>
      </div>
    </div>
  );
};

export default Delivery_Methods;

// import React from "react";
// import { IoRemoveOutline } from "react-icons/io5";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import istock from "../../../../../../../assets/Delivery_MethodsPic/istock.jpg";
// import onsite from "../../../../../../../assets/Delivery_MethodsPic/onsite.jpg";
// import online from "../../../../../../../assets/Delivery_MethodsPic/onlineinstrutor.jpg";
// import self from "../.././../../../../../assets/Delivery_MethodsPic/selfinstrutor.jpg";
// import { Link } from "react-router-dom";
// import { SiGoogleclassroom } from "react-icons/si";
// import { FaLaptopCode } from "react-icons/fa";
// import { LiaChalkboardTeacherSolid } from "react-icons/lia";
// import { MdModelTraining } from "react-icons/md";

// function Delivery_Methods() {
//   return (
//     <div className="mb-32">
//       <div
//         id="heading"
//         className=" md:py-10 space-y-2 lg:px-32 flex justify-center items-center flex-col "
//       >
//         <div className="text-center font-bold text-xl lg:text-5xl md:lg:sm:w-auto md:w-96 text-violet-800 font">
//           Our Available Delivery Methods
//         </div>
//         <div className=" flex justify-center md:lg:sm:w-auto md:w-96 text-cyan-500">
//           <IoRemoveOutline className="text-[40px]" />
//           <IoReorderThreeOutline className="text-[40px]" />{" "}
//           <IoRemoveOutline className="text-[40px]" />
//         </div>
//         <div className="text-center px-4 text-base md:lg:sm:w-full md:w-[400px] font pb-8">
//           The E-education is World's Leading Organisation for training
//           professionals. The E-education provides training in 490+ locations
//           around 221+ countries, covering 3000 subjects with the following
//           delivery methods
//         </div>
//       </div>
//       <div className="flex md:flex-row justify-center items-center ">
//         <div
//           id="submain"
//           className="grid  lg:grid-cols-4  md:grid-cols-2 md:lg:sm:px-0  grid-cols-1 gap-y-28 gap-x-16  md:mx-20 place-items-center"
//         >
//           <div id="1" className=" relative">
//             <div className=" relative" id="mainone">
//               <div
//                 className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
//                 id="bgimg"
//                 style={{
//                   backgroundImage: `url(${istock})`,
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 bg-black opacity-50 rounded-lg"
//                   style={{ zIndex: 1 }}
//                 ></div>
//               </div>
//               <div
//                 className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 md:w-[288px] w-full h-24"
//                 id="card"
//               >
//                 <p className=" font-bold pt-2 text-[17px]">Training</p>
//                 <Link>
//                   <p className="font-medium pt-2  hover:text-white bg-blue-300 hover:bg-blue-600 rounded p-2">
//                     Enquire Now
//                   </p>
//                 </Link>
//               </div>
//               <div
//                 className="bg-gray-300  px-3 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
//                 id="icon"
//               >
//                 <SiGoogleclassroom className="text-[40px] " />
//               </div>
//             </div>
//           </div>

//           <div id="2" className=" relative">
//             <div className=" relative" id="mainone">
//               <div
//                 className="bg-yellow-700  h-64 w-64 bg-cover bg-center relative rounded-lg"
//                 id="bgimg"
//                 style={{
//                   backgroundImage: `url(${online})`,
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 bg-black opacity-50 rounded-lg"
//                   style={{ zIndex: 1 }}
//                 ></div>
//               </div>
//               <div
//                 className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-8 shadow-2xl absolute text-black -bottom-11 left-4 z-10 md:w-[288px] w-full h-24"
//                 id="card"
//               >
//                 <p className=" font-bold pt-2 text-[17px]">Guided</p>
//                 <Link>
//                   <p className="font-medium pt-2  bg-blue-300 hover:text-white hover:bg-blue-600 rounded p-2">
//                     Enquire Now
//                   </p>
//                 </Link>
//               </div>
//               <div
//                 className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
//                 id="icon"
//               >
//                 <FaLaptopCode className="text-[40px] " />
//               </div>
//             </div>
//           </div>

//           <div id="3" className=" relative">
//             <div className=" relative" id="mainone">
//               <div
//                 className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
//                 id="bgimg"
//                 style={{
//                   backgroundImage: `url(${self})`,
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 bg-black opacity-50 rounded-lg"
//                   style={{ zIndex: 1 }}
//                 ></div>
//               </div>
//               <div
//                 className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 md:w-[288px] w-full h-24"
//                 id="card"
//               >
//                 <p className=" font-bold pt-2 text-[17px]">Autodidactic</p>
//                 <Link>
//                   <p className="font-medium pt-2  hover:text-white bg-blue-300 hover:bg-blue-600 rounded p-2">
//                     Enquire Now
//                   </p>
//                 </Link>
//               </div>
//               <div
//                 className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
//                 id="icon"
//               >
//                 <LiaChalkboardTeacherSolid className="text-[40px] " />
//               </div>
//             </div>
//           </div>

//           <div id="4" className=" relative">
//             <div className=" relative" id="mainone">
//               <div
//                 className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
//                 id="bgimg"
//                 style={{
//                   backgroundImage: `url(${onsite})`,
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 bg-black opacity-50 rounded-lg"
//                   style={{ zIndex: 1 }}
//                 ></div>
//               </div>
//               <div
//                 className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 md:w-[288px] w-full h-24"
//                 id="card"
//               >
//                 {/* <div className="flex justify-center items-center flex-row h-24 gap-8"> */}

//                 <div className=" font-bold pt-2 text-[17px]">Clarification</div>
//                 <Link>
//                   <div className="font-medium  bg-blue-300 hover:text-white hover:bg-blue-600 rounded p-2">
//                     Enquire Now
//                   </div>
//                 </Link>
//                 {/* </div> */}
//               </div>
//               <div
//                 className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
//                 id="icon"
//               >
//                 <MdModelTraining className="text-[40px] " />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Delivery_Methods;
