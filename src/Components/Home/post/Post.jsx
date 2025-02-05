import React, { useState } from 'react';
import Avatar from './Avatar';
import { SlLike } from "react-icons/sl";
import { GoComment } from "react-icons/go";
import { CiSaveDown1 } from "react-icons/ci";

const Post = ({ name, message, timestamp, image, text, video, feeling, taggedUsers }) => {
  const formattedTimestamp = new Date(timestamp).toLocaleString(); 

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleComment = () => {
    setShowCommentBox(true);
  };

  const handleSave = () => {
    // Handle save post functionality
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { id: comments.length + 1, text: newComment, replies: [] }]);
      setNewComment('');
    }
  };

  const handleReply = (commentId, replyText) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, { id: comment.replies.length + 1, text: replyText }]
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <>
      <div className="bg-white p-4 mb-4 border rounded-md">
        <div className="flex items-center mb-2">
          <Avatar alt="User Avatar" />
          <span className="font-semibold">{name}</span>
          <span className="font-semibold">{formattedTimestamp}</span>
        </div>
        <p className="mb-2">{message}</p>
        {image && (
          <img src={URL.createObjectURL(image)} alt="Post Image" className="mb-2" />
        )}
        {video && (
          <video controls src={URL.createObjectURL(video)} className="mb-2"></video>
        )}
        {feeling && <p className="italic mb-2">Feeling/Activity: {feeling}</p>}
        {taggedUsers && taggedUsers.length > 0 && (
          <p className="italic mb-2">
            Tagged: {taggedUsers.map((user) => user.name).join(', ')}
          </p>
        )}
        <hr />
        <div className="flex justify-between mt-4">
          <SlLike onClick={handleLike} className={`text-blue-500 hover:text-blue-700 mr-3 ${liked ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {liked ? 'Liked' : 'Like'}
          </SlLike>
          <span className="text-gray-500">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
          <GoComment onClick={handleComment} className="text-gray-500 hover:text-gray-700 mr-3">Comment</GoComment>
          <CiSaveDown1 onClick={handleSave} className="text-purple-500 hover:text-purple-700">Save</CiSaveDown1>
        </div>
        {showCommentBox && (
          <div className="mt-4">
            <textarea 
              placeholder="Write a comment..." 
              className="w-full resize-none border rounded-md p-2 mb-2"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button 
              onClick={handleCommentSubmit} 
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        )}
        {comments.map(comment => (
          <div key={comment.id} className="mt-4 ml-4">
            <p>{comment.text}</p>
            {comment.replies.map(reply => (
              <div key={reply.id} className="ml-4 mt-2">
                <p>{reply.text}</p>
              </div>
            ))}
            <button 
              onClick={() => handleReply(comment.id, 'Your reply text')} 
              className="text-blue-500 hover:text-blue-700 mt-2"
            >
              Reply
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
