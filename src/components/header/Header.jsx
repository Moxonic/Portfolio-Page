import React from "react";
import "./header.css";
import MYPIC from "../../assets/CvPhotoDanielSotoDelgado25.jpg";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  return (
    <div id="header" className="header__container">
      <div className="header__content">
        <div className="header__photo">
          <img src={MYPIC} alt="Daniel Soto Delgado" />
        </div>
        <h1 className="header__name">Daniel Soto Delgado</h1>
        <p className="header__subtitle">Sound Design &amp; Creative Technology</p>
        <div className="header__tags">
          <span>Sound</span>
          <span className="header__dot">·</span>
          <span>Code</span>
          <span className="header__dot">·</span>
          <span>Experience</span>
        </div>
      </div>

      <div className="header__scroll-hint">
        <span>Scroll to explore</span>
      </div>

      {/* diagonal divider — SVG line traces the color-block cut */}
      <svg
        className="header__diagonal"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="0" y1="10" x2="100" y2="0" stroke="var(--color-accent)" strokeWidth="0.25" opacity="0.5" />
      </svg>
    </div>
  );
};

export default Header;
