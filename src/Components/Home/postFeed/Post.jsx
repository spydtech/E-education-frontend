

// import React, { useState, useEffect } from "react";
// import Avatar from "@mui/material/Avatar";
// import { CiCamera } from "react-icons/ci";
// import { FaRegPenToSquare, FaTrash } from "react-icons/fa6";
// import { FaRegComment } from "react-icons/fa";
// import { FcLikePlaceholder, FcLike } from "react-icons/fc";
// import { FaEdit } from "react-icons/fa";
// import { IoShareSocialOutline } from "react-icons/io5";
// import { AiOutlineVideoCamera, AiOutlineCalendar } from "react-icons/ai";
// import Modal from "@mui/material/Modal";
// import EmojiPicker from "emoji-picker-react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { API_BASE_URL } from "../../../Config/api";
// import { likePost } from "../../../State/Post/Postmethod";
// import { createComment, fetchComments  } from "../../../State/Post/Postmethod";

// export default function Post() {
//   const [tweetData, setTweetData] = useState({
//     content: "",
//     image: "",
//     video: "",
//   });

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     profilePicture: "",
//   });

//   const [tweets, setTweets] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [commentData, setCommentData] = useState("");
//   const [visibleComments, setVisibleComments] = useState({});
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [likes, setLikes] = useState({});
//   const [comments, setComments] = useState({});
//   const [replyData, setReplyData] = useState(null); // { commentId, tweetId }
//   const [replyText, setReplyText] = useState("");

//   const jwt = localStorage.getItem("jwt");

//   const handleAddComment = async (postId) => {
//     if (!commentData.trim()) return;

//     try {
//       const newComment = await createComment(jwt, postId, commentData);
//       setComments((prev) => ({
//         ...prev,
//         [postId]: [...(prev[postId] || []), newComment],
//       }));
//       setCommentData("");
//     } catch (error) {
//       console.error("Failed to create comment", error);
//     }
//   };


//   const toggleCommentInput = async (postId) => {
//     if (!visibleComments[postId]) {
//       setVisibleComments((prev) => ({ ...prev, [postId]: true }));
//       if (!comments[postId]) {
//         try {
//           const fetchedComments = await fetchComments(postId);
//           setComments((prev) => ({ ...prev, [postId]: fetchedComments }));
//         } catch (error) {
//           console.error("Failed to fetch comments", error);
//         }
//       }
//     } else {
//       setVisibleComments((prev) => ({ ...prev, [postId]: false }));
//     }
//   };
  

  

  

//   const handleLike = async (postId) => {
//     const token = localStorage.getItem("jwt");

//     if (!token) {
//       console.error("User is not authenticated.");
//       return;
//     }

//     try {
//       const updatedLikeCount = await likePost(postId, token);

//       setTweets((prevTweets) =>
//         prevTweets.map((tweet) =>
//           tweet.id === postId
//             ? { ...tweet, isLiked: !tweet.isLiked, likeCount: updatedLikeCount }
//             : tweet
//         )
//       );
//     } catch (error) {
//       console.error("Failed to like the post:", error);
//     }
//   };
  


//   const handleAddReply = async (postId, commentId) => {
//     if (!replyText.trim()) return;
  
//     const token = localStorage.getItem("jwt"); // Ensure the correct token key
  
//     if (!token) {
//       console.error("User is not authenticated.");
//       alert("Session expired. Please log in again.");
//       return;
//     }
  
//     try {
//       const response = await fetch(`${API_BASE_URL}/comments/create`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Authorization: `Bearer ${token}`, // Corrected token key
//         },
//         body: new URLSearchParams({
//           postId: postId,
//           content: replyText,
//           parentCommentId: commentId, //  Send parentCommentId to link replies
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error(`Failed to add reply: ${response.statusText}`);
//       }
  
//       const newReply = await response.json(); // Get the saved reply from backend
  
