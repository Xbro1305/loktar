import React from "react";
import logo from "../../images/Logo (1).svg";
import cart from "../../images/cart.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <section className="logo">
        <img src={logo} alt="" />
        <h1>ЛОКТАР</h1>
      </section>
      <section className="navigation">
        <img src={cart} alt="" />
        <img src={require("../../images/saved.png")} alt="" />
        <img src={require("../../images/menu.png")} alt="" />
      </section>
    </header>
  );
};
