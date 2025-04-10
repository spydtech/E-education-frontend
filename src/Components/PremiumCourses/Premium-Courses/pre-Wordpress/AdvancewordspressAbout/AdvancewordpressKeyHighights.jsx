import React, { useState } from "react";

function AdvancewordpressKeyHighlights() {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    { label: "Overview" },
    { label: "Key Concepts" },
    { label: "Applications" },
    { label: "Skills Developed" },
    { label: "Target Audience" },
  ];

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 0:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Overview</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Comprehensive modules on WordPress site building</li>
              <li>Hands-on projects for real-world website development</li>
              <li>Training on popular page builders like Elementor</li>
              <li>Custom themes and plugin development</li>
              <li>SEO optimization for WordPress sites</li>
              <li>Responsive design implementation</li>
              <li>Security best practices and backup solutions</li>
              <li>WordPress site migration and hosting essentials</li>
              <li>Live mentor sessions and career guidance</li>
              <li>Course certification and alumni status</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>WordPress architecture and file structure</li>
              <li>Theme customization and child themes</li>
              <li>Plugin development and integration</li>
              <li>WooCommerce for eCommerce</li>
              <li>Database management with phpMyAdmin</li>
              <li>Using REST API in WordPress</li>
              <li>Performance optimization techniques</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Freelance WordPress Developer</li>
              <li>Front-End Developer</li>
              <li>Web Designer</li>
              <li>Theme/Plugin Developer</li>
              <li>Website Maintenance Specialist</li>
              <li>WordPress Consultant</li>
              <li>Content Manager</li>
              <li>Technical SEO Specialist</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">
              Skills Developed
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Proficiency in WordPress theme and plugin development</li>
              <li>Ability to create responsive and SEO-friendly websites</li>
              <li>Mastery of WordPress dashboard and page builders</li>
              <li>Understanding of PHP, HTML, CSS, and JavaScript</li>
              <li>Managing WordPress hosting and migrations</li>
              <li>Website performance and security tuning</li>
              <li>Basic knowledge of MySQL and database operations</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">
              Target Audience
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Students and freshers aiming to enter web development</li>
              <li>Freelancers wanting to offer WordPress services</li>
              <li>Marketing professionals building personal portfolios</li>
              <li>Entrepreneurs setting up eCommerce sites</li>
              <li>Designers interested in custom WordPress themes</li>
              <li>Bloggers and content creators</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-3 md:mb-4">
      <div className="md:flex justify-around  ">
        <div className="bg-[#0098F1] text-white  pb-5 md:w-2/5">
          {renderContent()}
        </div>
        <div className="my-3">
          <p className="font-bold underline-offset-2 underline text-xl text-[#0098F1]">
            Advanced WordPress Key Highlights
          </p>
          {data.map((item, index) => (
            <ul key={index}>
              <li
                onClick={() => handleClick(index)}
                className={`pt-4 hover:cursor-pointer text-xl my-2 md:h-16 md:w-[210px] border-2 rounded-md text-center  ${
                  selectedItem === index
                    ? "bg-[#0098f1] text-white border-none"
                    : ""
                }`}
              >
                {item.label}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdvancewordpressKeyHighlights;
