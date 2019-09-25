import React from 'react';
import './styles.css'

export default ({ avatar, name, comment }) => {
    return (
        <div className="comment-preview-container">
            <div className="comment-avatar-container">
                <img src={avatar} alt="avatar" className="avatar" />
            </div>
            <div className="comment-content">
                <h1 className="name">{name}</h1>
                <span>{comment}</span>
            </div>
        </div>
    )
}