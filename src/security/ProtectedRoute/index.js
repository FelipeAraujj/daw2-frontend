import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AutProvider";

const ProtectedRoute = ({ element }) => {
    const { token } = useAuth();

    return token ? element : <navigate to="/login" />
};

export default ProtectedRoute;