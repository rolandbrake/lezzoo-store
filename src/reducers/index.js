import paletteReducer from "./paletteReducer";
import loadingReducer from "./loadingReducer";
import storeReducer from "./storeReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  paletteReducer,
  loadingReducer,
  storeReducer,
  categoryReducer,
  productReducer,
});

export default rootReducer;
