import React from "react";
import { Link } from "react-router-dom";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import IMG from "../../../assets/E- education logo .png";
import footerImg from "../../../assetss/footer_img.jpg";
import footerPic from "../../../assetss/footer_pic.jpg";

const sections = [
  {
    title: "Learning Paths",
    links: [
      {
        label: "Web development",
        Link: "/fullStack_WebDevelopment/fullStack-Web-Development",
      },
      {
        label: "Python Developer",
        Link: "/fullStack_WebDevelopment/fullStack-Python-Development",
      },
      { label: "Data Science", Link: "/data_Science" },
      { label: "Coding For Hacking", Link: "/ethical_Hacking" },
      { label: "Software Testing", Link: "/software_testing" },
    ],
  },
  {
    title: "Student Courses",
    links: [
      {
        label: "Full Stack JavaScript",
        Link: "/fullStack_WebDevelopment/fullStack-Java-Development",
      },
      {
        label: "MERN Stack Development",
        Link: "/fullStack_WebDevelopment/mean-Stack-Developer",
      },
      {
        label: "Full Stack java",
        Link: "/fullStack_WebDevelopment/fullStack-Java-Development",
      },
      {
        label: "Full Stack .Net",
        Link: "/fullStack_WebDevelopment/dot-net-development",
      },
      {
        label: "Full Stack Devops",
        Link: "/fullStack_WebDevelopment/fullStack-Devops",
      },
      {
        label: "Introduction to Data Science",
        Link: "/data_Science/introduction-to-data-science",
      },
      {
        label: "Data Science with python",
        Link: "/data_Science/data-science-with-python",
      },
      {
        label: "Introduction of Data Analytics",
        Link: "/data_Science/big-data-analysis",
      },
      { label: "Big Data Analytics", Link: "/data_Science/big-data-analysis" },
      { label: "Generative AI", Link: "/data_Science/machine-Learning" },
    ],
  },
  {
    title: "Advanced Courses",
    links: [
      {
        label: "Ethical Hacking",
        Link: "/Ethical_Hacking/advance_Ethical_Hacking",
      },
      {
        label: "Network Security",
        Link: "/network_security/advance-network-secuity",
      },
      {
        label: "Mobile App Development",
        Link: "/fullStackMobileAppDevelopment",
      },
      { label: "Data Base Management", Link: "/database" },
      { label: "UI/Ux Design", Link: "/ui_ux_design" },
      { label: "React", Link: "/reactjs" },
      { label: "Wordpress Developemt", Link: "/masteringWordPressDevelopment" },
    ],
  },
  {
    title: "Professional Courses",
    links: [
      { label: "Machine Learning", Link: "/data_Science/machine-Learning" },
      {
        label: "Ethical Hacking",
        Link: "/Ethical_Hacking/advance_Ethical_Hacking",
      },
      { label: "Data Visualization", Link: "/data_Science/data-visualization" },
      {
        label: "Cyber Security",
        Link: "/Cybersecurity/Cybersecurity_fundamentals",
      },
      { label: "Cloud Computing", Link: "/cloud-testing" },
      {
        label: "It and Networking",
        Link: "/network_security/advance-network-secuity",
      },
      { label: "Big Data", Link: "/data_Science/big-data-analysis" },
      { label: "Block Chain Developemt", Link: "/blockchain" },
      {
        label: "DevOps Mastry",
        Link: "/fullStack_WebDevelopment/fullStack-Devops",
      },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discuss", Link: "/" },
      { label: "Feeds", Link: "/PostFeeds" },
      { label: "Ask me!", Link: "/QuestionForm" },
    ],
    socialIcons: [
      {
        icon: <SlSocialLinkedin className="w-6 h-6  text-blue-500" />,
        Link: "https://www.linkedin.com/company/e-edu/",
      },
      {
        icon: <FaFacebookF className="w-6 h-6 text-blue-800" />,
        Link: "https://www.facebook.com/profile.php?id=61558814622409",
      },
      {
        icon: <FiTwitter className="w-6 h-6 text-blue-500" />,
        Link: "https://x.com/eeducatione07",
      },
      {
        icon: <BsInstagram className="w-6 h-6 text-pink-700" />,
        Link: "https://www.instagram.com/eeducatione07/",
      },
      {
        icon: <FaYoutube className="w-6 h-6 text-red-600" />,
        Link: "https://www.youtube.com/@EEducationOnline",
      },
    ],
  },
];

function FooterPart() {
  return (
    <footer
      className="p-5 relative  "
      style={{
        backgroundImage: `url(${footerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div

       
 className="absolute inset-0 bg-[#0098F1]  opacity-70"

        aria-hidden="true"
      ></div>
      <div className="relative z-10">
        <div>
          <div className="flex justify-center">
            <Link to="/">
              <img src={IMG} className="w-52" alt="Your Company" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:justify-between gap-5 lg:mx-3 ">
            {sections.map((section, index) => (
              <div key={index} className="">
                <h3
                  className="mb-2 text-lg font-bold text-white"
                  id={`footer-${section.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {section.title}
                </h3>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="my-1 text-gray-200 text-base hover:underline underline-offset-4"
                    >
                      <Link
                        to={link.Link}
                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                {section.socialIcons && (
                  <div className="flex gap-4 mt-4 flex-wrap ">
                    {section.socialIcons.map((social, socialIndex) => (
                      <a
                        key={socialIndex}
                        href={social.Link}
                        className="transition-colors duration-300 hover:opacity-75 bg-white p-2 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 mx-auto text-center">
            <p className="text-xs text-white">
              &copy; {new Date().getFullYear()} SPY D Technology. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPart;
