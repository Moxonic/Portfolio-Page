import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import SP  from '../../assets/SPOStill.png';
import SPL from '../../assets/SPstill.jpg';
import WC    from '../../assets/wordcardsScreenshot.png';
import CT    from '../../assets/cuetapScreenshot.png';
import EM1   from '../../assets/emendo-write.png';
import EM2   from '../../assets/emendo-flashcard.png';
import EM3   from '../../assets/emendo-assessment.png';
import TT1   from '../../assets/timetrail-walk.png';
import TT2   from '../../assets/timetrail-place.png';
import MOBI  from '../../assets/MobiGlobe5-1600x1000.jpg';
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


/* ── Project data ───────────────────────────────────────────
   `group` places a project in one of the two work carousels.
   `roles` draws from one shared tag vocabulary: Coding, Product
   Design, AI Integration, Project Management, Sound Design, Sound
   Branding, Composition, Spatial Audio, AV Installation.        */
const PROJECTS = [
/*   {
    id: '00',
    group: 'code',
    title: 'WordCards',
    year: '2025',
    category: 'Web App · Learning',
    roles: ['Coding', 'Product Design'],
    description:
      'A flashcard app for memorising vocabulary and definitions — build a deck, flip through it, and drill until it sticks. I built it to learn Norwegian, then kept it general enough for any subject.',
    link: 'https://mywordcards.netlify.app/',
    image: WC,
    imageStyle: 'phone',
  }, */
  {
    id: '01',
    group: 'code',
    title: 'Showpony',
    year: '2022',
    category: 'Web App · Theater',
    roles: ['Coding', 'Product Design'],
    description:
      'Built and designed a real-time stage management system for live performances and events. It synchronizes actor calls, page navigation, and timing across all devices, with global countdowns, action timing, and the ability to log precise notes during performance.',
    link: 'https://stagepony.netlify.app/',
    image: SP,
    imageStyle: 'phone',
  },
  {
    id: '02',
    group: 'code',
    title: 'Stageplanner',
    year: '2022',
    category: 'Web App · Theater',
    roles: ['Coding', 'Product Design'],
    description:
      'Built a drag-and-drop stage planning tool for sound engineers and production teams. Standardises speaker-position diagrams, cable layouts and stage maps across productions — no more whiteboard photos.',
    link: 'https://stageplanner.netlify.app/',
    image: SPL,
  },
  {
    id: '03',
    group: 'code',
    title: 'CueTap',
    year: '2025',
    category: 'Web App · Theater',
    roles: ['Coding', 'Product Design'],
    description:
      'Built for directors who want to control the live sound during rehearsals, small independent theater productions or events.',
    link: 'https://cuetap.netlify.app/',
    image: CT,
    imageStyle: 'phone',
  },
  {
    id: '04',
    group: 'code',
    title: 'Emendo',
    year: '2026',
    category: 'Web App · Language Learning',
    roles: ['Coding', 'Product Design', 'AI Integration'],
    description:
      'Write in the language you\'re learning and an AI teacher marks it up — grammar, vocabulary and spelling, with an estimated CEFR level. Every correction becomes a flashcard, so you drill the mistakes you actually make instead of a generic word list.',
    link: 'https://emendo.netlify.app/',
    images: [
      { src: EM1, alt: 'Emendo writing view: a Norwegian text being drafted, with a word count and a get-feedback action' },
      { src: EM2, alt: 'Emendo flashcard generated from a grammar mistake, showing the correction and the reason' },
      { src: EM3, alt: 'Emendo assessment: an estimated CEFR level with feedback split by content, grammar, vocabulary and spelling' },
    ],
    imageStyle: 'phone',
  },
  {
    id: '05',
    group: 'code',
    title: 'TimeTrail',
    year: '2026',
    category: 'Web App · Local History',
    roles: ['Coding', 'Product Design'],
    description:
      'A walking guide to Oslo\'s history: drag a timeline to filter the city by period, or follow a curated walk that strings places into a story, narrated as you go. It draws on live OpenStreetMap and Wikipedia data, and lets you wander off the route without losing your place.',
    link: 'https://citytimetrail.netlify.app/',
    images: [
      { src: TT1, alt: 'TimeTrail walk view: a mapped route across Oslo with the numbered stops, distances and walking times listed below' },
      { src: TT2, alt: 'TimeTrail place view: the Oslo Opera House as stop 3 of 11, with a photo, period tags and a listen action' },
    ],
    imageStyle: 'phone',
  },
  {
    id: '06',
    group: 'installation',
    title: 'Eye to Ear',
    year: '2015',
    category: 'iOS App · AV Installation',
    roles: ['Project Management', 'Product Design', 'Composition', 'Sound Design'],
    description:
      'Conceptualized, managed and composed the interactive soundscape for this award-winning iPad app — designed to let visually impaired visitors experience visual art through sound. Showcased at Kunstforum Wien during the Georgia O\'Keeffe exhibition and recognised with multiple innovation and social-impact awards.',
    embed: { src: 'https://www.youtube.com/embed/6ApGMwgCt_w?rel=0&modestbranding=1' },
  },
  {
    id: '07',
    group: 'installation',
    title: 'VW Mobiglobe',
    year: '2014',
    category: 'Interactive Installation',
    roles: ['Composition', 'Spatial Audio', 'Sound Design'],
    description:
      'Composed an eight-channel interactive soundscape for the gesture-driven knowledge encyclopedia at Volkswagen\'s global headquarters in Wolfsburg. Sound responds in real time to visitor gestures across the installation.',
    image: MOBI,
  },
  {
    id: '08',
    group: 'installation',
    title: 'Sasso San Gottardo',
    year: '2013',
    category: 'Museum Sound Design',
    roles: ['Sound Design', 'AV Installation'],
    description:
      'Designed and installed immersive audio for seven multimedia exhibits inside the historic San Gottardo mountain fortress (Swiss Alps). Themes included energy, water, internet security and climate change.',
    embed: { src: 'https://player.vimeo.com/video/126129405?h=dbfddfd934', poster: SASSO },
  },
  {
    id: '09',
    group: 'installation',
    title: 'MEDEL Triformance',
    year: '2015',
    category: 'Live Event · Sound',
    roles: ['Sound Design', 'Sound Branding'],
    description:
      'Sound design and sound branding for MEDEL\'s flagship hearing-technology showcase — bridging clinical precision with an immersive, emotional experience for the audience.',
    embed: { src: 'https://www.youtube.com/embed/ydQzgO29ehM?rel=0&modestbranding=1' },
  },
  {
    id: '10',
    group: 'installation',
    title: 'Amusement Engineering',
    year: '2016–2019',
    category: 'Installation Project Management',
    roles: ['Project Management', 'AV Installation'],
    description:
      'Led cross-functional teams through the full lifecycle of amusement-park ride development — from design concept through engineering, construction, technology integration, safety compliance and opening day.',
    embed: { src: 'https://www.youtube.com/embed/8eZfYiCGXQc?rel=0&modestbranding=1' },
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
      <iframe
        className="project-card__embed"
        src={withAutoplay(src)}
        title={title}
        allow="autoplay; fullscreen; encrypted-media"
        allowFullScreen
      />
    );
  }

  return (
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
  );
};

