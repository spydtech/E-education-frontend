import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { Link } from "react-router-dom";
import defaultProfilePic from "../../../assetss/profile/man.png"; // Default profile picture

// Modal Styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    maxHeight: "80vh",
    overflowY: "auto",
    borderRadius: "10px",
  },
};

Modal.setAppElement("#root"); // Ensure accessibility

const LeftSide = ({ postId }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    firstName: "",
    lastName: "",
    profilePhoto: "",
    email: "",
  });

  const jwt = localStorage.getItem("jwt"); // Retrieve JWT from localStorage
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch user profile data
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/users/profile", {
          headers: { Authorization: `Bearer ${jwt}` },
        });

        const user = response.data;
        const fullName = `${user.firstName} ${user.lastName}`;

        // Fetch profile photo
        const profilePhotoResponse = await axios.get(
          `http://localhost:8080/api/users/${user.email}/profile-photo`,
          { responseType: "arraybuffer", headers: { Authorization: `Bearer ${jwt}` } }
        );

        const profilePhotoBlob = new Blob([profilePhotoResponse.data], { type: "image/jpeg" });
        const profilePhotoUrl = URL.createObjectURL(profilePhotoBlob);

        setFormData({
          fullName,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          profilePhoto: profilePhotoUrl,
        });
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchUserProfile();
  }, [jwt]);

  // Fetch post by ID
  

    useEffect(() => {
      const fetchPost = async () => {
        try {
          const jwt = localStorage.getItem("jwt"); // Retrieve JWT from localStorage
          const response = await axios.get(`http://localhost:8080/api/posts/${postId}`, {
            headers: { Authorization: `Bearer ${jwt}` },
          });
  
          if (response.data) {
            setPost(response.data);
          } else {
            setError("Post not found.");
          }
        } catch (error) {
          console.error("Error fetching post:", error);
          setError("Failed to fetch post. Please try again later.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchPost();
    }, [postId]);

  // Open modal to view posts
  const handleViewPostsClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="w-[250px] xl:w-[300px] pt-10 pb-6 p-4 h-[320px] bg-[#0098F1] rounded-md">
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Profile Picture */}
        <img
          src={formData.profilePhoto || defaultProfilePic}
          alt="Profile"
          className="md:h-[100px] h-[80px] w-[80px] md:w-[100px] rounded-full mb-2 border-4 border-white object-cover"
        />

        {/* User Details */}
        <div className="text-white font-semibold text-lg">
          {formData.firstName} {formData.lastName}
        </div>
        <div className="text-white">{formData.email}</div>

        <hr className="border-t-2 border-white my-4 w-1/2 mx-8" />

        {/* Profile Stats */}
        <div className="gap-4">
          {/* Navigate to Profile Page */}
          <Link to="/Profile">
            <div className="flex justify-between items-center text-white gap-16 mt-2 cursor-pointer">
              <div>View your profile</div>
              <div>90</div>
            </div>
          </Link>

          {/* Open Modal for Viewing Posts */}
          <div
            className="flex justify-between items-center text-white gap-16 mt-2 cursor-pointer"
            onClick={handleViewPostsClick}
          >
            <div>View posts</div>
            <div>627</div>
          </div>
        </div>

        {/* Modal for Viewing Posts */}
        <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} style={customStyles}>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Your Post</h2>
            {loadingPosts ? (
              <div>Loading post...</div>
            ) : errorMessage ? (
              <div className="text-red-500">{errorMessage}</div>
            ) : post ? (
              <div className="post-container">
                <div className="post-header flex justify-between">
                  <div className="flex items-center">
                    <img
                      src={post.tweetedBy?.profilePhoto || defaultProfilePic}
                      alt={post.tweetedBy?.fullName || "Unknown"}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-2">
                      <div className="font-semibold">{post.tweetedBy?.fullName || "Anonymous"}</div>
                      <div className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-2">{post.content}</div>
                {post.image && <img src={post.image} alt="Post" className="mt-2 max-w-full h-auto" />}
                {post.video && (
                  <video controls src={post.video} className="mt-2 w-full h-96">
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ) : (
              <div>No post found</div>
            )}
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default LeftSide;
