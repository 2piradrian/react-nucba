import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes/Themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<BrowserRouter>
			<ThemeProvider theme={lightTheme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
