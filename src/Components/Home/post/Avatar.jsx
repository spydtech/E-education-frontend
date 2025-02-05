// // import React from 'react';


// // const Avatar = () => {
// //   // Sample data array containing avatar URLs and alt text
// //   const avatar = [
// //     { src: 'https://png.pngtree.com/png-clipart/20210718/original/pngtree-smart-e-learning-illustration-png-image_6535699.jpg', alt: 'Avatar 1' },
   
// //     // Add more avatars as needed
// //   ];

// //   return (
// //     <div>
// //     {avatar.map((avatar, index) => (
// //       <img key={index} src={avatar.src} alt={avatar.alt} className="w-8 h-8 rounded-full object-cover mr-2" />
// //     ))}
// //   </div>
// //   );
// // };

// // export default Avatar;

// import React from 'react';


// const Avatar = () => {
//   // Sample data array containing avatar URLs and alt text
//   const avatar = [
//     { src: 'https://png.pngtree.com/png-clipart/20210718/original/pngtree-smart-e-learning-illustration-png-image_6535699.jpg', alt: 'Avatar 1' },
   
//     // Add more avatars as needed
//   ];

//   return (
//     <div>
//     {avatar.map((avatar, index) => (
//       <img key={index} src={avatar.src} alt={avatar.alt} className="w-8 h-8 rounded-full object-cover mr-2" />
//     ))}
//   </div>
//   );
// };

// export default Avatar;


import React from 'react';


const Avatar = () => {
  // Sample data array containing avatar URLs and alt text
  const avatar = [
    { src: 'https://png.pngtree.com/png-clipart/20210718/original/pngtree-smart-e-learning-illustration-png-image_6535699.jpg', alt: 'Avatar 1' },
   
    // Add more avatars as needed
  ];

  return (
    <div>
    {avatar.map((avatar, index) => (
      <img key={index} src={avatar.src} alt={avatar.alt} className="w-12 h-12 rounded-full object-cover mr-2" />
    ))}
  </div>
  );
};

export default Avatar;