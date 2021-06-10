import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const persistedState = localStorage.getItem("state")
  ? JSON.parse(localStorage.getItem("state"))
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});
export default store;
