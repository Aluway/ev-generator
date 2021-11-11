const initState = {};

const settingReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUBMIT_FORM":
      return action.payload;
    default:
      return state;
  }
};

export default settingReducer;
