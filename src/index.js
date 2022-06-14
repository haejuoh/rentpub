import React from "react";
import ReactDOM from "react-dom";

import "./assets/style/font.css";
import "./assets/style/reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
// import reducer from "./components/reducer";
import reducer from "./components/customed/snackbar/reducer";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
