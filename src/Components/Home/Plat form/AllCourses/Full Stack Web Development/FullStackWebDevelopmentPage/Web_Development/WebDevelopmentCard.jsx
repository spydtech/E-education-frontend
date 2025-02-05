import React from "react";
// import nextgen from "../../../../../../assetss/fullstackwebdev/nextGen.png"
import Nextgen from "../../../../../../../assetss/fullstackwebdev/webdev/nextGen.jpg";

const WebDevelopmentCard = () => {
  return (
    <>
      <div className="m-5 text-center lg:flex justify-around">
        <div className="md:flex justify-center">
          <img src={Nextgen} alt="" className="md:w-96" />
        </div>
        <div className="lg:w-[50%] lg:text-start">
          <h2 className="my-2 text-lg md:text-xl lg:text-2xl ">
            Full Stack Web Development
          </h2>
          <h1 className="tracking-tight text-gray-900 leading-6 text-xl md:text-2xl lg:text-3xl font-bold">
            Next-Gen <span className="text-[#F6AC14]">Full Stack</span> Web
            Development
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 text-md">
            Elevate your digital presence with our comprehensive full-stack web
            development solutions. From robust backend architecture to engaging
            front-end interfaces, we empower your online presence with
            cutting-edge technologies and seamless user experiences.
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

export default WebDevelopmentCard;

//  {/* <svg
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
//               <div className="flex justify-start inline-block p-8 pr-8 text-base leading-relaxed text-blue-400 bg-indigo-900 rounded-lg shadow-lg xl:text-lg xl:pr-16">
//                 <pre>
//                   <span className="text-blue-100">// Create a Web page</span>
//                   {"\n"}$tenant = Tenant::create();{"\n"}
//                   $tenant-&gt;createDomain([
//                   {"\n"}
//                   {"  "}'domain' =&gt; 'acme.com',{"\n"}]);{"\n"}
//                   {"\n"}
//                   <span className="text-blue-100">
//                     // Write your Web page like you're used to
//                   </span>
//                   {"\n"}Order::where('status', 'shipped')-&gt;get();{"\n"}
//                   Cache::get('order_count');{"\n"}asset('logo.png');{"\n"}
//                   dispatch(new SendOrderCreatedMail);
//                 </pre>
//               </div>
//             // </div> */}
