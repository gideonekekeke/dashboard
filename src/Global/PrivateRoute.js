import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const PrivateRoute = ({ children }) => {
	const { currentUser } = useContext(AuthContext);

	return currentUser ? children : <Navigate to='/' />;
};
