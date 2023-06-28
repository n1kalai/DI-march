
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { App } from "./App";
import { store } from "./app/store";
import "./index.scss";
import "./App.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();