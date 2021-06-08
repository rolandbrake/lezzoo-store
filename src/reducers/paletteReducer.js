const INITIAL_STATE = {
  mode: "light",
  color: "#7431ca",  
};
const paletteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.mode };
    case "CHANGE_COLOR":
      return { ...state, color: action.color };
    default:
      return state;
  }
};

export default paletteReducer;
