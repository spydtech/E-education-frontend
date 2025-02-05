import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Home/footer/Footer";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <header className="bg-gray-700 text-white text-center py-12 font">
          <h1 className="text-4xl font-bold mt-16">About Us</h1>
        </header>
        <section className="text-center py-12 px-4 font">
          <h2 className="text-2xl font-bold ">Mission And Values</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Our mission is to provide exceptional educational services with a
            focus on availability, reliability, and support.
          </p>
          <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
            <div className="transition transform hover:scale-110 text-lora">
              <h3 className="text-xl font-bold">15+</h3>
              <p className="text-gray-700">Education Specialists</p>
            </div>
            <div className="transition transform hover:scale-110 text-lora">
              <h3 className="text-xl font-bold">5+</h3>
              <p className="text-gray-700">Years of Experience</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-700 text-white py-12 px-4 font">
          <h2 className="text-2xl font-bold text-center">Our Vision</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Education anytime, anywhere. We aim to revolutionize the education
            industry by making quality learning accessible to everyone.
          </p>
        </section>

        {/* why choose us  */}

        <section className="">
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
                  Why choose us?
                </h2>
                <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  Unlock Your Potential With Our Cutting-Edge Courses
                </p>
                <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                  We offer top-tier education with industry-leading expertise,
                  ensuring you have the tools and knowledge to thrive in your
                  chosen field.
                </p>
              </div>
              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                      </div>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        Diverse Course Offerings
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Explore a wide range of courses tailored to meet your
                      learning needs, from foundational concepts to advanced
                      topics.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                      </div>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        Interactive Learning Experience
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Engage with dynamic content, interactive exercises, and
                      real-world case studies that enhance your learning
                      journey.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
                      </div>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        Expert Instruction
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Learn from industry experts who bring practical insights
                      and years of experience to the classroom.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
                      </div>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        Flexible Learning Options
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Enjoy the convenience of self-paced learning, allowing you
                      to study whenever and wherever works best for you.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* how we work */}

        <div className="bg-gray-700 p-4 min-h-screen">
          <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
            <div className="md:w-2/3 lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-100"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
                How we work?
              </h2>
              <p className="text-gray-300">
                We follow our process to get you started as quickly as possible
              </p>
            </div>
            <div className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    color="white"
                    style={{ color: "white" }}
                    height={50}
                    width={50}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                    <path d="M10 10l2 -2v8" />
                  </svg>
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition">
                      Course Setup
                    </h5>
                    <p className="text-gray-300">
                      Develop course content and outline objectives in
                      collaboration with subject matter experts. Design the
                      curriculum and plan for interactive elements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    color="white"
                    style={{ color: "white" }}
                    height={50}
                    width={50}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                    <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
                  </svg>
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                      Platform Integration
                    </h5>
                    <p className="text-gray-300">
                      Integrate the course content into the e-education website
                      platform, ensuring seamless navigation and accessibility
                      for learners.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    color="white"
                    style={{ color: "white" }}
                    height={50}
                    width={50}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                    <path d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1"></path>
                  </svg>
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                      Enrollment and Learning
                    </h5>
                    <p className="text-gray-300">
                      Open enrollment for students. Learners engage with course
                      materials, complete assignments, and participate in
                      discussions or assessments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    color="white"
                    style={{ color: "white" }}
                    height={50}
                    width={50}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                    <path d="M10 8v3a1 1 0 0 0 1 1h3" />
                    <path d="M14 8v8" />
                  </svg>
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                      Certificate Issuance
                    </h5>
                    <p className="text-gray-300">
                      Upon successful completion of the course requirements,
                      issue certificates to learners as proof of their
                      achievement and proficiency in the subject matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold font">Our Education Specialties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4 shadow-2xl rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 className="text-xl font-bold font">Computer Science</h3>
            </div>
            <div className="p-4 shadow-2xl rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 className="text-xl font-bold font">
                Business Administration
              </h3>
            </div>
            <div className="p-4 shadow-2xl rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 className="text-xl font-bold font">Creative Arts</h3>
            </div>
            <div className="p-4 shadow-2xl rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 className="text-xl font-bold font">Health Sciences</h3>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12 px-4">
          <h2 className="text-2xl font-bold text-center  font">
            State-Of-The-Art Education Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
            <div className="p-4 shadow-2xl rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold font">Virtual Classrooms</h3>
              <p className="text-gray-700 mt-2 font">
                Experience interactive and engaging virtual learning
                environments.
              </p>
            </div>
            <div className="p-4 shadow-2xl rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold font">AI-Powered Learning</h3>
              <p className="text-gray-700 mt-2 font">
                Personalized learning paths and intelligent tutoring systems.
              </p>
            </div>
            <div className="p-4 shadow-2xl rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold font">Collaborative Tools</h3>
              <p className="text-gray-700 mt-2 font">
                Seamless collaboration with peers and instructors in real-time.
              </p>
            </div>
            <div className="p-4 shadow-2xl rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold font">Digital Resources</h3>
              <p className="text-gray-700 mt-2 font">
                Access a vast library of digital textbooks, articles, and
                multimedia.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold font">
            Committed To Your Learning And Success
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4 shadow-2xl rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 className="text-xl font-bold font">Enroll Now</h3>
            </div>
            <div className="p-4 shadow-2xl rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 className="text-xl font-bold font">Expert Instructors</h3>
            </div>
            <div className="p-4 shadow-2xl rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 className="text-xl font-bold font">Comprehensive Courses</h3>
            </div>
            <div className="p-4 shadow-2xl rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 className="text-xl font-bold font">Student Support</h3>
            </div>
          </div>
        </section>

        <section className="bg-gray-700 text-white text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Learner Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
            <div className="p-4 shadow-2xl rounded-lg bg-gray-700 hover:bg-gray-700 transition-colors">
              <p>
                "The courses offered are simply outstanding! They provide
                in-depth knowledge and practical skills that are directly
                applicable to real-world scenarios. The instructors are
                knowledgeable, supportive, and truly passionate about helping
                learners succeed. I'm grateful for the enriching learning
                experience."
              </p>
              <h3 className="mt-4 font-bold">- Emma S.</h3>
            </div>
            <div className="p-4 shadow-2xl rounded-lg bg-gray-700 hover:bg-gray-700 transition-colors">
              <p>
                "I've been thoroughly impressed by the quality of instruction
                and the variety of courses available. The platform's
                user-friendly interface makes navigation a breeze, and the
                interactive learning materials keep me engaged throughout the
                entire learning process. It's been a game-changer for my career
                development!"
              </p>
              <h3 className="mt-4 font-bold">- Jason L.</h3>
            </div>
            <div className="p-4 shadow-2xl rounded-lg bg-gray-700 hover:bg-gray-700 transition-colors">
              <p>
                "The educational content provided exceeds expectations, covering
                a wide range of topics with depth and clarity. I appreciate the
                flexibility to learn at my own pace and the ability to revisit
                materials whenever needed. This platform has truly empowered me
                to upskill and stay competitive in my field."
              </p>
              <h3 className="mt-4 font-bold">- Sophia R.</h3>
            </div>
          </div>
        </section>

        <footer className="bg-white text-black text-center py-8">
          {/* <p>© Copyright E-education . All rights reserved ⛵</p> */}
        </footer>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
