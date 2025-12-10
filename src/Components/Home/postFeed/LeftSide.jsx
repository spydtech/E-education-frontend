import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { Link } from "react-router-dom";
import defaultProfilePic from "../../../assetss/profile/man.png";
import { FaEdit, FaTrash, FaRegComment, FaBars } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { IoShareSocialOutline } from "react-icons/io5";
import Avatar from "@mui/material/Avatar";
import { API_BASE_URL } from "../../../Config/api";
import { likePost } from "../../../State/Post/Postmethod";
import { createComment, fetchComments } from "../../../State/Post/Postmethod";

// Modal Styles for mobile
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "650px",
    maxHeight: "80vh",
    overflowY: "auto",
    borderRadius: "10px",
    padding: "1rem",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  }
};

Modal.setAppElement("#root");

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
  const [comments, setComments] = useState({});
  const [replyData, setReplyData] = useState(null);
  const [replyText, setReplyText] = useState("");

  const formatIndianTime = (dateString) => {
    if (!dateString) {
      dateString = new Date().toISOString();
    }

    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          day: 'numeric',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
      }

      return date.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (error) {
      return new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    }
  };

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

    const token = localStorage.getItem("jwt");

    if (!token) {
      alert("Session expired. Please log in again.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/comments/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
        body: new URLSearchParams({
          postId: postId,
          content: replyText,
          parentCommentId: commentId,
        }),
      });

      if (!response.ok) throw new Error(`Failed to add reply: ${response.statusText}`);

      const newReply = await response.json();

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
          setFormData({
            fullName,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            profilePhoto: defaultProfilePic,
          });
        }
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchUserProfile();
  }, [jwt]);

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

        const postsWithMedia = await Promise.all(
          response.data.map(async (post) => {
            const postDate = post.dateTime || post.createdAt || new Date().toISOString();
            let imgBlobUrl = null;
            let videoBlobUrl = null;
            let profilePictureBlobUrl = null;

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
              displayTime: formatIndianTime(postDate)
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

  const openEditModal = (post) => {
    setEditingPost(post);
    setEditContent(post.content);
    setModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingPost(null);
    setEditContent("");
    setEditMedia(null);
    setModalOpen(false);
  };

  const handleEditContentChange = (e) => {
    setEditContent(e.target.value);
  };

  const handleEditMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditMedia(file);
    }
  };

  const updatePost = async () => {
    if (!editingPost) return;

    const formDataObj = new FormData();
    formDataObj.append("content", editContent);
    if (editMedia) {
      formDataObj.append("file", editMedia);
    }

    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/posts/updatePost/${editingPost.id}`,
        formDataObj,
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
              ? {
                  ...tweet,
                  content: editContent,
                  image: response.data.image,
                  video: response.data.video,
                  displayTime: formatIndianTime(new Date().toISOString())
                }
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
    <div className="w-full lg:w-[250px] xl:w-[300px] bg-[#0098F1] rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 lg:p-6">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between mb-4">
          <h2 className="text-white text-xl font-bold">Profile</h2>
          <button
            onClick={() => document.getElementById('mobileLeftSide').classList.add('hidden')}
            className="text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <img
            src={formData.profilePhoto || defaultProfilePic}
            alt="Profile"
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white object-cover mb-4"
          />

          <div className="text-white font-semibold text-lg text-center">{formData.fullName}</div>
          <div className="text-white text-sm text-center mb-6">{formData.email}</div>

          <hr className="border-t-2 border-white w-3/4 mb-6" />

          <div className="space-y-4 w-full">
            <Link to="/user/Profile">
              <div className="flex items-center justify-between text-white p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span>View your profile</span>
                </div>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </div>
            </Link>

            <div
              className="flex items-center justify-between text-white p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
                <span>View posts</span>
              </div>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Modal */}
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} style={customStyles}>
        <div className="bg-white p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Posts</h2>
            <button onClick={() => setModalOpen(false)} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {loading && <p className="text-center py-4">Loading posts...</p>}
          {error && <p className="text-red-500 text-center py-4">{error}</p>}
          
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {tweets.map((tweet) => (
              <div className="border border-gray-200 rounded-lg p-4" key={tweet.id}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <Avatar
                      alt={tweet.postedBY || "Unknown User"}
                      src={tweet.profilePicture || "/default-profile.png"}
                      sx={{ width: 40, height: 40 }}
                    />
                    <div className="ml-3">
                      <div className="font-semibold text-sm">{tweet.name || "Unknown User"}</div>
                      <div className="text-xs text-gray-500">{tweet.displayTime}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <FaEdit
                      className="text-[#0098f1] cursor-pointer text-sm"
                      onClick={() => openEditModal(tweet)}
                    />
                    <FaTrash
                      className="text-red-600 cursor-pointer text-sm"
                      onClick={() => deleteTweet(tweet.id)}
                    />
                  </div>
                </div>
                
                <div className="mt-3 text-sm">{tweet.content}</div>

                {tweet.img && (
                  <img
                    src={tweet.img}
                    className="mt-2 w-full rounded-lg max-h-48 object-contain"
                    alt="Post media"
                  />
                )}

                {tweet.video && (
                  <video controls className="mt-2 w-full rounded-lg max-h-48">
                    <source src={tweet.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                <div className="mt-3 flex items-center justify-between border-t pt-3">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center gap-1 text-[#0098F1] cursor-pointer"
                      onClick={() => handleLike(tweet.id)}
                    >
                      {tweet.isLiked ? <FcLike className="w-4 h-4" /> : <FcLikePlaceholder className="w-4 h-4" />}
                      <span className="text-sm">{tweet.likeCount}</span>
                    </div>
                    <div
                      className="flex items-center gap-1 text-[#0098F1] cursor-pointer"
                      onClick={() => toggleCommentInput(tweet.id)}
                    >
                      <FaRegComment className="w-4 h-4" />
                      <span className="text-sm">Comment</span>
                    </div>
                  </div>
                </div>

                {visibleComments[tweet.id] && (
                  <div className="mt-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                        placeholder="Write a comment..."
                        value={commentData}
                        onChange={(e) => setCommentData(e.target.value)}
                      />
                      <button
                        className="bg-[#0098f1] text-white py-2 px-3 rounded text-sm"
                        onClick={() => handleAddComment(tweet.id)}
                      >
                        Post
                      </button>
                    </div>
                    <div className="mt-3 space-y-3">
                      {comments[tweet.id]?.map((comment) => (
                        <div key={comment.id} className="bg-gray-50 rounded p-3">
                          <div className="flex items-start gap-2">
                            <img
                              src={comment.profilePicture || "/default-profile.png"}
                              alt={comment.name}
                              className="w-8 h-8 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="font-medium text-sm">
                                {comment.firstName ? `${comment.firstName.split("@")[0]}` : "Unknown User"}
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{comment.content}</p>
                              
                              <button
                                className="text-blue-600 text-xs mt-1"
                                onClick={() => setReplyData({ commentId: comment.id, tweetId: tweet.id })}
                              >
                                Reply
                              </button>

                              {replyData?.commentId === comment.id && (
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded px-3 py-1 text-sm"
                                    placeholder="Write a reply..."
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                  />
                                  <button
                                    className="mt-1 bg-green-500 text-white py-1 px-3 rounded text-sm"
                                    onClick={() => handleAddReply(tweet.id, comment.id)}
                                  >
                                    Send
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal isOpen={editingPost !== null} onRequestClose={closeEditModal} style={customStyles}>
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 text-sm"
            rows="4"
            placeholder="Edit your post..."
            value={editContent}
            onChange={handleEditContentChange}
          />
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleEditMediaChange}
            className="mb-4 w-full text-sm"
          />
          <div className="flex gap-2">
            <button
              className="flex-1 bg-gray-500 text-white py-2 rounded-lg"
              onClick={closeEditModal}
            >
              Cancel
            </button>
            <button
              className="flex-1 bg-[#0098f1] text-white py-2 rounded-lg"
              onClick={updatePost}
            >
              Update
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LeftSide;