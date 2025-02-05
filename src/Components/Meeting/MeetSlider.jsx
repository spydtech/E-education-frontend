// // // import React, { useState, useEffect } from 'react';

// // // const MeetSlider = () => {
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// // //   const handleToggleSidebar = (e) => {
// // //     e.stopPropagation();
// // //     setIsSidebarOpen(!isSidebarOpen);
// // //   };

// // //   const handleCloseSidebar = (e) => {
// // //     if (!document.getElementById('sidebar').contains(e.target) && 
// // //         !document.getElementById('open-sidebar').contains(e.target)) {
// // //       setIsSidebarOpen(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     document.addEventListener('click', handleCloseSidebar);
// // //     return () => {
// // //       document.removeEventListener('click', handleCloseSidebar);
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="bg-gray-100">
// // //       <div className="h-screen flex overflow-hidden bg-gray-200">
// // //         {/* Sidebar */}
// // //         <div
// // //           className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300 right-0 ${isSidebarOpen ? '' : 'translate-x-full'}`}
// // //           id="sidebar"
// // //         >
// // //           {/* Sidebar Content */}
// // //           <div className="p-4">
// // //             <h1 className="text-2xl font-semibold">Sidebar</h1>
// // //             <ul className="mt-4">
// // //               <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Home</a></li>
// // //               <li className="mb-2"><a href="#" className="block hover:text-indigo-400">About</a></li>
// // //               <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Services</a></li>
// // //               <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Contact</a></li>
// // //             </ul>
// // //           </div>
// // //         </div>

// // //         {/* Content */}
// // //         <div className="flex-1 flex flex-col overflow-hidden">
// // //           {/* Navbar */}
// // //           <div className="bg-white shadow">
// // //             <div className="container mx-auto">
// // //               <div className="flex justify-between items-center py-4 px-2">
// // //                 <h1 className="text-xl font-semibold">Animated Drawer</h1>
// // //                 <button
// // //                   className="text-gray-500 hover:text-gray-600"
// // //                   id="open-sidebar"
// // //                   onClick={handleToggleSidebar}
// // //                 >
// // //                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
// // //                   </svg>
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MeetSlider;

// // // src/components/Drawer.js
// // import React from 'react';
// // import moment from 'moment';
// // import Calendar from '../trainee/Calendar/Calendar';
// // const MeetSlider = ({ isOpen, onClose, events  }) => {
// //   return (
// //     <div className={`fixed inset-0 flex items-end justify-end z-50 ${isOpen ? 'visible' : 'invisible'}`}>
// //       <div
// //         className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
// //         onClick={onClose}
// //       ></div>
// //       <div
// //         className={`transform top-0 right-0 w-64 bg-white p-4 fixed h-full overflow-auto ease-in-out transition-all duration-300 ${
// //           isOpen ? 'translate-x-0' : 'translate-x-full'
// //         }`}
// //       >
// //         <h2 className="text-2xl font-semibold">MeetSlider Content</h2>

// //         <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
// //           Close MeetSlider
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MeetSlider;
// import React from 'react';
// import moment from 'moment';

// const MeetSlider = ({ isOpen, onClose, selectedEventDetails }) => {
//   return (
//     <div className={`fixed inset-0 flex items-end justify-end z-50 ${isOpen ? 'visible' : 'invisible'}`}>
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
//         onClick={onClose}
//       ></div>
//       <div
//         className={`transform top-0 right-0 w-64 bg-white p-4 fixed h-full overflow-auto ease-in-out transition-all duration-300 ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <h2 className="text-2xl font-semibold">MeetSlider Content</h2>

//         {selectedEventDetails && (
//           <div className='mt-4 bg-blue-200 border border-blue-800 text-start p-5'>
//             <h3 className='font-bold'>Event Details:</h3>
//             <p>Title: {selectedEventDetails.title}</p>
//             <p>Start: {moment(selectedEventDetails.start).format('MMMM Do YYYY, h:mm a')}</p>
//             <p>End: {moment(selectedEventDetails.end).format('MMMM Do YYYY, h:mm a')}</p>
//             <p>Type: {selectedEventDetails.type}</p>
//           </div>
//         )}

//         <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
//           Close MeetSlider
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MeetSlider;
// import React from 'react';
// import moment from 'moment';

// const MeetSlider = ({ isOpen, onClose, selectedEventDetails }) => {
//   return (
//     <div className={`fixed inset-0 flex items-end justify-end z-50 ${isOpen ? 'visible' : 'invisible'}`}>
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
//         onClick={onClose}
//       ></div>
//       <div
//         className={`transform top-0 right-0 w-64 bg-white p-4 fixed h-full overflow-auto ease-in-out transition-all duration-300 ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <h2 className="text-2xl font-semibold">MeetSlider Content</h2>

//         {selectedEventDetails && (
//           <div className='mt-4 bg-blue-200 border border-blue-800 text-start p-5'>
//             <h3 className='font-bold'>Event Details:</h3>
//             <p>Title: {selectedEventDetails.title}</p>
//             <p>Start: {moment(selectedEventDetails.start).format('MMMM Do YYYY, h:mm a')}</p>
//             <p>End: {moment(selectedEventDetails.end).format('MMMM Do YYYY, h:mm a')}</p>
//             <p>Type: {selectedEventDetails.type}</p>
//           </div>
//         )}

//         <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
//           Close MeetSlider
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MeetSlider;



import React from 'react';

import Calendar from './Gcalender';

const MeetSlider = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-end justify-end z-50 ${isOpen ? 'visible' : 'invisible'}`}>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      ></div>
      <div
        className={`transform top-0 right-0 w-96 bg-white p-4 fixed h-full overflow-auto ease-in-out transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div>
          <Calendar />
        </div>

      </div>
      <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Close MeetSlider
      </button>
    </div>
  );
};

export default MeetSlider;


