import React from "react";
import ReactDOM from "react-dom";
// import "./style.less";
import "./assets/css/common.less";
import "./assets/css/iconfont.css";
import AppRouter from "./router";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
