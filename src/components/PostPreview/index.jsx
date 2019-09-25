import React from 'react';
import './styles.css'

export default ({ img, title, text, commentsCount }) => {
    return (
        <div className="post-preview-container">
            <div className="post-img-container">
                <img src={img} alt="Picture" className="img" />
            </div>
            <div className="post-content">
                <h2 className="post-title">{title}</h2>
                <span>{text}</span>
                <span>Comments: {commentsCount}</span>
                <button className="read-more">Read more</button>
            </div>
        </div>
    )
}