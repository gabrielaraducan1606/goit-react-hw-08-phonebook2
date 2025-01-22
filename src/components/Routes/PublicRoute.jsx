import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

function PublicRoute({ component: Component, restricted = false }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn && restricted ? <Navigate to="/contacts" /> : <Component />;
}

export default PublicRoute;
