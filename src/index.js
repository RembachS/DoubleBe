import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Header from "./components/Header/Header";

import "./__index.scss";
import "./__variables.scss";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);