import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Pages/Home/Home";
import { Single } from "./Pages/Single/Single";
import { Provider } from "react-redux";
import { store } from "./Context/store";
import { Order } from "./Pages/Order/Order";
import { Cart } from "./Pages/Cart/Cart";
import { QA } from "./Pages/QA/QA";
import { About } from "./Pages/About/About";
import { Agreement } from "./Pages/Agreement/Agreement";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/about" element={<About />} />
          <Route path="/agreement" element={<Agreement />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
};
