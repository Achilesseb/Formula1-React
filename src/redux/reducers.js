const data = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCES":
      return action.payload.data;
    default:
      return state;
  }
};

export default data;
