import React from 'react';
import Icon from './components/Icon';
import Topbar from './components/Topbar';
import Post from './components/Post';

import './App.css';

const posts = [
  {
    user: {
      name: 'Tanakorn Karode',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg'
    },
    media: 'https://i.pinimg.com/originals/7f/53/9f/7f539f9023f71c01679ee4b0160b3309.jpg',
    like: 100,
    content: 'She is so beautiful',
  },
  {
    user: {
      name: 'Tanakorn Karode',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg'
    },
    media: 'https://i.pinimg.com/originals/7f/53/9f/7f539f9023f71c01679ee4b0160b3309.jpg',
    like: 100,
    content: 'She is so beautiful',
  },
  {
    user: {
      name: 'Tanakorn Karode',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg'
    },
    media: 'https://i.pinimg.com/originals/7f/53/9f/7f539f9023f71c01679ee4b0160b3309.jpg',
    like: 100,
    content: 'She is so beautiful',
  }
]

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className='app-container'>
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
