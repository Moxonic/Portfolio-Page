import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerFn = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerFn);
    };
  }, []);

  return (
    <div style={{ background: 'var(--bg)' }}>
      <Nav />
      <Header />
      <About />
      <Contact />
    </div>
  );
};

export default App;
