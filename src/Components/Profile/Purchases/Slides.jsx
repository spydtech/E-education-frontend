import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import IMG from "../../../assets/E-education logo .png";
import IMG from "../../../assets/E- education logo .png";

function Slides() {
  const cards = [
    {
      image:
        "https://img.freepik.com/free-photo/office-workers-using-finance-graphs_23-2150408661.jpg",
      title: "Data Analyst",
      description:
        "Collect, organize, and transform data to make informed decisions",
    },
    {
      image:
        "https://st2.depositphotos.com/3591429/11322/i/450/depositphotos_113222948-stock-photo-people-discussing-ideas.jpg",
      title: "Digital Marketer",
      description:
        "Define and develop digital strategies to deliver business growth through online channels",
    },
    {
      image:
        "https://www.betterteam.com/images/Support-Specialist-Job-Description.jpeg?crop=21:16,smart&width=420&dpr=2&format=pjpg&auto=webp&quality=85",
      title: "IT Support Specialist",
      description:
        "Evaluate and troubleshoot technology issues so equipment runs smoothly",
    },
    {
      image:
        "https://epe.brightspotcdn.com/dims4/default/99fe146/2147483647/strip/true/crop/2000x1357+0+60/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2F75%2Ffa%2F094c14d1492bba3f3e7171f34bcf%2F12142022-e-rate-cyber-security-firewall-technology-1356945261.jpg",
      title: "Cybersecurity",
      description:
        "Develop strategies to protect organizations from cyber-attacks and disruptions.",
    },
    {
      image:
        "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/frontend-development-tools.png",
      title: "Front-End Developer",
      description:
        "Design and develop the look, feel, function, and user experience of a website",
    },
    {
      image:
        "https://www.forbes.com/advisor/wp-content/uploads/2022/06/UX_designer.jpeg.jpg",
      title: "UX Designer",
      description:
        "Make digital and physical products easier and more enjoyable to use",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <div className="container mx-auto mt-5">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="p-2 md:p-4">
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 h-full flex flex-col">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-48 md:h-56 lg:h-64 w-full object-cover mb-4 rounded"
                />
                <h2 className="text-lg md:text-xl font-semibold">
                  {card.title}
                </h2>
                <p className="text-gray-700 mt-2 flex-grow">
                  {card.description}
                </p>
                <a className="text-sky-500 transition-all duration-300 hover:text-white cursor-pointer mt-4">
                  Explore &rarr;
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-blue-100 p-5">
        <div className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left">
          <img
            src={IMG}
            alt="Education Logo"
            className="w-1/2 md:w-1/3 mb-4 md:mb-6"
          />
          <h1 className="mb-2 text-2xl md:text-3xl font-bold">
            <span className="text-green-500">
              Try out different courses to see which one fits your needs
            </span>
          </h1>
          <p className="mb-6">
            Get a 7-day free trial that includes courses, Specializations,
            Projects, and Professional Certificates.
          </p>
          <div className="flex justify-center md:justify-start space-x-5">
            <button className="flex items-center justify-center gap-1 rounded-2xl bg-blue-500 p-3 md:p-5 font-semibold text-white hover:bg-blue-700">
              Learn More &rarr;
            </button>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="https://intellipaat.com/academy/wp-content/uploads/2022/03/home-banner.png"
            alt="Banner"
            className="w-full md:w-3/4 lg:w-2/3 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Slides;
