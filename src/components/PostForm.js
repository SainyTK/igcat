import React, { useState } from 'react';

import './PostForm.css';
import Icon from './Icon';

const PostForm = ({ user, onAddPost }) => {

    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleAddPost = () => {
        onAddPost({
            user,
            media: imageUrl,
            like: 0,
            content
        })
    }

    return (
        <div className='post-form-container'>
            <div className='post-form-textarea-container'>
                <img className='post-form-avatar' src={user.imageUrl} />
                <div className='post-form-action'>
                    <textarea className='post-form-textarea' type='text' placeholder='คุณคิดอะไรอยู่' onChange={e => setContent(e.target.value)} />
                    <input className='post-form-textarea' type='text' placeholder='url รูปภาพ' onChange={e => setImageUrl(e.target.value)} />
                    <div className='post-form-bottom-action'>
                        <button onClick={handleAddPost}>โพสต์</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostForm;