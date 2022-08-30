import React from "react";
import "./header.css";
import CTA from "./CTA";
import MYPIC from "../../assets/daniel__optimzed.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <section id='header'className=" header__container">
      
      <div className="header_container_div">
        <h4> Hello I'm </h4>
        <h1> Daniel Soto Delgado </h1>
        {/* <h5 className="text-light"> Frontend Developer </h5> */}
        <HeaderSocials />
        <div className="me">
          <img className='myPic' src={MYPIC} alt="Daniel looking good">
          </img>
        </div> 
        
        <CTA /> {/* download and contact buttons */}

        <a href="#contact" className="scroll__down">
            Scroll Down
        </a>
      </div>
    </section>
  );
};

export default Header;
