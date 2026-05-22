import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs';
import About from './components/about/About.jsx';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import "animate.css/animate.min.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? saved === 'true' : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={
          <div>
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
            >
              {darkMode ? <BsSun /> : <BsMoon />}
            </button>
            <Header />
            <About />
            <Contact />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
