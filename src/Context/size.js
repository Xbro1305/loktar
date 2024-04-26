export const reSize = (state = "", action) => {
  switch (action.type) {
    case "SET_SIZE":
      return action.payload;
    default:
      return state;
  }
};

export const acSize = (i) => ({ type: "SET_SIZE", payload: i });
