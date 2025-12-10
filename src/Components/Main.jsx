import React from "react";
import home from "../assetss/Home/Homebg.png";
import Girl from "../assetss/Home/girlimage.png";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center bg-no-repeat w-full min-h-screen sm:min-h-[90vh] flex items-center"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Text Content - Left on desktop, top on mobile */}
            <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                <span className="block">
                  Learn{" "}
                  <span className="bg-gradient-to-r from-[#ff9b26] to-[#25AAE3] text-transparent bg-clip-text">
                    without
                  </span>{" "}
                  limits
                </span>
                <span className="block mt-2">
                  with online{" "}
                  <span className="bg-gradient-to-r from-[#ff9b26] to-[#0098F1] text-transparent bg-clip-text">
                    courses
                  </span>
                </span>
              </h1>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Unlock endless opportunities with expert-led courses, 
                industry-recognized certifications, and real-world projects.
                Learn at your own pace and build the skills that drive success in today's digital world.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-[#0098F1] to-[#25AAE3] hover:from-[#0080d4] hover:to-[#1f96cf] transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get Started
                </Link>
                <Link
                  to="/try-a-demo"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg text-[#0098F1] bg-white border-2 border-[#0098F1] hover:bg-[#0098F1] hover:text-white transform hover:scale-105 transition-all duration-300 shadow-md"
                >
                  Try Free Demo
                </Link>
              </div>

              {/* Trust Indicators - Desktop only */}
              <div className="hidden lg:flex items-center gap-6 mt-10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Expert Instructors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🎓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Certified Courses</span>
                </div>
              </div>
            </div>

            {/* Image Section - Right on desktop, top on mobile */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-2xl">
                <img
                  src={Girl}
                  alt="Student learning illustration"
                  className="w-full h-auto object-contain animate-float"
                />
                
                {/* Floating elements - Desktop only */}
                <div className="hidden lg:block absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#ff9b26]/20 to-[#25AAE3]/20 rounded-full blur-xl animate-pulse"></div>
                <div className="hidden lg:block absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#0098F1]/20 to-[#ff9b26]/20 rounded-full blur-xl animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Trust Indicators - Mobile only */}
          <div className="lg:hidden flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 order-3">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <span className="text-gray-700 font-medium text-sm">Expert Instructors</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">🎓</span>
              </div>
              <span className="text-gray-700 font-medium text-sm">Certified Courses</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Courses Section */}
      <section className="w-full bg-gradient-to-br from-[#0098F1] via-[#0098F1] to-[#0098F1] text-white py-16 sm:py-20 px-4 sm:px-6 font-poppins">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            {/* Heading */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Generative AI &<br className="hidden sm:block" /> Agentic AI Development
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              Master the future of AI with hands-on training in building intelligent,
              autonomous, and multi-modal Agentic AI systems using Generative AI LLMs, RAG, planning agents,
              tool use, and orchestration frameworks.
            </p>
          </div>

          {/* Course Benefits - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 sm:mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-[#ff9b26] hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ff9b26] to-orange-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-World Projects</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                From single agents to multi-agent ecosystems with practical implementations.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-[#ff9b26] hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0098F1] to-blue-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tooling & Orchestration</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Master LLMs, RAG, agents, and advanced frameworks for AI development.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-[#ff9b26] hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-[1.02] sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Modal Systems</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Build intelligent apps that think, plan, and act autonomously.
              </p>
            </div>
          </div>

          {/* Badge + Ratings */}
          <div className="flex flex-col items-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-4 sm:px-6 py-3 rounded-full shadow-lg mb-4">
              <span className="text-yellow-400 text-lg">⭐</span>
              <span className="text-sm sm:text-base">4.9 Star Rated</span>
              <span className="hidden sm:inline">|</span>
              <span className="text-sm sm:text-base">#1 E-education Institute</span>
            </div>
            <p className="text-gray-200 text-sm text-center">
              Trusted by thousands of students worldwide
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link to="/artificial_intelligence">
              <button className="group relative bg-gradient-to-r from-[#ff9b26] to-orange-500 hover:from-orange-500 hover:to-[#ff9b26] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  Enroll Now
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ff9b26]/30 to-orange-500/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            
            {/* Additional Info */}
            {/* <p className="mt-6 text-gray-200 text-sm">
              Start your 7-day free trial • No credit card required
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;