import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../redux/auth/authOperations';
import { selectIsRefreshing } from '../redux/auth/authSelectors';
import Navigation from './Navigation/Navigation';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (isRefreshing) return <p>Refreshing user...</p>;

  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/register"
          element={<PublicRoute component={RegisterPage} restricted />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={LoginPage} restricted />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
      </Routes>
    </div>
  );
}

export default App;
