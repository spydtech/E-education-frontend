// import { useState, useEffect } from "react";
// import anime from "animejs/lib/anime.es.js";

// const WaterDropGrid = () => {
//   return (
//     <div className="relative grid place-items-start bg-slate-900 px-8 py-12">
//       <DotGrid />
//     </div>
//   );
// };

// const DotGrid = () => {
//   const [gridSize, setGridSize] = useState({ width: 25, height: 20 });

//   const handleResize = () => {
//     if (window.innerWidth < 640) {
//       // Mobile view
//       setGridSize({ width: 10, height: 8 });
//     } else if (window.innerWidth < 1024) {
//       // Tablet/mid view
//       setGridSize({ width: 15, height: 12 });
//     } else {
//       // Desktop view
//       setGridSize({ width: 25, height: 20 });
//     }
//   };

//   useEffect(() => {
//     handleResize(); // Set the initial size
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleDotClick = (e) => {
//     anime({
//       targets: ".dot-point",
//       scale: [
//         { value: 1.35, easing: "easeOutSine", duration: 250 },
//         { value: 1, easing: "easeInOutQuad", duration: 500 },
//       ],
//       translateY: [
//         { value: -15, easing: "easeOutSine", duration: 250 },
//         { value: 0, easing: "easeInOutQuad", duration: 500 },
//       ],
//       opacity: [
//         { value: 1, easing: "easeOutSine", duration: 250 },
//         { value: 0.5, easing: "easeInOutQuad", duration: 500 },
//       ],
//       delay: anime.stagger(100, {
//         grid: [gridSize.width, gridSize.height],
//         from: e.target.dataset.index,
//       }),
//     });
//   };

//   const dots = [];
//   let index = 0;

//   for (let i = 0; i < gridSize.width; i++) {
//     for (let j = 0; j < gridSize.height; j++) {
//       dots.push(
//         <div
//           className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
//           data-index={index}
//           key={`${i}-${j}`}
//         >
//           <div
//             className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
//             data-index={index}
//           />
//         </div>
//       );
//       index++;
//     }
//   }

//   return (
//     <div className="text-white flex lg:flex-row flex-col-reverse justify-center items-center">
//       <div className="lg:mb-[40px] mt-4">
//         <div className="lg:text-8xl md:text-4xl text-xl">
//           Unlock Your Potential
//         </div>
//         <div className="mt-4 md:pr-8">
//           Welcome to our platform where you can unlock your potential through
//           engaging courses tailored for personal and professional growth. Access
//           your courses conveniently on our user-friendly dashboard, allowing you
//           to learn at your own pace and on your schedule.
//         </div>
//         <button className="border border-blue-800 hover:bg-white hover:text-black font-bold p-2 rounded-lg bg-blue-800 text-white mt-4">
//           Join Now
//         </button>
//       </div>
//       <div
//         onClick={handleDotClick}
//         style={{ gridTemplateColumns: `repeat(${gridSize.width}, 1fr)` }}
//         className="grid place-items-start place-content-start"
//       >
//         {dots}
//       </div>
//     </div>
//   );
// };

// export default WaterDropGrid;


import { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const WaterDropGrid = () => {
  return (
    <div className="relative bg-slate-900 px-8 py-12">
      <DotGrid />
    </div>
  );
};

const DotGrid = () => {
  const [gridSize, setGridSize] = useState({ width: 25, height: 20 });

  const handleResize = () => {
    if (window.innerWidth < 640) {
      // Mobile view
      setGridSize({ width: 10, height: 8 });
    } else if (window.innerWidth < 1024) {
      // Tablet/mid view
      setGridSize({ width: 15, height: 12 });
    } else {
      // Desktop view
      setGridSize({ width: 25, height: 20 });
    }
  };

  useEffect(() => {
    handleResize(); // Set the initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [gridSize.width, gridSize.height],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < gridSize.width; i++) {
    for (let j = 0; j < gridSize.height; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div className="text-white flex lg:flex-row flex-col justify-center items-center">
      <div className="order-2 lg:order-1 lg:mb-[40px] text-center md:text-left">
        <div className="lg:text-8xl md:text-4xl text-xl">
          Unlock Your Potential
        </div>
        <div className="mt-4 md:pr-8">
          Welcome to our platform where you can unlock your potential through
          engaging courses tailored for personal and professional growth. Access
          your courses conveniently on our user-friendly dashboard, allowing you
          to learn at your own pace and on your schedule.
        </div>
        <button className="border border-blue-800 hover:bg-white hover:text-black font-bold p-2 rounded-lg bg-blue-800 text-white mt-4">
          Join Now
        </button>
      </div>
      <div
        onClick={handleDotClick}
        style={{ gridTemplateColumns: `repeat(${gridSize.width}, 1fr)` }}
        className="grid order-1 lg:order-2 mb-4 lg:mb-0"
      >
        {dots}
      </div>
    </div>
  );
};

export default WaterDropGrid;
