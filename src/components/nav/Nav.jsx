import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './nav.css';

const navLinks = [
  { label: 'Work',    href: '#work'    },
  { label: 'Contact', href: '#contact' },
];

const Nav = () => {
  const [visible, setVisible]   = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y > 120) {
        setVisible(lastY.current > y);
      } else {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`nav-header${scrolled ? ' nav-header--scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: visible ? 0 : -100 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], opacity: { delay: 1.6, duration: 0.8 } }}
    >
      <a href="#header" className="nav-logo">DSD</a>

      <nav className="nav-links">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
        ))}
      </nav>
    </motion.header>
  );
};

export default Nav;
