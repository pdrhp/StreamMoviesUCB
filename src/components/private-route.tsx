import { useAuth } from '@/contexts/auth-context';
import User from '@/interfaces/User';
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const isAuthenticated = (user: User | undefined) => {
    return !!user;
}

type PrivateRouteProps = {
    element: React.ReactNode; // Change the type of the element prop to React.ReactNode
}

const PrivateRoute:React.FC<PrivateRouteProps> = ({ element }) => {
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user])

    return isAuthenticated(user) ? element : <Navigate to="/login" />;
};

export default PrivateRoute;


