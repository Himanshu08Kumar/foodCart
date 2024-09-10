import React from "react";
import logo from "../assets/logo.jpg";

const Header = ({ cartCount, toggleCart }) => {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="logo image" className="logo" />
        <h1>REACTFOOD</h1>
      </div>
      <h2 
      className="headerCart" 
      onClick={toggleCart}
      >Cart ({cartCount})</h2> 
    </div>
  );
};

export default Header;
