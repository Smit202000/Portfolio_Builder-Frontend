import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthPage, Login, NotFound, PrivateRoute, Signup } from "./components";
import { HomePage, PortfolioPage } from "./pages";
import "./App.css";

const App = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<PrivateRoute>
						<HomePage />
					</PrivateRoute>
				}
			/>
			<Route path="/auth" element={<AuthPage />}>
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/signup" element={<Signup />} />
			</Route>
			<Route path="/portfolio/:username" element={<PortfolioPage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
