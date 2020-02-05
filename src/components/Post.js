import React from 'react';
import Icon from './Icon';

import './Post.css';

const Post = props => {

    const { user, media, like, content, date } = props.post;

    return (
        <div className='post-container'>
            <div className='post-header'>
                <div className='post-user-info'>
                    <img className='post-avatar' src={user.imageUrl} />
                    <p className='bold'>{user.name}</p>
                </div>
                <Icon type='dots' />
            </div>
            <div className='post-media'>
                <img src={media} style={{ width: '100%', cursor: 'pointer' }} onClick={props.handleLike} />
            </div>
            <div className='post-content'>
                <div className='post-action-container'>
                    <div className='post-action-left'>
                        <Icon style={{ marginRight: 16, cursor: 'pointer' }} type='heart' onClick={props.handleLike} />
                        <Icon style={{ marginRight: 16 }} type='message' />
                        <Icon style={{ marginRight: 16 }} type='forward' />
                    </div>
                    <Icon type='flag' />
                </div>
                <p>ถูกใจ {like} คน</p>
                <p><span className='bold'>{user.name}</span> {content}</p>
            </div>
        </div>
    )
}

export default Post;