import { createStore } from "redux";
import rootReducer from "./reducers";

const persistedState = localStorage.getItem("state")
  ? JSON.parse(localStorage.getItem("state"))
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});
export default store;
