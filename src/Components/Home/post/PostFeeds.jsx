// // import React, { useState } from 'react';
// // import Feed from './Feed';
// // import PostForm from './PostForm';
// // import Navbar from "../../Navbar"
// // import Footer from "./../footer/Footer"
// // import ProfileCard from './ProfileCard';
// // import Notification from './Notification';

// // function PostFeeds() {
// //     const [posts, setPosts] = useState([]);

// //     const handlePostSubmit = (postData) => {
// //       setPosts([...posts, postData]);
// //     };
// //   return (
// //     <>
// //     <Navbar />
// //     <div className="flex bg-[#d6d3d1]">
// //     <div className='text-center pt-5'>
     
// //       <ProfileCard />
// //     </div>
// //      <div className="container mx-auto mt-8">
// //     <PostForm onSubmit={handlePostSubmit} />
// //     <Feed posts={posts} />
// //   </div>
// //   <div className='text-center pt-10 ' >
// //     <h1 className='text-xl'>Updates</h1>
// //     <Notification />
// //   </div>
// //     </div>
   
// //   <Footer />
// //     </>
   
// //   )
// // }

// // export default PostFeeds


// import React, { useState } from 'react';
// import Feed from './Feed';
// import PostForm from './PostForm';
// import Navbar from "../../Navbar"
// import Footer from "./../footer/Footer"
// import ProfileCard from './ProfileCard';
// import Notification from './Notification';

// function PostFeeds() {
//     const [posts, setPosts] = useState([]);

//     const handlePostSubmit = (postData) => {
//       setPosts([...posts, postData]);
//     };
//   return (
//     <>
//     <Navbar />
//     <div className="flex flex-col md:flex-row bg-[#f2e9e4]">
//     <div className='text-center pt-5'>
     
//       <ProfileCard />
//     </div>
//      <div className="container mx-auto mt-8">
//     <PostForm onSubmit={handlePostSubmit} />
//     <Feed posts={posts} />
//   </div>
//   <div className='text-center pt-10 ' >
    
//     <Notification />
//   </div>
//     </div>
   
//   <Footer />
//     </>
   
//   )
// }

// export default PostFeeds


// import React, { useState } from 'react';
// import Feed from './Feed';
// import PostForm from './PostForm';
// import Navbar from "../../Navbar"
// import Footer from "./../footer/Footer"
// import ProfileCard from './ProfileCard';
// import Notification from './Notification';

// function PostFeeds() {
//     const [posts, setPosts] = useState([]);

//     const handlePostSubmit = (postData) => {
//       setPosts([...posts, postData]);
//     };
//   return (
//     <>
//     <Navbar />
//     <div className="flex bg-[#d6d3d1]">
//     <div className='text-center pt-5'>
     
//       <ProfileCard />
//     </div>
//      <div className="container mx-auto mt-8">
//     <PostForm onSubmit={handlePostSubmit} />
//     <Feed posts={posts} />
//   </div>
//   <div className='text-center pt-10 ' >
//     <h1 className='text-xl'>Updates</h1>
//     <Notification />
//   </div>
//     </div>
   
//   <Footer />
//     </>
   
//   )
// }

// export default PostFeeds


import React, { useState } from 'react';
import Feed from './Feed';
import PostForm from './PostForm';
import Navbar from "../../Navbar"
import Footer from "./../footer/Footer"
import ProfileCard from './ProfileCard';
import Notification from './Notification';



function PostFeeds() {
    const [posts, setPosts] = useState([]);
    const [notifications, setNotifications] = useState([]);
   

   


    const handlePostSubmit = (postData) => {
      setPosts([...posts, postData]);

      const newNotification = {
        id: notifications.length + 1,
        name: 'New Post',
        message: 'Post successfully created',
        image: 'path/to/success-image.jpg', // Update this with a relevant path or remove if not necessary
    };
    setNotifications([...notifications, newNotification]);
  
    };
  return (
    <>
    <Navbar />
    <div className="flex flex-col md:flex-row bg-[#f2e9e4]">
    <div className='text-center pt-5'>
     
      <ProfileCard />
    </div>
     <div className="container mx-auto mt-8">
    <PostForm onSubmit={handlePostSubmit} />
    <Feed posts={posts} />
  </div>
  <div className='text-center pt-10 ' >
    
    <Notification notifications={notifications} />
  </div>
    </div>
   
  <Footer />
    </>
   
  )
}

export default PostFeeds