import React from 'react'
import img1 from '../../../assetss/feature/explore.png'
import img2 from '../../../assetss/feature/enroll.png'
import img3 from '../../../assetss/feature/learn.jpg'
import img4 from '../../../assetss/feature/achieve.png'

function Features2() {
  return (
    <div className="">
    <h1 className="text-2xl md:text-4xl font-lora text-center py-10">
      Start your <span className='bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent'>Learning</span> journey
    </h1>
    <div className="flex sm:flex-row flex-wrap gap-5 justify-center items-center">
      <div className="w-[293px] h-[400px] bg-[#0098f1] text-white flex flex-col items-center">
        <img src={img1}/>
        <div className="p-4">
          <h1 className="text-2xl font-semibold mt-4">Explore</h1>
          <p className="mt-2">
            Browse our curated selection of courses spanning various disciplines and industries.
          </p>
        </div>
      </div>
      <div className="w-[293px] h-[400px] bg-[#0098f1] text-white flex flex-col items-center">
        <img src={img2} className='h-[190px] w-full object-cover'/>
        <div className="p-4">
          <h1 className="text-2xl font-semibold mt-4">Enroll</h1>
          <p className="mt-2">
            Choose the courses that align with your goals and enroll with just a few clicks.
          </p>
        </div>
      </div>
      <div className="w-[293px] object-cover h-[400px] bg-[#0098f1] text-white flex flex-col items-center">
        <img src={img3} className='h-[190px] w-full object-cover'/>
        <div className="p-4">
          <h1 className="text-2xl font-semibold mt-4">Learn</h1>
          <p className="mt-2">
            Dive into engaging learning materials, interact with instructors, and progress at your own pace.
          </p>
        </div>
      </div>
      <div className="w-[293px] h-[400px] bg-[#0098f1] text-white flex flex-col items-center">
        <img src={img4} className='h-[190px] w-full object-cover'/>
        <div className="p-4">
          <h1 className="text-2xl font-semibold mt-4">Achieve</h1>
          <p className="mt-2">
            Master new skills, earn certifications, and achieve your personal and professional goals.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Features2


// import React from 'react'

// function Features2() {
//   return (
//     <div>
//         <div className='flex flex-col md:flex-row gap-10 py-10'>
//         <div class="card1">
//   <div class="card-image1 ">
//     <img src='https://www.shutterstock.com/image-vector/creative-thinking-process-study-activities-600nw-215369221.jpg' 
//     className='rounded-lg h-[200px] w-[300px]'/>
//   </div>
//   <p class="card-title1">Explore</p>
//   <p class="card-body">
//   Browse our curated selection of courses spanning various disciplines and industries.
//   </p>
//  </div>
// {/* 2nd card */}
// <div class="card1">
//   <div class="card-image1">
//     <img 
//     src='https://cdn.pixabay.com/photo/2018/03/18/11/58/recruit-3236547_640.jpg'
//     className='rounded-lg h-[200px] w-[300px]'/>
//   </div>
//   <p class="card-title1">Enroll</p>
//   <p class="card-body">
//   Choose the courses that align with your goals and enroll with just a few clicks.
//   </p>
//   </div>
// {/* 3rd card */}
// <div class="card1">
//   <div class="card-image1">
//     <img 
//     src='https://img.freepik.com/free-vector/soft-skills-isometric-symbolic-composition-with-woman-employee-improving-personal-development-achieve-business-goals_1284-59854.jpg?w=740&t=st=1714053350~exp=1714053950~hmac=433591cc3bb82c289b19a3f7f62d64aa6e97917633054848d4463fb9b29d322d'
//     className='rounded-lg h-[200px] w-[300px]'
//     />
//   </div>
//   <p class="card-title1">Learn</p>
//   <p class="card-body">
//   Dive into engaging learning materials, interact with instructors, and progress at your own pace.
//   </p>
//  </div>

// {/* 4th card */}
// <div class="card1">
//   <div class="card-image1">
//   <img 
//     src='https://img.freepik.com/premium-vector/outstanding-students-bring-trophies-awards_18660-767.jpg?w=740'
//     className='rounded-lg h-[200px] w-[300px]'
//     />
//   </div>
//   <p class="card-title1">Achieve</p>
//   <p class="card-body">
//   Master new skills, earn certifications, and achieve your personal and professional goals.
//   </p>
//  </div>

//         </div>
       
//        <style jsx>{`
//        .card1 {
//         padding: 20px;
//         width: 330px;
//         min-height: 370px;
//         border-radius: 20px;
//         background: #e8e8e8;
//         box-shadow: 5px 5px 6px #dadada,
//                      -5px -5px 6px #f6f6f6;
//         transition: 0.4s;
//       }
      
//       .card:hover {
//         translate: 0 -10px;
//       }
      
//       .card-title1 {
//         font-size: 18px;
//         font-weight: 600;
//         color: #2e54a7;
//         margin: 15px 0 0 10px;
//       }
      
//       .card-image1 {
//         min-height: 170px;
//         background-color: #c9c9c9;
//         border-radius: 15px;
//         box-shadow: inset 8px 8px 10px #c3c3c3,
//                   inset -8px -8px 10px #cfcfcf;
//       }
      
//       .card-body {
//         margin: 13px 0 0 10px;
//         color: rgb(31, 31, 31);
//         font-size: 15px;
//       }
      
//       .footer {
//         float: right;
//         margin: 28px 0 0 18px;
//         font-size: 13px;
//         color: #636363;
//       }
      
//       .by-name {
//         font-weight: 700;
//       }
       
//        `}</style>
//        <div>
//        <h1 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  font  border-teal-400  dark:text-gray-200">
//        Join the E-education Revolution
// </h1>

// <div class="sm:flex items-center max-w-screen-xl">
//     <div class="sm:w-1/2 p-10">
//         <div class="image object-center text-center">
//             <img src="https://i.imgur.com/WbQnbas.png" />
//         </div>
//     </div>
//     <div class="sm:w-1/2 p-5">
//         <div class="text">
//             <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
//             <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">Join <span class="text-indigo-600">E-education</span>
//             </h2>
//             <p class="text-gray-700 pb-5">
//             Experience the power of E-education and take control of your learning journey. 
//             Start today and embark on a path of continuous growth and success.
//             </p>
//             <button class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-indigo-600
//         before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-indigo-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Join</button>
//         </div>
//     </div>
// </div>
//        </div>
//     </div>
//   )
// }

// export default Features2