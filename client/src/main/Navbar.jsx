import React from "react";
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="search-bar"> 
          <div className="logo">
            <img src='../assets/flipkart.png' alt="Logo" />
          </div>
          <i className="fa fa-search" aria-hidden="true"/>
          <input type="text" placeholder="Search" />
        </div>
        <div class="user-options">
          <div class="login">
            <span>Login</span>
            <div class="dropdown-content">
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
              <a href="#">Option 4</a>
              <a href="#">Option 5</a>
              <a href="#">Option 6</a>
            </div>
          </div>
          <div class="cart">
            <button>Cart</button>
          </div>
          <div class="become-seller">
            <button>Become a Seller</button>
          </div>
          <div class="options">
            <button onclick="toggleOptions()">Options</button>
            <div class="dropdown-content" id="optionsDropdown">
              <a href="#">Option A</a>
              <a href="#">Option B</a>
              <a href="#">Option C</a>
              <a href="#">Option D</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
