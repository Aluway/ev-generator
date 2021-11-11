const initState = {
  evPros: "",
  evCons: "",
  evThanks: "",
};

const finalReducer = (state = initState, action) => {
  switch (action.type) {
    case "PUSH_EV":
      return action.payload;
    default:
      return state;
  }
};

export default finalReducer;
