import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const StartLearningcourses = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    description:
      "Learn the basic principles of cybersecurity, including risk management, threat detection, and security policies.",
    image:
      "https://images.shiksha.com/mediadata/images/articles/1709545684phpPfnagp.jpeg",
    link: "/Cybersecurity/Cybersecurity_fundamentals",
  },
  {
    id: 2,
    title: "Ethical Hacking Basics",
    description:
      "Learn the fundamentals of ethical hacking, including reconnaissance, scanning, and vulnerability assessment.",
    image:
      "https://www.eccouncil.org/cybersecurity-exchange/wp-content/uploads/2022/03/ETHICAL-HACKING.jpg",
    link: "/Ethical_Hacking/basic_ethical_Hacking",
  },
  {
    id: 3,
    title: "Network Security Fundamentals",
    description:
      "Understand the basics of network security, including firewalls, intrusion detection systems, and VPNs.",
    image:
      "https://miro.medium.com/v2/resize:fit:640/1*A2X0FaO48D1tv4HpuKUdkg.jpeg",
    link: "/network_security/network-security-fundamentals",
  },
  {
    id: 4,
    title: "Certified Ethical Hacker",
    description:
      "Prepare for the Certified Ethical Hacker (CEH) certification with comprehensive coverage of ethical hacking topics.",
    image:
      "https://ceh.nativeva.com/wp-content/uploads/2023/04/Unlock-Your-Potential-1-1.png",
    link: "/Ethical-Hacking/certified_Ethical_Hacking",
  },
  {
    id: 5,
    title: "Regression Testing",
    description: "Testing recent changes for new issues.",
    image:
      "https://assets-global.website-files.com/619e15d781b21202de206fb5/62165ea063f4cb7c15c9fc6e_regression-testing-guide.jpg",
    link: "/software-testing/regression-testing",
  },
  {
    id: 6,
    title: "System Testing",
    description: "Testing the complete integrated software.",
    image:
      "https://artoftesting.com/wp-content/uploads/2019/12/System-Testing.jpg",
    link: "/software-testing/system-testing",
  },
  {
    id: 7,
    title: "Performance Testing",
    description: "Testing speed and stability.",
    image:
      "https://artoftesting.com/wp-content/uploads/2019/12/types-of-performance-testing.jpg",
    link: "/software-testing/performance-testing",
  },
  {
    id: 8,
    title: "Usability Testing",
    description: "Testing user-friendliness.",
    image:
      "https://er9wjw26noi.exactdn.com/wp-content/uploads/2022/08/What-is-usability-testing.jpg?lossy=1&quality=88&webp=88&ssl=1",
    link: "/software_testing/usability-testing",
  },
];
const StartLearning = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sh, setShow] = useState(false);
  const navigate = useNavigate();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const displayedCourses = showAllCourses
    ? StartLearningcourses
    : StartLearningcourses.slice(0, 6);

  const handleWishList = (course) => {
    const index = wishlist.findIndex((item) => item.id === course.id);
    if (index !== -1) {
      const updatedWishlist = [...wishlist];
      updatedWishlist.splice(index, 1);
      setWishlist(updatedWishlist);
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, course]);
    }
  };

  useEffect(() => {
    console.log("wish", wishlist);
    if (sh) navigate("/wishLists", { state: { wishlist } });
  }, [wishlist, sh]);

  const handleDelete = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((course) => course.id !== id)
    );
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">
          Pursue Your Degree
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              handleWishList={handleWishList}
              setShow={setShow}
            />
          ))}
        </div>

        <div class=" text-base font-semibold flex justify-center items-center mt-12 pb-8">
          <button
            className="border border-[#0F172A] text-white p-2 rounded-lg bg-[#0F172A] hover:bg-white hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  hover:shadow-2xl shadow-lg shadow-[#0F172A]"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </>
  );
};

const CourseCard = ({ course, handleWishList, setShow }) => {
  const { id, title, description, image, link } = course;
  const [liked, setLiked] = useState(false);

  const handleDataTransfer = () => {
    setShow(true);
    setLiked((prevLiked) => !prevLiked);
    handleWishList(course);
  };

  return (
    <div className="mx-auto relative mb-12 cursor-pointer">
      <Link to={link}>
        <img
          src={image}
          alt={title}
          className="h-[240px] w-full hover:scale-105 transition-all duration-500 shadow-2xl"
        />
        <div
          className="text-center px-4 py-8 bg-white shadow-lg rounded-md
                  md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 hover:-translate-y-4 transition-all duration-300"
        >
          <p>
            {`${description} with`} <span className="font-bold">{title}</span>
          </p>
        </div>
      </Link>
      <Link>
        <button id="wishlist" onClick={handleDataTransfer}>
          {liked ? (
            <FcLike className="w-8 transition-transform duration-300 transform hover:scale-125 rounded h-8 text-white top-3 left-3 absolute" />
          ) : (
            <FcLikePlaceholder className="w-8 rounded text-red-800 h-8 transition-transform duration-300 transform hover:scale-125 top-3 left-3 absolute" />
          )}
        </button>
      </Link>
    </div>
  );
};

export default StartLearning;
