import React from "react";
import "./Cart.css";
import del from "../../images/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { acInc, acDec, acRemoveItem, acClear } from "../../Context/Cart";

export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const data = JSON?.parse(localStorage?.getItem("cart")) || false;
  console.log(data);
  return (
    <div className="cart">
      <h1>Корзина</h1>
      {data ? (
        data.map((item) => (
          <div className="cartItem">
            <section className="itemInfo">
              <img src={item?.images[0]} alt="" />
              <h3>
                {item.name} <p>{item.title}</p>
              </h3>
            </section>
            <span className="line"></span>
            <section className="control">
              <section>
                <button>
                  <img src={del} alt="" />
                </button>
                <button>
                  <img src={require("../../images/saved.png")} alt="" />
                </button>
              </section>
              <section className="count">
                <button
                  onClick={() => {
                    dispatch(acDec(item));
                  }}
                >
                  -
                </button>
                <p>
                  {cart.find((i) => i.id === item.id).quantity}
                  <span>В корзине</span>
                </p>
                <button
                  onClick={() => {
                    dispatch(acInc(item));
                  }}
                >
                  +
                </button>
              </section>
            </section>
          </div>
        ))
      ) : (
        <h2> В корзине нету предметов</h2>
      )}
    </div>
  );
};
