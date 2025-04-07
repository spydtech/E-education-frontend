import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

export const newdata = [
  {
    name: "Ashwini Sharma",
    rating: 4.5,
    occupation: "Software Developer",
    comment:
      "The E-education platform offers an extensive range of programming courses. It's transformed my coding skills and boosted my productivity. Well done to the E-education team!",
    image_url: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Ratna Priya",
    rating: 5,
    occupation: "Web Developer",
    comment:
      "I'm impressed with the E-education courses in web design and development. The content is engaging and practical, fueling my creativity and improving my projects. I highly recommend this platform for web developers!",
    image_url: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Raghavendra Kommula",
    rating: 4,
    occupation: "Reactjs Developer",
    comment:
      "E-education's courses on React.js have been invaluable for my projects. The insights gained have simplified my coding strategies and improved my development efficiency. Keep up the great work!",
    image_url: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Ganesh Nitta",
    rating: 4.8,
    occupation: "Full Stack Developer",
    comment:
      "As a Full Stack Developer, I rely on E-education's courses for comprehensive learning in both front-end and back-end technologies. The platform helps me stay updated and improve my skills. A fantastic resource for developers!",
    image_url: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Shyam Chiluveru",
    rating: 4.2,
    occupation: "MERN Stack Developer",
    comment:
      "E-education simplifies complex concepts in MERN stack development with its comprehensive courses. It's indispensable for developers working with MongoDB, Express, React, and Node.js. The intuitive learning interface is a huge plus!",
    image_url: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Pavan Velagana",
    rating: 3.7,
    occupation: "Java Developer",
    comment:
      "The versatility of E-education's courses in Java programming caters perfectly to my development needs. It's an essential asset for streamlining my coding workflow and enhancing productivity. Excellent job!",
    image_url: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Pandi Manipriya",
    rating: 4.9,
    occupation: "UI/UX Designer",
    comment:
      "The E-education platform embodies outstanding user experience principles. The design courses are crafted with a deep understanding of UX/UI principles, making it a pleasure to learn and apply these concepts!",
    image_url: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "Premchand Kanneboina",
    rating: 4.1,
    occupation: "Ethical Hacker",
    comment:
      "E-education's cybersecurity courses are indispensable for enhancing my ethical hacking skills. It's a valuable addition to my toolkit, providing practical insights and strategies for effective cybersecurity practices. Highly recommended!",
    image_url: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

export default function Testimonialss() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 2.2, // Show 2.2 cards to display partial cards on the sides
      autoplay: 1000,
      animationDuration: 700,
      gap: 0, // Adjust gap to control space between cards
      breakpoints: {
        1024: {
          perView: 1.5, // Show 1.5 cards on medium screens
        },
        768: {
          perView: 1, // Show 1 card on small screens
        },
      },
    });

    slider.mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <style>
        {`
          .glide__bullet {
            background-color: #0098f1; /* Blue */
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin: 0 4px;
            transition: all 0.1s;
          }
          .glide__bullet--active {
            width: 30px; /* Increase width when active */
            height: 10px; /* Keep height the same */
            border-radius: 5px; /* Make it more of an oval when active */
            background-color: #0098f1; /* Darker shade of blue */
          }
        `}
      </style>
      <div className="pt-5 font-poppins">
        <div className="text-xl text-black lg:text-5xl font-semibold pb-4 items-center text-center font-sans">
          {/* <span>What our users say</span> */}
        </div>
      </div>
      <div className="glide-01 relative justify-center mb-12 font-lora w-full">
        <div className="overflow-hidden " data-glide-el="track">
          <ul className="glide__slides flex p-0 justify-center ">
            {newdata.map((user, index) => (
              <li
                key={index}
                className="glide__slide flex-none pt-10 flex justify-center items-center"
              >
                <div className="group  shadow-lg relative  w-[300px] md:w-[518px]  h-[258px] m-4  hover:border-none duration-400 hover:scale-105 flex items-center justify-center px-3 text-center cursor-pointer hover:shadow-md transform hover:-translate-y-2 transition-transform">
                  <div className="w-[60px] left-4 rounded-full top-4 h-[60px] absolute group-hover:shadow-md transform duration-300">
                    <img
                      src={user.image_url}
                      alt={user.name}
                      className="rounded-full w-full h-full"
                    />
                  </div>
                  <div className="absolute left-20 top-4 text-black ml-2">
                    <h2 className=" text-[14px] md:text-lg capitalize font-bold font-sans  text-black">
                      {user.name}
                    </h2>
                    <p className="text-blue-500">
                      {user.rating}
                      {"⭐".repeat(Math.floor(user.rating))}
                      {user.rating % 1 !== 0 && "⭐"}
                    </p>
                  </div>
                  <div className="flex text-sm flex-col text-black font-sans items-center justify-center mt-8 p-2">
                    <p className="text-center mt-4">{user.comment}</p>
                  </div>
                  <div className="left-0 absolute rounded-tr-xl bottom-0 w-[280px] md:w-[460px] h-[23px] bg-gradient-to-r from-[#0098f1] via-green-500 to-[#ff9b26]"></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-20 w-auto">
          <div
            className="glide__bullets flex justify-center mt-4"
            data-glide-el="controls[nav]"
          >
            {Array(3)
              .fill()
              .map((_, index) => (
                <button
                  key={index}
                  className="glide__bullet mx-1"
                  data-glide-dir={`=${index}`}
                ></button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
