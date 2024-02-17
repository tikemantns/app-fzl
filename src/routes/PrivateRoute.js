import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isLoggedIn = useSelector(state => state.persistentSlice.user !== null);

  return isLoggedIn ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/auth/login" replace />
  );
};

export default PrivateRoute;
