const initState = [];

function presetsReducer(state = initState, action) {
  switch (action.type) {
    case "GET_PRESETS":
      return action.payload;
    default:
      return state;
  }
}

export default presetsReducer;
