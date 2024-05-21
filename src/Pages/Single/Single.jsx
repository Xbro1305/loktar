import React, { useState } from "react";
import "./Single.css";
import { useDispatch, useSelector } from "react-redux";
import { acCart, acDec, acInc, acRemoveItem } from "../../Context/Cart";
import { useNavigate, useParams } from "react-router-dom";

export const Single = () => {
  const navigate = useNavigate();
  const array = [
    {
      name: "Шорох",
      title: "Мобильный комплекс связи",
      images: [
        "https://lktimgs.vercel.app//S1.png",
        "https://lktimgs.vercel.app//S2.png",
        "https://lktimgs.vercel.app//S3.png",
      ],
      description:
        "Комплекс связи тактического звена, построенный на модуле низкоскоростной передачи данных, поддерживающий различные типы транспорта для передачи данных, включающий картографию и чат для обмена информацией.",
      RAM: "16 Gb",
      interface: "Type-c, 3,5mm",
      longer: "Длинное значение характеристики",
      Hz: 345,
      id: 1,
    },
    {
      name: "Шорох-y",
      title: "Мобильный комплекс связи",
      images: [
        "https://lktimgs.vercel.app//S1.png",
        "https://lktimgs.vercel.app//S2.png",
        "https://lktimgs.vercel.app//S3.png",
      ],
      description:
        "Комплекс связи тактического звена, построенный на модуле низкоскоростной передачи данных, поддерживающий различные типы транспорта для передачи данных, включающий картографию и чат для обмена информацией.",
      RAM: "16 Gb",
      interface: "Type-c, 3,5mm",
      longer: "Длинное значение характеристики",
      Hz: 345,
      id: 2,
    },
    {
      name: "Дымка",
      title: "Мобильный комплекс связи",
      images: [
        "https://lktimgs.vercel.app//S1.png",
        "https://lktimgs.vercel.app//S2.png",
        "https://lktimgs.vercel.app//S3.png",
      ],
      description:
        "Комплекс связи тактического звена, построенный на модуле низкоскоростной передачи данных, поддерживающий различные типы транспорта для передачи данных, включающий картографию и чат для обмена информацией.",
      RAM: "16 Gb",
      interface: "Type-c, 3,5mm",
      longer: "Длинное значение характеристики",
      Hz: 345,
      id: 3,
    },
    {
      name: "Туман",
      title: "Мобильный комплекс связи",
      images: [
        "https://lktimgs.vercel.app//S1.png",
        "https://lktimgs.vercel.app//S2.png",
        "https://lktimgs.vercel.app//S3.png",
      ],
      description:
        "Комплекс связи тактического звена, построенный на модуле низкоскоростной передачи данных, поддерживающий различные типы транспорта для передачи данных, включающий картографию и чат для обмена информацией.",
      RAM: "16 Gb",
      interface: "Type-c, 3,5mm",
      longer: "Длинное значение характеристики",
      Hz: 345,
      id: 4,
    },
    {
      name: "Фидер",
      title: "Мобильный комплекс связи",
      images: [
        "https://lktimgs.vercel.app//S1.png",
        "https://lktimgs.vercel.app//S2.png",
        "https://lktimgs.vercel.app//S3.png",
      ],
      description:
        "Комплекс связи тактического звена, построенный на модуле низкоскоростной передачи данных, поддерживающий различные типы транспорта для передачи данных, включающий картографию и чат для обмена информацией.",
      RAM: "16 Gb",
      interface: "Type-c, 3,5mm",
      longer: "Длинное значение характеристики",
      Hz: 345,
      id: 5,
    },
    {
      name: "ANT 433-09 GY",
      title: "Мобильный комплекс связи",
      images: [
        "https://lktimgs.vercel.app//S1.png",
        "https://lktimgs.vercel.app//S2.png",
        "https://lktimgs.vercel.app//S3.png",
      ],
      description:
        "Комплекс связи тактического звена, построенный на модуле низкоскоростной передачи данных, поддерживающий различные типы транспорта для передачи данных, включающий картографию и чат для обмена информацией.",
      RAM: "16 Gb",
      interface: "Type-c, 3,5mm",
      longer: "Длинное значение характеристики",
      Hz: 345,
      id: 6,
    },
    {
      name: "ANT 433-07 M",
      title: "Мобильный комплекс связи",
      images: [
        "https://lktimgs.vercel.app//S1.png",
        "https://lktimgs.vercel.app//S2.png",
        "https://lktimgs.vercel.app//S3.png",
      ],
      description:
        "Комплекс связи тактического звена, построенный на модуле низкоскоростной передачи данных, поддерживающий различные типы транспорта для передачи данных, включающий картографию и чат для обмена информацией.",
      RAM: "16 Gb",
      interface: "Type-c, 3,5mm",
      longer: "Длинное значение характеристики",
      Hz: 345,
      id: 7,
    },
    {
      name: "A433-05N-M",
      title: "Мобильный комплекс связи",
      images: [
        "https://lktimgs.vercel.app//S1.png",
        "https://lktimgs.vercel.app//S2.png",
        "https://lktimgs.vercel.app//S3.png",
      ],
      description:
        "Комплекс связи тактического звена, построенный на модуле низкоскоростной передачи данных, поддерживающий различные типы транспорта для передачи данных, включающий картографию и чат для обмена информацией.",
      RAM: "16 Gb",
      interface: "Type-c, 3,5mm",
      longer: "Длинное значение характеристики",
      Hz: 345,
      id: 8,
    },
  ];
  const params = useParams();
  const id = params.id;
  console.log(id);
  const item = array.find((i) => i.id == id);
  console.log(item);
  const cart = useSelector((state) => state.cart);
  const i = cart?.find((it) => it?.id === item?.id);
  const [image, setImage] = useState(0);
  const [buy, setBuy] = useState(i?.quantity || 0);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="single mw360" id="single">
      <h4 id="name">{item.name}</h4>
      <div className="showing">
        <button className="open" onClick={() => setModal(true)}>
          <img src="https://lktimgs.vercel.app//open.svg" alt="" />
        </button>
        <img src={item.images[image]} alt="" />
        <section className="imgs">
          {item.images.map((i, index) => (
            <img
              src={item.images[index]}
              style={index === image ? { border: "2px solid #fff" } : {}}
              alt=""
              onClick={() => {
                setImage(index);
              }}
            />
          ))}
        </section>
      </div>
      <div className="info">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <section className="buy">
          <section
            className="count"
            style={buy ? { display: "flex" } : { display: "none" }}
          >
            <button
              onClick={() => {
                setBuy(buy - 1);
                dispatch(buy === 1 ? acRemoveItem(item) : acDec(item));
              }}
            >
              -
            </button>
            <p>
              {buy}
              <span>В корзине</span>
            </p>
            <button
              onClick={() => {
                setBuy(buy + 1);
                dispatch(acInc(item));
              }}
            >
              +
            </button>
          </section>
          <button
            onClick={() => {
              setBuy(1);
              dispatch(acCart(item));
            }}
          >
            {buy ? "Оформить заказ" : "В корзину"}
          </button>
          <section className="alert">
            <img src="https://lktimgs.vercel.app//Attention.svg" alt="" />
            <p>
              Поставляются устройства с мощностью излучения 0,15Вт, на частоте
              433МГц
            </p>
          </section>
        </section>
        <section>
          <div className="characters">
            <h2>Характеристики</h2>
            <div className="character">
              <p>RAM</p>
              <p>{item.RAM}</p>
            </div>
            <div className="character">
              <p>Интерфейс</p>
              <p>{item.interface}</p>
            </div>
            <div className="character">
              <p>Частота</p>
              <p>{item.Hz}</p>
            </div>
            <div className="character">
              <p>Длинная характеристика</p>
              <p>{item.longer}</p>
            </div>
          </div>
        </section>
      </div>
      <div className="category">
        <h2>Все комплексы</h2>
        <div className="homediv" onClick={() => navigate("/single/1#name")}>
          <img src="https://lktimgs.vercel.app//H2.jpg" alt="" />
          <section>
            <h1>ШОРОХ</h1>
            <p>Мобильный комплекс связи</p>
          </section>
        </div>
        <div className="homediv" onClick={() => navigate("/single/2#name")}>
          <img src="https://lktimgs.vercel.app//H1.jpg" alt="" />
          <section>
            <h1>ШОРОХ-У</h1>
            <p>Мобильный комплекс РЭР </p>
          </section>
        </div>
        <div className="homediv" onClick={() => navigate("/single/3#name")}>
          <img src="https://lktimgs.vercel.app//H3.jpg" alt="" />
          <section>
            <h1>ДЫМКА</h1>
            <p>ДЫМКА</p>
          </section>
        </div>
        <div className="homediv" onClick={() => navigate("/single/4#name")}>
          <img src="https://lktimgs.vercel.app//H3.jpg" alt="" />
          <section>
            <h1>ТУМАН</h1>
            <p>Короткое описание</p>
          </section>
        </div>
        <div className="homediv" onClick={() => navigate("/single/5#name")}>
          <img src="https://lktimgs.vercel.app//H3.jpg" alt="" />
          <section>
            <h1>ФИДЕР</h1>
            <p>Короткое описание</p>
          </section>
        </div>
        <div className="homediv" onClick={() => navigate("/single/6#name")}>
          <img src="https://lktimgs.vercel.app//H3.jpg" alt="" />
          <section>
            <h1>ANT 433-09 GY</h1>
            <p>Антенна направленная</p>
          </section>
        </div>
        <div className="homediv" onClick={() => navigate("/single/7#name")}>
          <img src="https://lktimgs.vercel.app//H3.jpg" alt="" />
          <section>
            <h1>ANT 433-07 М</h1>
            <p>Антенна всенаправленная</p>
          </section>
        </div>
        <div className="homediv" onClick={() => navigate("/single/8#name")}>
          <img src="https://lktimgs.vercel.app//H3.jpg" alt="" />
          <section>
            <h1>A433-05N-M</h1>
            <p>Антенна всенаправленная</p>
          </section>
        </div>
      </div>
      <div
        className="modal"
        style={modal ? { display: "flex" } : { display: "none" }}
      >
        <button className="close" onClick={() => setModal(false)}>
          x
        </button>
        <h2>{item.name}</h2>
        <h3>{image + 1 + " из " + item.images.length}</h3>
        <div className="showing">
          <img src={item.images[image]} alt="" />
        </div>
        <section className="imgs">
          {item.images.map((i, index) => (
            <img
              src={item.images[index]}
              style={index === image ? { border: "2px solid #fff" } : {}}
              alt=""
              onClick={() => {
                setImage(index);
              }}
            />
          ))}
        </section>
      </div>
    </div>
  );
};
