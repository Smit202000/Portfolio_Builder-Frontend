import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../../utils/tokens";

const PrivateRoute = ({ children }) => {
	const isAuthenticated =
		getToken() !== "" &&
		getToken() !== null &&
		getToken() !== undefined &&
		getToken() !== "undefined"
			? true
			: false;
	return isAuthenticated ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
