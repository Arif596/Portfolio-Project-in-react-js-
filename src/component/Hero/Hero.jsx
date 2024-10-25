import React from "react";
import "./Hero.css";
import porfile_pic from "../../assets/pic .png";
import AnchorLink from "react-anchor-link-smooth-scroll";
export default function () {
  return (
    <div id="home" className="hero">
      <img src={porfile_pic} width={100} alt="" />
      <h1>
        <span>I'm Arif jamal</span> Front end Developer based on Lahore
      </h1>
      <p>
        I am Front end Developer from Lahore, Pakistan with 1 year expeirence in
        different Companies like Niftonic ,92 Dives
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={() => setMenu("contact")}
          >
            Connect With me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}
