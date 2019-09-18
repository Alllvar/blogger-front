import React from 'react';
import './comments.css'
import { FiUser } from 'react-icons/fa';

const Comments = () => {
    return (
        <div className="comments-container">
            <div className="comments">
                <div className="comment-container">
                    <div className="user">
                        <FiUser />user_1:
                    </div>
                    <div className="comment">
                        Nice!
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comments;