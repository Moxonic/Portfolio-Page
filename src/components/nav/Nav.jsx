import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
      // hide when scrolling down past hero, show when scrolling up
      if (y > 120) {
        setVisible(lastY.current > y);   // true = scrolling up
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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1.4rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,8,8,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
        transition: 'background 0.4s ease, border-color 0.4s ease',
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: visible ? 0 : -100 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], opacity: { delay: 1.6, duration: 0.8 } }}
    >
      <a
        href="#header"
        style={{
          fontSize: '0.78rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--text-2)',
          fontWeight: 500,
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
      >
        DSD
      </a>

      <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
        ))}
      </nav>
    </motion.header>
  );
};

export default Nav;
