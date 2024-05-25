import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    return !!localStorage.getItem('token');
}

type PrivateRouteProps = {
    element: React.ReactNode; // Change the type of the element prop to React.ReactNode
}

const PrivateRoute:React.FC<PrivateRouteProps> = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default PrivateRoute;


