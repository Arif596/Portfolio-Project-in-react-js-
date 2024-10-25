import React from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data";
import theme_pattern from "../../assets/theme_pattern.svg";
import Arrow_icon from "../../assets/arrow_icon.svg";
function Services() {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h2>My Services</h2>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-formate">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={Arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
