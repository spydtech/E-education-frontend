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
  const [tweetData, setTweetData] = useState({
      id: Math.floor(Math.random() * 100000 + 1),
      content: "",
      createdAt: new Date().toISOString(),
      image: "",
      video: "",
      tags: [],
      tweetedBy: { id: Math.floor(Math.random() * 100000 + 1), fullName: "" },
      profilePicture: "",
      isLiked: false,
      comments: [],
    });

  const [tweets, setTweets] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visibleComments, setVisibleComments] = useState({});
  const [commentData, setCommentData] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [editContent, setEditContent] = useState("");
 

  const jwt = localStorage.getItem("jwt"); // Retrieve JWT from localStorage

  // Fetch user profile data
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });

        const user = response.data;
        const fullName = `${user.firstName} ${user.lastName}`;

        // Fetch profile photo
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
      } catch (error) {
        console.error("Error fetching user profile data:", error);
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


  const handleAddMedia = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        setFile(selectedFile);
        if (selectedFile.type.startsWith("image/")) {
          setTweetData({ ...tweetData, image: reader.result });
        } else if (selectedFile.type.startsWith("video/")) {
          setTweetData({ ...tweetData, video: reader.result });
        }
      };
    }
  };
  const onEmojiClick = (emojiData) => {
    if (emojiData && emojiData.emoji) {
      setTweetData((prevData) => ({
        ...prevData,
        content: prevData.content + emojiData.emoji,
      }));
    } else {
      console.error("Failed to select emoji:", emojiData);
    }
  };

  const toggleLike = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, isLiked: !tweet.isLiked } : tweet
      )
    );
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
  




  // Function to open edit modal
  const [editTweetId, setEditTweetId] = useState(null);
  const editTweet = (post) => {
    setEditingPost(post);
    setEditContent(post.content);
    setEditTweetId(post.id); // Set the editTweetId
    setModalOpen(true);
  };


  const handleCancelEdit = () => {
    setEditingPost(null);
    setEditTweetId(null); // Reset editTweetId
    setModalOpen(false);
  };

  // Function to update the post
  const updateTweet = async () => {
    if (!editingPost) return;
  
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/posts/editPost/${editingPost.id}`,
        { content: editContent },
        { headers: { Authorization: `Bearer ${jwt}` } }
      );
  
      if (response.status === 200) {
        setTweets(
          tweets.map((tweet) =>
            tweet.id === editingPost.id ? { ...tweet, content: editContent } : tweet
          )
        );
        alert("Post updated successfully!");
        setEditingPost(null);
        setEditTweetId(null); // Reset editTweetId
        setModalOpen(false);
      }
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update post");
    }
  };


  const handleCommentChange = (e) => {
    setCommentData(e.target.value);
  };

  const addComment = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              comments: [
                ...(tweet.comments || []),
                { id: Math.random(), text: commentData },
              ],
            }
          : tweet
      )
    );
    setCommentData("");
  };

  const handleChange = (e) => {
    setTweetData({ ...tweetData, content: e.target.value });
  };

  const toggleCommentInput = (id) => {
    setVisibleComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handlePost = async () => {
    if (!tweetData.content.trim() && !file) {
      setMessage("Please add content or media.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.fullName);
    formDataToSend.append("content", tweetData.content);
    formDataToSend.append("postedBY", formData.fullName);
    formDataToSend.append("createdAt", tweetData.createdAt);

    if (file) {
      formDataToSend.append("file", file, file.name);
    }

    try {
      const response = await axios.post(
        "${API_BASE_URL}/api/posts/createPost/media",
        formDataToSend,
        { headers: { Authorization: `Bearer ${jwt}`, "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 201 || response.status === 200) {
        const newPost = response.data;

        // // Send push notification
        // await axios.post(
        //   "${API_BASE_URL}/api/notifications",
        //   {
        //     userId: formData.fullName,
        //     message: `${formData.fullName} posted: ${tweetData.content.slice(0, 50)}...`,
        //     postId: newPost.id,
        //     type: "NEW_POST",
        //   },
        //   { headers: { Authorization: `Bearer ${jwt}` } }
        // );

        setTweets([response.data, ...tweets]);
        toast.success("Post created successfully!");
        setMessage("Post created successfully!");
        setTweetData({ ...tweetData, content: "", image: "", video: "" });
        setFile(null);
        setOpen(false);
      } else {
        throw new Error("Unexpected response status: " + response.status);
      }
    } catch (error) {
      console.error("Error creating post:", error.response?.data || error.message);
      setMessage(`Failed to create the post: ${error.response?.data?.message || error.message}`);
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
          <Link to="/Profile">
            <div className="flex justify-between items-center text-white gap-16 mt-2 cursor-pointer">
              <div>View your profile</div>
            </div>
          </Link>

          <div className="flex justify-between items-center text-white gap-16 mt-2 cursor-pointer" onClick={() => setModalOpen(true)}>
            <div>View posts</div>
          </div>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-[400px] lg:w-[600px] border-2 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <textarea
              placeholder="What is happening?!"
              rows={12}
              cols={28}
              className="w-full border border-[#0098f1] text-black rounded-lg outline-none resize-none text-lg"
              onChange={handleChange}
              value={tweetData.content}
            />
            <div className="mt-2 flex justify-between items-center">
              <label className="cursor-pointer">
                <CiCamera className="w-[25px] h-[25px] text-black" />
                <input
                  type="file"
                  accept="image/,video/"
                  className="hidden"
                  onChange={handleAddMedia}
                />
              </label>
              <button
                className="bg-[#0098f1] text-white py-2 px-4 rounded"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                Emoji
              </button>
              {showEmojiPicker && (
                <div className="absolute bottom-16 right-8 z-10 bg-white border rounded-lg shadow-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Choose an emoji</h3>
                    <button
                      className="text-red-500 font-bold text-lg cursor-pointer"
                      onClick={() => setShowEmojiPicker(false)}
                    >
                      ✖
                    </button>
                  </div>
                  <EmojiPicker onEmojiClick={onEmojiClick} />
                </div>
              )}

              <button
                className="bg-[#0098f1] text-white py-2 px-4 rounded"
                onClick={handlePost}
              >
                {editTweetId ? "Update" : "Post"}
              </button>
            </div>
          </div>
        </div>
      </Modal>

        <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} style={customStyles}>
          <div className="bg-white mt-3 pl-3 overflow-auto max-h-[650px] w-[600px]">
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
          <div className="font-semibold">{tweet.postedBY || "Unknown User"}</div>
          <div className="text-sm text-gray-500">
            {new Date(tweet.dateTime).toLocaleString()}
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <FaEdit
            className="text-[#0098f1] cursor-pointer"
            onClick={() => editTweet(tweet)}
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
          onClick={() => toggleLike(tweet.id)}
        >
          {tweet.isLiked ? <FcLike className="w-5 h-5" /> : <FcLikePlaceholder className="w-5 h-5" />}
          <span>{tweet.isLiked ? "1" : "Like"}</span>
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
            onChange={handleCommentChange}
          />
          <button
            className="mt-2 bg-[#0098f1] text-white py-2 px-4 rounded"
            onClick={() => addComment(tweet.id)}
          >
            Comment
          </button>
          <div className="mt-4">
            {tweet.comments &&
              tweet.comments.map((comment) => (
                <div key={comment.id} className="p-2 bg-gray-100 rounded mt-2">
                  {comment.text}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  ))}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default LeftSide;
