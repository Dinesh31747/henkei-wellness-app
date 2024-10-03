import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/developing" element={<YetToBeCreated />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
