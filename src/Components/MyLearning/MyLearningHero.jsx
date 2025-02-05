import React from "react";
import MyLearning from "./MyLearning";
import Navbar from "../Navbar";
import FooterPart from "../Home/footer/Footer";
const MyLearningHero = () => {
  return (
    <>
      <Navbar />
 
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
  <div className="col-span-12 md:col-span-7 p-5 m-0 order-2 md:order-1">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight whitespace-nowrap text-center sm:text-left">
      Learn Anything Anywhere My <br />
      <span className="bg-gradient-to-r from-[#F6AC14] to-[#0098F1] text-transparent bg-clip-text">
        Learning Expands 
      </span> Your
      <br />
      Knowledge.
    </h1>

    <p className="mt-4 text-sm md:text-base text-justify">
  Dive into a world of endless learning possibilities with MyLearning. 
  Explore a vast range of courses designed to enhance your skills, knowledge, 
  and career prospects. Whether you're a student, professional, or lifelong 
  learner, our platform offers flexible, accessible, and engaging education 
  tailored to your needs. Expand your horizons anytime, anywhere, with 
  MyLearning's innovative and comprehensive e-education solutions.
</p>


    <div className="col-span-1 md:col-span-10 mt-5">
      <div className="flex items-center justify-center md:justify-start ml-4">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src="https://res.cloudinary.com/dfftgkkev/image/upload/v1727169533/image_11_ev10kg.png"
            alt={`Image ${index + 1}`}
            className="w-[60px] h-[60px] object-cover rounded-full -ml-3"
            style={{ zIndex: 5 - index }} // Adjust zIndex to maintain overlap
          />
        ))}
        <h1 className="text-2xl ml-3"></h1>
      </div>
    </div>
  </div>

  <div className="col-span-12 md:col-span-5 p-0 m-0 order-1 md:order-2 flex justify-center">
  <img 
  src="https://res.cloudinary.com/dfftgkkev/image/upload/v1727165273/image_10_bzzp6u.png" 
  alt="Main Image" 
  className="max-w-[370px] w-full h-auto object-contain border-l-2 border-blue-500 border-r-0 rounded-full p-2" 
/>

  </div>
</div>






























      {/* <div className="h-screen w-screen bg-black">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-24">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div className="space-y-8">
                <div class="space-y-4">
                  <div class="space-y-2">
                    <span class="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      Early Access
                    </span>
                    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                      <span class="sm:text-6xl"></span> Learn Anytime, Anywhere
                      <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                        MyLearning
                      </span>
                      <br />
                      Expand Your Knowledge.
                    </h1>
                  </div>
                  <p class="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Dive into a world of learning with MyLearning. Access a wide
                    range of courses covering various subjects and topics.
                    Enhance your skills and broaden your horizons at your own
                    pace and convenience.
                  </p>
                </div>

                <div className="border-t border-gray-700" />
                <div className="flex space-x-4 items-center text-white">
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-shrink-0 -space-x-1">
                      <img
                        loading="lazy"
                        width={400}
                        height={400}
                        decoding="async"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        style={{ color: "transparent" }}
                        src="https://randomuser.me/api/portraits/men/29.jpg"
                      />
                      <img
                        loading="lazy"
                        width={400}
                        height={400}
                        decoding="async"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        style={{ color: "transparent" }}
                        src="https://randomuser.me/api/portraits/men/90.jpg"
                      />
                      <img
                        loading="lazy"
                        width={100}
                        height={100}
                        decoding="async"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        style={{ color: "transparent" }}
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                      />
                      <img
                        loading="lazy"
                        width={200}
                        height={200}
                        decoding="async"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        style={{ color: "transparent" }}
                        src="https://randomuser.me/api/portraits/men/5.jpg"
                      />
                    </div>
                    <span className="flex-shrink-0 text-xs font-medium leading-5">
                      +15
                    </span>
                  </div>
                  <div className="h-4 border-l border-gray-700" />
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                  </div>
                  <div className="h-4 border-l border-gray-700" />
                  {/* <a href="" target="_blank">
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1&theme=light"
                className="w-32 h-8 md:w-48 md:h-12 lg:w-64 lg:h-16"
                width={250}
                height={54}
              />
            </a> */}
                {/* </div>
              </div>
            </div>
            <div className="flex items-center w-full col-span-6">
              <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
                <div style={{ width: "100%", height: "100%" }}>
                  <div style={{ width: "100%", height: "100%" }}>
                    <iframe
                      frameBorder={0}
                      allowFullScreen={1}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/mr15Xzb1Ook?autoplay=0&mute=0&controls=0&"
                      id="widget2"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <MyLearning />
      <FooterPart />
    </>
  );
};

export default MyLearningHero;
