import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
export default function Navbar() {
  const [menu, setMenu] = useState("home");
  // const menuRef = useRef();
  // const openMenu = () => {
  //   menuRef.current.style.right = "0";
  // };
  // const closeMenu = () => {
  //   menuRef.current.style.right = "-360px";
  // };

  return (
    <div className="navbar">
      <div className="heading">
        <h5>Portfolio.</h5>
      </div>
      {/* <img src={menu_open} alt="" className="nav-mob-open" /> */}
      <ul className="nav-menu">
        {/* <img src={menu_close} alt="" className="nav-mob-close" /> */}
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu == "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>{" "}
          </AnchorLink>
          {menu == "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#service">
            <p onClick={() => setMenu("service")}>Services</p>{" "}
          </AnchorLink>
          {menu == "service" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>{" "}
          </AnchorLink>
          {menu == "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink
          className="anchor-link"
          offset={50}
          href="#contact"
          onClick={() => setMenu("contact")}
        >
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
}
