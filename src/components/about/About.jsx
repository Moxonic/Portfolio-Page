import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SP  from '../../assets/SPOStill.png';
import SPL from '../../assets/SPstill.jpg';
import WC    from '../../assets/wordcardsScreenshot.png';
import SASSO from '../../assets/sasso-poster.jpg';
import './about.css';

/* ── Diagonal divider ──────────────────────────────────────────
   `from` / `to` are hex colours — must stay as inline since they
   are prop-driven values, not static CSS.                        */
const Diagonal = ({ from = '#111111', to = '#080808', dir = 'up' }) => {
  const clipPath = dir === 'up'
    ? 'polygon(0 100%, 100% 0, 100% 100%)'
    : 'polygon(0 0, 0 100%, 100% 100%)';
  const line = dir === 'up'
    ? { x1: 0, y1: 60, x2: 1440, y2: 0 }
    : { x1: 0, y1: 0,  x2: 1440, y2: 60 };
  return (
    <div className="diagonal" style={{ background: from }}>
      <div className="diagonal__fill" style={{ background: to, clipPath }} />
      <svg className="diagonal__svg" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <line {...line} stroke="rgba(212,168,75,0.22)" strokeWidth="1.2" />
      </svg>
    </div>
  );
};

const RoleBadge = ({ label }) => (
  <span className="role-badge">{label}</span>
);

/* ── Project data ──────────────────────────────────────────── */
const PROJECTS = [
  {
    id: '00',
    title: 'WordCards',
    year: '2025',
    category: 'Learning',
    roles: ['Frontend Development', 'Product Design', 'Programming'],
    description:
      'A flashcard app for memorising vocabulary and definitions — build a deck, flip through it, and drill until it sticks. I built it to learn Norwegian, then kept it general enough for any subject.',
    link: 'https://mywordcards.netlify.app/',
    image: WC,
    imageStyle: 'phone',
    featured: true,
  },
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
    embed: { src: 'https://player.vimeo.com/video/126129405?h=dbfddfd934', poster: SASSO },
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

/* ── 16:9 embed wrapper ────────────────────────────────────────
   Cross-origin video iframes swallow the wheel event, so Lenis
   never gets to scroll the page while the pointer is over one.
   We render a lightweight click-to-play facade instead: the real
   iframe is only mounted after the user clicks play, so scrolling
   works over every video in its default state.                    */
const posterFor = (src) => {
  const yt = src.match(/youtube\.com\/embed\/([\w-]+)/);
  return yt ? `https://i.ytimg.com/vi/${yt[1]}/hqdefault.jpg` : null;
};

const withAutoplay = (src) =>
  `${src}${src.includes('?') ? '&' : '?'}autoplay=1`;

const EmbedBox = ({ src, title, poster }) => {
  const [playing, setPlaying] = useState(false);
  const posterUrl = poster || posterFor(src);

  if (playing) {
    return (
      <div className="embed-box">
        <iframe
          src={withAutoplay(src)}
          title={title}
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="embed-box">
      <button
        type="button"
        className="embed-box__facade"
        onClick={() => setPlaying(true)}
        aria-label={`Play video: ${title}`}
        style={posterUrl ? { backgroundImage: `url(${posterUrl})` } : undefined}
      >
        <span className="embed-box__play" aria-hidden="true">
          <svg viewBox="0 0 68 48" width="68" height="48">
            <path
              className="embed-box__play-bg"
              d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            />
            <path d="M45 24 27 14v20z" fill="#fff" />
          </svg>
        </span>
      </button>
    </div>
  );
};

/* ── Project card ──────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  const isSideBySide = project.imageStyle === 'phone' && !project.embed;

  return (
    <motion.article
      ref={ref}
      className={`project-card${isSideBySide ? ' project-card--row' : ''}`}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={project.embed ? {} : { y: -5, transition: { duration: 0.3 } }}
    >
      {/* Embed */}
      {project.embed && (
        <EmbedBox src={project.embed.src} poster={project.embed.poster} title={project.title} />
      )}

      {/* Stacked image (non-phone) */}
      {!project.embed && project.image && !isSideBySide && (
        <div className="project-card__image-wrap">
          <img src={project.image} alt={project.title} className="project-card__image--full" />
        </div>
      )}

      {/* Phone image (stacked, padded) */}
      {!project.embed && project.image && isSideBySide === false && project.imageStyle === 'phone' && (
        <div className="project-card__image-wrap project-card__image-wrap--padded">
          <img src={project.image} alt={project.title} className="project-card__image--phone" />
        </div>
      )}

      {/* Content */}
      <div className="project-card__content">
        <div className="project-card__roles">
          {project.roles.map(r => <RoleBadge key={r} label={r} />)}
        </div>

        <div className="project-card__meta-row">
          <h3 className="project-card__title">{project.title}</h3>
          <div className="project-card__meta">
            <span className="project-card__year">{project.year}</span>
            <span className="project-card__divider" />
            <span className="project-card__category">{project.category}</span>
          </div>
        </div>

        <p className="project-card__description">{project.description}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            Try the App <span>→</span>
          </a>
        )}
      </div>

      {/* Side image panel */}
      {isSideBySide && (
        <div className="project-card__side-image">
          <img src={project.image} alt={project.title} />
        </div>
      )}
    </motion.article>
  );
};

