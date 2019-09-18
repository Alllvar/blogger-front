import React from 'react';
import './post-title.css'
//import { FiUser } from 'react-icons/fa';

const PostTitle = () => {
    return (
        <div className="post-title-container">
            <div className="post">
                <h1 className="post-title">First post</h1>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut libero quas! Autem placeat 
                blanditiis perspiciatis molestiae exercitationem enim dolore fuga nulla facere explicabo iure, esse et neque, illum 
                consequuntur.</div>
                <div className="comments">
                    <div className="comment-container">
                        <div className="user">
                            user_1:
                        </div>
                        <div className="comment">
                            Nice!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostTitle;