import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

function PrivateRoute({ component: Component }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
}

export default PrivateRoute;
