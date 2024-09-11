import React, { useContext } from "react";
import logo from "../assets/logo.jpg";
import { CounterContext } from "../context/CounterContext";

const Header = () => {
  const { cartLength, toggleCart } = useContext(CounterContext);

  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="logo image" className="logo" />
        <h1>REACTFOOD</h1>
      </div>
      <h2 className="headerCart" onClick={toggleCart}>
        Cart ({cartLength})
      </h2>
    </div>
  );
};

export default Header;
