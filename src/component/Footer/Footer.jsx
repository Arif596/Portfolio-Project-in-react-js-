import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>Portfolio.</p>
          <p>
            I am Front end Developer from Lahore, Pakistan with 1 year
            expeirence in different Companies like Niftonic ,92 Dives
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="enter your email" />
          </div>
          <div className="footer-subscribe">subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">All rights reserved</p>
        <div className="footer-bottom-right"></div>
        <p>Term of servces</p>
        <p>privacy policy</p>
        <p>Connect with me </p>
      </div>
    </div>
  );
}

export default Footer;
