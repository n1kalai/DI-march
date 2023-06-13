import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { MainPage } from "./pages/MainPage";
import { PostsPage } from "./pages/PostsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
		
	<BrowserRouter>	
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/post/:id" element={<PostsPage />} />
    	</Routes>
	</BrowserRouter>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
