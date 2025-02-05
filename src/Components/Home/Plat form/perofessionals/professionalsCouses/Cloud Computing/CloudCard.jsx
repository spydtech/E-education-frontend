import React from "react";
import img1 from '../../../../../../assetss/professional/cloudComputing/image1.jpg'
import img2 from '../../../../../../assetss/professional/cloudComputing/image2.jpg'
import img3 from '../../../../../../assetss/professional/cloudComputing/image3.jpg'
import img4 from '../../../../../../assetss/professional/cloudComputing/image4.jpg'
import img5 from '../../../../../../assetss/professional/cloudComputing/image5.jpg'
import img6 from '../../../../../../assetss/professional/cloudComputing/image6.jpg'

const CloudCard = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Mastering Cloud Computing: Elevate Your IT Skills
            </h2>
            <p className="text-lg text-[#0098F1] font-semibold mt-2">
              Dive into the world of Cloud Computing with our comprehensive
              courses. Learn cutting-edge technologies and gain practical
              expertise. Whether you're starting out or looking to enhance your
              skills, our courses will help you excel in the cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group  border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden">
              <a href="#">
                <div className="h-[180px]">
                  <img
                    className="w-full h-full bg-cover"
                    src= {img1}
                    alt="image"
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-[#FF9B26] group-hover:text-gray-900">
                    Explore Course Catalog
                  </h3>
                  <p className="text-md text-gray-600 pt-4">
                    Browse our extensive catalog of Cloud Computing courses.
                    Discover beginner-friendly to advanced-level programs
                    designed to accommodate learners of all backgrounds.
                  </p>
                </div>
              </a>
            </div>

            <div className="group  border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden">
              <a href="#">
                <div className="h-[180px]">
                  <img
                    className="w-full h-full bg-cover"
                    src={img2}
                    alt="image"
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-[#FF9B26] group-hover:text-gray-900">
                    Enroll in Foundational Courses
                  </h3>
                  <p className="text-md text-gray-600 pt-4">
                    Start with foundational courses covering basic concepts,
                    tools, and methodologies essential for Cloud Computing.
                  </p>
                </div>
              </a>
            </div>

            <div className="group  border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden">
              <a href="#">
                <div className="h-[180px]">
                  <img
                    className="w-full h-full bg-cover"
                    src={img3}
                    alt="image"
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-[#FF9B26] group-hover:text-gray-900">
                    Practice with Real-world Projects
                  </h3>
                  <p className="text-md text-gray-600 pt-4">
                    Apply your knowledge by working on hands-on projects
                    tailored to real-world scenarios. Gain practical experience
                    in cloud architecture, deployment, and management under the
                    guidance of industry experts.
                  </p>
                </div>
              </a>
            </div>

            <div className="group  border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden">
              <a href="#">
                <div className="h-[180px]">
                  <img
                    className="w-full h-full bg-cover"
                    src={img4}
                    alt="image"
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-[#FF9B26] group-hover:text-gray-900">
                    Track Your Progress
                  </h3>
                  <p className="text-md text-gray-600 pt-4">
                    Monitor your progress with intuitive dashboards and tracking
                    tools. Set goals, track milestones, and measure your
                    proficiency in various Cloud Computing concepts as you
                    advance through the courses.
                  </p>
                </div>
              </a>
            </div>

            <div className="group  border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden">
              <a href="#">
                <div className="h-[180px]">
                  <img
                    className="w-full h-full bg-cover"
                    src={img5}
                    alt="image"
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-[#FF9B26] group-hover:text-gray-900">
                  Specialize and Advance
                  </h3>
                  <p className="text-md text-gray-600 pt-4">
                  Choose specialized tracks or advanced courses to delve
                    deeper into specific areas of Cloud Computing, such as cloud
                    security, data management, or cloud-native application
                    development. Customize your learning path to align with your
                    interests and career goals.
                  </p>
                </div>
              </a>
            </div>

            <div className="group  border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden">
              <a href="#">
                <div className="h-[180px]">
                  <img
                    className="w-full h-full bg-cover"
                    src={img6}
                    alt="image"
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between relative z-10">
                  <h3 className="text-lg font-medium text-[#FF9B26] group-hover:text-gray-900">
                  Earn Recognized Certifications
                  </h3>
                  <p className="text-md text-gray-600 pt-4">
                  Upon successful completion of courses and projects, earn
                    industry-recognized certifications to showcase your
                    expertise to employers and enhance your career prospects.
                  </p>
                </div>
              </a>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudCard;
