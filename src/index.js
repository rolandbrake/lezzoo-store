import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
