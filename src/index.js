import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import reportWebVitals from "./reportWebVitals";

// import Hooks from "./components/hooks/Hooks";

import { Cocktailhook } from "./components/Cocktailhook";
import { Cocktaileven } from "./components/Cocktaileven";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
		// <Cocktailhook />
		<Cocktaileven/>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
