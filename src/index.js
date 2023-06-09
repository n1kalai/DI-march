import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import reportWebVitals from "./reportWebVitals";

import { ExplainReduserHook } from "./components/hooks/ExplainReduserHook";
import LearningContext from "./components/context/LearningContext";
import UseReducerHW from "./components/hooks/UseReducerHW";
import UseReducerPlay from "./components/hooks/UseReducerPlaygroud";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<UseReducerPlay />
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