//       //  Update state with the new reply from backend
//       setComments((prev) => ({
//         ...prev,
//         [postId]: prev[postId].map((comment) =>
//           comment.id === commentId
//             ? { ...comment, replies: [...(comment.replies || []), newReply] }
//             : comment
//         ),
//       }));
  
//       setReplyText(""); 
//       setReplyData(null);
//     } catch (error) {
//       console.error("Failed to add reply:", error);
//       alert("An error occurred while adding the reply. Please try again.");
//     }
//   };

//   useEffect(() => {
//     fetchUserProfile();
//     fetchPosts();
//     fetchComments();
//   }, []);

//   const fetchUserProfile = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
//         headers: { Authorization: `Bearer ${jwt}` },
//       });

//       const user = response.data;
//       const fullName = `${user.firstName} ${user.lastName}`;

//       setFormData({
//         fullName,
//         email: user.email,
//         profilePicture: user.profilePicture || "/default-profile.png",
//       });
//     } catch (error) {
//       console.error("Error fetching user profile:", error);
//     }
//   };

//   const fetchPosts = async () => {
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.get(`${API_BASE_URL}/api/posts/getPosts`, {
//         headers: { Authorization: `Bearer ${jwt}` },
//       });

//       const postsWithDetails = await Promise.all(
//         response.data.map(async (post) => {
//           let imgBlobUrl = null;
//           let videoBlobUrl = null;

//           if (post.img) {
//             try {
//               const imgResponse = await axios.get(
//                 `${API_BASE_URL}/api/posts/${post.id}/image`,
//                 {
//                   responseType: "blob",
//                   headers: { Authorization: `Bearer ${jwt}` },
//                 }
//               );
//               imgBlobUrl = URL.createObjectURL(imgResponse.data);
//             } catch (error) {
//               console.error(`Error fetching image for post ${post.id}:`, error);
//             }
//           }

//           if (post.video) {
//             try {
//               const videoResponse = await axios.get(
//                 `${API_BASE_URL}/api/posts/${post.id}/video`,
//                 {
//                   responseType: "blob",
//                   headers: { Authorization: `Bearer ${jwt}` },
//                 }
//               );
//               videoBlobUrl = URL.createObjectURL(videoResponse.data);
//             } catch (error) {
//               console.error(`Error fetching video for post ${post.id}:`, error);
//             }
//           }

//           //  Fetch like details from backend
//           let isLiked = false;
//           let likeCount = 0;
//           try {
//             const likeResponse = await axios.get(
//               `${API_BASE_URL}/api/likes/${post.id}/details`,
//               { headers: { Authorization: `Bearer ${jwt}` } }
//             );
//             isLiked = likeResponse.data.isLiked;
//             likeCount = likeResponse.data.likeCount;
//           } catch (error) {
//             console.error(`Error fetching like details for post ${post.id}:`, error);
//           }

//           return {
//             ...post,
//             img: imgBlobUrl,
//             video: videoBlobUrl,
//             isLiked, // Store isLiked
//             likeCount, //  Store likeCount
//           };
//         })
//       );

//       setTweets(postsWithDetails);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       setError("Failed to load posts. Please try again later.");
//       setLoading(false);
//     }
//   };
//   const handleChange = (e) => {
//     setTweetData({ ...tweetData, content: e.target.value.trimStart() });
//   };
  

//   const handleAddMedia = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       const reader = new FileReader();
//       reader.readAsDataURL(selectedFile);
//       reader.onloadend = () => {
//         setFile(selectedFile);
//         if (selectedFile.type.startsWith("image/")) {
//           setTweetData({ ...tweetData, image: reader.result });
//         } else if (selectedFile.type.startsWith("video/")) {
//           setTweetData({ ...tweetData, video: reader.result });
//         }
//       };
//     }
//   };

//   const handlePost = async () => {
//     if (!tweetData.content.trim() && !file) {
//       toast.error("Please add content or media.");
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append("name", formData.fullName);
//     formDataToSend.append("content", tweetData.content);
//     formDataToSend.append("postedBY", formData.fullName);
//     formDataToSend.append("createdAt", new Date().toISOString());

//     if (file) {
//       formDataToSend.append("file", file, file.name);
//     }

//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/api/posts/createPost/media`,
//         formDataToSend,
//         { headers: { Authorization: `Bearer ${jwt}`, "Content-Type": "multipart/form-data" } }
//       );

//       if (response.status === 201 || response.status === 200) {
//         const newPost = response.data;

//         // Fetch media URLs for the new post
//         let imgBlobUrl = null;
//         let videoBlobUrl = null;

//         if (newPost.img) {
//           const imgResponse = await axios.get(
//             `${API_BASE_URL}/api/posts/${newPost.id}/image`,
//             { responseType: "blob", headers: { Authorization: `Bearer ${jwt}` } }
//           );
//           imgBlobUrl = URL.createObjectURL(imgResponse.data);
//         }

//         if (newPost.video) {
//           const videoResponse = await axios.get(
//             `${API_BASE_URL}/api/posts/${newPost.id}/video`,
//             { responseType: "blob", headers: { Authorization: `Bearer ${jwt}` } }
//           );
//           videoBlobUrl = URL.createObjectURL(videoResponse.data);
//         }

//          // Add the new post to the BEGINNING of the tweets array
//          setTweets((prevTweets) => [
//           {
//             ...newPost,
//             img: imgBlobUrl,
//             video: videoBlobUrl,
//           },
//           ...prevTweets, // Spread the existing tweets after the new post
//         ]);

//           // Call notification API
     

//         toast.success("Post created successfully!");
//         setTweetData({ content: "", image: "", video: "" });
//         setFile(null);
//         setOpen(false);
//       }
//     } catch (error) {
//       console.error("Error creating post:", error);
//       toast.error("Failed to create the post. Please try again.");
//     }
//   };

 

  

 

//   const onEmojiClick = (emojiData) => {
//     if (emojiData && emojiData.emoji) {
//       setTweetData((prevData) => ({
//         ...prevData,
//         content: prevData.content + emojiData.emoji,
//       }));
//     }
//   };

//   return (
//     <div className="lg:w-[500px] xl:w-[620px] 2xl:w-[800px] w-auto rounded-lg bg-[#0098f1]">
      
//       <div className="p-4">
//         <div className="flex">
//           <textarea
//             placeholder="Create Post..."
//             rows={2}
//             className="rounded-lg w-full border outline-none resize-none text-lg placeholder-custom"
//             onClick={() => setOpen(true)}
//             readOnly
//           />
//         </div>
//         <div className="flex justify-between items-center mt-4">
//           <label>
//             <CiCamera className="w-[25px] h-[25px] cursor-pointer" />
//             <input
//               type="file"
//               accept="image/*,video/*"
//               className="hidden"
//               onChange={handleAddMedia}
//             />
//           </label>
//           <AiOutlineVideoCamera className="w-5 h-5 cursor-pointer" />
//           <AiOutlineCalendar className="w-5 h-5 cursor-pointer" />
//           <FaRegPenToSquare className="w-5 h-5 cursor-pointer" />
//         </div>
//       </div>

//       <Modal open={open} onClose={() => setOpen(false)}>
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10"
//           onClick={() => setOpen(false)}
//         >
//           <div
//             className="bg-white rounded-lg p-6 w-[400px] lg:w-[600px] border-2 shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <textarea
//               placeholder="What is happening?!"
//               rows={12}
//               cols={28}
//               className="w-full border border-[#0098f1] text-black rounded-lg outline-none resize-none text-lg"
//               onChange={handleChange}
//               value={tweetData.content}
//             />
//             <div className="mt-2 flex justify-between items-center">
//               <label className="cursor-pointer">
//                 <CiCamera className="w-[25px] h-[25px] text-black" />
//                 <input
//                   type="file"
//                   accept="image/*,video/*"
//                   className="hidden"
//                   onChange={handleAddMedia}
//                 />
//               </label>
//               <button
//                 className="bg-[#0098f1] text-white py-2 px-4 rounded"
//                 onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//               >
//                 Emoji
//               </button>
//               {showEmojiPicker && (
//                 <div className="absolute bottom-16 right-8 z-10 bg-white border rounded-lg shadow-lg p-4">
//                   <div className="flex justify-between items-center mb-2">
//                     <h3 className="text-lg font-semibold">Choose an emoji</h3>
//                     <button
//                       className="text-red-500 font-bold text-lg cursor-pointer"
//                       onClick={() => setShowEmojiPicker(false)}
//                     >
//                       ✖
//                     </button>
//                   </div>
//                   <EmojiPicker onEmojiClick={onEmojiClick} />
//                 </div>
//               )}

//               <button
//                 className="bg-[#0098f1] text-white py-2 px-4 rounded"
//                 onClick={handlePost}
//               >
//                 Post
//               </button>
//             </div>
//           </div>
//         </div>
//       </Modal>

//       <div className="bg-white mt-3 pl-3 overflow-y-auto max-h-[500px]">
//         {loading && <p className="text-white">Loading posts...</p>}
//         {error && <p className="text-red-500">{error}</p>}
//         {tweets.map((tweet) => (
//           <div className="p-4 border border-gray-300 rounded-lg mt-4" key={tweet.id}>
//             <div className="flex text-start space-x-5">
//               <Avatar
//                 alt={tweet.postedBY || "Unknown User"}
//                 src={tweet.profilePicture || ""}
//               />
//               <div className="text-start">
//                 <div className="font-semibold">{tweet.name || "Unknown User"}</div>
//                 <div className="text-sm text-gray-500">
//                   {new Date(tweet.dateTime).toLocaleString()}
//                 </div>
//               </div>
//             </div>
//             <div className="mt-2">{tweet.content}</div>

//             {tweet.img && (
//               <img
//                 src={tweet.img}
//                 className="mt-2 max-w-full h-auto rounded-lg"
//                 alt="Post media"
//               />
//             )}

//             {tweet.video && (
//               <video controls className="mt-2 max-w-full h-auto rounded-lg">
//                 <source src={tweet.video} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )}

//             <div className="mt-2 flex justify-between items-center border-t gap-8 py-4">
//               <div
//                 className="flex justify-center items-center flex-row gap-2 text-[#0098F1] mr-4 cursor-pointer"
//                 onClick={() => handleLike(tweet.id)}
//               >
//                 {tweet.isLiked ? <FcLike className="w-5 h-5" /> : <FcLikePlaceholder className="w-5 h-5" />}
//                 <span>{tweet.likeCount}</span>
//               </div>
//               <div
//                 className="flex cursor-pointer justify-center items-center flex-row gap-2 text-[#0098F1]"
//                 onClick={() => toggleCommentInput(tweet.id)}
//               >
//                 <FaRegComment />
//                 <span>Comment</span>
//               </div>
//               <div className="flex cursor-pointer justify-center items-center flex-row gap-2 text-[#0098F1]">
//                 <IoShareSocialOutline />
//                 <span>Share</span>
//               </div>
//             </div>

//             {visibleComments[tweet.id] && (
//   <div className="mt-2">
//     <input
//       type="text"
//       className="w-full border border-gray-300 rounded px-3 py-2"
//       placeholder="Write a comment..."
//       value={commentData}
//       onChange={(e) => setCommentData(e.target.value)}
//     />
//     <button
//       className="mt-2 bg-[#0098f1] text-white py-2 px-4 rounded"
//       onClick={() => handleAddComment(tweet.id)}
//     >
//       Comment
//     </button>
//     <div className="mt-4">
//     {comments[tweet.id] &&
//   comments[tweet.id].map((comment) => (
//     <div
//       key={comment.id}
//       className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm mt-3 flex items-start gap-4 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
//     >
//      {/* Profile Picture */}
// <img
//   src={comment.profilePicture || "/default-profile.png"}
//   alt={comment.name}
//   className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600"
// />

// <div className="flex-1">
//   {/* User Name */}
//   <strong className="text-gray-800 dark:text-gray-200 font-semibold">
//     {comment.firstName
//       ? `${comment.firstName.split("@")[0]}` 
//       : "Unknown User"}
//   </strong>
//   <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{comment.content}</p>

//         {/* Reply Button */}
//   <button
//           className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
//         onClick={() => setReplyData({ commentId: comment.id, tweetId: tweet.id })}
// >
//   Reply
// </button>

//   {/* Reply Input Field */}
//   {replyData?.commentId === comment.id && (
//     <div className="mt-3">
//       <input
//         type="text"
//         className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition-all"
//         placeholder="Write a reply..."
//         value={replyText}
//         onChange={(e) => setReplyText(e.target.value)}
//       />
//       <button
//         className="mt-2 bg-green-500 hover:bg-green-600 text-white py-1.5 px-4 rounded-lg text-sm transition-all"
//         onClick={() => handleAddReply(tweet.id, comment.id)}
//       >
//         Reply
//       </button>
//     </div>
//   )}

//   {/* Display Replies */}
//   {comment.replies && comment.replies.length > 0 && (
//     <div className="ml-10 mt-3 space-y-2">
//       {comment.replies.map((reply) => (
//         <div
//           key={reply.id}
//           className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 shadow-sm flex items-start gap-3"
//         >
//           {/* Profile Picture for Replies */}
//           <img
//             src={reply.profilePicture || "/default-profile.png"} 
//             alt={reply.firstName}
//             className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600"
//           />
//           <div>
//             {/* User Name for Replies */}
//             <strong className="text-gray-800 dark:text-gray-200 font-semibold">
//               {reply.firstName
//                 ? `${reply.firstName.split("@")[0]}` 
//                 : "Unknown User"}
//             </strong>
//             <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
//               {reply.content}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )}
// </div>

      
//     </div>
//   ))}

//     </div>
//   </div>
// )}

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { CiCamera } from "react-icons/ci";
import { FaRegPenToSquare, FaTrash } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineVideoCamera, AiOutlineCalendar } from "react-icons/ai";
import Modal from "@mui/material/Modal";
import EmojiPicker from "emoji-picker-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL } from "../../../Config/api";
import { likePost } from "../../../State/Post/Postmethod";
import { createComment, fetchComments } from "../../../State/Post/Postmethod";

export default function Post() {
  const [tweetData, setTweetData] = useState({
    content: "",
    image: "",
    video: "",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    profilePicture: "",
  });

  const [tweets, setTweets] = useState([]);
  const [open, setOpen] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [commentData, setCommentData] = useState("");
  const [visibleComments, setVisibleComments] = useState({});
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [replyData, setReplyData] = useState(null);
  const [replyText, setReplyText] = useState("");

  const jwt = localStorage.getItem("jwt");

  const formatIndianTime = (dateString) => {
    // Handle undefined/null/empty string cases
    if (!dateString) {
      console.warn("No date string provided, using current time");
      dateString = new Date().toISOString();
    }
  
    try {
      const date = new Date(dateString);
      
      if (isNaN(date.getTime())) {
        console.warn("Invalid date string, using current time:", dateString);
        return new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
      }
  
      return date.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (error) {
      console.error("Error formatting date, using current time:", error);
      return new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    }
  };

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
      toast.error("Failed to add comment. Please try again.");
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
      toast.error("Failed to like the post. Please try again.");
    }
  };

  const handleAddReply = async (postId, commentId) => {
    if (!replyText.trim()) return;
  
    const token = localStorage.getItem("jwt");
  
    if (!token) {
      console.error("User is not authenticated.");
      toast.error("Session expired. Please log in again.");
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
  
      if (!response.ok) {
        throw new Error(`Failed to add reply: ${response.statusText}`);
      }
  
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
      toast.success("Reply added successfully!");
    } catch (error) {
      console.error("Failed to add reply:", error);
      toast.error("Failed to add reply. Please try again.");
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

      setFormData({
        fullName,
        email: user.email,
        profilePicture: user.profilePicture || "/default-profile.png",
      });
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`${API_BASE_URL}/api/posts/getPosts`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      const postsWithDetails = await Promise.all(
        
        response.data.map(async (post) => {
          // Add null check for createdAt
    const createdAt = post.createdAt || new Date().toISOString();
          let imgBlobUrl = null;
          let videoBlobUrl = null;

          if (post.img) {
            try {
              const imgResponse = await axios.get(
                `${API_BASE_URL}/api/posts/${post.id}/image`,
                {
                  responseType: "blob",
                  headers: { Authorization: `Bearer ${jwt}` },
                }
              );
              imgBlobUrl = URL.createObjectURL(imgResponse.data);
            } catch (error) {
              console.error(`Error fetching image for post ${post.id}:`, error);
            }
          }

          if (post.video) {
            try {
              const videoResponse = await axios.get(
                `${API_BASE_URL}/api/posts/${post.id}/video`,
                {
                  responseType: "blob",
                  headers: { Authorization: `Bearer ${jwt}` },
                }
              );
              videoBlobUrl = URL.createObjectURL(videoResponse.data);
            } catch (error) {
              console.error(`Error fetching video for post ${post.id}:`, error);
            }
          }

          let isLiked = false;
          let likeCount = 0;
          try {
            const likeResponse = await axios.get(
              `${API_BASE_URL}/api/likes/${post.id}/details`,
              { headers: { Authorization: `Bearer ${jwt}` } }
            );
            isLiked = likeResponse.data.isLiked;
            likeCount = likeResponse.data.likeCount;
          } catch (error) {
            console.error(`Error fetching like details for post ${post.id}:`, error);
          }

          return {
            ...post,
            img: imgBlobUrl,
            video: videoBlobUrl,
            isLiked,
            likeCount,
            displayTime: formatIndianTime(post.createdAt)
          };
        })
      );

      setTweets(postsWithDetails);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to load posts. Please try again later.");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setTweetData({ ...tweetData, content: e.target.value.trimStart() });
  };

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

  const handlePost = async () => {
    if (!tweetData.content.trim() && !file) {
      toast.error("Please add content or media.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.fullName);
    formDataToSend.append("content", tweetData.content);
    formDataToSend.append("postedBY", formData.fullName);
    formDataToSend.append("createdAt", new Date().toISOString());

    if (file) {
      formDataToSend.append("file", file, file.name);
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/posts/createPost/media`,
        formDataToSend,
        { headers: { Authorization: `Bearer ${jwt}`, "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 201 || response.status === 200) {
        const newPost = response.data;
        const createdAt = newPost.createdAt || new Date().toISOString(); // Safe fallback


        // Add the new post to the beginning of the tweets array
        setTweets((prevTweets) => [
          {
            ...newPost,
            img: newPost.img ? `${API_BASE_URL}${newPost.img}` : null,
            video: newPost.video ? `${API_BASE_URL}${newPost.video}` : null,
            displayTime: formatIndianTime(newPost.createdAt),
            isLiked: false,
            likeCount: 0
          },
          ...prevTweets,
        ]);

        toast.success("Post created successfully!");
        setTweetData({ content: "", image: "", video: "" });
        setFile(null);
        setOpen(false);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error(error.response?.data?.message || "Failed to create the post. Please try again.");
    }
  };

  const onEmojiClick = (emojiData) => {
    if (emojiData && emojiData.emoji) {
      setTweetData((prevData) => ({
        ...prevData,
        content: prevData.content + emojiData.emoji,
      }));
    }
  };

  // Clean up blob URLs when component unmounts
  useEffect(() => {
    return () => {
      tweets.forEach(tweet => {
        if (tweet.img && tweet.img.startsWith('blob:')) {
          URL.revokeObjectURL(tweet.img);
        }
        if (tweet.video && tweet.video.startsWith('blob:')) {
          URL.revokeObjectURL(tweet.video);
        }
      });
    };
  }, [tweets]);

  return (
    <div className="lg:w-[500px] xl:w-[620px] 2xl:w-[800px] w-auto rounded-lg bg-[#0098f1]">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="p-4">
        <div className="flex">
          <textarea
            placeholder="Create Post..."
            rows={2}
            className="rounded-lg w-full border outline-none resize-none text-lg placeholder-custom"
            onClick={() => setOpen(true)}
            readOnly
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <label>
            <CiCamera className="w-[25px] h-[25px] cursor-pointer" />
            <input
              type="file"
              accept="image/*,video/*"
              className="hidden"
              onChange={handleAddMedia}
            />
          </label>
          <AiOutlineVideoCamera className="w-5 h-5 cursor-pointer" />
          <AiOutlineCalendar className="w-5 h-5 cursor-pointer" />
          <FaRegPenToSquare className="w-5 h-5 cursor-pointer" />
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
                  accept="image/*,video/*"
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
                Post
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <div className="bg-white mt-3 pl-3 overflow-y-auto max-h-[500px]">
        {loading && <p className="text-center py-4">Loading posts...</p>}
        {error && <p className="text-red-500 text-center py-4">{error}</p>}
        {tweets.map((tweet) => (
          <div className="p-4 border border-gray-300 rounded-lg mt-4" key={tweet.id}>
            <div className="flex text-start space-x-5">
              <Avatar
                alt={tweet.postedBY || "Unknown User"}
                src={tweet.profilePicture || ""}
              />
              <div className="text-start">
                <div className="font-semibold">{tweet.name || "Unknown User"}</div>
                <div className="text-sm text-gray-500">
  {tweet.displayTime}
</div>
              </div>
            </div>
            <div className="mt-2">{tweet.content}</div>

            {tweet.img && (
              <img
                src={tweet.img}
                className="mt-2 max-w-full h-auto rounded-lg"
                alt="Post media"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/image-placeholder.png";
                }}
              />
            )}

            {tweet.video && (
              <video 
                controls 
                className="mt-2 max-w-full h-auto rounded-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/video-placeholder.png";
                }}
              >
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
                        className="p-4 bg-gray-100 rounded-xl shadow-sm mt-3 flex items-start gap-4"
                      >
                        <img
                          src={comment.profilePicture || "/default-profile.png"}
                          alt={comment.name}
                          className="w-10 h-10 rounded-full border-2 border-gray-300"
                        />
                        <div className="flex-1">
                          <strong className="text-gray-800 font-semibold">
                            {comment.firstName
                              ? `${comment.firstName.split("@")[0]}`
                              : "Unknown User"}
                          </strong>
                          <p className="text-gray-600 text-sm mt-1">{comment.content}</p>

                          <button
                            className="mt-2 text-blue-600 text-sm font-medium hover:underline"
                            onClick={() => setReplyData({ commentId: comment.id, tweetId: tweet.id })}
                          >
                            Reply
                          </button>

                          {replyData?.commentId === comment.id && (
                            <div className="mt-3">
                              <input
                                type="text"
                                className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 transition-all"
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

                          {comment.replies && comment.replies.length > 0 && (
                            <div className="ml-10 mt-3 space-y-2">
                              {comment.replies.map((reply) => (
                                <div
                                  key={reply.id}
                                  className="p-3 bg-gray-200 rounded-lg text-sm text-gray-700 shadow-sm flex items-start gap-3"
                                >
                                  <img
                                    src={reply.profilePicture || "/default-profile.png"}
                                    alt={reply.firstName}
                                    className="w-8 h-8 rounded-full border-2 border-gray-300"
                                  />
                                  <div>
                                    <strong className="text-gray-800 font-semibold">
                                      {reply.firstName
                                        ? `${reply.firstName.split("@")[0]}`
                                        : "Unknown User"}
                                    </strong>
                                    <p className="text-gray-600 text-sm mt-1">
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
    </div>
  );
}