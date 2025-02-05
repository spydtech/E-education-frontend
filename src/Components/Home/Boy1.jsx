// import React from 'react';
// import Lottie from 'react-lottie';
// import Boy from '../../assets/Home/Boy.json';

// const Boy1 = () => {
//   const defaultOptions = {
   
//     loop: true,
//     autoplay: true,
//     animationData: Boy,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <div className="md:mb-8 lg:mb-16"> {/* Set margin for medium and large screens */}
//       <div className="md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]"> {/* Set height and width for medium and large screens */}
//         <Lottie 
//           options={defaultOptions}
//         />
//       </div>
//     </div>
//   );
// };

// export default Boy1;



import React from 'react';
import Lottie from 'react-lottie';
import Boy from '../../assets/Home/Boy.json';

const Boy1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Boy,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      background: '#0098F1' // Set background color here
    }
  };

  return (
    <div className="md:mb-8 lg:mb-16"> {/* Set margin for medium and large screens */}
      <div className="md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]"> {/* Set height and width for medium and large screens */}
        <Lottie 
          options={defaultOptions}
        />
      </div>
    </div>
  );
};

export default Boy1;

