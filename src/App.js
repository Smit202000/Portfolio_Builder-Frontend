import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to={"/login"} />} />
			<Route path="/login" element={<p>Login</p>} />
			<Route path="/signup" element={<p>Signup</p>} />
			<Route path="/portfolio/:username" element={<p>portfolio here</p>} />
			<Route path="*" element={<p>404 not found</p>} />
		</Routes>
	);
}

export default App;
