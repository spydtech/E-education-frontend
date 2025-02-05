import React from "react";

const FeatureOfReactJs = () => {
  return (
    <>
      <section className="mt-6 ">
        <div className="mx-2 md:pt-6  flex flex-col lg:h-svh justify-center">
          <div className=" flex-col  flex ">
            <div className="md:text-3xl lg:text-4xl text-2xl  pb-1 tracking-tighter font-semibold  text-balance text-center ">
              <span className="bg-gradient-to-r  from-[#ff9b26] to-[#0098f1] bg-clip-text text-transparent">
                {" "}
                ReactJS's Key Features
              </span>
            </div>{" "}
            {/* Starts component */}
            <div className=" pt-2 ">
              <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2  ">
                <div className=" justify-center items-center flex">
                  {" "}
                  <img
                    src="https://miro.medium.com/max/1225/1*I9eEGngIcmn7Ckcoxq2pxA.png"
                    alt="#_"
                    className="shadow-box w-[300px] md:w-auto"
                  />{" "}
                </div>
                <div className="mx-4 md:ml-8 flex justify-center items-center">
                  <div>
                    {" "}
                    <p className="lg:text-3xl text-2xl  font-semibold text-gray-700 text-balance">
                      Component-Based Architecture
                    </p>
                    <p className="lg:text-lg text-[16px] mt-4 text-gray-700 text-balance">
                      ReactJS introduces a revolutionary component-based
                      architecture, allowing developers to build encapsulated
                      and reusable UI components. With React components,
                      developers can easily manage complex user interfaces,
                      streamline development workflows, and promote code
                      reusability, resulting in more modular and maintainable
                      codebases.
                    </p>
                    <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 text-gray-950">
                      <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                        {" "}
                        <svg
                          className="icon icon-tabler text-gray-700 size-4 icon-tabler-360"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4" />
                          <path d="M9 13l3 3l-3 3" />
                        </svg>{" "}
                        <span className="text-gray-950 font-medium text-sm">
                          Clear data visibility
                        </span>{" "}
                      </div>
                      <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                        {" "}
                        <svg
                          className="icon icon-tabler text-gray-700 size-4 icon-tabler-antenna-bars-3"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 18l0 -3" />
                          <path d="M10 18l0 -6" />
                          <path d="M14 18l0 .01" />
                          <path d="M18 18l0 .01" />
                        </svg>{" "}
                        <span className="text-gray-950 font-medium text-sm">
                          Reduced external factors
                        </span>{" "}
                      </div>
                      <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                        {" "}
                        <svg
                          className="icon icon-tabler text-gray-700 size-4 icon-tabler-load-balancer"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                          <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M12 16v3" />
                          <path d="M12 10v-7" />
                          <path d="M9 6l3 -3l3 3" />
                          <path d="M14.894 12.227l6.11 -2.224" />
                          <path d="M17.159 8.21l3.845 1.793l-1.793 3.845" />
                          <path d="M9.101 12.214l-6.075 -2.211" />
                          <path d="M6.871 8.21l-3.845 1.793l1.793 3.845" />
                        </svg>{" "}
                        <span className="text-gray-950 font-medium text-sm">
                          Enhanced stability
                        </span>{" "}
                      </div>
                      <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                        {" "}
                        <svg
                          className="icon icon-tabler text-gray-700 size-4 icon-tabler-brand-speedtest"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
                          <path d="M16 9l-4 4" />
                        </svg>{" "}
                        <span className="text-gray-950 font-medium text-sm">
                          Accelerated times
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureOfReactJs;
