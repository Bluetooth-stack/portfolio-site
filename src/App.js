import React, { useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import { AnimatePresence } from 'framer-motion';
import FirstPage from './pages/FirstPage';
import Navbar from './components/common/Navbar';

function App() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="App">

      {
        showNav &&
        <Navbar />
      }

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<FirstPage setShowNav={setShowNav} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>


    </div>
  );
}

export default App;
