// import React, { useState } from "react";
// import { FaRobot } from "react-icons/fa";

// function Payment() {
//   const [name, setName] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [country, setCountry] = useState("");
//   const [robotVerification, setRobotVerification] = useState(false);

//   const Names = ["John Doe"];

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add your submission logic here
//     console.log("Form submitted!");
//   };
//   return (
//     <div className="max-w-sm md:max-w-xl mx-auto border  shadow bg-white w-[30rem]  p-4 rounded-lg md:w-[40rem]">
//       <h1 className="text-xl font-bold mb-6">Payment </h1>

//       <form onSubmit={handleSubmit}>
//         <div className="mb-6 flex flex-col md:flex-row gap-4  md:gap-20">
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Name on card:
//           </label>
//           <input
//             type="text"
//             id="name"
//             value={Names}
//             onChange={(e) => setName(e.target.value)}
//             className="p-2 rounded border border-gray-300 md:w-[300px] -mt-2"
//             required
//           />
//         </div>

//         <div className="mb-6 flex flex-col md:flex-row gap-4  md:gap-20">
//           <label
//             htmlFor="cardNumber"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Card Number:
//           </label>
//           <input
//             type="number"
//             id="cardNumber"
//             placeholder="Enter  your card Number"
//             value={cardNumber}
//             onChange={(e) => setCardNumber(e.target.value)}
//             className="-mt-2 p-2 rounded border border-gray-300 md:w-[300px]"
//             required
//           />
//         </div>

//         <div className="mb-6 flex flex-col md:flex-row gap-4 gap-8">
//           <label
//             htmlFor="expiryDate"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Expiry Date (dd/mm):
//           </label>
//           <input
//             type="text"
//             id="expiryDate"
//             placeholder="MM/YY"
//             value={expiryDate}
//             onChange={(e) => setExpiryDate(e.target.value)}
//             className="-mt-2 p-2 rounded border border-gray-300 md:w-[300px]"
//             required
//           />
//         </div>

//         <div className="mb-6 flex flex-col md:flex-row gap-4 md:gap-[8.5rem]">
//           <label
//             htmlFor="cvv"
//             className="block text-sm font-medium text-gray-700"
//           >
//             CVV:
//           </label>
//           <input
//             type="number"
//             id="cvv"
//             placeholder="CVV"
//             value={cvv}
//             onChange={(e) => setCvv(e.target.value)}
//             className="-mt-2 p-2 rounded border border-gray-300 w-[100px] md:w-[100px]"
//             required
//           />
//         </div>

//         <div className="mb-6 flex flex-col md:flex-row gap-4 md:gap-[7rem]">
//           <label
//             htmlFor="country"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Country:
//           </label>
//           <select
//             id="country"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//             className="-mt-2 p-2 rounded border border-gray-300 md:w-[300px]"
//             required
//           >
//             <option value="">Select Country</option>
//             <option value="USA">USA</option>
//             <option value="UK">UK</option>
//             <option value="Canada">Canada</option>
//           </select>
//         </div>

//         <div className="flex items-center mb-6">
//           <FaRobot className="text-blue-500 mr-4" />
//           <div className="flex items-center flex">
//             <input
//               type="checkbox"
//               id="robotVerification"
//               checked={robotVerification}
//               onChange={(e) => setRobotVerification(e.target.checked)}
//               className="mr-2"
//             />
//             <label htmlFor="robotVerification">I'm not a robot</label>
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Payment;
import React, { useState, useEffect } from "react";
import { FaRobot } from "react-icons/fa";

function Payment() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [country, setCountry] = useState("");
  const [robotVerification, setRobotVerification] = useState(false);

  // Dummy user data
  const Names = ["John Doe"];

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here
    console.log("Form submitted!");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className=" relative ">
        <img
          src="src/assetss/payments/image.png"
          className="w-full h-80 object-cover "
        />
        <div className="absolute inset-0 bg-[#FF9B2659] opacity-35"></div>
      </div>
      <div className="">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Payment</h3>
        </div>
        {/* <h1 className="text-2xl  text-center text-[#0098F1]">Payment</h1> */}
        <form
          onSubmit={handleSubmit}
          className=" grid grid-cols-2 justify-center items-center mx-4"
        >
          <div className="m-4 space-y-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              Name on card
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-[#0098F18C] rounded-md"
              required
            />
          </div>

          <div className="m-4 space-y-1">
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-black"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full p-2 border border-[#0098F18C] rounded-md"
              required
            />
          </div>

          <div className="m-4 space-y-1">
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-black"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full p-2 border border-[#0098F18C] rounded-md"
              required
            />
          </div>

          <div className="m-4 space-y-1">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-black"
            >
              Country
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-2 border border-[#0098F18C] rounded-md"
              required
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          <div className="m-4 space-y-1">
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-black"
            >
              Expiry Date (MM/YY)
            </label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full p-2 border border-[#0098F18C] rounded-md"
              required
            />
          </div>

          <div className="flex items-center m-4 space-y-1">
            <input
              type="checkbox"
              id="robotVerification"
              checked={robotVerification}
              onChange={(e) => setRobotVerification(e.target.checked)}
              className="mr-2"
            />
            <label
              htmlFor="robotVerification"
              className="text-sm font-semibold text-black"
            >
              I'M NOT A ROBOT
            </label>
          </div>

          <div className="col-span-2 flex justify-center my-5">
            <button
              type="submit"
              className="bg-[#0098F1] text-white font-semibold w-60 h-10 rounded hover:bg-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
