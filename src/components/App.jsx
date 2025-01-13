import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RegisterPage from './RegisterPage/RegisterPage';
import LoginPage from './LoginPage/LoginPage';
import ContactsPage from './ContactsPage/ContactsPage';
import Navigation from './Navigation/Navigation';

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/register" element={token ? <ContactsPage />:<RegisterPage />} />
        <Route path="/login" element={token ? <ContactsPage />:<LoginPage />} />
        <Route
          path="/contacts"
          element={token ? <ContactsPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
