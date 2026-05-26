import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SP  from '../../assets/SPOStill.png';
import SPL from '../../assets/SPstill.jpg';

/* ── Filled diagonal divider ────────────────────────────────
   dir='up'  → line goes ╱ (bottom-left → top-right)
   dir='down' → line goes ╲ (top-left → bottom-right)
   `from` = current section bg, `to` = next section bg        */
const Diagonal = ({ from = '#111111', to = '#080808', dir = 'up' }) => {
  const clipPath = dir === 'up'
    ? 'polygon(0 100%, 100% 0, 100% 100%)'   /* lower-right triangle = `to` */
    : 'polygon(0 0, 0 100%, 100% 100%)';       /* lower-left  triangle = `to` */
  const line = dir === 'up'
    ? { x1: 0, y1: 60, x2: 1440, y2: 0 }
    : { x1: 0, y1: 0,  x2: 1440, y2: 60 };
  return (
    <div style={{ height: '60px', background: from, flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: to, clipPath }} />
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none"
           style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <line {...line} stroke="rgba(212,168,75,0.22)" strokeWidth="1.2" />
      </svg>
    </div>
  );
};

/* ── Role badge ─────────────────────────────────────────────── */
const RoleBadge = ({ label }) => (
  <span style={{
    display: 'inline-block',
    fontSize: '0.6rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontWeight: 600,
    color: 'var(--accent)',
    background: 'rgba(212,168,75,0.08)',
    border: '1px solid rgba(212,168,75,0.22)',
    borderRadius: '4px',
    padding: '0.18rem 0.55rem',
  }}>
    {label}
  </span>
);

/* ── Project data ───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: '01',
    title: 'Eye to Ear',
    year: '2015',
    category: 'iOS App · AV Installation',
    roles: ['Product Management', 'Composition', 'Sound Design'],
    description:
      'Conceptualized, managed and composed the interactive soundscape for this award-winning iPad app — designed to let visually impaired visitors experience visual art through sound. Showcased at Kunstforum Wien during the Georgia O\'Keeffe exhibition and recognised with multiple innovation and social-impact awards.',
    embed: { src: 'https://www.youtube.com/embed/6ApGMwgCt_w?rel=0&modestbranding=1' },
    featured: true,
  },
  {
    id: '02',
    title: 'Showpony',
    year: '2022',
    category: 'Web App · Theater',
    roles: ['Frontend Development', 'Product Design'],
    description:
      'Built and designed a real-time stage management system for live performances and events. It synchronizes actor calls, page navigation, and timing across all devices, with global countdowns, action timing, and the ability to log precise notes during performance. From rehearsal to showtime, it keeps the entire production crew aligned in real time.',
    link: 'https://stagepony.netlify.app/',
    image: SP,
    imageStyle: 'phone',
  },
  {
    id: '03',
    title: 'Stageplanner',
    year: '2022',
    category: 'Web App · Theater',
    roles: ['Frontend Development', 'Product Design'],
    description:
      'Built a drag-and-drop stage planning tool for sound engineers and production teams. Standardises speaker-position diagrams, cable layouts and stage maps across productions — no more whiteboard photos.',
    link: 'https://stageplanner.netlify.app/',
    image: SPL,
  },
  {
    id: '04',
    title: 'VW Mobiglobe',
    year: '2014',
    category: 'Interactive Installation',
    roles: ['Composition', 'Spatial Audio'],
    description:
      'Composed an eight-channel interactive soundscape for the gesture-driven knowledge encyclopedia at Volkswagen\'s global headquarters in Wolfsburg. Sound responds in real time to visitor gestures across the installation.',
    embed: { src: 'https://player.vimeo.com/video/127020709?h=b8366ff9e9' },
    featured: true,
  },
  {
    id: '05',
    title: 'Sasso San Gottardo',
    year: '2013',
    category: 'Museum Sound Design',
    roles: ['Sound Design', 'AV Installation'],
    description:
      'Designed and installed immersive audio for seven multimedia exhibits inside the historic San Gottardo mountain fortress (Swiss Alps). Themes included energy, water, internet security and climate change.',
    embed: { src: 'https://player.vimeo.com/video/126129405?h=dbfddfd934' },
  },
  {
    id: '06',
    title: 'MEDEL Triformance',
    year: '2015',
    category: 'Live Event · Sound',
    roles: ['Sound Design', 'Live Production'],
    description:
      'Sound design and live audio direction for MEDEL\'s flagship hearing-technology showcase — bridging clinical precision with an immersive, emotional experience for the audience.',
    embed: { src: 'https://www.youtube.com/embed/ydQzgO29ehM?rel=0&modestbranding=1' },
  },
  {
    id: '07',
    title: 'Amusement Engineering',
    year: '2016–2019',
    category: 'Technical Project Management',
    roles: ['Project Management', 'Technical Direction'],
    description:
      'Led cross-functional teams through the full lifecycle of amusement-park ride development — from design concept through engineering, construction, technology integration, safety compliance and opening day.',
    embed: { src: 'https://www.youtube.com/embed/8eZfYiCGXQc?rel=0&modestbranding=1' },
    featured: true,
  },
];

/* ── 16:9 embed wrapper ─────────────────────────────────────── */
const EmbedBox = ({ src, title }) => (
  <div style={{
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%',
    background: '#000',
    borderRadius: '8px 8px 0 0',
    overflow: 'hidden',
    flexShrink: 0,
  }}>
    <iframe
      src={src}
      title={title}
      allow="autoplay; fullscreen; encrypted-media"
      allowFullScreen
      loading="lazy"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
    />
  </div>
);

