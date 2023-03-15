import React, { PropTypes } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ loged, children }) => {
	if(!loged){
	   alert("debes logearte. redirigiendo...")
       return <Navigate to='/login' />
	}

    return (children ? children : <Outlet />)
};

export default ProtectedRoutes;
