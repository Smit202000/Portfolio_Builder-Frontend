import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { SnackbarProvider } from "notistack";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<SnackbarProvider autoHideDuration={3000} maxSnack={3}>
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		</SnackbarProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