/* ── Project card ───────────────────────────────────────────
   Every card shares one fixed-ratio media box so cards line up
   in the carousel. Images are contained, never cropped.
   `reveal` is off inside a looping rail: cards there scroll in
   and out constantly, so a per-card entrance would keep firing. */
const ProjectCard = ({ project, index, reveal = true, muted = false }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  const mediaClass = project.imageStyle === 'phone'
    ? 'project-card__media project-card__media--phone'
    : 'project-card__media';

  const revealProps = reveal
    ? {
        initial: { opacity: 0, y: 36 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.75, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] },
      }
    : {};

  return (
    <motion.article
      ref={ref}
      className="project-card"
      {...revealProps}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      aria-hidden={muted || undefined}
    >
      <div className={mediaClass}>
        {project.embed && (
          <EmbedBox src={project.embed.src} poster={project.embed.poster} title={project.title} />
        )}

        {!project.embed && project.images && (
          <div className="project-card__gallery">
            {project.images.map(shot => (
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                className="project-card__image"
              />
            ))}
          </div>
        )}

        {!project.embed && !project.images && project.image && (
          <img src={project.image} alt={project.title} className="project-card__image" />
        )}

        {!project.embed && !project.images && !project.image && (
          <div className="project-card__placeholder">
            <span className="project-card__placeholder-mark" aria-hidden="true">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
            <span className="project-card__placeholder-note">Preview coming soon</span>
          </div>
        )}
      </div>

      <div className="project-card__content">
        <div className="project-card__roles">
          {project.roles.map(r => <RoleBadge key={r} label={r} />)}
        </div>

        <h3 className="project-card__title">{project.title}</h3>

        <div className="project-card__meta">
          {project.year && (
            <>
              <span className="project-card__year">{project.year}</span>
              <span className="project-card__divider" />
            </>
          )}
          <span className="project-card__category">{project.category}</span>
        </div>

        <p className="project-card__description">{project.description}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
            tabIndex={muted ? -1 : undefined}
          >
            Try the App <span>→</span>
          </a>
        )}
      </div>
    </motion.article>
  );
};

