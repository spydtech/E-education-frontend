import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoIosPlayCircle } from "react-icons/io";
import { RiForward10Fill, RiReplay10Fill } from "react-icons/ri";
import logo from "./logo.png";

export default function VideoPlayer({ videos, initialVideo, onVideoSelect }) {
  const [currentVideo, setCurrentVideo] = useState(initialVideo || videos[0]);
  const [showOverlay, setShowOverlay] = useState(true);
  const [videoDuration, setVideoDuration] = useState(null);
  const videoRef = useRef(null);

  // Load video duration when metadata is loaded
  const handleMetadataLoad = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
    onVideoSelect(video);
    setShowOverlay(true);
  };

  const handleOverlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowOverlay(false);
    }
  };

  return (
    <div className="flex p-4">
      {/* Main Video Section */}
      <div className="w-3/4 pr-4">
        <h2 className="text-xl font-semibold">{currentVideo.name}</h2>
        <p className="text-sm text-gray-500">
          Uploaded on {new Date(currentVideo.uploadedOn).toLocaleDateString()}
        </p>

        {/* Video Player with Overlay */}
        <div className="aspect-video relative mt-4 bg-black rounded-lg shadow-md">
          <video 
            ref={videoRef} 
            controls 
            className="w-full mt-4"
            onLoadedMetadata={handleMetadataLoad} // ✅ Load duration
          >
            <source src={`data:video/mp4;base64,${currentVideo.videoBase64}`} type="video/mp4" />
          </video>

          {/* Overlay Image */}
          {showOverlay && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg cursor-pointer"
              onClick={handleOverlayClick}
            >
              <img src={logo} alt="Paused Overlay" className="w-full h-full object-center" />
              <IoIosPlayCircle className="absolute p-2 text-[#0098f1] w-20 h-20 text-center rounded-full" />
            </div>
          )}
        </div>

        {/* ✅ Show Video Duration */}
        <p className="mt-4 text-gray-600">
          Duration: {videoDuration ? `${Math.floor(videoDuration / 60)} min ${Math.floor(videoDuration % 60)} sec` : "Loading..."}
        </p>
      </div>

      {/* Video List Section */}
      <div className="w-60 border-l pl-4">
        <h3 className="text-lg font-semibold mb-2">More Videos</h3>
        <ul>
          {videos.map((video) => (
            <li
              key={video.id}
              className={`flex items-center my-1 p-2 cursor-pointer hover:bg-gray-100 rounded-lg ${
                video.id === currentVideo.id ? "bg-gray-200" : ""
              }`}
              onClick={() => handleVideoClick(video)}
            >
              <button className="mr-3 text-gray-500">▶</button>
              <div>
                <p className="text-sm font-medium">{video.name}</p>
                <p className="text-xs text-gray-500">{video.duration || "Unknown"}</p>
                <p className="text-xs text-gray-400">
                  Uploaded on {new Date(video.uploadedOn).toLocaleDateString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
