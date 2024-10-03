import React, {useState}from 'react';
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
import Signup from './components/Signup';
import YetToBeCreated from './components/YetToBeCreated';
import WinterArcPlan from './components/WinterArcPlan';
import { ContentProvider } from './context/ContentContext'; // Import the ContentProvider

const ProtectedRoute = ({ isAdmin, children }) => {
  if (!isAdmin) {
    return <Navigate to="/user" />;
  }
  return children;
};

function App() {
  const [role, setRole] = useState(localStorage.getItem('role') || '');

  return (
    <ContentProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" 
              element={
                <ProtectedRoute isAdmin={role === 'admin'}>
                  <AdminPage />
                </ProtectedRoute>
              } 
            />
            <Route path="/user" element={<UserPage />} />
            <Route path="/mental-health" element={<MentalHealth />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/login" element={<Login setRole={setRole} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/developing" element={<YetToBeCreated />} />
            <Route path="/winterarc" element={<WinterArcPlan />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ContentProvider>
  );
}

export default App;
