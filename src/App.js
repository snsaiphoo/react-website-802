import React from'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App';
import Home from './components/pages/Home';
import Emotional from './components/pages/Emotional';
import Physical from './components/pages/Physical';
import Sustenance from './components/pages/Sustenance';
import ContactUs from './components/pages/ContactUs';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/emotional" element={<Emotional />} />
           <Route path="/physical" element={<Physical />} />
           <Route path="/sustenance" element={<Sustenance />} />
           <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
