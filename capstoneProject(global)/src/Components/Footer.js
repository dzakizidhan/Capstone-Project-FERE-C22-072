import React from "react";
import "../Styles/main.css";

const Footer = () => {
  return (
    <footer className="sticky-footer">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <p> © Copyright MindHealth 2022</p>
    </footer>
  );
}

export default Footer;