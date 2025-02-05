
import React from 'react';
import Navbar from '../../Navbar'
import ImgUrl from '../../../assetss/Home/FeaturesAssets/image.png'

function HeroSection() {
  return (

    <div className=" pb-10 ">
      <div
 className="relative h-[572px] text-[#FFFFFF] bg-cover bg-center text-center  mx-auto "
        style={{ backgroundImage: `url(${ImgUrl})` }}>
        <Navbar/>
        <div className="bg-white bg-opacity-5 p-6 rounded-lg flex flex-col justify-center items-center h-full ">
          <h2 className="  text-2xl absolute top-36  font-medium md:text-4xl">
            The features of learning
          </h2>
        
          <p className="mt-5 md:mt-0 max-w-2xl text-wrap text-opacity-80 ">
            In a world where information is at our fingertips, E-education offers limitless opportunities for personal and professional growth. Embrace the convenience and flexibility of online learning and unlock your potential from anywhere in the world.
          </p>
          <a href="#" className="inline-block w-[300px]  h-[60px] text-lg font-medium text-gray-100 bg-[#0098F1] rounded-lg p-2 mt-20 md:mt-24 mb-10 md:mb-0 py-4 hover:bg-[#f6ac14] hover:shadow-md md:w-48"> Join the Courses</a>
        </div>
      </div>
      <h1 className=" relative text-4xl  text-center py-20">
        We Introduce The <span className=' bg-gradient-to-r bg-clip-text from-[#f6ac14]  to-[#0098f1]  text-transparent'>Advanced</span> Features
      </h1>
      
      <div className="flex flex-col sm:flex-row text-white gap-10 justify-center items-center sm:items-stretch">
        <div className="relative border-l-8 border-l-[#f6ac14] group w-full sm:w-[501px] h-auto sm:h-[425px] bg-[#0098f1] rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-[#f6ac14] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
      <div className="relative z-10  ">
        <h1 className="text-2xl font-bold pb-8 h-16 pt-4 pl-4 relative w-60  overflow-hidden "style={{ borderBottomRightRadius: '1.0rem' }}>
          <span className="relative z-10 pt-4 ">Feeds</span>
          <div className="absolute  top-0 left-0 h-full bg-[#0098f1] transform -translate-x-full group-hover:translate-x-0 hover:border-l-0  transition-transform duration-500 ease-in-out w-full"></div>
        </h1>
        <p className="mt-2 px-[1.25rem] text-white">
          Stay up-to-date with the latest trends, insights, and updates in the world of E-education through our feeds feature. Explore a curated collection of articles, blog posts, videos, and news related to online learning, educational technology, and more. Whether you're looking for tips on effective study strategies, industry trends, or inspiring success stories, our feeds have you covered. Join the conversation, share your thoughts, and connect with a community of learners passionate about E-education.
        </p>
      </div>
    </div>
        <div className="relative border-l-8 border-l-[#f6ac14] group w-full sm:w-[501px] h-auto sm:h-[425px] bg-[#0098f1] rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-[#f6ac14] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
          <div className="relative z-10 ">
            <h1 className="text-2xl pb-8 h-16 font-bold pt-4 pl-4 relative w-60 overflow-hidden " style={{ borderBottomRightRadius: '1.0rem' }}>
              <span className="relative z-10">Ask Me Question</span>
              <div className="absolute top-0 left-0 h-full bg-[#0098f1] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out w-full"></div>
            </h1>
            <p className="mt-2 px-[1.25rem] text-white">
              Got a burning question about E-education? Do not worry, we have got you covered! Our Ask Me a Question feature allows you to get instant answers to your queries from our team of experts. Whether you need advice on choosing the right course, tips for staying motivated, or guidance on navigating the world of online learning, simply submit your question and let our knowledgeable team provide you with the answers you need. With Ask Me a Question, help is just a click away, so dont hesitate to reach out and make the most of your E-education journey.
            </p>
          </div>
        </div>
      </div>
     
    </div>
   

  )
}

export default HeroSection




// import React, { useState, useEffect } from 'react';

// const images = [
//     'https://www.shutterstock.com/image-photo/young-serious-busy-professional-business-600nw-2223351471.jpg',
//     'https://findit-resources.s3.amazonaws.com/forums/1677056552844.jpg',
//     'https://media.istockphoto.com/id/1403523196/photo/focused-female-adult-student-in-headphones-using-laptop.jpg?s=612x612&w=0&k=20&c=Aqz1SYxmeF9WsFWEiX3cZ4-AHJ6ltNRgPX8M98VpwtU=',
//   ];

// function HeroSection() {
//     const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     }, 3000); // Change the time interval here (in milliseconds) for auto-sliding

//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className='py-10 ' >


// <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

    
//     <div class="w-full h-64 lg:w-1/2 lg:h-auto ">
//     <div className="relative">
//       <div className="overflow-hidden">
//         <img
//           className="w-full h-auto py-10"
//           src={images[currentSlide]}
//           alt={`Slide ${currentSlide + 1}`}
//         />
//       </div>
//       <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-4">
//         <button
//           onClick={prevSlide}
//           className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
//         >
//           &larr;
//         </button>
//         <button
//           onClick={nextSlide}
//           className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
//         >
//           &rarr;
//         </button>
//       </div>
//     </div>
   
