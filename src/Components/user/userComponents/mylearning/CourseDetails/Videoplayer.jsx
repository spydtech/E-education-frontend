import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

import { IoIosPlayCircle } from "react-icons/io";
import { RiForward10Fill } from "react-icons/ri";
import { RiReplay10Fill } from "react-icons/ri";
import logo from "./logo.png";
export default function VideoPlayer({ videos, initialVideo, onVideoSelect }) {
  const [currentVideo, setCurrentVideo] = useState(initialVideo || videos[0]);
  const [showOverlay, setShowOverlay] = useState(true);
  const videoRef = useRef(null);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
    onVideoSelect(video);
    setShowOverlay(true);
  };

  const handlePlay = () => setShowOverlay(false);
  const handlePause = () => setShowOverlay(true);

  const handleEnded = () => setShowOverlay(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", handleEnded);
      return () => video.removeEventListener("ended", handleEnded);
    }
  }, []);

  const handleOverlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowOverlay(false);
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleSkip = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  return (
    <div className="flex p-4">
      {/* Main Video Section */}
      <div className="w-3/4 pr-4">
        <h2 className="text-xl font-semibold">{currentVideo.name}</h2>
        <p className="text-sm text-gray-500">
          Uploaded on {currentVideo.uploadedOn.toLocaleDateString()}
        </p>

        {/* Video Player with Overlay */}
        <div className="aspect-video relative mt-4 bg-black rounded-lg shadow-md">
          <style>
            {`
            input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: #f0f0f0;
  border-radius: 5px;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 8px;
  background: #ddd;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}

       video::-webkit-media-controls {
  background-color: transparent;
}

video::-webkit-media-controls-timeline {
  background-color: transparent;
}

video::-webkit-media-controls-play-button {
  background-color: transparent;
}

video::-webkit-media-controls-volume-slider {
  background-color: #f0f0f0;
}

        `}
          </style>
          <video
            ref={videoRef}
            key={currentVideo.id}
            controls
            className="w-full h-full rounded-lg"
            onPlay={handlePlay}
            onPause={handlePause}
          >
            <source src={currentVideo.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Centered Controls */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex space-x-6 bg-black bg-opacity-30 p-4 rounded-lg pointer-events-auto">
              <button
                className="text-white text-3xl hover:text-gray-300"
                onClick={() => handleSkip(-10)}
              >
                <RiReplay10Fill />
              </button>
              <button
                className="text-white text-3xl hover:text-gray-300"
                onClick={handlePlayPause}
              >
                {videoRef.current?.paused ? <FaPlay /> : <FaPause />}
              </button>
              <button
                className="text-white text-3xl hover:text-gray-300"
                onClick={() => handleSkip(10)}
              >
                <RiForward10Fill />
              </button>
            </div>
          </div>

          {/* Overlay Image */}
          {showOverlay && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg cursor-pointer"
              onClick={handleOverlayClick}
            >
              <img
                src={logo}
                alt="Paused Overlay"
                className="w-full h-full object-center "
              />
              <IoIosPlayCircle className="absolute p-2 text-[#0098f1] w-20 h-20 text-center   rounded-full  " />
            </div>
          )}
        </div>

        <p className="mt-4 text-gray-600">Duration: {currentVideo.duration}</p>
      </div>

      {/* Video List Section */}
      <div className="w-60 border-l pl-4">
        <h3 className="text-lg font-semibold mb-2">More Videos</h3>
        <ul>
          {videos.map((video) => (
            <li
              key={video.id}
              className={`flex items-center  my-1 p-2 cursor-pointer hover:bg-gray-100 rounded-lg ${
                video.id === currentVideo.id ? "bg-gray-200" : ""
              }`}
              onClick={() => handleVideoClick(video)}
            >
              <button className="mr-3 text-gray-500">▶</button>
              <div>
                <p className="text-sm font-medium">{video.name}</p>
                <p className="text-xs text-gray-500">{video.duration}</p>
                <p className="text-xs text-gray-400">
                  Uploaded on {video.uploadedOn.toLocaleDateString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
