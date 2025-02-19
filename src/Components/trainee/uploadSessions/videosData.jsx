import { useState } from "react";
// import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";

export default function VideoUploadForm() {
  const [title, setTitle] = useState("");
  const [group, setGroup] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (title && group && description && videoFile) {
      setIsSubmitted(true); // Show the popup
    } else {
      alert("Please fill in all required fields!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white ">
      <div className="text-2xl font-semibold mb-4">
        <Link to="/traineedashbord/uploadsession">
      <svg 
            className="ml-0 "
            
            width="1015" height="53" viewBox="0 0 1015 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 31.5L12.5 26.5L17.5 21.5" stroke="black" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M64.212 34H61.704L54.158 22.582V34H51.65V18.688H54.158L61.704 30.084V18.688H64.212V34ZM78.6155 27.642C78.6155 28.0967 78.5861 28.5073 78.5275 28.874H69.2655C69.3388 29.842 69.6981 30.6193 70.3435 31.206C70.9888 31.7927 71.7808 32.086 72.7195 32.086C74.0688 32.086 75.0221 31.5213 75.5795 30.392H78.2855C77.9188 31.5067 77.2515 32.4233 76.2835 33.142C75.3301 33.846 74.1421 34.198 72.7195 34.198C71.5608 34.198 70.5195 33.9413 69.5955 33.428C68.6861 32.9 67.9675 32.1667 67.4395 31.228C66.9261 30.2747 66.6695 29.1747 66.6695 27.928C66.6695 26.6813 66.9188 25.5887 67.4175 24.65C67.9308 23.6967 68.6421 22.9633 69.5515 22.45C70.4755 21.9367 71.5315 21.68 72.7195 21.68C73.8635 21.68 74.8828 21.9293 75.7775 22.428C76.6721 22.9267 77.3688 23.6307 77.8675 24.54C78.3661 25.4347 78.6155 26.4687 78.6155 27.642ZM75.9975 26.85C75.9828 25.926 75.6528 25.1853 75.0075 24.628C74.3621 24.0707 73.5628 23.792 72.6095 23.792C71.7441 23.792 71.0035 24.0707 70.3875 24.628C69.7715 25.1707 69.4048 25.9113 69.2875 26.85H75.9975ZM97.3636 21.878L93.6016 34H90.9616L88.5196 25.046L86.0776 34H83.4376L79.6536 21.878H82.2056L84.7356 31.624L87.3096 21.878H89.9276L92.3916 31.58L94.8996 21.878H97.3636ZM114.831 18.71V20.756H110.761V34H108.253V20.756H104.161V18.71H114.831ZM116.535 27.884C116.535 26.6667 116.784 25.5887 117.283 24.65C117.796 23.7113 118.485 22.9853 119.351 22.472C120.231 21.944 121.199 21.68 122.255 21.68C123.208 21.68 124.037 21.8707 124.741 22.252C125.459 22.6187 126.031 23.0807 126.457 23.638V21.878H128.987V34H126.457V32.196C126.031 32.768 125.452 33.2447 124.719 33.626C123.985 34.0073 123.149 34.198 122.211 34.198C121.169 34.198 120.216 33.934 119.351 33.406C118.485 32.8633 117.796 32.1153 117.283 31.162C116.784 30.194 116.535 29.1013 116.535 27.884ZM126.457 27.928C126.457 27.092 126.281 26.366 125.929 25.75C125.591 25.134 125.144 24.6647 124.587 24.342C124.029 24.0193 123.428 23.858 122.783 23.858C122.137 23.858 121.536 24.0193 120.979 24.342C120.421 24.65 119.967 25.112 119.615 25.728C119.277 26.3293 119.109 27.048 119.109 27.884C119.109 28.72 119.277 29.4533 119.615 30.084C119.967 30.7147 120.421 31.1987 120.979 31.536C121.551 31.8587 122.152 32.02 122.783 32.02C123.428 32.02 124.029 31.8587 124.587 31.536C125.144 31.2133 125.591 30.744 125.929 30.128C126.281 29.4973 126.457 28.764 126.457 27.928ZM136.681 34.198C135.728 34.198 134.87 34.0293 134.107 33.692C133.359 33.34 132.765 32.8707 132.325 32.284C131.885 31.6827 131.65 31.0153 131.621 30.282H134.217C134.261 30.7953 134.503 31.228 134.943 31.58C135.398 31.9173 135.962 32.086 136.637 32.086C137.341 32.086 137.884 31.954 138.265 31.69C138.661 31.4113 138.859 31.0593 138.859 30.634C138.859 30.1793 138.639 29.842 138.199 29.622C137.774 29.402 137.092 29.16 136.153 28.896C135.244 28.6467 134.503 28.4047 133.931 28.17C133.359 27.9353 132.86 27.576 132.435 27.092C132.024 26.608 131.819 25.97 131.819 25.178C131.819 24.5327 132.01 23.946 132.391 23.418C132.772 22.8753 133.315 22.45 134.019 22.142C134.738 21.834 135.559 21.68 136.483 21.68C137.862 21.68 138.969 22.032 139.805 22.736C140.656 23.4253 141.11 24.3713 141.169 25.574H138.661C138.617 25.0313 138.397 24.5987 138.001 24.276C137.605 23.9533 137.07 23.792 136.395 23.792C135.735 23.792 135.229 23.9167 134.877 24.166C134.525 24.4153 134.349 24.7453 134.349 25.156C134.349 25.4787 134.466 25.75 134.701 25.97C134.936 26.19 135.222 26.366 135.559 26.498C135.896 26.6153 136.395 26.7693 137.055 26.96C137.935 27.1947 138.654 27.4367 139.211 27.686C139.783 27.9207 140.274 28.2727 140.685 28.742C141.096 29.2113 141.308 29.8347 141.323 30.612C141.323 31.3013 141.132 31.9173 140.751 32.46C140.37 33.0027 139.827 33.428 139.123 33.736C138.434 34.044 137.62 34.198 136.681 34.198ZM148.829 27.95L154.417 34H151.029L146.541 28.786V34H144.033V17.72H146.541V27.18L150.941 21.878H154.417L148.829 27.95Z" fill="black"/>
          </svg>
          </Link>
       
       </div>

      {/* Video Title */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">Video Title *</label>
        <input
          type="text"
          placeholder="Type here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Author (Pre-filled) */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">Author *</label>
        <input
          type="text"
          value="E Education"
          disabled
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
        />
      </div>

      {/* Select Group */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">Select Group *</label>
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Group</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="Web Development">Web Development</option>
        </select>
      </div>

      {/* Video Description */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-1">Video Description *</label>
        <textarea
          placeholder="Type here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {/* File Upload Section */}
      <div className="mb-6 border border-dashed border-gray-400 rounded-lg p-6 text-center">
        {videoFile ? (
          <div className="text-gray-700">
            <p className="mb-2">Uploaded: {videoFile.name}</p>
            <p className="text-sm text-gray-500">HH:MM:SS</p>
          </div>
        ) : (
          <label className="cursor-pointer">
            <input type="file" accept="video/*" className="hidden" onChange={handleFileUpload} />
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-sm">Drag And Drop Video, Or <span className="text-blue-500">Browse</span></span>
              <p className="text-xs text-gray-400">Minimum 270x480px recommended. Max 10MB each</p>
            </div>
          </label>
        )}
      </div>
       {/* Submit Button */}
       <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Send for approval
      </button>

      {/* Success Popup */}
      <Dialog open={isSubmitted} onClose={() => setIsSubmitted(false)} className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-lg p-6 text-center max-w-sm">
          <p className="text-lg font-medium">Your video has been sent for review and will be processed shortly.</p>
          <button
            onClick={() => navigate("/traineedashbord")}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Got it!
          </button>
        </div>
      </Dialog>
    </div>
  );
}
