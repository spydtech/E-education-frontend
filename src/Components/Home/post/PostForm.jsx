import React, { useState } from 'react';
import { FaRegImage, FaVideo } from "react-icons/fa";
import Avatar from "./Avatar";
import { CiFaceSmile } from "react-icons/ci";

const PostForm = ({ onSubmit }) => {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [taggedUsers, setTaggedUsers] = useState([]);
  const [showSymbols, setShowSymbols] = useState(false);
  const [isOpen, setIsOpen] = useState(false);  // Initially modal is closed

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  const handleTaggedUserChange = (e) => {
    // Implement logic to handle tagged users
  };

  const handleSymbolClick = (symbol) => {
    setMessage(prevMessage => prevMessage + symbol);
  };

  const handleShowSymbols = () => {
    setShowSymbols(!showSymbols);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = new Date();
    onSubmit({ message, image, video, taggedUsers, timestamp: currentTime });
    setMessage('');
    setImage(null);
    setVideo(null);
    setTaggedUsers([]);
    setIsOpen(false);  // Close modal after submit
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div> 
     
      
<form class="max-w-xs mx-auto">
    <div class="relative flex">
      <div className='border-2 border-[#0284c7] rounded-full'>
      <Avatar className=" " alt="User Avatar" />
      </div>
   
        {/* <span class="absolute mr-2 start-0 bottom-3 text-gray-500 dark:text-gray-400">
       
        </span> */}
        <input
         onClick={openModal}
        type="text" id="Create New Post" class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Create New Post " />
        <label for="floating-phone-number" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
    </div>
</form>

       

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-[1000px] h-[300px]">
            <h2 className="text-xl mb-4">Create a New Post</h2>
            <form onSubmit={handleSubmit}>
              <div className="relative -mb-14 left-2">
                <Avatar alt="User Avatar" />
              </div>
              <textarea
                value={message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full border-black resize-none border rounded-xl p-2 mb-2 pl-16"
                rows="3"
              />
              <div className="flex text-2xl gap-5">
                <label htmlFor="imageInput" className="mb-2 text-[#3a6ea5] cursor-pointer">
                  <FaRegImage />
                </label>
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />

                <label htmlFor="videoInput" className="mb-2 text-[#3a6ea5] cursor-pointer">
                  <FaVideo />
                </label>
                <input
                  type="file"
                  id="videoInput"
                  accept="video/*"
                  onChange={handleVideoChange}
                  style={{ display: "none" }}
                />
                <div className="flex gap-2">
                  <div className="flex items-center mt-[-2%] cursor-pointer">
                    <CiFaceSmile className='text-[#3a6ea5]' onClick={handleShowSymbols} />
                    {showSymbols && (
                      <div className='fixed -mb-[15%] ml-8 text-sm w-[350px] h-[200px]'>
                      <span onClick={() => handleSymbolClick('😀')}>😀</span>
      <span onClick={() => handleSymbolClick('😁')}>😁</span>
      <span onClick={() => handleSymbolClick('😂')}>😂</span>
      <span onClick={() => handleSymbolClick('🤣')}>🤣</span>
      <span onClick={() => handleSymbolClick('😃')}>😃</span>
      <span onClick={() => handleSymbolClick('😄')}>😄</span>
      <span onClick={() => handleSymbolClick('😅')}>😅</span>
      <span onClick={() => handleSymbolClick('😆')}>😆</span>
      <span onClick={() => handleSymbolClick('😉')}>😉</span>
      <span onClick={() => handleSymbolClick('😊')}>😊</span>
      <span onClick={() => handleSymbolClick('😋')}>😋</span>
      <span onClick={() => handleSymbolClick('😎')}>😎</span>
      <span onClick={() => handleSymbolClick('😍')}>😍</span>
      <span onClick={() => handleSymbolClick('😘')}>😘</span>
      <span onClick={() => handleSymbolClick('🥰')}>🥰</span>
      <span onClick={() => handleSymbolClick('😗')}>😗</span>
      <span onClick={() => handleSymbolClick('😙')}>😙</span>
      <span onClick={() => handleSymbolClick('😚')}>😚</span>
      <span onClick={() => handleSymbolClick('☺')}>☺</span>
      <span onClick={() => handleSymbolClick('🙂')}>🙂</span>
      <span onClick={() => handleSymbolClick('🤗')}>🤗</span>
      <span onClick={() => handleSymbolClick('🤩')}>🤩</span>
      <span onClick={() => handleSymbolClick('🤔')}>🤔</span>
      <span onClick={() => handleSymbolClick('🤨')}>🤨</span>
      <span onClick={() => handleSymbolClick('😐')}>😐</span>
      <span onClick={() => handleSymbolClick('😑')}>😑</span>
      <span onClick={() => handleSymbolClick('😶')}>😶</span>
      <span onClick={() => handleSymbolClick('😏')}>😏</span>
      <span onClick={() => handleSymbolClick('😒')}>😒</span>
      <span onClick={() => handleSymbolClick('🙄')}>🙄</span>
      <span onClick={() => handleSymbolClick('😬')}>😬</span>
      <span onClick={() => handleSymbolClick('🤥')}>🤥</span>
      <span onClick={() => handleSymbolClick('😌')}>😌</span>
      <span onClick={() => handleSymbolClick('😔')}>😔</span>
      <span onClick={() => handleSymbolClick('😪')}>😪</span>
      <span onClick={() => handleSymbolClick('🤤')}>🤤</span>
      <span onClick={() => handleSymbolClick('😴')}>😴</span>
      <span onClick={() => handleSymbolClick('😷')}>😷</span>
      <span onClick={() => handleSymbolClick('🤒')}>🤒</span>
      <span onClick={() => handleSymbolClick('🤕')}>🤕</span>
      <span onClick={() => handleSymbolClick('🤢')}>🤢</span>
      <span onClick={() => handleSymbolClick('🤮')}>🤮</span>
      <span onClick={() => handleSymbolClick('🤧')}>🤧</span>
      <span onClick={() => handleSymbolClick('🥵')}>🥵</span>
      <span onClick={() => handleSymbolClick('🥶')}>🥶</span>
      <span onClick={() => handleSymbolClick('🥴')}>🥴</span>
      <span onClick={() => handleSymbolClick('😵')}>😵</span>
      <span onClick={() => handleSymbolClick('🤯')}>🤯</span>
      <span onClick={() => handleSymbolClick('🤠')}>🤠</span>
      <span onClick={() => handleSymbolClick('🥳')}>🥳</span>
      <span onClick={() => handleSymbolClick('😎')}>😎</span>
      <span onClick={() => handleSymbolClick('🤓')}>🤓</span>
      <span onClick={() => handleSymbolClick('🧐')}>🧐</span>
      <span onClick={() => handleSymbolClick('😕')}>😕</span>
      <span onClick={() => handleSymbolClick('😟')}>😟</span>
      <span onClick={() => handleSymbolClick('🙁')}>🙁</span>
      <span onClick={() => handleSymbolClick('☹')}>☹</span>
      <span onClick={() => handleSymbolClick('😮')}>😮</span>
      <span onClick={() => handleSymbolClick('😯')}>😯</span>
      <span onClick={() => handleSymbolClick('😲')}>😲</span>
      <span onClick={() => handleSymbolClick('😳')}>😳</span>
      <span onClick={() => handleSymbolClick('🥺')}>🥺</span>
      <span onClick={() => handleSymbolClick('😦')}>😦</span>
      <span onClick={() => handleSymbolClick('😧')}>😧</span>
      <span onClick={() => handleSymbolClick('😨')}>😨</span>
      <span onClick={() => handleSymbolClick('😰')}>😰</span>
      <span onClick={() => handleSymbolClick('😥')}>😥</span>
      <span onClick={() => handleSymbolClick('😢')}>😢</span>
      <span onClick={() => handleSymbolClick('😭')}>😭</span>
      <span onClick={() => handleSymbolClick('😱')}>😱</span>
      <span onClick={() => handleSymbolClick('😖')}>😖</span>
      <span onClick={() => handleSymbolClick('😣')}>😣</span>
      <span onClick={() => handleSymbolClick('😞')}>😞</span>
      <span onClick={() => handleSymbolClick('😓')}>😓</span>
      <span onClick={() => handleSymbolClick('😩')}>😩</span>
      <span onClick={() => handleSymbolClick('😫')}>😫</span>
      <span onClick={() => handleSymbolClick('🥱')}>🥱</span>
      <span onClick={() => handleSymbolClick('😤')}>😤</span>
      <span onClick={() => handleSymbolClick('😡')}>😡</span>
      <span onClick={() => handleSymbolClick('😠')}>😠</span>
      <span onClick={() => handleSymbolClick('🤬')}>🤬</span>
      <span onClick={() => handleSymbolClick('😈')}>😈</span>
      <span onClick={() => handleSymbolClick('👿')}>👿</span>
      <span onClick={() => handleSymbolClick('💀')}>💀</span>
      <span onClick={() => handleSymbolClick('☠')}>☠</span>
      <span onClick={() => handleSymbolClick('💩')}>💩</span>
      <span onClick={() => handleSymbolClick('🤡')}>🤡</span>
      <span onClick={() => handleSymbolClick('👹')}>👹</span>
      <span onClick={() => handleSymbolClick('👺')}>👺</span>
      <span onClick={() => handleSymbolClick('👻')}>👻</span>
      <span onClick={() => handleSymbolClick('👽')}>👽</span>
      <span onClick={() => handleSymbolClick('👾')}>👾</span>
      <span onClick={() => handleSymbolClick('🤖')}>🤖</span>
      <span onClick={() => handleSymbolClick('🎃')}>🎃</span>
      <span onClick={() => handleSymbolClick('😺')}>😺</span>
      <span onClick={() => handleSymbolClick('😸')}>😸</span>
      <span onClick={() => handleSymbolClick('😹')}>😹</span>
      <span onClick={() => handleSymbolClick('😻')}>😻</span>
      <span onClick={() => handleSymbolClick('😼')}>😼</span>
      <span onClick={() => handleSymbolClick('😽')}>😽</span>
      <span onClick={() => handleSymbolClick('🙀')}>🙀</span>
      <span onClick={() => handleSymbolClick('😿')}>😿</span>
      <span onClick={() => handleSymbolClick('😾')}>😾</span>
      
                    </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#3a6ea5] text-lg text-white px-4 rounded-md hover:bg-[#e0afa0]"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostForm;