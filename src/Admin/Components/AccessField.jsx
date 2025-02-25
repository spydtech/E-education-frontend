// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import img1 from "./../../assetss/AccessFields/trainer.png";
// import img2 from "./../../assetss/AccessFields/employee.png";
// import RegisterTrainee from "./Register/RegisterTraniee";
// import RegisterEmployee from "./Register/RegisterEmployee";

// const AccessField = () => {
//   const navigate = useNavigate();
//   const [darkMode, setDarkMode] = useState(false);
//   const dispatch = useDispatch();
//   const themes = localStorage.getItem("theme");

//   const [showTrainerForm, setShowTrainerForm] = useState(false);
//   const [showEmployeeForm, setShowEmployeeForm] = useState(false);

//   const handleShowEmployeeForm = () => {
//     if (showTrainerForm) setShowTrainerForm(false); // Close Trainer form if open
//     setShowEmployeeForm(!showEmployeeForm); // Toggle Employee form
//   };

//   const handleShowTrainerForm = () => {
//     if (showEmployeeForm) setShowEmployeeForm(false); // Close Employee form if open
//     setShowTrainerForm(!showTrainerForm); // Toggle Trainer form
//   };

//   return (
//     <div className="flex p-8 px-6 min-h-screen font-poppins">
//       <h2>Choose Access Type</h2>
//       <div className="justify-center">
//         <div className="flex justify-center mt-20 gap-5">
//           <div
//             onClick={handleShowTrainerForm}
//             className="justify-center gap-2 w-[350px] border-2 border-[#989898] rounded-3xl cursor-pointer"
//           >
//             <h1 className="text-center pt-2">Trainer</h1>
//             <img
//               className="w-[350px] h-[300px] rounded-3xl p-2"
//               src={img1}
//               alt="Trainer"
//             />
//             {showTrainerForm && (
//               <div className="justify-center p-2 h-[350px] -mt-14">
//                 <RegisterTrainee />
//               </div>
//             )}
//           </div>

//           <div
//             onClick={handleShowEmployeeForm}
//             className="justify-center gap-2 w-[350px] border-2 border-[#989898] rounded-3xl cursor-pointer"
//           >
//             <h1 className="text-center pt-2">Employee</h1>
//             <img
//               className="w-[350px] h-[300px] rounded-3xl p-2"
//               src={img2}
//               alt="Employee"
//             />
//             {showEmployeeForm && (
//               <div className="justify-center p-2 h-[350px] -mt-14">
//                 <RegisterEmployee />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccessField;


import React, { useState } from "react";
import img1 from "./../../assetss/AccessFields/trainer.png";
import img2 from "./../../assetss/AccessFields/employee.png";
import RegisterTrainee from "./Register/RegisterTraniee";
import RegisterEmployee from "./Register/RegisterEmployee";

const AccessField = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleShowForm = (type) => {
    setActiveForm(activeForm === type ? null : type);
  };

  return (
    <div className="flex flex-col  p-8 min-h-screen font-poppins">
      <h2 className="text-lg  text-gray-700 mb-6">Choose Access Type</h2>

      <div className="flex justify-center  gap-6 mr-24">
        {/* Trainer Card */}
        <div
          onClick={() => handleShowForm("trainer")}
          className={`flex flex-col items-center w-[400px] border-2 border-[#989898] rounded-3xl cursor-pointer transition-all duration-300 ${
            activeForm === "trainer" ? "h-[600px] w-[600px] pb-4" : "h-[300px]"
          }`}
        >
          <h1 className="text-center pt-2 text-lg font-medium">Trainer</h1>
          <img className="w-[400px] h-[250px] rounded-3xl p-2" src={img1} alt="Trainer" />

          {/* Trainer Form Inside the Container */}
          {activeForm === "trainer"  && (
            <div 
            onClick={(e) => e.stopPropagation()} 
            className="w-[300px] p-4 -mt-10 mr-32">
              <RegisterTrainee />
            </div>
          )}
        </div>

        {/* Employee Card */}
        <div
          onClick={() => handleShowForm("employee")}
          className={`flex flex-col items-center  w-[400px] border-2 border-[#989898] rounded-3xl cursor-pointer transition-all duration-300 ${
            activeForm === "employee" ? "h-[600px] w-[600px] pb-4" : "h-[300px] "
          }`}
        >
          <h1 className="text-center pt-2 text-lg font-medium">Employee</h1>
          <img className="w-[400px] h-[250px] rounded-3xl p-2" src={img2} alt="Employee" />

          {/* Employee Form Inside the Container */}
          {activeForm === "employee" && (
            <div 
            onClick={(e) => e.stopPropagation()} 
            className="w-[300px] p-4 -mt-10 mr-32">
              <RegisterEmployee />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccessField;
