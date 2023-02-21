import React from "react";
import "./header.css";
import CTA from "./CTA";
import MYPIC from "../../assets/daniel__optimzed.jpg";


const Header = () => {
  return (
    <section id='header'className=" header__container">
      
      <div className="header_container_div">
        <h4> Hello I'm </h4>
        <h1> Daniel Soto Delgado </h1>
        <div className="me">
          <img className='myPic' src={MYPIC} alt="Daniel looking good">
          </img>
        </div> 
        <CTA /> {/* download and contact buttons */}
      </div>
    </section>
  );
};

export default Header;
