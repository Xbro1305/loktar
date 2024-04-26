import React, { useState } from "react";
import "./Single.css";
// import { useParams } from "react-router-dom";
import alert from "../../images/Attention.svg";
import { useDispatch, useSelector } from "react-redux";
import { acCart, acDec, acInc, acRemoveItem } from "../../Context/Cart";
import open from "../../images/open.svg";

export const Single = () => {
  const item = {
    name: "Шорох",
    images: [
      "https://s3-alpha-sig.figma.com/img/689b/415d/d0e1956646f0991aff9cfd0c9fb555e3?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fkY6Hd7aZi~I02cTaWP9O-6EXxdISl3p404lR135Geul7YCJHCrXLaS-c1JAVaEmlbsS6dViWKP8klRr4tQNGilrISaIvcKmJ2zafu3tepFDdVS4tpw-Hw7g19Ejp5hdEZw3tHTvpPlLs4Rz6IKsUvEmoR3janWGfwpusGtI7eF54sq9LP7vmwk4pkZjXSFVkcGgBFbR7IcoSwFJbMZ8cwX1QmIjJ77V6ou8qUY3ZOVegeVt7b8Z3iS2Yd78JmscuKPZj38q06lDSsWKz~JHvXsxTwpVuR3iFa15iqaaK1xh~vGUIBU3e1Pw5cpT0YY6HWlxNZgpNmzqKjISZLKxdw__",
      "https://s3-alpha-sig.figma.com/img/ab54/00a6/e02518a32fa10d641430a885cf8c3ab0?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TEln0q3XNTx4-t2H~qt6CVQ7BfhN3N-AsRuURQicxe76BRigrx~pr4XPT6sCKmKouVcm7c0G6648PCr89yxUBSpajr6pkbcxL-s5~i2UBrD~Nw4BnQMem-VQK0LIiVqJRqz1LPRsHTAS3g~luAY79bLTxQV861GI1fmAt59XndgyNaNT0BnMnLkv4esXJRlnEbrldpZ~MSAfSrw~pN1urv~2v-OcaxL-OY9y1bcBAhCO9WryRCWj6od~TzvHYBP4EU4prx4NauI90tsL1LdLc5jKszEzYTJj4s09-F9h3gPUpoeSri0HggeyQna9rn15kWWQCKzqIElKmZYoniaRdg__",
      "https://s3-alpha-sig.figma.com/img/fd89/07f3/236c9eb2b0ec3bd6a56fb70360911f57?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xoshwr3ZRX-~BILpCQYnKXoK2WxwkJmcTS7HZMDHxw2Z0STBZwl5bVpRmUhRGtzTKUKW7dcibec6E-nqrIjL3LZlnbZRmIW~Ui5-43mKBXVdx5VraLikxFrrtoUmiHNzQWb6lnlw~BYgVZJWrPMFd9L4yUVM1vHMLqtvyU07SO4uuCf6A~ZJ4ijjJ3PO8jTh8ts4kjIzZ4qC1l0E4h9kd-nixWodUyTje~IHTSgQREU5zo72DtpELr52CMdNPi3Hc0FSXBNIb6RWKfotLKVfCBB5rM15tijzM~vttAjgl~W3UQP8byRkcZu~Myo7NlR7KBwHIM-lOJjatZkqkIBORA__",
    ],
    title: "Мобильный комплекс связи",
    description:
      "Комплекс связи тактического звена, построенный на модуле низкоскоростной передачи данных, поддерживающий различные типы транспорта для передачи данных, включающий картографию и чат для обмена информацией.",
    RAM: "16 Gb",
    interface: "Type-c, 3,5mm",
    longer: "Длинное значение характеристики",
    Hz: 345,
    id: 1,
  };
  const cart = useSelector((state) => state.cart);
  const i = cart?.find((i) => i.id === item.id);
  const [image, setImage] = useState(0);
  const [buy, setBuy] = useState(i?.quantity || 0);
  const [modal, setModal] = useState(false);

  //   const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <div className="single">
      <h4>{item.name}</h4>
      <div className="showing">
        <button className="open" onClick={() => setModal(true)}>
          <img src={open} alt="" />
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
            <img src={alert} alt="" />
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
        <div className="homediv">
          <img
            src="https://s3-alpha-sig.figma.com/img/ffe5/814d/b2c3ba4fb3b89bbe09f54e7d33a84a0f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GYDdFNapEG1J5FnF6PdD1LQTQcY8oDfmPquVn5QLNBvfzHTOGIaKVCfsiZPaae7qykO6-KhZTX6zyiwpCurt3YKCj79w1vtaOQh6X2GRH2D07S6P70fy-nNQVb2vC~fyPTqP-lNviNrPNEcBKxfc8eXBADmtgiQ7bntWBJCUlWfRBn7C73Y76xhYUDEJkyVCpJWCOzy5BXQ7MzhxHc5dg13L8PdJH~sT3Rg8qVulw88FY5V-PMvHnGNcEk2N2Jso4nkhOpN-wJcJNhjhhNKF9wcSFf99lphnsapP70fDEfNbv7L0GQUazzBrc96mS09dfn5E0QFuuJakD0-7lSCNOQ__"
            alt=""
          />
          <section>
            <h1>ШОРОХ</h1>
            <p>Мобильный комплекс связи</p>
          </section>
        </div>
        <div className="homediv">
          <img
            src="https://s3-alpha-sig.figma.com/img/b875/77c7/eff818a6c0dc9ad437a93122df10370a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lj0UWUr~E~c7cdeH8PFRUJddE4WZ3W5Sp4A0JeamuTSaXsQC77~~dA5xEiTLOP3vi20SAfU~2ApS8BX7sLz3jFutbrFQ7DHX6fiDn6B83my3X~zOelB8MT4ocrBtXrX9SFt3KijUQony2XSYCs6yWhg73z~ERxdKJS5HinkbAAduPv1NuNt3dzvOF9nxsp2KlrcgN69Wjx0eIAQwHpOzQaQCr2kDkL2N4AP3SSgq00~3vctJHJo~D2~pFgizXE9ozFUiGHK4ALH-dc~wXMXddHI0IqEzWrkgn80WA3UivgtY8aShSz7U2r7pfPhMSENyPZJ30vfouBP1Tj8I1kYlcg__"
            alt=""
          />
          <section>
            <h1>ШОРОХ-У</h1>
            <p>Мобильный комплекс РЭР </p>
          </section>
        </div>
        <div className="homediv">
          <img
            src="https://s3-alpha-sig.figma.com/img/ca97/c737/d2f7e26320798e2cb1b58b7f49ee052d?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqIG4Z86AjJI0n1lpI5x841bGtm1msvfugFAePeJ~OwMpItklQiZmH269bKkDyhzscTCmRLGLRi7cTGMCpdLU38tCf~QYWnRquPMpRxR64~~MU5mS3R8-2cnNcO81w45xpafvhRlTi8IjJqTZbTV4w8gHwcJByOd~pDeC6LPYecTaHjsNwEirk0i4EKz8FAgPormpSn5suosvGYu8pGDAqyI0qlM-N~MzeVI0EFvQuOLhhlN9iSW6aNgBvBXqleeYaxqJvlB~rhqJNfgMTmP6KF5F0z7iaYr3ksVfnM-D-eXwhjloDiWvE5bLpPUpaHtuB4~gRjyofk-5c44X2OlCw__"
            alt=""
          />
          <section>
            <h1>ДЫМКА</h1>
            <p>ДЫМКА</p>
          </section>
        </div>
        <div className="homediv">
          <img
            src="https://s3-alpha-sig.figma.com/img/ca97/c737/d2f7e26320798e2cb1b58b7f49ee052d?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqIG4Z86AjJI0n1lpI5x841bGtm1msvfugFAePeJ~OwMpItklQiZmH269bKkDyhzscTCmRLGLRi7cTGMCpdLU38tCf~QYWnRquPMpRxR64~~MU5mS3R8-2cnNcO81w45xpafvhRlTi8IjJqTZbTV4w8gHwcJByOd~pDeC6LPYecTaHjsNwEirk0i4EKz8FAgPormpSn5suosvGYu8pGDAqyI0qlM-N~MzeVI0EFvQuOLhhlN9iSW6aNgBvBXqleeYaxqJvlB~rhqJNfgMTmP6KF5F0z7iaYr3ksVfnM-D-eXwhjloDiWvE5bLpPUpaHtuB4~gRjyofk-5c44X2OlCw__"
            alt=""
          />
          <section>
            <h1>ТУМАН</h1>
            <p>Короткое описание</p>
          </section>
        </div>
        <div className="homediv">
          <img
            src="https://s3-alpha-sig.figma.com/img/ca97/c737/d2f7e26320798e2cb1b58b7f49ee052d?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqIG4Z86AjJI0n1lpI5x841bGtm1msvfugFAePeJ~OwMpItklQiZmH269bKkDyhzscTCmRLGLRi7cTGMCpdLU38tCf~QYWnRquPMpRxR64~~MU5mS3R8-2cnNcO81w45xpafvhRlTi8IjJqTZbTV4w8gHwcJByOd~pDeC6LPYecTaHjsNwEirk0i4EKz8FAgPormpSn5suosvGYu8pGDAqyI0qlM-N~MzeVI0EFvQuOLhhlN9iSW6aNgBvBXqleeYaxqJvlB~rhqJNfgMTmP6KF5F0z7iaYr3ksVfnM-D-eXwhjloDiWvE5bLpPUpaHtuB4~gRjyofk-5c44X2OlCw__"
            alt=""
          />
          <section>
            <h1>ФИДЕР</h1>
            <p>Короткое описание</p>
          </section>
        </div>
        <div className="homediv">
          <img
            src="https://s3-alpha-sig.figma.com/img/ca97/c737/d2f7e26320798e2cb1b58b7f49ee052d?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqIG4Z86AjJI0n1lpI5x841bGtm1msvfugFAePeJ~OwMpItklQiZmH269bKkDyhzscTCmRLGLRi7cTGMCpdLU38tCf~QYWnRquPMpRxR64~~MU5mS3R8-2cnNcO81w45xpafvhRlTi8IjJqTZbTV4w8gHwcJByOd~pDeC6LPYecTaHjsNwEirk0i4EKz8FAgPormpSn5suosvGYu8pGDAqyI0qlM-N~MzeVI0EFvQuOLhhlN9iSW6aNgBvBXqleeYaxqJvlB~rhqJNfgMTmP6KF5F0z7iaYr3ksVfnM-D-eXwhjloDiWvE5bLpPUpaHtuB4~gRjyofk-5c44X2OlCw__"
            alt=""
          />
          <section>
            <h1>ANT 433-09 GY</h1>
            <p>Антенна направленная</p>
          </section>
        </div>
        <div className="homediv">
          <img
            src="https://s3-alpha-sig.figma.com/img/ca97/c737/d2f7e26320798e2cb1b58b7f49ee052d?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqIG4Z86AjJI0n1lpI5x841bGtm1msvfugFAePeJ~OwMpItklQiZmH269bKkDyhzscTCmRLGLRi7cTGMCpdLU38tCf~QYWnRquPMpRxR64~~MU5mS3R8-2cnNcO81w45xpafvhRlTi8IjJqTZbTV4w8gHwcJByOd~pDeC6LPYecTaHjsNwEirk0i4EKz8FAgPormpSn5suosvGYu8pGDAqyI0qlM-N~MzeVI0EFvQuOLhhlN9iSW6aNgBvBXqleeYaxqJvlB~rhqJNfgMTmP6KF5F0z7iaYr3ksVfnM-D-eXwhjloDiWvE5bLpPUpaHtuB4~gRjyofk-5c44X2OlCw__"
            alt=""
          />
          <section>
            <h1>ANT 433-09 GY</h1>
            <p>Антенна направленная</p>
          </section>
        </div>
        <div className="homediv">
          <img
            src="https://s3-alpha-sig.figma.com/img/ca97/c737/d2f7e26320798e2cb1b58b7f49ee052d?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqIG4Z86AjJI0n1lpI5x841bGtm1msvfugFAePeJ~OwMpItklQiZmH269bKkDyhzscTCmRLGLRi7cTGMCpdLU38tCf~QYWnRquPMpRxR64~~MU5mS3R8-2cnNcO81w45xpafvhRlTi8IjJqTZbTV4w8gHwcJByOd~pDeC6LPYecTaHjsNwEirk0i4EKz8FAgPormpSn5suosvGYu8pGDAqyI0qlM-N~MzeVI0EFvQuOLhhlN9iSW6aNgBvBXqleeYaxqJvlB~rhqJNfgMTmP6KF5F0z7iaYr3ksVfnM-D-eXwhjloDiWvE5bLpPUpaHtuB4~gRjyofk-5c44X2OlCw__"
            alt=""
          />
          <section>
            <h1>ANT 433-07 М</h1>
            <p>Антенна всенаправленная</p>
          </section>
        </div>
        <div className="homediv"></div>
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
