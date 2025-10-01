import React from "react";
import { createRoot } from "react-dom/client";
2;
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
