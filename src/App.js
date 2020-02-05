import React, { useState } from 'react';
import Icon from './components/Icon';
import Topbar from './components/Topbar';
import Post from './components/Post';

import './App.css';
import PostForm from './components/PostForm';

const user = {
  name: 'Tanakorn Karode',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg'
}

const defaultPosts = [
  {
    user: {
      name: 'Tanakorn Karode',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg'
    },
    media: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg',
    like: 100,
    content: 'หรือจะเอา',
  },
  {
    user: {
      name: 'Tanakorn Karode',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg'
    },
    media: 'https://i.pinimg.com/originals/7f/53/9f/7f539f9023f71c01679ee4b0160b3309.jpg',
    like: 22,
    content: 'She is so beautiful',
  },
  {
    user: {
      name: 'Tanakorn Karode',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg'
    },
    media: 'https://lifestyle.campus-star.com/app/uploads/2018/08/cat-world.jpg',
    like: 10,
    content: 'โจทย์เก่า',
  }
]

function App() {

  const [posts, setPosts] = useState(defaultPosts);

  const handleAddPost = (data) => {
    setPosts([data, ...posts]);
  }

  return (
    <div className="App">
      <Topbar />
      <div className='app-container'>
        <PostForm user={user} onAddPost={handleAddPost} />
        {
          posts.map((post, index) => (
            <div key={index} style={{ marginBottom: 60 }}>
              <Post post={post} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
