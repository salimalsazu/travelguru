import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { contextProvider } from '../ContextApi/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(contextProvider);
    const location = useLocation();

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin"></div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
    return children;

};

export default PrivateRoute;