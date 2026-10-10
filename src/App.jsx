import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Report from './pages/Report';
import Browse from './pages/Browse';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import './styles/global.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/report" element={<Report />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
