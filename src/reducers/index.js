import paletteReducer from "./paletteReducer";
import loadingReducer from "./loadingReducer";
import storeReducer from "./storeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  paletteReducer,
  loadingReducer,
  storeReducer,
});

export default rootReducer;
