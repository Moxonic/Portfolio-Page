import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs';
import './contact.css';

const TopDiagonal = () => (
  <div className="contact-diagonal">
    <div className="contact-diagonal__fill" />
    <svg className="contact-diagonal__svg" viewBox="0 0 1440 60" preserveAspectRatio="none">
      <line x1="0" y1="0" x2="1440" y2="60" stroke="rgba(212,168,75,0.22)" strokeWidth="1.2" />
    </svg>
  </div>
);

const LINKS = [
  { label: 'Email',    value: 'd.soto@gmx.at',          href: 'mailto:d.soto@gmx.at',                                    Icon: MdOutlineEmail, external: false },
  { label: 'LinkedIn', value: 'daniel-soto-delgado',     href: 'https://www.linkedin.com/in/daniel-soto-delgado-21368866/', Icon: BsLinkedin,     external: true  },
  { label: 'GitHub',   value: 'Moxonic',                 href: 'https://github.com/Moxonic',                              Icon: BsGithub,       external: true  },
  { label: 'WhatsApp', value: '+47 939 26 209',          href: 'https://wa.me/4793926209',                                Icon: BsWhatsapp,     external: true  },
];

/* Hover effects are handled entirely via CSS — no useState needed */
const LinkCard = ({ link, delay }) => (
  <motion.a
    href={link.href}
    target={link.external ? '_blank' : undefined}
    rel={link.external ? 'noopener noreferrer' : undefined}
    className="link-card"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="link-card__icon-wrap">
      <link.Icon className="link-card__icon" />
    </div>

    <div className="link-card__text">
      <div className="link-card__label">{link.label}</div>
      <div className="link-card__value">{link.value}</div>
    </div>

    <span className="link-card__arrow">↗</span>
  </motion.a>
);

const Contact = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <section id="contact" ref={ref} className="contact-section">
      <TopDiagonal />

      <div className="blob blob--gold contact-section__blob" />

      <div className="contact-section__content">
        <motion.p
          className="section-label"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.p>

        <motion.h2
          className="contact-section__heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Let's build <em>something</em> together.
        </motion.h2>

        {inView && (
          <div className="contact-links-grid">
            {LINKS.map((link, i) => (
              <LinkCard key={link.label} link={link} delay={0.3 + i * 0.07} />
            ))}
          </div>
        )}

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span className="contact-footer__copy">Daniel Soto Delgado © 2026</span>
          <span className="contact-footer__location">Vienna · Oslo · Worldwide</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
