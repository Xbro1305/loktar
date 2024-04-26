import React from "react";
import "./Order.css";

export const Order = () => {
  return (
    <div className="order">
      <form>
        <input type="text" placeholder="Имя" name="name" />
        <input type="text" placeholder="Компания" name="company" />
        <input
          type="text"
          placeholder="Номер телефона для связи"
          className="phone"
        />
        <input type="email" name="email" placeholder="Email" />
        <p>
          Для подтверждения заказа вы будете перенаправлены в телеграм-бота
          Локтар
        </p>
        <button>Заказать</button>
      </form>
    </div>
  );
};
