// import { LuSend } from "react-icons/lu";
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import EmojiPicker from 'emoji-picker-react';

// const initialTweets = [
//     {
//         id: 1,
//         content: "Hello World! This is my first tweet.",
//         createdAt: Date.now(),
//         image: "",
//         tweetedBy: {
//             id: 1,
//             name: "John Doe",
//         },
//         isLiked: false,
//     },
//     {
//         id: 2,
//         content: "Loving the new React features!",
//         createdAt: Date.now(),
//         image: "",
//         tweetedBy: {
//             id: 2,
//             name: "Jane Smith",
//         },
//         isLiked: true,
//     },
//     {
//         id: 3,
//         content: "Hello World! This is my first tweet.",
//         createdAt: Date.now(),
//         image: "",
//         tweetedBy: {
//             id: 3,
//             name: "Ravi ",
//         },
//         isLiked: false,
//     },
//     {
//         id: 4,
//         content: "Loving the new React features!",
//         createdAt: Date.now(),
//         image: "",
//         tweetedBy: {
//             id: 4,
//             name: "Priya",
//         },
//         isLiked: true,
//     },
//     {
//         id: 5,
//         content: "Hello World! This is my first tweet.",
//         createdAt: Date.now(),
//         image: "",
//         tweetedBy: {
//             id: 5,
//             name: "Gopi",
//         },
//         isLiked: false,
//     },
//     {
//         id: 6,
//         content: "Loving the new React features!",
//         createdAt: Date.now(),
//         image: "",
//         tweetedBy: {
//             id: 6,
//             name: "Raman",
//         },
//         isLiked: true,
//     }
// ];

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

// export default function Post() {
//     const [tweetData, setTweetData] = useState({
//         id: Math.floor(Math.random() * 100000 + 1),
//         content: "",
//         createdAt: Date.now(),
//         image: "",
//         tweetedBy: {
//             id: Math.floor(Math.random() * 100000 + 1),
//             name: "Mister Kim",
//         },
//         isLiked: false,
//         comments: []
//     });
//     const [tweets, setTweets] = useState(() => {
//         const savedTweets = localStorage.getItem('tweets');
//         return savedTweets ? JSON.parse(savedTweets) : initialTweets;
//     });
//     const [open, setOpen] = useState(false);
//     // const [liked, setLiked] = useState(false);
//     const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//     const [commentData, setCommentData] = useState("");

//     useEffect(() => {
//         localStorage.setItem('tweets', JSON.stringify(tweets));
//     }, [tweets]);

//     const handleChange = (e) => {
//         const { value } = e.target;
//         setTweetData({ ...tweetData, content: value });
//     };

