// import React from "react";
// // import successImage from "../Assests_MeanStack/successstoryimages/studentsitting.jpg";
// import successImage from "../../../../../../../assets/Assests_MeanStack/successstoryimages/studentsitting.jpg";
// import company from "../../../../../../../assets/Assests_MeanStack/successstoryimages/company.png";
// import webcertificate from "../../../../../../../assets/Assests_MeanStack/successstoryimages/webcertificate.png";
// import { ImQuotesLeft } from "react-icons/im";

// function SuccessStory() {
//   return (
//     <div className="relative h-screen flex flex-col justify-center items-center bg-white mt-8">
//       {/* Background Image */}
//       <div
//         className="relative bg-cover bg-center w-96 h-96 mb-4 mt-4 sm:w-80 sm:h-80 md:w-96 md:h-96"
//         style={{
//           backgroundImage: `url(${successImage})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Company Background Strip */}
//         <div
//           className="md:lg:xl:block"
//           style={{
//             position: "absolute",
//             top: "10px",
//             marginLeft: "400px",
//             transform: "translateX(-50%)",
//             display: "flex",
//             alignItems: "center",
//             backgroundColor: "white",
//             padding: "10px",
//             borderRadius: "8px",
//             zIndex: 1,
//             height: "40px",
//             width: "120px",
//           }}
//         >
//           <img
//             src={company}
//             alt="company"
//             style={{
//               height: "30px",
//               width: "30px",
//             }}
//           />
//           <p style={{ marginLeft: "10px", fontSize: "10px" }}>
//             finished
//             <br /> kotlin track
//           </p>
//         </div>

//         {/* Web Developer Certificate */}
//         <div
//           style={{
//             position: "absolute",
//             top: "60px",
//             left: "-50px",
//             display: "flex",
//             alignItems: "center",
//             backgroundColor: "white",
//             padding: "10px",
//             borderRadius: "8px",
//             zIndex: 1,
//             height: "40px",
//             width: "160px",
//           }}
//         >
//           <img
//             src={webcertificate}
//             alt="webdeveloper"
//             style={{
//               height: "30px",
//               width: "30px",
//             }}
//           />
//           <p style={{ marginLeft: "0px", fontSize: "10px" }}>
//             MEAN stack developer
//             <br /> certificate
//           </p>
//         </div>

//         {/* ImQuotesLeft Strip */}
//         <div
//           style={{
//             position: "absolute",
//             top: "10px",
//             left: "10px",
//             display: "flex",
//             alignItems: "center",
//             backgroundColor: "white",
//             padding: "10px",
//             borderRadius: "8px",
//             zIndex: 1,
//             height: "40px",
//             width: "60px",
//           }}
//         >
//           <ImQuotesLeft
//             style={{
//               color: "skyblue",
//               fontSize: "20px",
//               marginBottom: "10px",
//             }}
//           />
//           <p
//             style={{ marginLeft: "10px", color: "white", fontSize: "14px" }}
//           ></p>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="text-center mb-8 bg-white rounded-lg p-8 shadow-lg border border-gray-200">
//         <h1
//           className="text-4xl  pb-4"
//           style={{ fontStyle: "italic", color: "black", fontSize: "30px" }}
//         >
//           The Success Story of{" "}
//           <span className="text-blue-600" style={{ fontFamily: "Arial" }}>
//             Ryan
//           </span>
//         </h1>

//         <p className="text-black mb-4 mx-4 text-justify">
//           Ryan embarked on their path with a vision and resolve.
//           <br /> They encountered obstacles but remained steadfast.
//           <br /> Through diligence and resilience, they reached their goals.
//           <br /> Ryan's journey motivates us to chase our ambitions.
//           <br /> Ryan started their journey with a dream and determination.
//           <br /> They faced challenges but never gave up. <br />
//           With hard work and perseverance, they achieved success.
//           <br /> Ryan's story inspires us all to pursue our dreams relentlessly.
//         </p>
//         <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
//           Start your success story
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SuccessStory;

