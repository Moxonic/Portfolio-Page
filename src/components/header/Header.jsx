import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import profilePhoto from '../../assets/CvPhotoDanielSotoDelgado25.jpg';

const DISCIPLINES = [
  'Sound Engineering',
  'Theater Production',
  'AV Installations',
  'Composition',
  'Frontend Development',
  'Creative Technology',
];

const MARQUEE_ITEMS = [
  'Sound',
  'Theater',
  'Composition',
  'Installation',
  'Code',
  'Concept Development',
  'Sound',
  'Theater',
  'Composition',
  'Installation',
  'Code',
  'Concept Development',
];

/* Each name word slides up from a clipping container */
const nameWords = [
  { text: 'Daniel',  weight: 300, tracking: '-0.01em' },
  { text: 'Soto',    weight: 700, tracking: '-0.03em' },
  { text: 'Delgado', weight: 300, tracking: '-0.01em' },
];

const Header = () => {
  const heroRef    = useRef(null);
  const mouseX     = useMotionValue(0);
  const mouseY     = useMotionValue(0);

  const spring = { damping: 40, stiffness: 50, mass: 1.5 };
  const blobX1 = useSpring(useTransform(mouseX, [-1,1], [-28, 28]), spring);
  const blobY1 = useSpring(useTransform(mouseY, [-1,1], [-18, 18]), spring);
  const blobX2 = useSpring(useTransform(mouseX, [-1,1], [ 18,-18]), spring);
  const blobY2 = useSpring(useTransform(mouseY, [-1,1], [ 12,-12]), spring);

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
    <section
      id="header"
      ref={heroRef}
      onMouseMove={onMove}
      style={{
        position: 'relative',
        height: '100dvh',
        minHeight: '620px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'var(--bg)',
      }}
    >
      {/* ── Ambient blobs ── */}
      <motion.div className="blob blob--gold"
        style={{ position:'absolute', bottom:'-18%', left:'-10%', x:blobX1, y:blobY1 }}
      />
      <motion.div className="blob blob--cool"
        style={{ position:'absolute', top:'-6%', right:'-4%', x:blobX2, y:blobY2 }}
      />

      {/* ── Vertical marquee strip — right edge ── */}
      <div
        className="hero-marquee-strip"
        style={{
          position: 'absolute',
          right: '2rem',
          top: 0,
          bottom: 0,
          width: '1.2rem',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <div style={{
          writingMode: 'vertical-rl',
          display: 'flex',
          gap: '2.5rem',
          animation: 'marqueeVertical 28s linear infinite',
          fontSize: '0.55rem',
          letterSpacing: '0.26em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          fontWeight: 500,
        }}>
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} style={{ whiteSpace: 'nowrap' }}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: '0 clamp(1.8rem, 7vw, 8rem)',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
      }}>

        {/* Left: label + name */}
        <div style={{ flex: '1 1 auto', minWidth: 0 }}>
          {/* Label row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.8rem' }}>
            <motion.span
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                fontWeight: 500,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              Creative Technologist
            </motion.span>

            {/* Accent line that draws in */}
            <motion.div
              style={{
                height: '1px',
                background: 'linear-gradient(to right, rgba(212,168,75,0.5), transparent)',
                width: '0',
              }}
              animate={{ width: '5rem' }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Name — alternating weights, staggered clip reveal */}
          <h1 style={{ margin: 0, padding: 0, lineHeight: 0.88 }}>
            {nameWords.map((word, i) => (
              <div
                key={word.text}
                style={{ overflow: 'hidden', display: 'block' }}
              >
                <motion.span
                  style={{
                    display: 'block',
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: 'clamp(2.4rem, 6.5vw, 6.5rem)',
                    fontWeight: word.weight,
                    letterSpacing: word.tracking,
                    color: 'var(--text)',
                    lineHeight: 0.95,
                    paddingBottom: '0.06em',
                    ...(word.weight === 300 && { color: '#e8e2d9' }),
                  }}
                  initial={{ y: '108%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.3 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word.text}
                </motion.span>
              </div>
            ))}
          </h1>
        </div>

        {/* Right: profile photo */}
        <motion.div
          style={{ flexShrink: 0 }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{
            width: 'clamp(140px, 18vw, 280px)',
            height: 'clamp(140px, 18vw, 280px)',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(212,168,75,0.35)',
            boxShadow: '0 0 0 6px rgba(212,168,75,0.06), 0 24px 64px rgba(0,0,0,0.55)',
          }}>
            <img
              src={profilePhoto}
              alt="Daniel Soto Delgado"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </motion.div>

      </div>

      {/* ── Bottom bar: scroll · discipline · location — all in one row ── */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: 0,
          right: 0,
          padding: '0 clamp(1.8rem, 7vw, 8rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          zIndex: 3,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        {/* Scroll line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexShrink: 0 }}>
          <motion.div
            style={{ width: '1px', height: '2.4rem', background: 'linear-gradient(to bottom, transparent, var(--text-muted))', originY: 0 }}
            animate={{ scaleY: [0,1,1,0], originY: ['0%','0%','100%','100%'] }}
            transition={{ duration: 2.4, delay: 2.0, repeat: Infinity, repeatDelay: 1.0 }}
          />
          <span style={{ fontSize: '0.58rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Scroll
          </span>
        </div>

        {/* Rotating discipline — centred between scroll and location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flex: 1, justifyContent: 'center', minWidth: 0 }}>
          <div style={{ width: '1.6rem', height: '1px', background: 'rgba(212,168,75,0.4)', flexShrink: 0 }} />
          <div style={{ height: '1.2rem', overflow: 'hidden', position: 'relative', minWidth: '180px', maxWidth: '280px' }}>
            {DISCIPLINES.map((d, i) => (
              <motion.span
                key={d}
                style={{
                  position: 'absolute', left: 0,
                  fontSize: '0.75rem', letterSpacing: '0.06em',
                  color: 'var(--text-2)', whiteSpace: 'nowrap', fontWeight: 400,
                }}
                initial={{ y: '110%', opacity: 0 }}
                animate={
                  tagIdx === i ? { y: 0, opacity: 1 }
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

        {/* Location */}
        <span style={{ fontSize: '0.58rem', letterSpacing: '0.14em', color: 'var(--text-muted)', flexShrink: 0 }}>
          Oslo 2026
        </span>
      </motion.div>

      {/* Bottom diagonal — filled triangle brings in next section's colour */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'60px', pointerEvents:'none', zIndex:3, overflow:'hidden' }}>
        <div style={{
          position:'absolute', inset:0,
          background:'#111111',
          clipPath:'polygon(0 100%, 100% 0, 100% 100%)',
        }} />
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>
          <line x1="0" y1="60" x2="1440" y2="0" stroke="rgba(212,168,75,0.22)" strokeWidth="1.2" />
        </svg>
      </div>

      <style>{`
        @keyframes marqueeVertical {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Header;
