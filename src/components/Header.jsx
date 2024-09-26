import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../assets/logo.jpg"
const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav_logo">
          <Link to="/">
            <img src={logo} alt="Coffee Logo" />
            <h2>Coffee</h2>
          </Link>
        </div>

        <input type="checkbox" id="click" />
        <label htmlFor="click">
          <i className="menu_btn bx bx-menu"></i>
          <i className="close_btn bx bx-x"></i>
        </label>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