/* ── Project card ───────────────────────────────────────────── */
const ProjectCard = ({ project, index, wide = false }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  /* Side-by-side layout for phone-screenshot projects (e.g. Showpony) */
  const isSideBySide = project.imageStyle === 'phone' && !project.embed;

  const cardStyle = {
    background: 'rgba(255,255,255,0.025)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: isSideBySide ? 'row' : 'column',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={project.embed ? {} : { y: -5, transition: { duration: 0.3 } }}
      style={cardStyle}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(212,168,75,0.22)';
        e.currentTarget.style.boxShadow   = '0 12px 48px rgba(0,0,0,0.45)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.boxShadow   = 'none';
      }}
    >
      {/* Media — for side-by-side, image goes on the RIGHT */}
      {project.embed && (
        <EmbedBox src={project.embed.src} title={project.title} />
      )}
      {!project.embed && project.image && !isSideBySide && (
        <div style={{
          background: '#0a0a0a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: project.imageStyle === 'phone' ? '2rem' : 0,
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: project.imageStyle === 'phone' ? '140px' : '100%',
              height: project.imageStyle === 'phone' ? 'auto' : '220px',
              objectFit: 'cover',
              borderRadius: project.imageStyle === 'phone' ? '10px' : '0',
              boxShadow: project.imageStyle === 'phone' ? '0 8px 32px rgba(0,0,0,0.5)' : 'none',
              display: 'block',
            }}
          />
        </div>
      )}

      {/* Content */}
      <div style={{ padding: '1.4rem 1.6rem 1.6rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.7rem', order: isSideBySide ? 0 : undefined }}>
        {/* Roles */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {project.roles.map(r => <RoleBadge key={r} label={r} />)}
        </div>

        {/* Title + meta row */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
          <h3 style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
            fontWeight: 600,
            color: 'var(--text)',
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
          }}>
            {project.title}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>{project.year}</span>
            <span style={{ width: '1px', height: '0.7rem', background: 'var(--border)' }} />
            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{project.category}</span>
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: '0.875rem',
          lineHeight: 1.72,
          color: 'var(--text-2)',
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontWeight: 600,
              marginTop: '0.2rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Try the App <span style={{ fontSize: '0.9em' }}>→</span>
          </a>
        )}
      </div>

      {/* Side-by-side: phone image on the RIGHT */}
      {isSideBySide && (
        <div style={{
          background: '#0a0a0a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1.8rem',
          flexShrink: 0,
          width: 'clamp(140px, 22%, 200px)',
          order: 1,
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.55)',
              display: 'block',
            }}
          />
        </div>
      )}
    </motion.article>
  );
};