/* ── Render a list of project cards, pairing consecutive
   non-featured ones into a 2-up grid ──────────────────────── */
const renderProjectList = (projects) => {
  const out = [];
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const next    = projects[i + 1];
    const isPair  = !project.featured && next && !next.featured;

    if (isPair) {
      out.push(
        <div key={project.id} className="project-pair-grid">
          <ProjectCard project={project} index={i}     />
          <ProjectCard project={next}    index={i + 1} />
        </div>
      );
      i += 1; // consumed `next`
    } else {
      out.push(<ProjectCard key={project.id} project={project} index={i} />);
    }
  }
  return out;
};

const APPS       = PROJECTS.filter(p => p.link);
const OTHER_WORK = PROJECTS.filter(p => !p.link);

/* ── About section ─────────────────────────────────────────── */
const About = () => {
  const introRef    = useRef(null);
  const workRef     = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-60px 0px' });
  const workInView  = useInView(workRef,  { once: true, margin: '-60px 0px' });

  return (
    <>
      {/* About intro */}
      <section ref={introRef} className="about-section">
        <div className="about-section__content">
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
            className="about-section__heading"
            initial={{ opacity: 0, y: 24 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            I work across{' '}
            <em>sound, space, and technology</em>: composing, building, and
            directing projects in theater, installations, and software.
          </motion.h2>

          <motion.p
            className="about-section__body"
            initial={{ opacity: 0, y: 20 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.22 }}
          >
            Over 15 years I've delivered AV productions in museums and corporate venues across Europe,
            composed spatial audio for interactive installations, managed complex engineering projects,
            and built web tools for stage and live production teams.
          </motion.p>
        </div>

        <Diagonal from="#111111" to="#080808" dir="up" />
      </section>

      {/* Selected Work */}
      <section id="work" ref={workRef} className="work-section">
        <motion.div
          className="work-section__header"
          initial={{ opacity: 0, y: 20 }}
          animate={workInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="work-section__title">Selected Work</h2>
          <span className="work-section__range">2013 — Present</span>
        </motion.div>

        <div className="work-section__group">
          <h3 className="work-section__group-title">Apps</h3>
          <div className="work-section__grid">
            {renderProjectList(APPS)}
          </div>
        </div>

        <div className="work-section__group">
          <h3 className="work-section__group-title">Sound &amp; Installation</h3>
          <div className="work-section__grid">
            {renderProjectList(OTHER_WORK)}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
