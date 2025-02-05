import React from "react";
import Nextgen from "../../../../../../../assetss/fullstackwebdev/python/python12.png";

const FullStackPythonDevelopmentCard = () => {
  return (
    <>
      <div className="m-5 text-center lg:flex justify-around">
        <div className="md:flex justify-center">
          <img src={Nextgen} alt="" className="md:w-96" />
        </div>
        <div className="lg:w-[50%] lg:text-start">
          <h2 className="my-2 text-lg md:text-xl lg:text-2xl ">
            Full Stack Python Development
          </h2>
          <h1 className="tracking-tight text-gray-900 leading-6 text-xl md:text-2xl lg:text-3xl font-bold">
            Next-Gen <span className="text-[#F6AC14]">Full Stack</span> Python
            Development
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 text-md">
            Enhance your web applications with our comprehensive Full Stack
            Python development solutions. From powerful backend logic to
            interactive frontend experiences, we leverage Python's versatility
            to deliver scalable and efficient web solutions. Next-Gen Full Stack
            Python Development A degree in Python Full Stack Engineering
            provides a well-rounded education that delves into both front-end
            and back-end technologies, with Python as the cornerstone
            programming language.
          </p>

          <div className="mt-5 flex justify-center lg:justify-start">
            <button className=" bg-[#0098F1] text-white px-6 py-3 rounded transition-all active:scale-95 text-nowrap md:text-xl ">
              <a href="/" className="">
                Explore Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStackPythonDevelopmentCard;

// import React from "react";

// const FullStackPythonDevelopmentCard = () => {
//   return (
//     <>
//       <div className="max-w-screen-xl px-4 mx-auto mt-8 sm:mt-12 sm:px-6 md:mt-16">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-8">
//           <div className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
//             <svg
//               className="absolute top-0 hidden origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:hidden"
//               width={640}
//               height={784}
//               fill="none"
//               viewBox="0 0 640 784"
//             >
//               <defs>
//                 <pattern
//                   id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
//                   x={118}
//                   y={0}
//                   width={20}
//                   height={20}
//                   patternUnits="userSpaceOnUse"
//                 >
//                   <rect
//                     x={0}
//                     y={0}
//                     width={4}
//                     height={4}
//                     className="text-gray-200"
//                     fill="currentColor"
//                   />
//                 </pattern>
//               </defs>
//               <rect
//                 y={72}
//                 width={640}
//                 height={640}
//                 className="text-gray-50"
//                 fill="currentColor"
//               />
//               <rect
//                 x={118}
//                 width={404}
//                 height={784}
//                 fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
//               />
//             </svg>
//             <div className="relative justify-start hidden w-full lg:flex">
//               <div className="flex justify-start  p-8 pr-8 text-base leading-relaxed text-black bg-[#6a4c93] rounded-lg shadow-lg xl:text-lg xl:pr-16">
//                 <pre>
//                   <span className="text-blue-100">
//                     // Create a Full Stack Python app{" "}
//                   </span>
//                   {"\n"}import flask{"\n"}
//                   {"\n"}
//                   <span className="text-blue-100">
//                     // Define your backend endpoints
//                   </span>
//                   {"\n"}@app.route('/api/data'){"\n"}def get_data():{"\n"}
//                   {"  "}return {"{ 'data': 'Hello, World!' }"}
//                   {"\n"}
//                   {"\n"}
//                   <span className="text-blue-100">// Serve React frontend</span>
//                   {"\n"}@app.route('/'){"\n"}def index():{"\n"}
//                   {"  "}return render_template('index.html'){"\n"}
//                   {"\n"}
//                   <span className="text-blue-100">// Start the server</span>
//                   {"\n"}if _name_ == '_main_':{"\n"}
//                   {"  "}app.run(debug=True){"\n"}
//                 </pre>
//               </div>
//             </div>
//           </div>
//           <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
//             <div className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base font">
//               Full Stack Python Development
//             </div>
//             <h2 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-[#6a4c93] sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl font">
//               Next-Gen Full Stack Python Development
//             </h2>
//             <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               Enhance your web applications with our comprehensive Full Stack
//               Python development solutions. From powerful backend logic to
//               interactive frontend experiences, we leverage Python's versatility
//               to deliver scalable and efficient web solutions. Next-Gen Full
//               Stack Python Development A degree in Python Full Stack Engineering
//               provides a well-rounded education that delves into both front-end
//               and back-end technologies, with Python as the cornerstone
//               programming language. This specialized knowledge is critical as it
//               aligns with industry demands, ensuring that graduates are
//             </p>

//             <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
//               <div className="rounded-md shadow font">
//                 <a
//                   href="/"
//                   className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-[#6a4c93] border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
//                 >
//                   Explore Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FullStackPythonDevelopmentCard;
