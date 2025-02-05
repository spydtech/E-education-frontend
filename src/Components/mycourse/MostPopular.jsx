import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MostPopularcourses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Learn how to build web applications from front to back",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP7WwqRZMt45muqpTdBtWssi3TJHjGG4UkwvxBaIBRAV5naPe4-XBwl6tatEPaZWkDDk&usqp=CAU",
    link: "/fullStack_WebDevelopment/fullStack-Web-Development",
  },
  {
    id: 2,
    title: "Full Stack JavaScript",
    description:
      "Master JavaScript for both front-end and back-end development",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpaPlcovcoH9QHUUJmlEgAPMw73NMmJAC4LcyZTNjmQ&s",
    link: "/fullStack_WebDevelopment/full-stack-javascript",
  },
  {
    id: 3,
    title: "MEAN Stack Development",
    description:
      "Explore MongoDB, Express.js, Angular, and Node.js for full-stack development",
    image:
      "https://crampete-staticfiles.s3.ap-south-1.amazonaws.com/blogs/Blog-133/mean-stack-image1.png",
    link: "/fullStack_WebDevelopment/mean-Stack-Developer",
  },
  {
    id: 4,
    title: "Full Stack Python",
    description: "Master Python for both front-end and back-end development",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwU-4XlioqzwP5cv2Ujy_MtoMNogfoYCw5W7rK1cGLyQ&s",
    link: "/fullStack_WebDevelopment/fullStack-Python-Development",
  },
  {
    id: 5,
    title: "Introduction to Data Science",
    description:
      "Learn the basics of data science, including data analysis, visualization, and machine learning.",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg",
    link: "/data_Science/introduction-to-data-science",
  },
  {
    id: 6,
    title: "Data Science with Python",
    description:
      "Master data science concepts and techniques using Python, including libraries like NumPy, Pandas, and Matplotlib.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqXD4t6RsUw-DI-72VKpe7DfmqARUJePZ2oOFrRSsKg&s",
    link: "/data_Science/data-science-with-python",
  },
  {
    "id": 7,
    "title": "Manual Testing",
    "description": "Testing done manually by testers.",
    "image": "https://azilen-technologies.s3.us-west-1.amazonaws.com/wp-content/uploads/2023/07/Manual-testing.jpg",
    "link": "/software-testing/manual-testing"
},
  {
    id: 8,
    title: "Full Stack Java",
    description: "Explore Java for building full-stack applications",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20230926163338/Java-Full-Stack.png",
    link: "/fullStack_WebDevelopment/fullStack-Java-Development",
  },
  {
    id: 9,
    title: "Full Stack .NET",
    description: "Explore the .NET framework for full-stack development",
    image:
      "https://www.radicaltechnologies.co.in/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-25-at-5.55.16-PM-1.jpeg",
    link: "/fullStack_WebDevelopment/dot-net-development",
  },
  
  {
    id: 11,
    title: "Network Security Best Practices",
    description: "Explore best practices for securing network infrastructure.",
    image: "https://networkats.com/wp-content/uploads/2023/06/feaeefe5-f2bd-409c-b069-8869066894f2.webp",
    link: "/network_security/network-security-best-practices",
  },
  {
    id: 12,
    title: "Full Stack DevOps",
    description:
      "Learn DevOps practices for full-stack development environments",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/0*cl7fc6pt1MHjIF4K.png",
    link: "/fullStack_WebDevelopment/fullStack-Devops",
  },
  {
    "id": 13,
    "title": "Automated Testing",
    "description": "Testing using automation tools.",
    "image": "https://api.edoxi.com/assets/studyhub/Automation_Testing_-_Introduction_to_Automation_Testing1.webp",
    "link": "/software-testing/automation-testing"
},
  {
    id: 14,
    title: "Data Analytics",
    description:
      "Gain a solid foundation in statistical methods and their applications in data science.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbm2jd1osOphRA5Qjf93Utd0GYYbtjTDp6BQE6R-K7g&s",
    link: "/data_Science/data-Analatics",
  },
  {
    id: 15,
    title: "Advanced Ethical Hacking",
    description: "Dive deeper into ethical hacking techniques, including exploitation, privilege escalation, and post-exploitation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbv6P5JmHHMLlrqLXCN21RuKXNZTeTxvC2w5T_AoERcEH9YNTrIzAghuPcLAgnN-KAKk&usqp=CAU",
    link: "/Ethical_Hacking/advance_Ethical_Hacking",
  },
];
  const MostPopular = () => {
    const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [sh, setShow] = useState(false);
  const navigate = useNavigate();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const displayedCourses = showAllCourses ? MostPopularcourses : MostPopularcourses.slice(0, 6);

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
  Top Trending Courses
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
  
            <p>{`${description} with`} <span className="font-bold" >{title}</span></p>
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
  
  export default MostPopular;