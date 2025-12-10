import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { CiCamera } from "react-icons/ci";
import { FaTrash } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineVideoCamera, AiOutlineCalendar } from "react-icons/ai";
import Modal from "@mui/material/Modal";
import EmojiPicker from "emoji-picker-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL } from "../../../Config/api";

// Maximum file sizes
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const MAX_VIDEO_SIZE = 20 * 1024 * 1024;

const compressImage = async (file, maxWidth = 800, quality = 0.7) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const scale = Math.min(maxWidth / img.width, 1);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              resolve(file);
              return;
            }
            resolve(new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now()
            }));
          },
          'image/jpeg',
          quality
        );
      };
    };
    reader.readAsDataURL(file);
  });
};

export default function Post() {
  const [postData, setPostData] = useState({
    content: "",
    name: ""
  });

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    profilePicture: "/default-profile.png",
  });

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [commentData, setCommentData] = useState("");
  const [visibleComments, setVisibleComments] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const jwt = localStorage.getItem("jwt");

  const formatTime = (dateString) => {
    if (!dateString) return "Just now";
    
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Just now";
      
      const now = new Date();
      const diffInSeconds = Math.floor((now - date) / 1000);
      
      if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
      if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
      if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
      if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
      
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (error) {
      return "Just now";
    }
  };

  useEffect(() => {
    fetchUserProfile();
    fetchPosts();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      const user = response.data;
      const fullName = `${user.firstName} ${user.lastName}`;

      setUserData({
        fullName,
        email: user.email,
        profilePicture: user.profilePicture || "/default-profile.png",
      });
      
      setPostData(prev => ({ ...prev, name: fullName }));
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`${API_BASE_URL}/api/posts/all`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      if (response.data.success) {
        const postsWithMedia = await Promise.all(
          response.data.posts.map(async (post) => {
            let imgUrl = null;
            let videoUrl = null;
            let profilePicUrl = null;
            let isLikedByCurrentUser = false;

            if (post.img || post.mediaType?.startsWith("image/")) {
              try {
                const imgResponse = await axios.get(
                  `${API_BASE_URL}/api/posts/${post.id}/image`,
                  {
                    responseType: "blob",
                    headers: { Authorization: `Bearer ${jwt}` },
                  }
                );
                imgUrl = URL.createObjectURL(imgResponse.data);
              } catch (error) {
                console.log(`No image for post ${post.id}`);
              }
            }

            if (post.video || post.mediaType?.startsWith("video/")) {
              try {
                const videoResponse = await axios.get(
                  `${API_BASE_URL}/api/posts/${post.id}/video`,
                  {
                    responseType: "blob",
                    headers: { Authorization: `Bearer ${jwt}` },
                    timeout: 30000,
                  }
                );
                videoUrl = URL.createObjectURL(videoResponse.data);
              } catch (error) {
                console.log(`No video for post ${post.id}`);
              }
            }

            if (post.profilePicture) {
              try {
                const profileResponse = await axios.get(
                  `${API_BASE_URL}/api/posts/${post.id}/profile-picture`,
                  {
                    responseType: "blob",
                    headers: { Authorization: `Bearer ${jwt}` },
                  }
                );
                profilePicUrl = URL.createObjectURL(profileResponse.data);
              } catch (error) {
                console.log(`No profile picture for post ${post.id}`);
              }
            }

            try {
              const likeDetailsResponse = await axios.get(
                `${API_BASE_URL}/api/likes/${post.id}/details`,
                { headers: { Authorization: `Bearer ${jwt}` } }
              );
              isLikedByCurrentUser = likeDetailsResponse.data.isLiked;
            } catch (error) {
              console.log(`Error fetching like details for post ${post.id}:`, error);
            }

            return {
              ...post,
              img: imgUrl,
              video: videoUrl,
              profilePicture: profilePicUrl || "/default-profile.png",
              displayTime: formatTime(post.createdAt),
              isLiked: isLikedByCurrentUser,
              likeCount: post.likeCount || 0,
              userFullName: post.userFullName || post.postedBY?.split('@')[0] || "User"
            };
          })
        );

        setPosts(postsWithMedia);
      } else {
        setError("Failed to load posts");
      }
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to load posts. Please try again later.");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setPostData({ ...postData, content: e.target.value });
  };

  const handleAddMedia = async (e) => {
    const files = Array.from(e.target.files);
    
    if (files.length === 0) return;
    
    if (mediaFiles.length + files.length > 10) {
      toast.error("You can upload a maximum of 10 files");
      return;
    }
    
    try {
      const processedFiles = await Promise.all(
        files.map(async (file) => {
          if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
            toast.error(`Unsupported file type: ${file.name}`);
            return null;
          }
          
          if (file.type.startsWith("image/") && file.size > MAX_IMAGE_SIZE) {
            toast.error(`Image ${file.name} is too large (max 5MB)`);
            return null;
          }
          
          if (file.type.startsWith("video/") && file.size > MAX_VIDEO_SIZE) {
            toast.error(`Video ${file.name} is too large (max 20MB)`);
            return null;
          }
          
          if (file.type.startsWith("image/")) {
            try {
              return await compressImage(file);
            } catch (error) {
              console.error("Error compressing image:", error);
              return file;
            }
          }
          
          return file;
        })
      );
      
      const validFiles = processedFiles.filter(file => file !== null);
      
      if (validFiles.length > 0) {
        setMediaFiles(prev => [...prev, ...validFiles]);
      }
    } catch (error) {
      console.error("Error processing files:", error);
      toast.error("Error processing files. Please try again.");
    }
  };

  const removeMedia = (index) => {
    setMediaFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleCreatePost = async () => {
    if (!postData.content.trim() && mediaFiles.length === 0) {
      toast.error("Please add content or media.");
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("name", postData.name);
    formData.append("content", postData.content);
    
    mediaFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/posts/create`,
        formData,
        { 
          headers: { 
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "multipart/form-data" 
          } 
        }
      );

      if (response.data.success) {
        toast.success("Post created successfully!");
        
        const newPost = response.data.post;
        const newPostWithMedia = {
          ...newPost,
          displayTime: "Just now",
          isLiked: false,
          likeCount: 0,
          userFullName: postData.name,
          profilePicture: userData.profilePicture
        };
        
        setPosts(prev => [newPostWithMedia, ...prev]);
        
        setPostData({ content: "", name: postData.name });
        setMediaFiles([]);
        setOpen(false);
        
        setTimeout(() => {
          fetchPosts();
        }, 1000);
      } else {
        toast.error(response.data.error || "Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error(error.response?.data?.error || "Failed to create post. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleLike = async (postId) => {
    if (!jwt) {
      toast.error("Please login to like posts");
      return;
    }

    try {
      const likeDetailsResponse = await axios.get(
        `${API_BASE_URL}/api/likes/${postId}/details`,
        { headers: { Authorization: `Bearer ${jwt}` } }
      );

      const currentIsLiked = likeDetailsResponse.data.isLiked;
      
      const response = await axios.put(
        `${API_BASE_URL}/api/likes/${postId}`,
        {},
        { headers: { Authorization: `Bearer ${jwt}` } }
      );

      if (response.status === 200) {
        const newLikeCount = response.data;
        const newIsLiked = !currentIsLiked;

        setPosts(prevPosts =>
          prevPosts.map(post =>
            post.id === postId
              ? { 
                  ...post, 
                  isLiked: newIsLiked,
                  likeCount: newLikeCount 
                }
              : post
          )
        );
        
        toast.success(newIsLiked ? "Post liked!" : "Post unliked!");
      }
    } catch (error) {
      console.error("Error toggling like:", error);
      toast.error(error.response?.data?.message || "Failed to toggle like");
    }
  };

  const onEmojiClick = (emojiData) => {
    if (emojiData && emojiData.emoji) {
      setPostData(prev => ({
        ...prev,
        content: prev.content + emojiData.emoji
      }));
    }
  };

  const handleDeletePost = async (postId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      const response = await axios.delete(
        `${API_BASE_URL}/api/posts/${postId}`,
        { headers: { Authorization: `Bearer ${jwt}` } }
      );

      if (response.data.success) {
        toast.success("Post deleted successfully");
        setPosts(prev => prev.filter(post => post.id !== postId));
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Failed to delete post");
    }
  };

  useEffect(() => {
    return () => {
      posts.forEach(post => {
        if (post.img && post.img.startsWith('blob:')) {
          URL.revokeObjectURL(post.img);
        }
        if (post.video && post.video.startsWith('blob:')) {
          URL.revokeObjectURL(post.video);
        }
        if (post.profilePicture && post.profilePicture.startsWith('blob:')) {
          URL.revokeObjectURL(post.profilePicture);
        }
      });
    };
  }, [posts]);

  return (
    <div className="w-full bg-white rounded-lg shadow-lg">
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Create Post Input */}
      <div className="p-4 border-b">
        <div className="flex items-start space-x-3">
          <Avatar
            alt={userData.fullName}
            src={userData.profilePicture}
            sx={{ width: 48, height: 48 }}
          />
          <div className="flex-1">
            <textarea
              placeholder="What's on your mind?"
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              onClick={() => setOpen(true)}
              readOnly
              value={postData.content}
            />
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between items-center mt-4 gap-2">
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center space-x-2 cursor-pointer text-gray-600 hover:text-blue-500 text-sm">
              <CiCamera className="w-5 h-5" />
              <span className="hidden sm:inline">Photo/Video</span>
            </label>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 text-sm">
              <AiOutlineVideoCamera className="w-5 h-5" />
              <span className="hidden sm:inline">Live Video</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 text-sm">
              <AiOutlineCalendar className="w-5 h-5" />
              <span className="hidden sm:inline">Event</span>
            </button>
          </div>
          
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
            onClick={() => setOpen(true)}
          >
            Post
          </button>
        </div>
      </div>

      {/* Create Post Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Create Post</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="flex items-center space-x-3 mb-4">
                <Avatar
                  alt={userData.fullName}
                  src={userData.profilePicture}
                  sx={{ width: 40, height: 40 }}
                />
                <div>
                  <div className="font-semibold text-sm">{userData.fullName}</div>
                  <div className="text-xs text-gray-500">Now</div>
                </div>
              </div>
              
              <textarea
                placeholder="What's on your mind?"
                rows={4}
                className="w-full border-0 text-base placeholder-gray-400 focus:outline-none resize-none"
                onChange={handleChange}
                value={postData.content}
              />
              
              {/* Media Preview */}
              {mediaFiles.length > 0 && (
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {mediaFiles.map((file, index) => (
                    <div key={index} className="relative">
                      {file.type.startsWith("image/") ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${index}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      ) : (
                        <video
                          src={URL.createObjectURL(file)}
                          className="w-full h-32 object-cover rounded-lg"
                          controls
                        />
                      )}
                      <button
                        onClick={() => removeMedia(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                      >
                        <FaTrash className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-4 p-3 border border-gray-300 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">Add to your post</span>
                  <div className="flex space-x-3">
                    <label className="cursor-pointer">
                      <CiCamera className="w-5 h-5 text-green-500" />
                      <input
                        type="file"
                        accept="image/*,video/*"
                        className="hidden"
                        onChange={handleAddMedia}
                        multiple
                      />
                    </label>
                    <button
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className="text-yellow-500"
                    >
                      😀
                    </button>
                  </div>
                </div>
                
                {showEmojiPicker && (
                  <div className="mt-3">
                    <EmojiPicker onEmojiClick={onEmojiClick} width="100%" />
                  </div>
                )}
              </div>
              
              <div className="mt-4">
                <button
                  onClick={handleCreatePost}
                  disabled={isUploading || (!postData.content.trim() && mediaFiles.length === 0)}
                  className={`w-full py-3 rounded-lg font-medium text-sm ${
                    isUploading || (!postData.content.trim() && mediaFiles.length === 0)
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {isUploading ? "Posting..." : "Post"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Posts Feed */}
      <div className="overflow-y-auto">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-3 text-gray-600 text-sm">Loading posts...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-600 text-sm">{error}</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-8 text-gray-600 text-sm">
            No posts yet. Be the first to post!
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="p-4 border-b">
              {/* Post Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar
                    alt={post.userFullName}
                    src={post.profilePicture}
                    sx={{ width: 40, height: 40 }}
                  />
                  <div>
                    <div className="font-semibold text-sm">{post.userFullName}</div>
                    <div className="text-xs text-gray-500">
                      {post.displayTime} • 🌍
                    </div>
                  </div>
                </div>
                
                {post.postedBY === userData.email && (
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <FaTrash className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {/* Post Content */}
              <div className="mt-3">
                <p className="text-gray-800 text-sm">{post.content}</p>
              </div>
              
              {/* Media */}
              {post.img && (
                <div className="mt-3">
                  <img
                    src={post.img}
                    alt="Post"
                    className="w-full rounded-lg max-h-64 object-contain"
                  />
                </div>
              )}
              
              {post.video && (
                <div className="mt-3">
                  <video
                    controls
                    className="w-full rounded-lg max-h-64"
                  >
                    <source src={post.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              
              {/* Post Stats */}
              <div className="mt-3 flex justify-between text-gray-500 text-xs">
                <div className="flex items-center space-x-1">
                  <FcLike className="w-3 h-3" />
                  <span>{post.likeCount} likes</span>
                </div>
                <div>{post.viewCount || 0} views</div>
              </div>
              
              {/* Post Actions */}
              <div className="mt-3 flex border-t border-b py-2">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg transition-colors text-sm ${
                    post.isLiked ? "text-blue-600" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {post.isLiked ? (
                    <FcLike className="w-4 h-4" />
                  ) : (
                    <FcLikePlaceholder className="w-4 h-4" />
                  )}
                  <span>Like</span>
                </button>
                
                <button
                  onClick={() => {
                    setVisibleComments(prev => ({
                      ...prev,
                      [post.id]: !prev[post.id]
                    }));
                  }}
                  className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-sm"
                >
                  <FaRegComment className="w-4 h-4" />
                  <span>Comment</span>
                </button>
                
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-sm">
                  <IoShareSocialOutline className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
              
              {/* Comments Section */}
              {visibleComments[post.id] && (
                <div className="mt-3">
                  <div className="flex space-x-2">
                    <Avatar
                      alt={userData.fullName}
                      src={userData.profilePicture}
                      sx={{ width: 32, height: 32 }}
                    />
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Write a comment..."
                        className="w-full border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={commentData}
                        onChange={(e) => setCommentData(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}