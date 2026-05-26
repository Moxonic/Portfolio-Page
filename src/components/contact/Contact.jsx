import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs';

/* ╲ diagonal: #080808 work section → #111111 contact bg */
const TopDiagonal = () => (
  <div style={{ height: '60px', background: '#080808', flexShrink: 0, position: 'relative', overflow: 'hidden', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
    <div style={{ position: 'absolute', inset: 0, background: '#111111', clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }} />
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <line x1="0" y1="0" x2="1440" y2="60" stroke="rgba(212,168,75,0.22)" strokeWidth="1.2" />
    </svg>
  </div>
);

const LINKS = [
  {
    label: 'Email',
    value: 'd.soto@gmx.at',
    href: 'mailto:d.soto@gmx.at',
    Icon: MdOutlineEmail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'daniel-soto-delgado',
    href: 'https://www.linkedin.com/in/daniel-soto-delgado-21368866/',
    Icon: BsLinkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'Moxonic',
    href: 'https://github.com/Moxonic',
    Icon: BsGithub,
    external: true,
  },
  {
    label: 'WhatsApp',
    value: '+47 939 26 209',
    href: 'https://wa.me/4793926209',
    Icon: BsWhatsapp,
    external: true,
  },
];

const LinkCard = ({ link, delay }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.1rem 1.4rem',
        borderRadius: '10px',
        background: hovered ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.025)',
        border: `1px solid ${hovered ? 'rgba(212,168,75,0.2)' : 'rgba(255,255,255,0.06)'}`,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Icon */}
      <div
        style={{
          width: '2.2rem',
          height: '2.2rem',
          borderRadius: '8px',
          background: hovered ? 'rgba(212,168,75,0.15)' : 'rgba(255,255,255,0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'background 0.3s ease',
        }}
      >
        <link.Icon
          style={{
            width: '1rem',
            height: '1rem',
            color: hovered ? 'var(--accent)' : 'var(--text-2)',
            transition: 'color 0.3s ease',
          }}
        />
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '0.15rem',
            fontWeight: 500,
          }}
        >
          {link.label}
        </div>
        <div
          style={{
            fontSize: '0.88rem',
            color: hovered ? 'var(--text)' : 'var(--text-2)',
            fontWeight: 400,
            transition: 'color 0.3s ease',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {link.value}
        </div>
      </div>

      {/* Arrow */}
      <motion.span
        style={{
          fontSize: '0.85rem',
          color: hovered ? 'var(--accent)' : 'var(--text-muted)',
          transition: 'color 0.3s ease',
          flexShrink: 0,
        }}
        animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0 }}
        transition={{ duration: 0.2 }}
      >
        ↗
      </motion.span>
    </motion.a>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: '#111111',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <TopDiagonal />

      {/* Ambient blob */}
      <div
        className="blob blob--gold"
        style={{ position: 'absolute', bottom: '-20%', right: '-10%', opacity: 0.5, pointerEvents: 'none' }}
      />

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 clamp(1.5rem, 6vw, 7rem) clamp(4rem, 8vw, 7rem)' }}>
        {/* Label */}
        <motion.p
          className="section-label"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.p>

        {/* Heading */}
        <motion.h2
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 600,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            color: 'var(--text)',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Let's build{' '}
          <em
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--accent)',
            }}
          >
            something
          </em>{' '}
          together.
        </motion.h2>

        {/* Link cards grid */}
        {inView && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '0.75rem',
            }}
          >
            {LINKS.map((link, i) => (
              <LinkCard key={link.label} link={link} delay={0.3 + i * 0.07} />
            ))}
          </div>
        )}

        {/* Footer */}
        <motion.div
          style={{
            marginTop: 'clamp(3rem, 5vw, 4rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Daniel Soto Delgado © 2026
          </span>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
            Vienna · Oslo · Worldwide
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
