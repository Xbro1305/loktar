import React from "react";
import logo from "../../images/Logo (1).svg";
import { Link } from "react-router-dom";
import tg from "../../images/tg.svg";
import email from "../../images/email.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <section className="logo">
        <img src={logo} alt="" />
        <h1>ЛОКТАР</h1>
      </section>
      <span className="line"></span>
      <section className="links">
        <Link to={"/about"}>О компании</Link>
        <Link to={"/agreement"}>Пользовательское соглашение</Link>
        <Link to={"/QA"}>Вопросы и ответы</Link>
        <Link to={"/delivery"}>Доставка и оплата</Link>
      </section>
      <span className="line"></span>
      <section className="contact">
        <Link to={"/"}>
          <img src={tg} alt="" />
          <span>Телеграм-бот</span>
        </Link>
        <Link to={"/"}>
          <img src={email} alt="" />
          <span>Обратная связь</span>
        </Link>
      </section>
      <h2>© 2024 ООО «Локтар»</h2>
    </footer>
  );
};
