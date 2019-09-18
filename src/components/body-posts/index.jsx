import React from 'react';
import PostTitle from '../post-title'
import UserPanel from '../user-panel'
import './body-posts.css'

const BodyPosts = () => {
    return (
        <div className="body-posts">
           <PostTitle />
           <UserPanel />
        </div>
    )
}
export default BodyPosts;