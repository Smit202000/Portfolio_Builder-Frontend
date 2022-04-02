import React from "react";
import { Navigate } from "react-router-dom";
// import { getToken } from "../../utils/tokens";

const PrivateRoute = ({ children }) => {
	// const isAuthenticated = getToken() ? true : false;
	const isAuthenticated = true;

	return isAuthenticated ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
