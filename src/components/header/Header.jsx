import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import profilePhoto from '../../assets/CvPhotoDanielSotoDelgado25.jpg';
import './header.css';

const DISCIPLINES = [
  'Sound Engineering',
  'Theater Production',
  'AV Installations',
  'Composition',
  'Frontend Development',
  'Creative Technology',
];

const MARQUEE_ITEMS = [
  'Sound', 'Theater', 'Composition', 'Installation', 'Code', 'Concept Development',
  'Sound', 'Theater', 'Composition', 'Installation', 'Code', 'Concept Development',
];

const nameWords = [
  { text: 'Daniel',  cls: 'hero__name-span--light' },
  { text: 'Soto',    cls: 'hero__name-span--bold'  },
  { text: 'Delgado', cls: 'hero__name-span--light' },
];

const Header = () => {
  const heroRef = useRef(null);
  const mouseX  = useMotionValue(0);
  const mouseY  = useMotionValue(0);

  const spring = { damping: 40, stiffness: 50, mass: 1.5 };
  const blobX1 = useSpring(useTransform(mouseX, [-1, 1], [-28,  28]), spring);
  const blobY1 = useSpring(useTransform(mouseY, [-1, 1], [-18,  18]), spring);
  const blobX2 = useSpring(useTransform(mouseX, [-1, 1], [ 18, -18]), spring);
  const blobY2 = useSpring(useTransform(mouseY, [-1, 1], [ 12, -12]), spring);

  const [tagIdx, setTagIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTagIdx(i => (i + 1) % DISCIPLINES.length), 2800);
    return () => clearInterval(id);
  }, []);

  const onMove = (e) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set(((e.clientX - r.left) / r.width  - 0.5) * 2);
    mouseY.set(((e.clientY - r.top)  / r.height - 0.5) * 2);
  };

  return (
    <section id="header" ref={heroRef} className="hero" onMouseMove={onMove}>

      {/* Ambient blobs — x/y are MotionValues, must stay in style */}
      <motion.div className="blob blob--gold hero__blob-gold" style={{ x: blobX1, y: blobY1 }} />
      <motion.div className="blob blob--cool hero__blob-cool" style={{ x: blobX2, y: blobY2 }} />

      {/* Vertical marquee strip */}
      <div className="hero__marquee-strip">
        <div className="hero__marquee-inner">
          {MARQUEE_ITEMS.map((item, i) => <span key={i}>{item}</span>)}
        </div>
      </div>

      {/* Main content */}
      <div className="hero__content">

        {/* Left: label + name */}
        <div className="hero__content-left">

          <div className="hero__label-row">
            <motion.span
              className="hero__label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              Creative Technologist
            </motion.span>

            {/* width animates from 0 → 5rem */}
            <motion.div
              className="hero__accent-line"
              style={{ width: 0 }}
              animate={{ width: '5rem' }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <h1 className="hero__name">
            {nameWords.map((word, i) => (
              <div key={word.text} className="hero__name-word">
                <motion.span
                  className={`hero__name-span ${word.cls}`}
                  initial={{ y: '108%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word.text}
                </motion.span>
              </div>
            ))}
          </h1>
        </div>

        {/* Right: profile photo */}
        <motion.div
          className="hero__photo"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__photo-frame">
            <img src={profilePhoto} alt="Daniel Soto Delgado" className="hero__photo-img" />
          </div>
        </motion.div>

      </div>

      {/* Bottom bar */}
      <motion.div
        className="hero__bottom-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        {/* Scroll indicator */}
        <div className="hero__scroll">
          {/* originY is a framer-motion prop, must stay in style */}
          <motion.div
            className="hero__scroll-line"
            style={{ originY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0], originY: ['0%', '0%', '100%', '100%'] }}
            transition={{ duration: 2.4, delay: 2.0, repeat: Infinity, repeatDelay: 1.0 }}
          />
          <span className="hero__scroll-label">Scroll</span>
        </div>

        {/* Rotating discipline */}
        <div className="hero__discipline">
          <div className="hero__discipline-line" />
          <div className="hero__discipline-ticker">
            {DISCIPLINES.map((d, i) => (
              <motion.span
                key={d}
                className="hero__discipline-item"
                initial={{ y: '110%', opacity: 0 }}
                animate={
                  tagIdx === i                              ? { y: 0, opacity: 1 }
                  : tagIdx === (i + 1) % DISCIPLINES.length ? { y: '-110%', opacity: 0 }
                  : { y: '110%', opacity: 0 }
                }
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              >
                {d}
              </motion.span>
            ))}
          </div>
        </div>

        <span className="hero__location">Oslo 2026</span>
      </motion.div>

      {/* Bottom diagonal */}
      <div className="hero__diagonal">
        <div className="hero__diagonal-fill" />
        <svg className="hero__diagonal-svg" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <line x1="0" y1="60" x2="1440" y2="0" stroke="rgba(212,168,75,0.22)" strokeWidth="1.2" />
        </svg>
      </div>

    </section>
  );
};

export default Header;
