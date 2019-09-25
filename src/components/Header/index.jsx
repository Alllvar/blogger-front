import React from 'react';
import './header.css';
import { Link } from "react-router-dom";


const Header = ({ links }) => (
  <div className="header">
    <div className="logo-container">
      <h1 className="logo">Blog</h1>
    </div>
    <div className="menu-container">
      {
        links.map((link, i) =>
          <Link
            className="menu-element" 
            to={link.to} 
            key={i}
          >
            {link.label}
          </Link>
        )
      }
    </div>
  </div>
)

export default Header;
