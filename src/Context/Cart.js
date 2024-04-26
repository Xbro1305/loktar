const data = JSON.parse(localStorage.getItem("cart") || "[]");

export const reCart = (state = data, action) => {
  switch (action.type) {
    case "ADD_CART":
      const newItem = { ...action.payload, quantity: 1 };
      const id = newItem.id;
      const sz = newItem.size;
      const find = state?.find((item) => item.size === sz && item.id === id);
      newItem.orderId = Date.now();

      if (find) {
        const newData = state.map((item) =>
          item.id === id && item.size === sz
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(newData));
        return newData;
      } else {
        const newState = [...state, newItem];
        localStorage.setItem("cart", JSON.stringify(newState));
        return newState;
      }
    case "INC":
      const incrementedState = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(incrementedState));
      return incrementedState;
    case "DEC":
      const decrementedState = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(decrementedState));
      return decrementedState;
    case "DEL":
      const updatedState = state.filter(
        (item, index) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    case "CLEAR":
      localStorage.removeItem("cart");
      return [];
    default:
      return state;
  }
};

export const acCart = (i) => ({ type: "ADD_CART", payload: i });
export const acRemoveItem = (index) => ({ type: "DEL", payload: index });
export const acDec = (item) => ({ type: "DEC", payload: item });
export const acInc = (item) => ({ type: "INC", payload: item });
export const acClear = () => ({ type: "CLEAR" });
