// import React from 'react';
// import Post from './Post';

// const Feed = ({ posts }) => {
//     return (
//       <div style={{ overflowY: 'scroll', maxHeight: '500px' }}>
//         {posts.map((post, index) => (
//           <Post key={index} {...post} />
//         ))}
//       </div>
//   );
// };

// export default Feed;
import React from 'react';
import Post from './Post';

const Feed = ({ posts }) => {
    return (
      <div className='border-2 shadow-lg' style={{ overflowY: 'scroll', maxHeight: '500px' }}>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
  );
};

export default Feed;