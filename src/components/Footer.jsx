import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { IoLocationSharp, IoTimeSharp } from 'react-icons/io5';
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="section_container">
        <div className="footer_section">
          <div className="footer_logo">
            <a href="/">
              <img src={logo} alt="Coffee Logo" />
              <h2>Coffee</h2>
            </a>
          </div>

          <div className="useful_links">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#why">Why Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="contact_us">
            <h3>Contact</h3>
            <ul>
              <li>
                <IoLocationSharp />
                <span>Berndorf, Germany</span>
              </li>
              <li>
                <AiFillPhone /> <span>+01 92728239</span>
              </li>
              <li>
                <IoTimeSharp />
                <span>Mon-Sun : 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="follow_us">
            <h3>Follow</h3>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
