import React from "react";
import "./Navbar.css";
import { assets } from "./../../assets/assets";
import { useState } from "react";

export default function Navbar() {
  const [menu,setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="assest_logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("play-store")} className={menu==="play-store"?"active":""}>Play Store</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button className="navbar-button">Sign In</button>
      </div>
    </div>
  );
}
