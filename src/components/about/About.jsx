import React from "react";
import "./about.css";
import "./About.js";
import SP from "../../assets/SPOStill.png";
import SPL from "../../assets/SPstill.jpg";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams] = useSearchParams();

  return (
    <div className="about">
      <div className="projects-container">

        <div className="project-card">
          <div className="embed-container">
            <iframe
              allow="autoplay; encrypted-media"
              allowFullScreen
              src="https://www.youtube.com/embed/6ApGMwgCt_w?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720"
              title="Eye to Ear - Interactive Sonification App"
            />
          </div>
          <h2>Eye to Ear</h2>
          <p>
            An iPad app designed to help visually impaired people experience visual art through
            interactive sound. Won several innovation and impact awards, showcased at Kunstforum
            Wien during the Georgia O'Keeffe exhibition.
          </p>
        </div>

        <div className="project-card">
          <a href="https://stagepony.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img className="project-image--phone" src={SP} alt="Showpony Screenshot" />
          </a>
          <h2>Theater App — Showpony</h2>
          <p>
            Conceptualized and built an app to streamline communication during rehearsals and
            performances. Displays calls for actors and departments, shares page numbers, and
            generates countdowns for timed cues. Supports local time tracking while keeping
            calls synced globally.
          </p>
          <a href="https://stagepony.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
            Try the App →
          </a>
        </div>

        <div className="project-card">
          <a href="https://stageplanner.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img className="project-image" src={SPL} alt="Stageplanner Screenshot" />
          </a>
          <h2>Theater App — Stageplanner</h2>
          <p>
            Visual stage planning web app for intuitive and consistent documentation of speaker
            positions, cable paths, and other stage elements. Simplifies planning and ensures
            uniform layouts across productions.
          </p>
          <a href="https://stageplanner.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
            Try the App →
          </a>
        </div>

        <div className="project-card">
          <div className="embed-container">
            <iframe
              allow="fullscreen"
              src="https://player.vimeo.com/video/127020709?h=b8366ff9e9"
              title="VW Mobiglobe - Interactive Encyclopedia"
            />
          </div>
          <h2>Volkswagen Mobiglobe</h2>
          <p>
            Interactive eight-channel composition for the gesture-based encyclopedia at
            Volkswagen headquarters in Wolfsburg.
          </p>
        </div>

        <div className="project-card">
          <div className="embed-container">
            <iframe
              allow="fullscreen"
              src="https://player.vimeo.com/video/126129405?h=dbfddfd934"
              title="San Gottardo Installation"
            />
          </div>
          <h2>Sasso Museum</h2>
          <p>
            Designed and installed sound for seven multimedia exhibits in the San Gottardo
            fortress museum (Swiss Alps). Topics: energy, water, internet security, and
            climate change.
          </p>
        </div>

        <div className="project-card">
          <div className="embed-container">
            <iframe
              src="https://www.youtube.com/embed/ydQzgO29ehM"
              title="MEDEL Triformance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h2>MEDEL Triformance</h2>
          <p>Sound design for MEDEL's hearing aid technology showcase.</p>
        </div>

        <div className="project-card">
          <div className="embed-container">
            <iframe
              allow="fullscreen"
              src="https://www.youtube.com/embed/8eZfYiCGXQc?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720"
              title="Project Management"
            />
          </div>
          <h2>Project Management</h2>
          <p>
            Coordinated multidisciplinary teams in the development of amusement park rides,
            managing design, engineering, construction, technology integration, scheduling,
            and regulatory compliance.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
