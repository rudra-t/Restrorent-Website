import React from "react";
import "./Footer2.css";
import Navbar from "../../navbar/Navbar";

const Sociallinks = () => {
  return (
    <>
      <div className="footer-2">
        <div className="footer-links">
          <a href="#About">
            <li>About</li>
          </a>
          <a href="#Food-Menu">
            <li>Menu</li>
          </a>
          <a href="#Service">
            <li>Services</li>
          </a>
          <a href="#Login">
            <li>Login</li>
          </a>
          <a href="#Login">
            <li>Testimonials</li>
          </a>
        </div>
        <h2>Follow Us</h2>
        <div className="social-links">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-google"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sociallinks;
