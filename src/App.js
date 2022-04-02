import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthPage, Login, NotFound, Signup } from "./components";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to={"/login"} />} />
			<Route path="/auth" element={<AuthPage />}>
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/signup" element={<Signup />} />
			</Route>
			<Route path="/portfolio/:username" element={<p>portfolio here</p>} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
