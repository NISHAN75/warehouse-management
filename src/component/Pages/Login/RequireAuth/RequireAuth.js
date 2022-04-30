import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';



const RequireAuth = ({children}) => {
  const [auth] =useAuth();
  const [user] =useAuthState(auth);
  const location=useLocation();
  if(!user){
   return <Navigate to="/login" state={{ from: location }} replace />;
  }
  else{
    return children;
  }
};

export default RequireAuth;