import React, { useEffect, useState } from "react";
// import successImage from "../../../../../../../../assets/success.png";
// import company from "../../../../../../../../assets/company.png";
// import webcertificate from "../../../../../../../../assets/webcertificate.png";
// import { ImQuotesLeft } from "react-icons/im";

function SuccessStory() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative  flex flex-col justify-center items-center bg-white m-3 md:m-5">
      {/* Background Image */}

      {/* Content */}
      <div className=" bg-white rounded-lg shadow-lg border border-gray-200 p-2 md:p-5 flex flex-col">
        <h1 className="md:text-4xl text-xl text-[#F6AC14] italic text-center my-2 ">
          The Success Story of <span className="text-[#0098F1] ">Vishnu</span>
        </h1>

        <p className="text-[#0098F1]">
          Vishnu embarked on their journey with a clear vision and unyielding
          determination.
          <br /> Despite facing countless hurdles, they remained resolute.
          <br /> Through persistent effort and resilience,they surmounted every
          obstacle.
          <br /> Vishnu's unwavering commitment inspires us all to pursue our
          aspirations.
          <br /> They commenced their adventure with a dream and fierce resolve.
          <br /> Confronted by adversity,they stood firm and persevered.
        </p>
        <button className="bg-[#0098F1] hover:bg-[#F6AC14] text-white py-2 px-4 rounded-md self-center my-2">
          Start your success story
        </button>
      </div>
    </div>
  );
}

export default SuccessStory;

// <div
// className="relative bg-cover bg-center w-96 h-96 mb-4 mt-4 sm:w-80 sm:h-80 md:w-96 md:h-96"
// style={{
//   backgroundImage: `url(https://media.istockphoto.com/id/1322844568/photo/education-concept-positive-young-man-with-backpack-headphones-and-notebooks-posing-on-orange.jpg?s=612x612&w=0&k=20&c=5pSZkkzIGQYBNlkSh95lJdC75ZixcziIEMAEacHpWmM=)`,
//   backgroundPosition: "top",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
// }}
// >
// {isLargeScreen && (
//   <>
//     {/* Company Background Strip */}
//     <div
//       style={{
//         position: "absolute",
//         top: "10px",
//         marginLeft: "400px",
//         transform: "translateX(-50%)",
//         display: "flex",
//         alignItems: "center",
//         backgroundColor: "white",
//         padding: "10px",
//         borderRadius: "8px",
//         zIndex: 1,
//         height: "40px",
//         width: "120px",
//       }}
//     >
//       <img
//         src={company}
//         alt="company"
//         style={{
//           height: "30px",
//           width: "30px",
//         }}
//       />
//       <p style={{ marginLeft: "10px", fontSize: "10px" }}>
//         finished
//         <br /> kotlin track
//       </p>
//     </div>

//     {/* Web Developer Certificate */}
//     <div
//       style={{
//         position: "absolute",
//         top: "60px",
//         left: "-50px",
//         display: "flex",
//         alignItems: "center",
//         backgroundColor: "white",
//         padding: "10px",
//         borderRadius: "8px",
//         zIndex: 1,
//         height: "40px",
//         width: "160px",
//       }}
//     >
//       <img
//         src={webcertificate}
//         alt="webdeveloper"
//         style={{
//           height: "30px",
//           width: "30px",
//         }}
//       />
//       <p style={{ marginLeft: "0px", fontSize: "10px" }}>
//         full stack javascript developer
//         <br /> certificate
//       </p>
//     </div>

//     {/* ImQuotesLeft Strip */}
//     <div
//       style={{
//         position: "absolute",
//         top: "10px",
//         left: "10px",
//         display: "flex",
//         alignItems: "center",
//         backgroundColor: "white",
//         padding: "10px",
//         borderRadius: "8px",
//         zIndex: 1,
//         height: "40px",
//         width: "60px",
//       }}
//     >
//       <ImQuotesLeft
//         style={{
//           color: "skyblue",
//           fontSize: "20px",
//           marginBottom: "10px",
//         }}
//       />
//       <p
//         style={{ marginLeft: "10px", color: "white", fontSize: "14px" }}
//       ></p>
//     </div>
//   </>
// )}
// </div>
