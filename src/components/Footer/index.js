import React from "react";
import "./Footer.scss";

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <div className="Footer">
      &copy; Copyright {currYear}, designed & developed by{" "}
      <a href="https://instagram.com/satyendra.me" target="_blank" rel="noreferrer">
        satyendra Maurya
      </a>
    </div>
  );
}

export default Footer;