//     </div>
    
//     <div
//         class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-20 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-20 xl:ml-12">
       
//         <div class="flex flex-col p-12 md:px-16">
//             <h2 class="text-2xl font-medium uppercase text-green-800 lg:text-4xl"> the Future of Learning</h2>
//             <p class="mt-4">
//             In a world where information is at our fingertips,
//              E-education offers limitless opportunities for personal and professional growth.
//              Embrace the convenience and flexibility of online learning and unlock your potential from anywhere in the world.
//             </p>
          
//             <div class="mt-8">
//                 <a href="#"
//                     class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 p-2 border-gray-600 py-2  hover:bg-green-800 hover:shadow-md md:w-48">Join the Courses
//                     </a>
//             </div>
//         </div>
      
//     </div>
   

// </div>
// <h1 className='text-4xl font text-center py-10'>We Introduce The Advanced Features </h1>
// <div className='flex gap-10 justify-center'> 
// <div class="notification">
//     <div class="notiglow"></div>
//     <div class="notiborderglow"></div>
//     <div class="notititle">Feeds</div>
//     <div class="notibody">Stay up-to-date with the latest trends, insights,
//      and updates in the world of E-education through our feeds feature. 
//      Explore a curated collection of articles, blog posts, videos,
//       and news related to online learning, educational technology, and more. 
//       Whether you're looking for tips on effective study strategies, industry trends, 
//       or inspiring success stories, our feeds have you covered. Join the conversation, 
//       share your thoughts,
//      and connect with a community of learners passionate about E-education.</div>
//   </div>

//   <div class="notification">
//     <div class="notiglow"></div>
//     <div class="notiborderglow"></div>
//     <div class="notititle">Ask Me Question</div>
//     <div class="notibody">Got a burning question about E-education? Don't worry,
//      we've got you covered! Our "Ask Me a Question" feature allows you to get instant 
//      answers to your queries from our team of experts. Whether you need advice on
//       choosing the right course, tips for staying motivated, or guidance on navigating 
//       the world of online learning, simply submit your question and let our knowledgeable 
//       team provide you with the answers you need. With "Ask Me a Question," 
//       help is just a click away, 
//     so don't hesitate to reach out and make the most of your E-education journey.</div>
//   </div>
//   <style jsx>{`
//   .notification {
//     display: flex;
//     flex-direction: column;
//     isolation: isolate;
//     position: relative;
//     width: 25rem;
//     height: 20rem;
//     background: #29292c;
//     border-radius: 1rem;
//     overflow: hidden;
//     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
//     font-size: 16px;
//     --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
//     --color: #32a6ff
//   }
  
//   .notification:before {
//     position: absolute;
//     content: "";
//     inset: 0.0625rem;
//     border-radius: 0.9375rem;
//     background: #18181b;
//     z-index: 2
//   }
  
//   .notification:after {
//     position: absolute;
//     content: "";
//     width: 0.25rem;
//     inset: 0.65rem auto 0.65rem 0.5rem;
//     border-radius: 0.125rem;
//     background: var(--gradient);
//     transition: transform 300ms ease;
//     z-index: 4;
//   }
  
//   .notification:hover:after {
//     transform: translateX(0.15rem)
//   }
  
//   .notititle {
//     color: var(--color);
//     padding: 0.65rem 0.25rem 0.4rem 1.25rem;
//     font-weight: 500;
//     font-size: 1.1rem;
//     transition: transform 300ms ease;
//     z-index: 5;
//   }
  
//   .notification:hover .notititle {
//     transform: translateX(0.15rem)
//   }
  
//   .notibody {
//     color: #99999d;
//     padding: 0 1.25rem;
//     transition: transform 300ms ease;
//     z-index: 5;
//   }
  
//   .notification:hover .notibody {
//     transform: translateX(0.25rem)
//   }
  
//   .notiglow,
//   .notiborderglow {
//     position: absolute;
//     width: 20rem;
//     height: 20rem;
//     transform: translate(-50%, -50%);
//     background: radial-gradient(circle closest-side at center, white, transparent);
//     opacity: 0;
//     transition: opacity 300ms ease;
//   }
  
//   .notiglow {
//     z-index: 3;
//   }
  
//   .notiborderglow {
//     z-index: 1;
//   }
  
//   .notification:hover .notiglow {
//     opacity: 0.1
//   }
  
//   .notification:hover .notiborderglow {
//     opacity: 0.1
//   }
  
//   .note {
//     color: var(--color);
//     position: fixed;
//     top: 80%;
//     left: 50%;
//     transform: translateX(-50%);
//     text-align: center;
//     font-size: 0.9rem;
//     width: 75%;
//   }
//   `}</style>
// </div>

//     </div>
//   )
// }

// export default HeroSection