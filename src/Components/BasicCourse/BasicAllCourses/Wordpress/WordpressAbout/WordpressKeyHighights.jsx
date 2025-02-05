import React, { useState } from "react";

function WordpressKeyHighlights() {
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
            <li>WordPress is a leading content management system (CMS).</li>
              <li>Used for building and managing websites with ease.</li>
              <li>Highly customizable with a wide range of themes and plugins.</li>
              <li>Supports various types of websites including blogs and e-commerce.</li>
              <li>Offers both free and premium features.</li>
              <li>Backed by a robust community and extensive support.</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
            <li>Themes: Customize your site's appearance and layout.</li>
              <li>Plugins: Enhance functionality and add features.</li>
              <li>Widgets: Add extra content and functionalities to sidebars.</li>
              <li>Posts vs. Pages: Understand the differences and use cases.</li>
              <li>SEO: Optimize your site for search engines.</li>
              <li>User Roles: Manage permissions and access control.</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
            <li>Blogging: Regularly publish articles and updates.</li>
              <li>E-commerce: Build online stores to sell products and services.</li>
              <li>Portfolio: Showcase your work and creative projects.</li>
              <li>Business Website: Promote and manage business presence online.</li>
              <li>Membership Site: Provide exclusive content to members.</li>
              <li>Community Forum: Create and manage user forums and discussion boards.</li>
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
            <li>Design and development of WordPress websites</li>
              <li>Content management and optimization</li>
              <li>Utilization of themes and plugins</li>
              <li>Basic knowledge of HTML and CSS</li>
              <li>Website security and maintenance</li>
              <li>Understanding web hosting and domain management</li>
              <li>Analytics and performance tracking</li>
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
            <li>Bloggers and Content Creators</li>
              <li>Small to Medium Business Owners</li>
              <li>E-commerce Operators</li>
              <li>Freelance Web Designers and Developers</li>
              <li>Digital Marketers</li>
              <li>Anyone interested in starting a website</li>
              <li>Consultants and Educators</li>
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
          E-Education Course Highlights
        </p>
        {data.map((item, index) => (
          <ul className="">
            <li
              key={index}
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

export default WordpressKeyHighlights;
