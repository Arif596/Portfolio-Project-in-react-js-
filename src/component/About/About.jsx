import React from "react";
import "./About.css";
import profile_image from "../../assets/my pic.jpg";
import theme_pattern from "../../assets/theme_pattern.svg";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h2>About Me</h2>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_image} style={{ width: "200px" }} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a frontend developer with 7 months of experience,I specialize
              in creating responsive and user-friendly web applications.
            </p>
            <p>
              I am dedicated to enhancing my skills further.My passion lies in
              creating intuitive and engaging user experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML&CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Laravel&PHP</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
        {/* <div className="about-achievement">
            <div className="about-ach">
                <h1>1+</h1>
                <p>YEAR OF EXPIRENCE </p>
                <hr />
            </div>
            <div className="about-ach">
                <h1>8+</h1>
                <p>PROJECTS COMPLETED </p>
                <hr />
            </div>
        </div> */}
      </div>
    </div>
  );
}

export default About;
