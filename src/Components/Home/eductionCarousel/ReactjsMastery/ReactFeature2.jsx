import React from "react";

function ReactFeature2() {
  return (
    <>
      <div className="mx-4 grid  grid-cols-1 gap-6 lg:grid-cols-2 md:gap-8  items-center justify-center">
        <div className="mx-4 justify-center p-2 flex items-center">
          <div>
            <p className="lg:text-3xl  text-2xl mt-6 tracking-tight font-semibold text-gray-700 text-balance">
              Virtual DOM for Enhanced Performance
            </p>
            <p className="text-sm md:text-base mt-4 text-gray-700 text-balance">
              ReactJS leverages a Virtual DOM (Document Object Model) to
              optimize rendering performance. By maintaining a lightweight
              in-memory representation of the actual DOM, React minimizes DOM
              manipulation, significantly reducing rendering times and enhancing
              overall application performance. This efficient approach ensures
              smoother user experiences, particularly in applications with
              dynamic and data-driven content.
            </p>
            <div className="mt-6 text-xs md:text-sm font-medium grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-4 text-gray-950">
              <div className="inline-flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-database text-gray-700 size-4"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
                  <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                  <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                </svg>
                <span className="text-gray-950 font-medium">
                  Transparent Data Access
                </span>
              </div>
              <div className="inline-flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-building text-gray-700 size-4"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l18 0" />
                  <path d="M9 8l1 0" />
                  <path d="M9 12l1 0" />
                  <path d="M9 16l1 0" />
                  <path d="M14 8l1 0" />
                  <path d="M14 12l1 0" />
                  <path d="M14 16l1 0" />
                  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                </svg>
                <span className="text-gray-950 font-medium">
                  Lowered Interference
                </span>
              </div>
              <div className="inline-flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-augmented-reality-2 text-gray-700 size-4"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5" />
                  <path d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z" />
                  <path d="M13 14.5v4.5l4 2.5" />
                  <path d="M17 17l4 -2.5" />
                  <path d="M11 4h2" />
                </svg>
                <span className="text-gray-950 font-medium">
                  Improved Reliability
                </span>
              </div>
              <div className="inline-flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-time-duration-0 text-gray-700 size-4"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12v.01" />
                  <path d="M21 12v.01" />
                  <path d="M12 21v.01" />
                  <path d="M12 3v.01" />
                  <path d="M7.5 4.2v.01" />
                  <path d="M16.5 4.2v.01" />
                  <path d="M16.5 19.8v.01" />
                  <path d="M7.5 19.8v.01" />
                  <path d="M4.2 16.5v.01" />
                  <path d="M19.8 16.5v.01" />
                  <path d="M19.8 7.5v.01" />
                  <path d="M4.2 7.5v.01" />
                  <path d="M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z" />
                </svg>
                <span className="text-gray-950 font-medium">
                  Faster Processing Times
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center flex">
          <img
            src="https://www.developeronrent.com/newcss/images/SVG/hire-reactjs-developer.png"
            alt="React Feature Image"
            className="shadow-box w-[300px] md:w-auto"
          />
        </div>
      </div>
    </>
  );
}

export default ReactFeature2;