//     const handleAddImage = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 setTweetData({ ...tweetData, image: event.target.result });
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handlePost = () => {
//         setTweets([tweetData, ...tweets]);
//         setTweetData({
//             id: Math.floor(Math.random() * 100000 + 1),
//             content: "",
//             createdAt: Date.now(),
//             image: "",
//             tweetedBy: {
//                 id: Math.floor(Math.random() * 100000 + 1),
//                 name: "Avatar",
//             },
//             isLiked: false,
//             comments: []
//         });
//         setOpen(false);
//         setShowEmojiPicker(false);
//     };

//     const onEmojiClick = (emojiObject) => {
//         setTweetData({
//             ...tweetData,
//             content: tweetData.content + emojiObject.emoji
//         });
//     };

//     const toggleLike = (id) => {
//         setTweets(tweets.map(tweet =>
//             tweet.id === id ? { ...tweet, isLiked: !tweet.isLiked } : tweet
//         ));
//     };

//     const handleCommentChange = (e) => {
//         setCommentData(e.target.value);
//     };

//     const addComment = (id) => {
//         setTweets(tweets.map(tweet =>
//             tweet.id === id ? {
//                 ...tweet,
//                 comments: [...tweet.comments, { id: Math.random(), text: commentData }]
//             } : tweet
//         ));
//         setCommentData("");
//     };

//     return (
//         <>
//             <div className="p-4 w-[560px]">
//                 <div className="flex">
//                     <textarea
//                         placeholder="Create Post..."
//                         rows={2}
//                         className="rounded-lg w-full border border-blue-600 text-blue-700 outline-none resize-none text-lg placeholder-custom"
//                         onClick={() => setOpen(true)}
//                         readOnly
//                     />
//                 </div>
//                 <div className="flex justify-between items-center mt-4 ">
//     <div className="flex justify-center items-center gap-16 text-black">
//         <div className="flex flex-row-reverse justify-center items-center gap-2">
//             <div>
//                 Photo
//             </div>
//             <div>
//                 <label>
//                     <CiCamera className="w-[25px] h-[25px] cursor-pointer text-green-800" />
//                     <input type="file" accept="image/*" className="hidden" onChange={handleAddImage} />
//                 </label>
//             </div>
//         </div>
//         <div className="flex flex-row-reverse justify-center items-center gap-2 ">
//             <div>
//                 Video
//             </div>
//             <div>

//                 <AiOutlineVideoCamera className="w-5 h-5 cursor-pointer text-blue-800" />
//             </div>
//         </div>

//         <div className="flex flex-row-reverse justify-center items-center gap-2 ">
//             <div>
//                 Event
//             </div>
//             <div>
//                 <AiOutlineCalendar className="w-5 h-5 cursor-pointer text-orange-700" />
//             </div>
//         </div>

//         <div className="flex flex-row-reverse justify-center items-center gap-2 ">
//             <div>
//                 Write Articles
//             </div>
//             <div>

//                 <FaRegPenToSquare className="w-5 h-5 cursor-pointer text-red-800" />
//             </div>
//         </div>

//     </div>
// </div>
//             </div>

//             <Modal
//                 open={open}
//                 onClose={() => setOpen(false)}
//                 aria-labelledby="modal-title"
//                 aria-describedby="modal-description"

//             >
//                 <Box sx={style}>
//                     <textarea
//                         placeholder="Write your post..."
//                         rows={12}
//                         cols={28}
//                         className="w-full border border-blue-600 text-blue-700 outline-none resize-none text-lg"
//                         onChange={handleChange}
//                         value={tweetData.content}
//                     />
//                     <div className="mt-2 flex justify-between items-center flex-row">
//                         <label className="cursor-pointer">
//                             <CiCamera className="w-[25px] h-[25px] text-green-800" />
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 className="hidden "
//                                 onChange={handleAddImage}
//                             />
//                         </label>
//                         <button
//                             className="bg-blue-600 text-white py-2 px-4 rounded"
//                             onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//                         >
//                             Emoji
//                         </button>
//                         {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
//                         <button
//                             className="bg-blue-600 text-white py-2 px-4 rounded"
//                             onClick={handlePost}
//                         >
//                             Post
//                         </button>
//                     </div>
//                     {tweetData.image && (
//                         <div className="mt-2">
//                             <img src={tweetData.image} alt="Uploaded" className="w-full h-auto" />
//                         </div>
//                     )}
//                 </Box>
//             </Modal>

//             <div>
//                 <div className="bg-[#0098F1] text-white flex flex-row justify-around items-center h-[44px] rounded-lg">
//                     <div>Filter post by :</div>
//                     <div>Popular</div>
//                 </div>
//             </div>

//             <div className="mt-4 overflow-y-auto h-[600px] overflow-hidden">
//                 {tweets.map((tweet) => (
//                     <div key={tweet.id} className="p-8">
//                         <div className="flex items-center">
//                             <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
//                             <span className="ml-2 font-bold">{tweet.tweetedBy.name}</span>
//                         </div>
//                         <p className="mt-2">{tweet.content}</p>
//                         {tweet.image && (
//                             <img src={tweet.image} alt="Tweet" className="mt-2 rounded-lg h-[60px] w-[60px]" />
//                         )}
//                         <div className="mt-2 flex justify-start items-center text-gray-500 border-t border-gray-300 gap-8 py-4">
//                             <div
//                                 className={`flex justify-center items-center flex-row gap-2 text-[#0098F1]  ${tweet.isLiked ? 'text-blue-600' : ''}`}
//                                 // className={`text-blue-500 hover:text-blue-700 mr-3 ${liked ? 'opacity-50 cursor-not-allowed' : ''}`}
//                                 onClick={() => toggleLike(tweet.id)}
//                             >
//                                 <div>{tweet.isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}</div>
//                                 <div>Likes</div>
//                             </div>
// <div className="flex justify-center items-center flex-row gap-2 text-[#0098F1] cursor-pointer">
//     <div onClick={() => setTweets(tweets.map(t => t.id === tweet.id ? { ...t, showCommentInput: !t.showCommentInput } : t))}><FaRegMessage /></div>
//     <div onClick={() => setTweets(tweets.map(t => t.id === tweet.id ? { ...t, showCommentInput: !t.showCommentInput } : t))}>Comments</div>
// </div>
//                             <div className="flex justify-center items-center flex-row gap-2 text-[#0098F1]">
//                                 <div><IoShareSocialOutline /></div>
//                                 <div>Share</div>
//                             </div>
//                             <div className="flex justify-center items-center flex-row gap-2 text-[#0098F1]">
//                                 <div><LuSend /></div>
//                                 <div>Send</div>
//                             </div>
//                         </div>
//                         {tweet.showCommentInput && (
//                             <div className="mt-2">
//                                 <input
//                                     type="text"
//                                     placeholder="Write a comment..."
//                                     className="border border-gray-300 rounded w-full p-2"
//                                     value={commentData}
//                                     onChange={handleCommentChange}
//                                 />
//                                 <button
//                                     className="bg-blue-600 text-white py-2 px-4 rounded mt-2"
//                                     onClick={() => addComment(tweet.id)}
//                                 >
//                                     Create Comment
//                                 </button>
//                             </div>
//                         )}
//                         {tweet.comments && tweet.comments.map(comment => (
//                             <div key={comment.id} className="ml-4 mt-2">
//                                 <p className="text-sm text-gray-700">{comment.text}</p>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

// import React, { useState, useEffect } from "react";
// import Avatar from "@mui/material/Avatar";
// import { CiCamera } from "react-icons/ci";
// import { FaRegPenToSquare, FaTrash } from "react-icons/fa6";
// import { FaRegComment } from "react-icons/fa";
// import { FcLikePlaceholder } from "react-icons/fc";
// import { FcLike } from "react-icons/fc";
// import { FaEdit } from "react-icons/fa";
// import { IoShareSocialOutline } from "react-icons/io5";
// import { AiOutlineVideoCamera, AiOutlineCalendar } from "react-icons/ai";
// import Modal from "@mui/material/Modal";
// import EmojiPicker from "emoji-picker-react";
// import axios from 'axios';

// const initialTweets = [
//   {
//     id: 1,
//     content: "Hello World! This is my first tweet.",
//     createdAt: Date.now(),
//     image: "",
//     tweetedBy: {
//       id: 1,
//       name: "John Doe",
//     },
//     isLiked: false,
//     comments: [],
//   },
// ];

// export default function Post() {
//   const [tweetData, setTweetData] = useState({
//     id: Math.floor(Math.random() * 100000 + 1),
//     content: "",
//     createdAt: Date.now(),
//     image: "",
//     tweetedBy: {
//       id: Math.floor(Math.random() * 100000 + 1),
//       name: "Mister Kim",
//     },
//     isLiked: false,
//     comments: [],
//   });

//   const [tweets, setTweets] = useState(() => {
//     const savedTweets = localStorage.getItem("tweets");
//     return savedTweets ? JSON.parse(savedTweets) : initialTweets;
//   });

//   const [open, setOpen] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [commentData, setCommentData] = useState("");
//   const [editTweetId, setEditTweetId] = useState(null);
//   const [visibleComments, setVisibleComments] = useState({});
//   const [replyData, setReplyData] = useState({});

//   useEffect(() => {
//     localStorage.setItem("tweets", JSON.stringify(tweets));
//   }, [tweets]);

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setTweetData({ ...tweetData, content: value });
//   };
//   const handleReplyChange = (tweetId, commentId, value) => {
//     setReplyData((prev) => ({
//       ...prev,
//       [`${tweetId}-${commentId}`]: value,
//     }));
//   };

//   const handleAddMedia = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         if (file.type.startsWith("image/")) {
//           setTweetData({ ...tweetData, image: event.target.result });
//         } else if (file.type.startsWith("video/")) {
//           setTweetData({ ...tweetData, video: event.target.result });
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

  // const handlePost = () => {
  //   if (editTweetId) {
  //     setTweets(
  //       tweets.map((tweet) =>
  //         tweet.id === editTweetId ? { ...tweetData, id: editTweetId } : tweet
  //       )
  //     );
  //     setEditTweetId(null);
  //   } else {
  //     setTweets([tweetData, ...tweets]);
  //   }
  //   setTweetData({
  //     id: Math.floor(Math.random() * 100000 + 1),
  //     content: "",
  //     createdAt: Date.now(),
  //     image: "",
  //     tweetedBy: {
  //       id: Math.floor(Math.random() * 100000 + 1),
  //       name: "Avatar",
  //     },
  //     isLiked: false,
  //     comments: [],
  //   });
  //   setOpen(false);
  //   setShowEmojiPicker(false);
  // };
//   const handlePost = async (e) => {
//     e.preventDefault();
  
//     try {
//       if (!file) {
//         setMessage("Please add an image or video.");
//         return;
//       }
  
//       // Create FormData
//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("name", tweetData.tweetedBy.name);
//       formData.append("content", tweetData.content);
//       formData.append("postedBY", tweetData.tweetedBy.id);
//       formData.append("tags", ""); // Add appropriate tags if needed
  
//       // POST request
//       const response = await axios.post(
//         "http://localhost:8080/posts/createPost/image",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
  
//       setMessage("Post created successfully!");
//       console.log(response.data);
  
//       // Clear form
//       setTweetData({
//         id: Math.floor(Math.random() * 100000 + 1),
//         content: "",
//         createdAt: Date.now(),
//         image: "",
//         tweetedBy: { id: Math.random(), name: "Mister Kim" },
//         isLiked: false,
//         comments: [],
//       });
//       setFile(null);
//       setOpen(false);
//     } catch (error) {
//       console.error("Error creating post:", error);
//       setMessage("Failed to create the post.");
//     }
//   };
  

//   const onEmojiClick = (emojiObject) => {
//     setTweetData({
//       ...tweetData,
//       content: tweetData.content + emojiObject.emoji,
//     });
//   };

//   const toggleLike = (id) => {
//     setTweets(
//       tweets.map((tweet) =>
//         tweet.id === id ? { ...tweet, isLiked: !tweet.isLiked } : tweet
//       )
//     );
//   };

//   const handleCommentChange = (e) => {
//     setCommentData(e.target.value);
//   };

//   const addComment = (id) => {
//     setTweets(
//       tweets.map((tweet) =>
//         tweet.id === id
//           ? {
//               ...tweet,
//               comments: [
//                 ...(tweet.comments || []),
//                 { id: Math.random(), text: commentData },
//               ],
//             }
//           : tweet
//       )
//     );
//     setCommentData("");
//   };

//   const toggleCommentInput = (id) => {
//     setVisibleComments((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const deleteTweet = (id) => {
//     setTweets(tweets.filter((tweet) => tweet.id !== id));
//   };
//   // Functionality for liking and replying to comments

//   const toggleCommentLike = (tweetId, commentId) => {
//     setTweets(
//       tweets.map((tweet) =>
//         tweet.id === tweetId
//           ? {
//               ...tweet,
//               comments: tweet.comments.map((comment) =>
//                 comment.id === commentId
//                   ? { ...comment, isLiked: !comment.isLiked }
//                   : comment
//               ),
//             }
//           : tweet
//       )
//     );
//   };
//   const addReply = (tweetId, commentId) => {
//     const replyText = replyData[`${tweetId}-${commentId}`];
//     if (!replyText) return;

//     setTweets(
//       tweets.map((tweet) =>
//         tweet.id === tweetId
//           ? {
//               ...tweet,
//               comments: tweet.comments.map((comment) =>
//                 comment.id === commentId
//                   ? {
//                       ...comment,
//                       replies: [
//                         ...(comment.replies || []),
//                         { id: Math.random(), text: replyText, isLiked: false },
//                       ],
//                     }
//                   : comment
//               ),
//             }
//           : tweet
//       )
//     );

//     setReplyData((prev) => ({
//       ...prev,
//       [`${tweetId}-${commentId}`]: "",
//     }));
//   };

//   const editTweet = (tweet) => {
//     setTweetData(tweet);
//     setEditTweetId(tweet.id);
//     setOpen(true);
//   };

//   return (
//     <div className="lg:w-[500px] xl:w-[620px] 2xl:w-[800px]  w-auto rounded-lg bg-[#0098f1]">
//       <div className="p-4">
//         <div className="flex">
//           <textarea
//             placeholder="Create Post..."
//             rows={2}
//             className="rounded-lg w-full border  outline-none resize-none text-lg placeholder-custom"
//             onClick={() => setOpen(true)}
//             readOnly
//           />
//         </div>
//         <div className="flex justify-between items-center mt-4">
//           <div
//             onClick={() => setOpen(true)}
//             className="flex flex-row-reverse  cursor-pointer justify-center items-center gap-2"
//           >
//             <div className="hidden md:block">Photo</div>
//             <div>
//               <label>
//                 <CiCamera className="w-[25px] h-[25px] cursor-pointer " />
//                 {/* <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleAddImage}
//                 /> */}
//               </label>
//             </div>
//           </div>
//           <div
//             onClick={() => setOpen(true)}
//             className="flex flex-row-reverse cursor-pointer justify-center items-center gap-2"
//           >
//             <div className="hidden md:block">Video</div>
//             <div>
//               <AiOutlineVideoCamera className="w-5 h-5 cursor-pointer " />
//             </div>
//           </div>
//           <div
//             onClick={() => setOpen(true)}
//             className="flex  cursor-pointer flex-row-reverse justify-center items-center gap-2"
//           >
//             <div className="hidden md:block">Event</div>
//             <div>
//               <AiOutlineCalendar className="w-5 h-5 cursor-pointer " />
//             </div>
//           </div>
//           <div
//             onClick={() => setOpen(true)}
//             className="flex  cursor-pointer flex-row-reverse justify-center items-center gap-2"
//           >
//             <div className="hidden md:block">Articles</div>
//             <div>
//               <FaRegPenToSquare className="w-5 h-5 cursor-pointer " />
//             </div>
//           </div>
//         </div>
//       </div>

//       <Modal open={open} onClose={() => setOpen(false)}>
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10"
//           onClick={() => setOpen(false)}
//         >
//           <div
//             className="bg-white rounded-lg p-6 w-[400px] lg:w-[600px] border-2  shadow-lg"
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
//                 <div className="absolute bottom-16 right-8 z-10">
//                   <EmojiPicker onEmojiClick={onEmojiClick} />
//                 </div>
//               )}
//               <button
//                 className="bg-[#0098f1] text-white py-2 px-4 rounded"
//                 onClick={handlePost}
//               >
//                 {editTweetId ? "Update" : "Post"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </Modal>

//       <div className="bg-white mt-3 pl-3 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent overflow-y-auto max-h-[350px] ">
//         {tweets.map((tweet) => (
//           <div
//             className="p-4 border  border-gray-300 rounded-lg mt-4"
//             key={tweet.id}
//           >
//             <div className="flex justify-between">
//               <Avatar alt={tweet.tweetedBy.name} src="" />
//               <div className="ml-2">
//                 <div className="font-semibold">{tweet.tweetedBy.name}</div>
//                 <div className="text-sm text-gray-500">
//                   {new Date(tweet.createdAt).toLocaleString()}
//                 </div>
//               </div>
//               <div className="ml-auto flex items-center gap-2">
//                 <FaEdit
//                   className="text-[#0098f1] cursor-pointer"
//                   onClick={() => editTweet(tweet)}
//                 />
//                 <FaTrash
//                   className="text-red-600 cursor-pointer"
//                   onClick={() => deleteTweet(tweet.id)}
//                 />
//               </div>
//             </div>
//             <div className="mt-2">{tweet.content}</div>
//             {tweet.image && (
//               <img
//                 src={tweet.image}
//                 alt="Tweet"
//                 className="mt-2 max-w-full h-auto"
//               />
//             )}
//             {/* Storage Size: LocalStorage typically allows 5MB of data per domain. A single video in Base64 format can easily exceed this limit */}
//             {tweet.video && (
//               <video controls src={tweet.video} className="mt-2 w-full h-96">
//                 Your browser does not support the video tag.
//               </video>
//             )}
//             <div className="mt-2 flex justify-between items-center border-t  gap-8 py-4">
//               {/* Like Section */}
//               <div
//                 className="flex justify-center items-center flex-row gap-2 text-[#0098F1] mr-4 cursor-pointer"
//                 onClick={() => toggleLike(tweet.id)}
//               >
//                 <div>
//                   {tweet.isLiked ? (
//                     <FcLike className="w-5 h-5" />
//                   ) : (
//                     <FcLikePlaceholder className="w-5 h-5" />
//                   )}
//                 </div>
//                 <div className="ml-1">
//                   {tweet.isLiked ? "" : "Like"}
//                   {tweet.isLiked && (
//                     <span className=" w-auto text-lg rounded-full  text-[#0098F1]">
//                       1{/* like */}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Comment Toggle Section */}
//               <div
//                 className="flex cursor-pointer justify-center items-center flex-row gap-2 text-[#0098F1]"
//                 onClick={() => toggleCommentInput(tweet.id)}
//               >
//                 <div>
//                   <FaRegComment />
//                 </div>
//                 <div className="ml-1">Comment</div>
//               </div>

//               {/* Share Section */}
//               <div className="flex cursor-pointer justify-center items-center flex-row gap-2 text-[#0098F1]">
//                 <div>
//                   <IoShareSocialOutline />
//                 </div>
//                 <div className="ml-1">Share</div>
//               </div>
//             </div>
//             {/* Conditional Comment Input */}
//             {visibleComments[tweet.id] && (
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   placeholder="Write a comment..."
//                   className="w-full border border-[#0098F1] focus:border-none focus:outline-none p-2 rounded-lg"
//                   value={commentData}
//                   onChange={handleCommentChange}
//                 />
//                 <button
//                   className="bg-[#0098f1] text-white py-2 px-4 rounded mt-2"
//                   onClick={() => addComment(tweet.id)}
//                   disabled={commentData.trim() === ""}
//                 >
//                   Comment
//                 </button>
//               </div>
//             )}
//             {/* Display Comments */}

//             <div className="mt-2">
//               {tweet.comments.map((comment) => (
//                 <div key={comment.id} className="mb-2">
//                   <div className="flex items-center">
//                     <Avatar alt="Commenter" src="" className="mr-2" />
//                     <div className="bg-gray-100 w-full  m-2 p-2 rounded-lg flex flex-col">
//                       <div>{comment.text}</div>
//                       <div className="mt-1 flex gap-4 text-sm text-gray-600">
//                         <div
//                           className="flex items-center cursor-pointer"
//                           onClick={() =>
//                             toggleCommentLike(tweet.id, comment.id)
//                           }
//                         >
//                           {comment.isLiked ? (
//                             <FcLike className="w-4 h-4 mr-1" />
//                           ) : (
//                             <FcLikePlaceholder className="w-4 h-4 mr-1" />
//                           )}
//                           Like
//                         </div>
//                         <div
//                           className="cursor-pointer"
//                           onClick={() =>
//                             setVisibleComments((prev) => ({
//                               ...prev,
//                               [`reply-${tweet.id}-${comment.id}`]:
//                                 !prev[`reply-${tweet.id}-${comment.id}`],
//                             }))
//                           }
//                         >
//                           Reply
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Reply Input */}
//                   {visibleComments[`reply-${tweet.id}-${comment.id}`] && (
//                     <div className="ml-10 mt-2">
//                       <input
//                         type="text"
//                         placeholder="Write a reply..."
//                         className="w-full border border-gray-300 p-2 rounded-lg"
//                         value={replyData[`${tweet.id}-${comment.id}`] || ""}
//                         onChange={(e) =>
//                           handleReplyChange(
//                             tweet.id,
//                             comment.id,
//                             e.target.value
//                           )
//                         }
//                       />
//                       <button
//                         className="bg-[#0098f1] text-white py-1 px-4 rounded mt-2"
//                         onClick={() => addReply(tweet.id, comment.id)}
//                         disabled={
//                           !replyData[`${tweet.id}-${comment.id}`] ||
//                           replyData[`${tweet.id}-${comment.id}`].trim() === ""
//                         }
//                       >
//                         Reply
//                       </button>
//                     </div>
//                   )}
//                   {/* Display Replies */}
//                   {comment.replies &&
//                     comment.replies.map((reply) => (
//                       <div
//                         key={reply.id}
//                         className="ml-10 mt-2 flex items-center"
//                       >
//                         <Avatar alt="Reply User" src="" className="mr-2" />
//                         <div className="bg-gray-100 w-full p-2 rounded-lg">
//                           {reply.text}
//                           <div
//                             className="mt-1 text-sm text-gray-600 cursor-pointer"
//                             onClick={
//                               () =>
//                                 toggleCommentLike(
//                                   tweet.id,
//                                   reply.id
//                                 ) /* Adjust for replies */
//                             }
//                           >
//                             {reply.isLiked ? "Unlike" : "Like"}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               ))}
//             </div>
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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Post() {
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

  const [formData, setFormData] = useState({
    fullName: "",
    firstName: "",
    lastName: "",
    email: "",
    profilePicture: "",
  });

  const jwt = localStorage.getItem("jwt"); // Retrieve JWT from localStorage

  useEffect(() => {
    fetchUserProfile();
    fetchPosts();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users/profile", {
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
    setLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors


  
    try {
      // Fetch all posts
      const response = await axios.get("http://localhost:8080/api/posts/getPosts", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
  
      // Fetch media files (images/videos) as blobs for each post
      const postsWithMedia = await Promise.all(
        response.data.map(async (post) => {
          let imgBlobUrl = null;
          let videoBlobUrl = null;
          let profilePictureBlobUrl = null;
  
          // Fetch image as blob if it exists
          if (post.img) {
            try {
              const imgResponse = await axios.get(`http://localhost:8080/api/posts/${post.id}/image`, {
                responseType: "blob", // Fetch as blob
                headers: { Authorization: `Bearer ${jwt}` },
              });
              imgBlobUrl = URL.createObjectURL(imgResponse.data); // Create object URL for the blob
              console.log(`Fetched image for post ${post.id}:`, imgBlobUrl);
            } catch (error) {
              console.error(`Error fetching image for post ${post.id}:`, error);
            }
          }
  
          // Fetch video as blob if it exists
          if (post.video) {
            try {
              const videoResponse = await axios.get(`http://localhost:8080/api/posts/${post.id}/video`, {
                responseType: "blob", // Fetch as blob
                headers: { Authorization: `Bearer ${jwt}` },
              });
              videoBlobUrl = URL.createObjectURL(videoResponse.data); // Create object URL for the blob
              console.log(`Fetched video for post ${post.id}:`, videoBlobUrl);
            } catch (error) {
              console.error(`Error fetching video for post ${post.id}:`, error);
            }
          }
  
          // Fetch profile picture as blob if it exists
          if (post.profilePicture) {
            try {
              const profilePictureResponse = await axios.get(
                `http://localhost:8080/api/posts/${post.id}/profile-picture`,
                {
                  responseType: "blob", // Fetch as blob
                  headers: { Authorization: `Bearer ${jwt}` },
                }
              );
              profilePictureBlobUrl = URL.createObjectURL(profilePictureResponse.data); // Create object URL for the blob
              console.log(`Fetched profile picture for post ${post.id}:`, profilePictureBlobUrl);
            } catch (error) {
              console.error(`Error fetching profile picture for post ${post.id}:`, error);
            }
          }
  
          // Return the post with media URLs
          return {
            ...post,
            img: imgBlobUrl,
            video: videoBlobUrl,
            profilePicture: profilePictureBlobUrl || "/default-profile.png", // Fallback to a default image if no profile picture is found
          };
        })
      );
  
      // Update the state with the fetched posts
      setTweets(postsWithMedia);
      setLoading(false); // Set loading state to false
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to load posts. Please try again later."); // Set error message
      setLoading(false); // Set loading state to false
    }
  };

  const [tweets, setTweets] = useState([]);
  const [open, setOpen] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [commentData, setCommentData] = useState("");
  const [editTweetId, setEditTweetId] = useState(null);
  const [visibleComments, setVisibleComments] = useState({});
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setTweetData({ ...tweetData, content: e.target.value });
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
        "http://localhost:8080/api/posts/createPost/media",
        formDataToSend,
        { headers: { Authorization: `Bearer ${jwt}`, "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 201 || response.status === 200) {
        const newPost = response.data;

        // Send push notification
        await axios.post(
          "http://localhost:8080/api/notifications",
          {
            userId: formData.fullName,
            message: `${formData.fullName} posted: ${tweetData.content.slice(0, 50)}...`,
            postId: newPost.id,
            type: "NEW_POST",
          },
          { headers: { Authorization: `Bearer ${jwt}` } }
        );



        setTweets([response.data, ...tweets]);
        //notifcation msg
        // toast.success("Post created successfully!");
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

  const toggleLike = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, isLiked: !tweet.isLiked } : tweet
      )
    );
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

  const toggleCommentInput = (id) => {
    setVisibleComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // const deleteTweet = async (id) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:8080/api/posts/deletePost/${id}`, {
  //       headers: { Authorization: `Bearer ${jwt}` },
  //     });

  //     if (response.status === 200) {
  //       setTweets(tweets.filter((tweet) => tweet.id !== id));
  //       alert("Post deleted successfully");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting post:", error);
  //     alert("Failed to delete post");
  //   }
  // };

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

  return (
    <div className="lg:w-[500px] xl:w-[620px] 2xl:w-[800px] w-auto rounded-lg bg-[#0098f1]">
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
              accept="image/,video/"
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

      <div className="bg-white mt-3 pl-3 overflow-y-auto max-h-[500px]">
  {loading && <p className="text-white">Loading posts...</p>}
  {error && <p className="text-red-500">{error}</p>}
  {tweets.map((tweet) => (
    <div className="p-4 border border-gray-300 rounded-lg mt-4" key={tweet.id}>
      <div className="flex text-start space-x-5">
        <Avatar
          alt={tweet.postedBY || "Unknown User"}
          src={tweet.profilePicture || "/default-profile.png"}
        />
        <div className="text-start">
          <div className="font-semibold">{tweet.postedBY || "Unknown User"}</div>
          <div className="text-sm text-gray-500">
            {new Date(tweet.dateTime).toLocaleString()}
          </div>
        </div>
        {/* <div className="ml-auto flex items-center gap-2">
          <FaEdit
            className="text-[#0098f1] cursor-pointer"
            onClick={() => editTweet(tweet)}
          />
          <FaTrash
            className="text-red-600 cursor-pointer"
            onClick={() => deleteTweet(tweet.id)}
          />
        </div> */}
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
    </div>
  );
}