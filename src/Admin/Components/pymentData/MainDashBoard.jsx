import React, { useState } from "react";
import AllPaymentsTable from "./TotalPayments";
import CompletedPaymentsTable from "./CompletedPaymentsTable";
import RejectedPaymentsTable from "./RejectedPaymentsTable";
import PendingPaymentsTable from "./PendingPaymentsTable";
import ProcessingPaymentsTable from "./ProcessingPaymentTable";
import { useDispatch, useSelector } from "react-redux";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All");
  const themes = localStorage.getItem("theme");
  const handleTabChange = (event) => {
    setActiveTab(event.target.value);
  };

  const renderTable = () => {
    switch (activeTab) {
      case "All":
        return <AllPaymentsTable />;
      case "Completed":
        return <CompletedPaymentsTable />;
      case "Rejected":
        return <RejectedPaymentsTable />;
      case "Pending":
        return <PendingPaymentsTable />;
      case "Processing":
        return <ProcessingPaymentsTable />;
      default:
        return <AllPaymentsTable />;
    }
  };

  const totalEarningsCard = [
    {
      title: "Total Earnings",
      amount: "₹4,50,000",
      textColor: "text-green-600",
      Date: "02/July/2024",
    },
  ];

  const pendingPaymentsCard = [
    {
      title: "Pending Payments",
      amount: "₹10,000",
      textColor: "text-red-700",
      Date: "02/July/2024",
    },
  ];

  const withdrawalMethodCard = [
    {
      title: "Withdrawal Method",
      amount: "Acc No: 1736738373",
      textColor: "text-black",
    },
  ];

  return (
    <div className="p-4 max-w-full ">
      {" "}
      {/* Prevent horizontal overflow */}
      {/* Cards Grid */}
      <div
        className={`  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6`}
      >
        {/* Total Earnings Card */}
        {totalEarningsCard.map((card, index) => (
          <div
            key={index}
            className={`

                ${themes === "dark" ? "bg-black text-white" : "text-white   "} 
            
            w-full  text-white bg-[#ff259d] h-[160px] rounded-lg grid grid-cols-[1fr_auto] relative`}
          >
            <div className="flex flex-col justify-center p-4 pl-6">
              <h2 className="text-xs md:text-xl font-semibold">{card.title}</h2>
              <p className="text-sm mt-2">{card.Date}</p>
              <p className="text-2xl font-bold mt-2">{card.amount}</p>
            </div>
            <div
              style={{
                clipPath: "ellipse(60% 60% at 70% 50%)",
              }}
              className="rounded-r-lg bg-white bg-opacity-60 w-[80px] h-full flex items-center justify-center"
            ></div>
          </div>
        ))}

        {/* Pending Payments Card */}
        {pendingPaymentsCard.map((card, index) => (
          <div
            key={index}
            className={` w-full bg-[#0098f1]  text-white  h-[160px] rounded-lg grid grid-cols-[1fr_auto] relative`}
          >
            <div className="flex flex-col justify-center p-4 pl-6">
              <h2 className="text-xs md:text-xl font-semibold">{card.title}</h2>
              <p className="text-sm mt-2">{card.Date}</p>
              <p className="text-2xl font-bold mt-2">{card.amount}</p>
            </div>
            <div
              style={{
                clipPath: "ellipse(60% 60% at 70% 50%)",
              }}
              className="rounded-r-lg bg-white bg-opacity-60 w-[80px] h-full flex items-center justify-center"
            ></div>
          </div>
        ))}

        {/* Withdrawal Method Card */}
        {withdrawalMethodCard.map((card, index) => (
          <div
            key={index}
            className={`   bg-[#ff2f6a] w-full text-white  h-[160px] rounded-lg grid grid-cols-[1fr_auto] relative`}
          >
            <div className="flex flex-col justify-center p-4 pl-6">
              <h2 className="text-xs md:text-xl font-semibold">{card.title}</h2>
              <p className="text-xl font-bold mt-2">{card.amount}</p>
            </div>
            <div
              style={{
                clipPath: "ellipse(60% 60% at 70% 50%)",
              }}
              className="rounded-r-lg bg-white bg-opacity-60 w-[80px] h-full flex items-center justify-center"
            ></div>
          </div>
        ))}
      </div>
      {/* Payment History Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-2 py-4 mb-4">
        <h2 className="text-lg sm:text-xl md:text-2xl text-[#153243] font-semibold">
          Payment History
        </h2>
        <select
          value={activeTab}
          onChange={handleTabChange}
          className="w-full sm:w-[190px] mt-2 sm:mt-0 p-3 bg-[#153243] text-white rounded-lg"
        >
          <option value="All">Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      {/* Table Section */}
      <div className="p-4 overflow-x-auto max-w-full">{renderTable()}</div>{" "}
      {/* Add max-w-full */}
    </div>
  );
};

export default Dashboard;

// import React, { useState } from "react";
// import AllPaymentsTable from "./TotalPayments";
// import CompletedPaymentsTable from "./CompletedPaymentsTable";
// import RejectedPaymentsTable from "./RejectedPaymentsTable";
// import PendingPaymentsTable from "./PendingPaymentsTable";
// import ProcessingPaymentsTable from "./ProcessingPaymentTable";
// import girl from "../../../assetss/Home/Admin.png"
// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("All");

