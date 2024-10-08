const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "REMOVE_ALERT":
      return null;
    default:
      state;
  }
};

export default alertReducer;
