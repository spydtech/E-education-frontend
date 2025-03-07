import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { Link } from "react-router-dom";
import defaultProfilePic from "../../../assetss/profile/man.png"; // Default profile picture
import { FaEdit, FaTrash, FaRegComment } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { IoShareSocialOutline } from "react-icons/io5";
import Avatar from "@mui/material/Avatar";
import { CiCamera } from "react-icons/ci";
import { API_BASE_URL } from "../../../Config/api";
import { likePost } from "../../../State/Post/Postmethod";
import { createComment, fetchComments  } from "../../../State/Post/Postmethod";

// Modal Styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "650px",
    maxHeight: "100vh",
    overflowY: "auto",
    borderRadius: "10px",
  },
};

Modal.setAppElement("#root"); // Ensure accessibility

const LeftSide = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    firstName: "",
    lastName: "",
    profilePhoto: "",
    email: "",
  });
  const [tweets, setTweets] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visibleComments, setVisibleComments] = useState({});
  const [commentData, setCommentData] = useState("");
  const [editingPost, setEditingPost] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [editMedia, setEditMedia] = useState(null);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
    const [replyData, setReplyData] = useState(null); // { commentId, tweetId }
    const [replyText, setReplyText] = useState("");





     const jwt = localStorage.getItem("jwt");
    
      const handleAddComment = async (postId) => {
        if (!commentData.trim()) return;
    
        try {
          const newComment = await createComment(jwt, postId, commentData);
          setComments((prev) => ({
            ...prev,
            [postId]: [...(prev[postId] || []), newComment],
          }));
          setCommentData("");
        } catch (error) {
          console.error("Failed to create comment", error);
        }
      };
    
    
      const toggleCommentInput = async (postId) => {
        if (!visibleComments[postId]) {
          setVisibleComments((prev) => ({ ...prev, [postId]: true }));
          if (!comments[postId]) {
            try {
              const fetchedComments = await fetchComments(postId);
              setComments((prev) => ({ ...prev, [postId]: fetchedComments }));
            } catch (error) {
              console.error("Failed to fetch comments", error);
            }
          }
        } else {
          setVisibleComments((prev) => ({ ...prev, [postId]: false }));
        }
      };

   const handleAddReply = async (postId, commentId) => {
      if (!replyText.trim()) return;
    
      const token = localStorage.getItem("jwt"); // Ensure the correct token key
    
      if (!token) {
        console.error("User is not authenticated.");
        alert("Session expired. Please log in again.");
        return;
      }
    
      try {
        const response = await fetch(`${API_BASE_URL}/comments/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}`, // Corrected token key
          },
          body: new URLSearchParams({
            postId: postId,
            content: replyText,
            parentCommentId: commentId, //  Send parentCommentId to link replies
          }),
        });
    
        if (!response.ok) {
          throw new Error(`Failed to add reply: ${response.statusText}`);
        }
    
        const newReply = await response.json(); // Get the saved reply from backend
    
        //  Update state with the new reply from backend
        setComments((prev) => ({
          ...prev,
          [postId]: prev[postId].map((comment) =>
            comment.id === commentId
              ? { ...comment, replies: [...(comment.replies || []), newReply] }
              : comment
          ),
        }));
    
        setReplyText(""); 
        setReplyData(null);
      } catch (error) {
        console.error("Failed to add reply:", error);
        alert("An error occurred while adding the reply. Please try again.");
      }
    };

 
   const handleLike = async (postId) => {
     const token = localStorage.getItem("jwt");
 
     if (!token) {
       console.error("User is not authenticated.");
       return;
     }
 
     try {
       const updatedLikeCount = await likePost(postId, token);
 
       setTweets((prevTweets) =>
         prevTweets.map((tweet) =>
           tweet.id === postId
             ? { ...tweet, isLiked: !tweet.isLiked, likeCount: updatedLikeCount }
             : tweet
         )
       );
     } catch (error) {
       console.error("Failed to like the post:", error);
     }
   };
  

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
  
        const user = response.data;
        const fullName = `${user.firstName} ${user.lastName}`;
  
        // Fetch profile photo
        try {
          const profilePhotoResponse = await axios.get(
            `${API_BASE_URL}/api/users/${user.email}/profile-photo`,
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
        } catch (photoError) {
          console.error("Error fetching profile photo:", photoError);
          // Set a default profile photo if the photo fetch fails
          setFormData({
            fullName,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            profilePhoto: defaultProfilePic, // Use a default profile picture
          });
        }
      } catch (error) {
        console.error("Error fetching user profile data:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          console.error("Request data:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      }
    };
  
    fetchUserProfile();
  }, [jwt]);

  // Fetch user posts
  useEffect(() => {
    const fetchUserPosts = async () => {
      if (!jwt) {
        setError("No authentication token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_BASE_URL}/api/posts/user/postList`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });

        if (!response.data || !Array.isArray(response.data)) {
          throw new Error("Invalid response data");
        }

        // Fetch media files (images/videos) as blobs for each post
        const postsWithMedia = await Promise.all(
          response.data.map(async (post) => {
            let imgBlobUrl = null;
            let videoBlobUrl = null;
            let profilePictureBlobUrl = null;

            // Fetch image
            if (post.img) {
              try {
                const imgResponse = await axios.get(`${API_BASE_URL}/api/posts/${post.id}/image`, {
                  responseType: "blob",
                  headers: { Authorization: `Bearer ${jwt}` },
                });
                imgBlobUrl = URL.createObjectURL(imgResponse.data);
              } catch (error) {
                console.error(`Error fetching image for post ${post.id}:`, error);
              }
            }

            // Fetch video
            if (post.video) {
              try {
                const videoResponse = await axios.get(`${API_BASE_URL}/api/posts/${post.id}/video`, {
                  responseType: "blob",
                  headers: { Authorization: `Bearer ${jwt}` },
                });
                videoBlobUrl = URL.createObjectURL(videoResponse.data);
              } catch (error) {
                console.error(`Error fetching video for post ${post.id}:`, error);
              }
            }

            // Fetch profile picture
            if (post.profilePicture) {
              try {
                const profilePictureResponse = await axios.get(
                  `${API_BASE_URL}/api/posts/${post.id}/profile-picture`,
                  { responseType: "blob", headers: { Authorization: `Bearer ${jwt}` } }
                );
                profilePictureBlobUrl = URL.createObjectURL(profilePictureResponse.data);
              } catch (error) {
                console.error(`Error fetching profile picture for post ${post.id}:`, error);
              }
            }

            return {
              ...post,
              img: imgBlobUrl,
              video: videoBlobUrl,
              profilePicture: profilePictureBlobUrl || "/default-profile.png",
            };
          })
        );

        setTweets(postsWithMedia);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [jwt]);

  // Open edit modal
  const openEditModal = (post) => {
    setEditingPost(post);
    setEditContent(post.content);
    setModalOpen(true);
  };

  // Close edit modal
  const closeEditModal = () => {
    setEditingPost(null);
    setEditContent("");
    setEditMedia(null);
    setModalOpen(false);
  };

  // Handle edit content change
  const handleEditContentChange = (e) => {
    setEditContent(e.target.value);
  };

  // Handle edit media change
  const handleEditMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditMedia(file);
    }
  };

  // Update post
  const updatePost = async () => {
    if (!editingPost) return;

    const formData = new FormData();
    formData.append("content", editContent);
    if (editMedia) {
      formData.append("file", editMedia);
    }

    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/posts/updatePost/${editingPost.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setTweets((prevTweets) =>
          prevTweets.map((tweet) =>
            tweet.id === editingPost.id
              ? { ...tweet, content: editContent, image: response.data.image }
              : tweet
          )
        );
        alert("Post updated successfully!");
        closeEditModal();
      }
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update post");
    }
  };

  // Delete post
  const deleteTweet = async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/posts/deletePost/${id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      if (response.status === 200) {
        setTweets(tweets.filter((tweet) => tweet.id !== id));
        alert("Post deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post");
    }
  };

  return (
    <div className="w-[250px] xl:w-[300px] pt-10 pb-6 p-4 h-[320px] bg-[#0098F1] rounded-md">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <img
          src={formData.profilePhoto || defaultProfilePic}
          alt="Profile"
          className="md:h-[100px] h-[80px] w-[80px] md:w-[100px] rounded-full mb-2 border-4 border-white object-cover"
        />

        <div className="text-white font-semibold text-lg">{formData.fullName}</div>
        <div className="text-white">{formData.email}</div>

        <hr className="border-t-2 border-white my-4 w-1/2 mx-8" />

        <div className="gap-4">
          <Link to="/user/Profile">
            <div className="flex justify-between items-center text-white gap-16 mt-2 cursor-pointer">
              <div>View your profile</div>
            </div>
          </Link>

          <div
            className="flex justify-between items-center text-white gap-16 mt-2 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <div>View posts</div>
          </div>
        </div>

        {/* Posts Modal */}
        <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} style={customStyles}>
          <div className="bg-white pl-3 overflow-auto h-[450px] w-[600px]">
            {loading && <p>Loading posts...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {tweets.map((tweet) => (
              <div className="p-4 border border-gray-300 rounded-lg mt-4" key={tweet.id}>
                <div className="flex justify-between">
                  <Avatar
                    alt={tweet.postedBY || "Unknown User"}
                    src={tweet.profilePicture || "/default-profile.png"}
                  />
                  <div className="ml-2">
                    <div className="font-semibold">{tweet.name || "Unknown User"}</div>
                    <div className="text-sm text-gray-500">
                      {new Date(tweet.dateTime).toLocaleString()}
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <FaEdit
                      className="text-[#0098f1] cursor-pointer"
                      onClick={() => openEditModal(tweet)}
                    />
                    <FaTrash
                      className="text-red-600 cursor-pointer"
                      onClick={() => deleteTweet(tweet.id)}
                    />
                  </div>
                </div>
                <div className="mt-2">{tweet.content}</div>

                {/* Display image if available */}
                {tweet.img && (
                  <img
                    src={tweet.img}
                    className="mt-2 max-w-full h-auto rounded-lg"
                    alt="Post media"
                  />
                )}

                {/* Display video if available */}
                {tweet.video && (
                  <video controls className="mt-2 max-w-full h-auto rounded-lg">
                    <source src={tweet.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                <div className="mt-2 flex justify-between items-center border-t gap-8 py-4">
                  <div
                    className="flex justify-center items-center flex-row gap-2 text-[#0098F1] mr-4 cursor-pointer"
                    onClick={() => handleLike(tweet.id)}
                  >
                     {tweet.isLiked ? <FcLike className="w-5 h-5" /> : <FcLikePlaceholder className="w-5 h-5" />}
                                    <span>{tweet.likeCount}</span>
                  </div>
                  <div
                    className="flex cursor-pointer justify-center items-center flex-row gap-2 text-[#0098F1]"
                    onClick={() => toggleCommentInput(tweet.id)}
                  >
                    <FaRegComment />
                    <span>Comment</span>
                  </div>
                  <div className="flex cursor-pointer justify-center items-center flex-row gap-2 text-[#0098F1]">
                    <IoShareSocialOutline />
                    <span>Share</span>
                  </div>
                </div>

                {/* Comment section */}
                {visibleComments[tweet.id] && (
  <div className="mt-2">
    <input
      type="text"
      className="w-full border border-gray-300 rounded px-3 py-2"
      placeholder="Write a comment..."
      value={commentData}
      onChange={(e) => setCommentData(e.target.value)}
    />
    <button
      className="mt-2 bg-[#0098f1] text-white py-2 px-4 rounded"
      onClick={() => handleAddComment(tweet.id)}
    >
      Comment
    </button>
    <div className="mt-4">
    {comments[tweet.id] &&
  comments[tweet.id].map((comment) => (
    <div
      key={comment.id}
      className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm mt-3 flex items-start gap-4 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
     {/* Profile Picture */}
<img
  src={comment.profilePicture || "/default-profile.png"}
  alt={comment.name}
  className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600"
/>

<div className="flex-1">
  {/* User Name */}
  <strong className="text-gray-800 dark:text-gray-200 font-semibold">
    {comment.firstName
      ? `${comment.firstName.split("@")[0]}` 
      : "Unknown User"}
  </strong>
  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{comment.content}</p>

        {/* Reply Button */}
  <button
          className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
        onClick={() => setReplyData({ commentId: comment.id, tweetId: tweet.id })}
>
  Reply
</button>

  {/* Reply Input Field */}
  {replyData?.commentId === comment.id && (
    <div className="mt-3">
      <input
        type="text"
        className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition-all"
        placeholder="Write a reply..."
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
      />
      <button
        className="mt-2 bg-green-500 hover:bg-green-600 text-white py-1.5 px-4 rounded-lg text-sm transition-all"
        onClick={() => handleAddReply(tweet.id, comment.id)}
      >
        Reply
      </button>
    </div>
  )}

  {/* Display Replies */}
  {comment.replies && comment.replies.length > 0 && (
    <div className="ml-10 mt-3 space-y-2">
      {comment.replies.map((reply) => (
        <div
          key={reply.id}
          className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 shadow-sm flex items-start gap-3"
        >
          {/* Profile Picture for Replies */}
          <img
            src={reply.profilePicture || "/default-profile.png"} 
            alt={reply.firstName}
            className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600"
          />
          <div>
            {/* User Name for Replies */}
            <strong className="text-gray-800 dark:text-gray-200 font-semibold">
              {reply.firstName
                ? `${reply.firstName.split("@")[0]}` 
                : "Unknown User"}
            </strong>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              {reply.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

      
    </div>
  ))}

    </div>
  </div>
)}
              </div>
            ))}
          </div>
        </Modal>

        {/* Edit Modal */}
        <Modal isOpen={editingPost !== null} onRequestClose={closeEditModal} style={customStyles}>
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              rows="4"
              placeholder="Edit your post..."
              value={editContent}
              onChange={handleEditContentChange}
            />
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleEditMediaChange}
              className="mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                onClick={closeEditModal}
              >
                Cancel
              </button>
              <button
                className="bg-[#0098f1] text-white py-2 px-4 rounded-lg"
                onClick={updatePost}
              >
                Update
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default LeftSide;