/* ── Media query hook ──────────────────────────────────────── */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
};

/* Pixels per second for the drifting rail. */
const DRIFT_SPEED = 24;

/* ── Horizontal carousel ────────────────────────────────────
   Desktop only — below 1024px the CSS collapses the track into a
   plain vertical stack and every loop/drift effect bails out, so
   mobile sees each project exactly once.

   The loop works by rendering the project list BLOCKS times and
   wrapping scrollLeft by one block's width. Because the content
   repeats with that exact period, the jump is invisible. Sitting
   in the middle block keeps a full block of runway on both sides,
   which is what makes scrolling work in either direction — and
   that in turn requires one block to be at least as wide as the
   viewport, hence the `rep` multiplier below.                   */
const BLOCKS = 3;

const ProjectCarousel = ({ projects, label, drift = false }) => {
  const trackRef    = useRef(null);
  const unitRef     = useRef(0);
  const isDesktop   = useMediaQuery('(min-width: 1024px)');
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  /* How many times the project list is repeated in total. */
  const [reps, setReps] = useState(BLOCKS);
  const [paused, setPaused] = useState(false);

  const loop = isDesktop;

  /* Measure one list repetition, then repeat enough of them that a
     block covers the viewport. Converges in a single extra render:
     the measured width does not depend on how many copies exist. */
  useEffect(() => {
    if (!loop) {
      unitRef.current = 0;
      return undefined;
    }

    const el = trackRef.current;
    if (!el) return undefined;

    const measure = () => {
      const cards = el.querySelectorAll(':scope > .project-card');
      if (cards.length <= projects.length) return;

      const listW = cards[projects.length].offsetLeft - cards[0].offsetLeft;
      if (!listW) return;

      const rep    = Math.max(1, Math.ceil(el.clientWidth / listW));
      const needed = rep * BLOCKS;

      if (needed !== reps) {
        setReps(needed);
        return;
      }

      const unit = rep * listW;
      unitRef.current = unit;

      /* Park in the middle block so there is runway both ways —
         also re-homes the rail if a resize changed the unit. */
      el.scrollLeft = unit + (((el.scrollLeft % unit) + unit) % unit);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [loop, reps, projects.length]);

  /* Keep scrollLeft inside the middle block. */
  const wrap = useCallback(() => {
    const el   = trackRef.current;
    const unit = unitRef.current;
    if (!el || !unit) return;

    if (el.scrollLeft >= unit * 2) el.scrollLeft -= unit;
    else if (el.scrollLeft < unit)  el.scrollLeft += unit;
  }, []);

  /* Slow leftward drift, paused while the pointer is over the rail. */
  useEffect(() => {
    if (!drift || !loop || reduceMotion || paused) return undefined;

    const el = trackRef.current;
    if (!el) return undefined;

    let frame;
    let last = performance.now();
    let carry = 0; /* sub-pixel remainder — scrollLeft may round */

    const tick = (now) => {
      const dt = Math.min(now - last, 100); /* ignore tab-away gaps */
      last = now;

      carry += (DRIFT_SPEED * dt) / 1000;
      const px = Math.floor(carry);
      if (px) {
        carry -= px;
        el.scrollLeft += px;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [drift, loop, reduceMotion, paused]);

  const step = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.project-card');
    const gap  = parseFloat(getComputedStyle(el).columnGap) || 0;
    const dist = card ? card.offsetWidth + gap : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * dist, behavior: 'smooth' });
  };

  const blocks = loop ? reps : 1;
  const cards  = [];
  for (let b = 0; b < blocks; b++) {
    projects.forEach((project, i) => {
      cards.push(
        <ProjectCard
          key={`${project.id}-${b}`}
          project={project}
          index={i}
          reveal={!loop}
          muted={b > 0}
        />
      );
    });
  }

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="carousel__track"
        onScroll={wrap}
        role="region"
        aria-label={`${label} projects`}
        tabIndex={0}
      >
        {cards}
      </div>

      <button
        type="button"
        className="carousel__arrow carousel__arrow--prev"
        onClick={() => step(-1)}
        aria-label={`Previous ${label} project`}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M15 4 7 12l8 8" fill="none" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        className="carousel__arrow carousel__arrow--next"
        onClick={() => step(1)}
        aria-label={`Next ${label} project`}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

/* ── Work group ─────────────────────────────────────────────
   Cards inside a looping rail don't reveal individually (they'd
   re-fire as the rail scrolls), so the group carries the reveal. */
const WorkGroup = ({ title, children }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  return (
    <motion.div
      ref={ref}
      className="work-section__group"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="work-section__group-title">{title}</h2>
      {children}
    </motion.div>
  );
};

const CODE         = PROJECTS.filter(p => p.group === 'code');
const INSTALLATION = PROJECTS.filter(p => p.group === 'installation');

/* ── About section ─────────────────────────────────────────── */
const About = () => {
  const introRef    = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-60px 0px' });

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
            I started in sound and built my foundation in AV. Now I pick up{' '}
            <em>whatever the work needs</em>.
          </motion.h2>

          <motion.p
            className="about-section__body"
            initial={{ opacity: 0, y: 20 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.22 }}
          >
            Twenty years on, that spans AV and sound production across theatres, opera and live events in Norway, Austria and Switzerland. I've worked with{' '}
            <em>Det Norske Teatret, Wiener Staatsoper, Musiktheater an der Wien and AIDA Cruises</em>,
            {' '}plus technical and project-management roles building installations and attractions. I combine hands-on expertise with programming to build practical solutions—from AV systems and automation to production web apps that crews run during live shows.
          </motion.p>
        </div>

        <Diagonal from="#111111" to="#080808" dir="up" />
      </section>

      {/* Work */}
      <section id="work" className="work-section">
        <WorkGroup title="Apps">
          <ProjectCarousel projects={CODE} label="App" />
        </WorkGroup>

        <WorkGroup title="Installation & Sound">
          <ProjectCarousel projects={INSTALLATION} label="Installation and sound" drift />
        </WorkGroup>
      </section>
    </>
  );
};

export default About;
