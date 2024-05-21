import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home mw360">
      <div className="first homediv">
        <img src="https://lktimgs.vercel.app//H3.jpg" alt="" />
        <section>
          <section>
            <h2>ПРОГРАММНЫЙ КОМПЛЕКС </h2>
            <h1>ГРАНЬ</h1>
            <p>
              Новейшая эффективная разработка ЛОКТАР АРМ СОФТВЕР для войск
              радио-электронной борьбы
            </p>
          </section>
          <button>Запросить демо</button>
        </section>
      </div>
      <div className="homediv" onClick={() => navigate("/single/1")}>
        <img src="https://lktimgs.vercel.app//H2.jpg" alt="" />
        <section>
          <h1>ШОРОХ</h1>
          <p>Мобильный комплекс связи</p>
        </section>
      </div>
      <div className="homediv" onClick={() => navigate("/single/2")}>
        <img src="https://lktimgs.vercel.app//H1.jpg" alt="" />
        <section>
          <h1>ШОРОХ-У</h1>
          <p>Мобильный комплекс РЭР </p>
        </section>
      </div>
      <div className="homediv" onClick={() => navigate("/single/3")}>
        <img src="https://lktimgs.vercel.app//H3.jpg" alt="" />
        <section>
          <h1>ДЫМКА</h1>
          <p>ДЫМКА</p>
        </section>
      </div>
      <div className="homediv" onClick={() => navigate("/single/4")}>
        <img src="https://lktimgs.vercel.app//H3.jpg" alt="" />
        <section>
          <h1>ТУМАН</h1>
          <p>Короткое описание</p>
        </section>
      </div>
      <div className="homediv" onClick={() => navigate("/single/5")}>
        <img src="https://lktimgs.vercel.app//H3.jpg" alt="" />
        <section>
          <h1>ФИДЕР</h1>
          <p>Короткое описание</p>
        </section>
      </div>
      <div className="homediv" onClick={() => navigate("/single/6")}>
        <img src="https://lktimgs.vercel.app//H3.jpg" alt="" />
        <section>
          <h1>ANT 433-09 GY</h1>
          <p>Антенна направленная</p>
        </section>
      </div>
      <div className="homediv" onClick={() => navigate("/single/7")}>
        <img src="https://lktimgs.vercel.app//H3.jpg" alt="" />
        <section>
          <h1>ANT 433-07 М</h1>
          <p>Антенна всенаправленная</p>
        </section>
      </div>
      <div className="homediv" onClick={() => navigate("/single/8")}>
        <img src="https://lktimgs.vercel.app//H3.jpg" alt="" />
        <section>
          <h1>A433-05N-M</h1>
          <p>Антенна всенаправленная</p>
        </section>
      </div>
    </div>
  );
};
