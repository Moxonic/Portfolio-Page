import React from "react";
import "./header.css";
import CTA from "./CTA";
import MYPIC from "../../assets/mypic.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm </h5>
        <h1> Daniel Soto Delgado </h1>{" "}
        <h5 className="text-light"> Frontend Developer </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className='myPic' src={MYPIC} alt="picture of Daniel">
          </img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
