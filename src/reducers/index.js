import paletteReducer from "./paletteReducer";
import loadingReducer from "./loadingReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  paletteReducer,
  loadingReducer,
});

export default rootReducer;