/* ── About section ──────────────────────────────────────────── */
const About = () => {
  const introRef    = useRef(null);
  const workRef     = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-60px 0px' });
  const workInView  = useInView(workRef,  { once: true, margin: '-60px 0px' });

  /* Group into featured (full-width) vs pairs */
  const featured = PROJECTS.filter(p => p.featured);
  const regular  = PROJECTS.filter(p => !p.featured);

  /* Build an ordered render list with layout hints */
  const renderList = [];
  let ri = 0;
  PROJECTS.forEach((p, i) => {
    if (p.featured) {
      renderList.push({ type: 'full', project: p, index: i });
    } else {
      // Pair regular projects in twos
      const next = PROJECTS[i + 1];
      if (!p._paired) {
        if (next && !next.featured && !next._paired) {
          next._paired = true;
          renderList.push({ type: 'pair', projects: [p, next], index: i });
        } else {
          renderList.push({ type: 'full', project: p, index: i });
        }
      }
    }
  });

  return (
    <>
      {/* ── About intro ── */}
      <section
        ref={introRef}
        style={{
          background: '#111111',
        }}
      >
        <div style={{
          maxWidth: '860px',
          padding: 'clamp(4.5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 7rem) 0',
        }}>
          <motion.p
            className="section-label"
            style={{ marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 16 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About
          </motion.p>

          <motion.h2
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.6rem)',
              fontWeight: 400,
              lineHeight: 1.4,
              color: 'var(--text)',
              letterSpacing: '-0.012em',
              marginBottom: '1.4rem',
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            I work at the intersection of{' '}
            <em style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: 'italic',
              color: 'var(--accent)',
              fontSize: '1.08em',
            }}>
              sound, space, and technology
            </em>{' '}
            — composing, building, and leading across theater, installation, and software.
          </motion.h2>

          <motion.p
            style={{
              fontSize: '0.9rem',
              lineHeight: 1.8,
              color: 'var(--text-2)',
              maxWidth: '640px',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.22 }}
          >
            Over 15 years I've led AV productions in museums and corporate venues across Europe,
            composed spatial audio for interactive installations, managed complex engineering projects,
            and developed web tools purpose-built for stage and live production teams.
          </motion.p>
        </div>

        <Diagonal from="#111111" to="#080808" dir="up" />
      </section>

      {/* ── Selected Work ── */}
      <section
        id="work"
        ref={workRef}
        style={{
          background: 'var(--bg)',
          padding: 'clamp(3rem, 5vw, 5rem) clamp(1.5rem, 6vw, 7rem)',
        }}
      >
        {/* Section heading */}
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: 'clamp(2rem, 3.5vw, 3.5rem)',
            flexWrap: 'wrap',
            gap: '0.75rem',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '1.2rem',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={workInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            lineHeight: 1,
          }}>
            Selected Work
          </h2>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            2013 — Present
          </span>
        </motion.div>

        {/* Project grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
          {PROJECTS.map((project, i) => {
            /* skip _paired items — rendered as part of their pair row */
            if (project._paired) return null;

            const nextProject = PROJECTS[i + 1];
            const isPair = !project.featured && nextProject && !nextProject.featured && !nextProject._paired;

            if (isPair) {
              nextProject._paired = true;
              return (
                <div
                  key={project.id}
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}
                >
                  <ProjectCard project={project}     index={i}   />
                  <ProjectCard project={nextProject} index={i+1} />
                </div>
              );
            }

            return (
              <ProjectCard key={project.id} project={project} index={i} wide />
            );
          })}
        </div>

        {/* No bottom diagonal here — Contact section has its own top diagonal */}
      </section>
    </>
  );
};

export default About;