//   const handleTabChange = (event) => {
//     setActiveTab(event.target.value);
//   };

//   const renderTable = () => {
//     switch (activeTab) {
//       case "All":
//         return <AllPaymentsTable />;
//       case "Completed":
//         return <CompletedPaymentsTable />;
//       case "Rejected":
//         return <RejectedPaymentsTable />;
//       case "Pending":
//         return <PendingPaymentsTable />;
//       case "Processing":
//         return <ProcessingPaymentsTable />;
//       default:
//         return <AllPaymentsTable />;
//     }
//   };

//   const totalEarningsCard = [
//     {
//       title: "Total Earnings",
//       amount: "₹4,50,000",
//       textColor: "text-green-600",

//       Date: "02/July/2024",
//     },
//   ];

//   const pendingPaymentsCard = [
//     {
//       title: "Pending Payments",
//       amount: "₹10,000",
//       textColor: "text-red-700",

//       Date: "02/July/2024",
//     },
//   ];

//   const withdrawalMethodCard = [
//     {
//       title: "Withdrawal Method",
//       amount: "Acc No: 1736738373",
//       textColor: "text-black",
//     },
//   ];

//   return (
//     <div className="p-4">
//       {/* Card Section */}
//       <div className="flex items-center mb-6">
//         <img
//           src={girl} // Replace with actual image URL
//           alt="Admin"
//           className="w-12 h-12 rounded-full  mr-3"
//         />
//         <h2 className=" bg-gradient-to-r from-[#00BF8F] to-[#153243]   text-transparent bg-clip-text text-lg font-semibold">Admin Name</h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         {/* Total Earnings Card */}
//         {totalEarningsCard.map((card, index) => (
//           <div
//             key={index}
//             className={`w-full text-white bg-[#ff259d] h-[160px] rounded-lg grid grid-cols-[1fr_auto]  relative`}
//           >
//             <div className="flex flex-col justify-center rounded-l-lg p-4 pl-6">
//               <h2 className="text-xs md:text-xl font-semibold">{card.title}</h2>
//               <p className="text-sm mt-2">{card.Date}</p>
//               <p className={` text-2xl font-bold mt-2`}>{card.amount}</p>
//             </div>
//             <div
//               style={{
//                 clipPath: "ellipse(60% 60% at 70% 50%)",
//               }}
//               className="rounded-r-lg bg-white bg-opacity-60 w-[80px] h-full flex items-center justify-center"
//             ></div>
//           </div>
//         ))}

//         {/* Pending Payments Card */}
//         {pendingPaymentsCard.map((card, index) => (
//           <div
//             key={index}
//             className={`w-full text-white bg-[#0098f1] h-[160px] rounded-lg grid grid-cols-[1fr_auto]  relative`}
//           >
//             <div className="flex flex-col justify-center rounded-l-lg p-4 pl-6">
//               <h2 className="text-xs md:text-xl font-semibold">{card.title}</h2>
//               <p className="text-sm mt-2">{card.Date}</p>
//               <p className={` text-2xl font-bold mt-2`}>{card.amount}</p>
//             </div>
//             <div
//               style={{
//                 clipPath: "ellipse(60% 60% at 70% 50%)",
//               }}
//               className="rounded-r-lg bg-white bg-opacity-60 w-[80px] h-full flex items-center justify-center"
//             ></div>
//           </div>
//         ))}

//         {/* Withdrawal Method Card */}
//         {withdrawalMethodCard.map((card, index) => (
//           <div
//             key={index}
//             className={`w-full text-white bg-[#ff2f6a] h-[160px] rounded-lg grid grid-cols-[1fr_auto]  relative`}
//           >
//             <div className="flex flex-col justify-center rounded-l-lg p-4 pl-6">
//               <h2 className="text-xs md:text-xl font-semibold">{card.title}</h2>
//               <p className={` text-xl font-bold mt-2`}>{card.amount}</p>
//             </div>
//             <div
//               style={{
//                 clipPath: "ellipse(60% 60% at 70% 50%)",
//               }}
//               className="rounded-r-lg bg-white bg-opacity-60 w-[80px] h-full flex items-center justify-center"
//             ></div>
//           </div>
//         ))}
//       </div>

//       {/* Payment History Section */}
//       <div className="flex items-center justify-between px-2 py-4 mb-4">
//         <h2 className="text-xl sm:text-sm md:text-2xl text-[#153243] font-semibold">
//           Payment History
//         </h2>
//         <select
//           value={activeTab}
//           onChange={handleTabChange}
//           className="w-full md:w-[190px] p-3 bg-[#153243] outline-none focus:outline-none focus:ring-0 focus:border-transparent border-none text-white rounded-lg"
//         >
//           <option value="All">Status</option>
//           <option value="Completed">Completed</option>
//           <option value="Pending">Pending</option>
//           <option value="Processing">Processing</option>
//           <option value="Rejected">Rejected</option>
//         </select>
//       </div>

//       {/* Table Section */}
//       <div className="row-span-auto p-4 overflow-x-auto">{renderTable()}</div>
//     </div>
//   );
// };

// export default Dashboard;
