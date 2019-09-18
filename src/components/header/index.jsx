import React from 'react';
import './header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../app/App';
import CommentsPage from '../comments-page'

const Header = () => {
    return (
        <Router>
            <div className="header">
                <div className="logo-container">
                    <h1 className="logo">Blog</h1>
                </div>
                <div className="menu-container">
                    <Link to="/posts" className="menu-element">Posts</Link>
                    <Link to="/comments/" className="menu-element">Comments</Link>
                </div>
                <Route path="/posts" exact component={App} />
                <Route path="/comments/" component={CommentsPage} />
            </div>
        </Router>
    )
}
export default Header;