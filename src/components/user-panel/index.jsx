import React from 'react';
import './user-panel.css'

const UserPanel = () => {
    return (
        <div className="user-panel-container">
            <div className="user-photo"></div>
            <h2 className="user-name">Username</h2>
            <div className="blog-info">
                <h3 className="posts">Posts: 10</h3>
                <h3 className="comments">Comments: 30</h3>
                <h3 className="replies">Replies: 5</h3>
            </div>
            <div className="mini-nav">
                <a href="#" className="nav-element">Settings</a>
                <a href="#" className="nav-element">Logout</a>
            </div>
        </div>
    )
}
export default UserPanel;