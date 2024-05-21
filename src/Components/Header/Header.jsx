import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      style={
        window.location.href == "http://localhost:3000/"
          ? { maxWidth: "100%" }
          : {}
      }
    >
      <section className="logo">
        <img src="https://lktimgs.vercel.app//logo.svg" alt="" />
        <h1>ЛОКТАР</h1>
      </section>
      <section className="navigation">
        <img
          onClick={() => navigate("/cart")}
          src="https://lktimgs.vercel.app//cart.svg"
          alt=""
        />
        <img src="https://lktimgs.vercel.app//saved.png" alt="" />
        <img src="https://lktimgs.vercel.app//menu.png" alt="" />
      </section>
    </header>
  );
};
