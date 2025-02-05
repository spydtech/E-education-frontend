// import React from 'react';

function Notification() {
  // Dummy data for notifications
  const notifications = [
    {
      id: 1,
      name: 'Jan Doe',
      image: 'https://randomuser.me/api/portraits/women/71.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, laborum?'
    },
    {
      id: 2,
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/71.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, laborum?'
    },
    {
      id: 3,
      name: 'Mike Doe',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, laborum?'
    }
    ,
    {
      id: 3,
      name: 'Mike Doe',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, laborum?'
    }
    ,
    {
      id: 3,
      name: 'Mike Doe',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, laborum?'
    }

  ];

  return (
    <div>
      <div className=' p-5 flex flex-col gap-3 bg-blue-200 border rounded-lg' style={{ overflowY: 'scroll', maxHeight: '300px' }}>
        {notifications.map(notification => (
          <div key={notification.id} className="relative  ">
            <button onClick={() => console.log("Notification removed")} className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full -top-1 -right-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
            <div className="flex items-center p-4">
              <img className="object-cover w-12 h-12 rounded-lg" src={notification.image} alt=""/>
              <div className="ml-3 overflow-hidden">
                <p className="font-medium text-gray-900">{notification.name}</p>
                <p className="max-w-xs text-sm text-gray-500 truncate">{notification.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
// import React from 'react';

// function Notification({ notifications }) {
//   return (
//     <div>
//       <div className='p-5 flex flex-col gap-3 bg-[#e0afa0] border-2 shadow-lg rounded-lg w-[450px]' style={{ overflowY: 'scroll', maxHeight: '330px' }}>
//         <h1 className='text-xl'>Updates</h1>
//         {notifications.map(notification => (
//           <div key={notification.id} className="relative">
//             <button onClick={() => console.log("Notification removed")} className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full -top-1 -right-1">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <div className="flex overflow-hidden items-center p-4">
//               <img className="object-cover w-12 h-12 rounded-lg" src={notification.image} alt=""/>
//               <div className="ml-3">
//                 <p className="font-medium text-gray-900">{notification.name}</p>
//                 <p className="max-w-xs text-sm text-gray-500 truncate">{notification.message}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Notification;

// import React from 'react';

// function Notification({ notifications }) {
//   return (
//     <div>
//       <div className='p-5 flex flex-col gap-3 bg-[#e0afa0] border-2 shadow-lg rounded-lg w-[450px]' style={{ overflowY: 'scroll', maxHeight: '330px' }}>
//         <h1 className='text-xl'>Updates</h1>
//         { notifications.map(notification => (
//           <div key={notification.id} className="relative">
//             <button onClick={() => console.log("Notification removed")} className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full -top-1 -right-1">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <div className="flex overflow-hidden items-center p-4">
//               <img className="object-cover w-12 h-12 rounded-lg" src={notification.image} alt=""/>
//               <div className="ml-3">
//                 <p className="font-medium text-gray-900">{notification.name}</p>
//                 <p className="max-w-xs text-sm text-gray-500 truncate">{notification.message}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Notification;


// import React from 'react';

// function Notification({ notifications }) {
//   return (
//     <div>
//       <div className='p-5 flex flex-col gap-3 bg-[#e0afa0] border-2 shadow-lg rounded-lg w-[450px]' style={{ overflowY: 'scroll', maxHeight: '330px' }}>
//         <h1 className='text-xl'>Updates</h1>
//         {notifications.map(notification => (
//           <div key={notification.id} className="relative">
//             <button onClick={() => console.log("Notification removed")} className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full -top-1 -right-1">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <div className="flex overflow-hidden items-center p-4">
//               <img className="object-cover w-12 h-12 rounded-lg" src={notification.image} alt="" />
//               <div className="ml-3">
//                 <p className="font-medium text-gray-900">{notification.name}</p>
//                 <p className="max-w-xs text-sm text-gray-500 truncate">{notification.message}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Notification;