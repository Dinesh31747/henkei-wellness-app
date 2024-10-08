import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import MentalHealth from './components/MentalHealth';
import Fitness from './components/Fitness';
import Nutrition from './components/Nutrition';
import Login from './components/Login';
import Notifications from './components/Notifications';
import Blog from './components/Blog';
import Signup from './components/Signup';
import YetToBeCreated from './components/YetToBeCreated';
import WinterArcPlan from './components/WinterArcPlan'; 
import { ContentProvider } from './context/ContentContext';

// Protected Route for Admin
const ProtectedAdminRoute = ({ role, children }) => {
  return role === 'admin' ? children : <Navigate to="/user" />;
};

// Protected Route for User
const ProtectedUserRoute = ({ role, children }) => {
  return role ? children : <Navigate to="/login" />;
};

function App() {
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const handleLoginSuccess = (selectedRole) => {
    setRole(selectedRole);
    localStorage.setItem('role', selectedRole); // Store role in localStorage
  };

  const handleLogout = () => {
    localStorage.removeItem('role');
    setRole(''); // Clear role state
  };

  return (
    <ContentProvider>
      <Router>
        <div>
          <Navbar role={role} handleLogout={handleLogout} />

          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Admin Protected Route */}
            <Route 
              path="/admin" 
              element={
                <ProtectedAdminRoute role={role}>
                  <AdminPage />
                </ProtectedAdminRoute>
              } 
            />

            {/* User Protected Route */}
            <Route 
              path="/user" 
              element={
                <ProtectedUserRoute role={role}>
                  <UserPage />
                </ProtectedUserRoute>
              } 
            />

            {/* Public Routes */}
            <Route path="/mental-health" element={<MentalHealth />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/developing" element={<YetToBeCreated />} />
            <Route path="/winterarc" element={<WinterArcPlan />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ContentProvider>
  );
}

export default App;
