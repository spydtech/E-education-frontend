import React, { useEffect, useState } from "react";

const MyLearning = () => {
  const [currentVideo, setCurrentVideo] = useState(null); // Tracks the currently playing video

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dummyVideos = [
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Sample video description for Video 1. Learn and grow with this content.",
      url: "https://www.youtube.com/embed/mr15Xzb1Ook", // Example YouTube video URL
    },
    {
      id: 2,
      title: "Sample Video 2",
      description:
        "Sample video description for Video 2. Expand your knowledge here.",
      url: "https://www.youtube.com/embed/sBws8MSXN7A", // Example YouTube video URL
    },
    {
      id: 3,
      title: "Sample Video 3",
      description:
        "Sample video description for Video 3. Discover and achieve new goals.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube video URL
    },
  ];

  return (
    <>
      <h2 className="text-4xl font-bold text-center py-8 my-10">
        Embark on Your{" "}
        <span className="bg-gradient-to-r from-[#F6AC14] to-[#0098F1] bg-clip-text text-transparent">
          Learning Journey
        </span>{" "}
        with MyLearning Courses
      </h2>

      <div className="video-container mt-4 mx-4 sm:mx-5">
        {dummyVideos.map((video, index) => (
          <div
            key={index}
            className="video-wrapper rounded-md p-4 flex flex-col sm:flex-row items-start mb-4"
          >
            <div className="image mb-4 sm:mb-0 sm:mr-4 flex-shrink-0 w-full sm:w-2/5">
              <img
                src={`https://img.youtube.com/vi/${video.url.split("/embed/")[1]}/0.jpg`}
                alt={video.title}
                className="w-full h-auto rounded-md lg:h-[220px] sm:h-auto"
                style={{ aspectRatio: "16 / 9" }}
              />
            </div>
            <div className="video-details flex-grow flex flex-col justify-between w-full sm:w-3/5">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#0098F1]">
                  {video.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-500 mb-2">
                  {video.description}
                </p>
              </div>
              <button
                onClick={() => setCurrentVideo(video.url)}
                className="bg-gradient-to-r from-[#0098F1] to-[#00588B] text-white h-[40px] w-full sm:w-[120px] mt-4"
              >
                Start Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {currentVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-md overflow-hidden w-full max-w-4xl">
            <div className="relative">
              <button
                onClick={() => setCurrentVideo(null)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 z-10"
              >
                ✖
              </button>
              <iframe
                src={currentVideo}
                title="Video Player"
                className="w-full h-[60vh]"
                allow="autoplay; encrypted-media"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyLearning;
