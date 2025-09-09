import React from "react";
import "./header.css";
import CTA from "./CTA";
import MYPIC from "../../assets/CvPhotoDanielSotoDelgado25.jpg";


const Header = () => {
  return (
    <div id='header'className=" header__container">
      
      <div className="header_container_div">
        
        <h1> Project Portfolio </h1>
        <h5 className="text-light">Daniel Soto Delgado</h5>
       
     {/*    <CTA /> {/* download and contact buttons */} 
      </div>
{/*       image="https://miro.medium.com/v2/resize:fit:1400/1*U_HEg407PCp7VU-M0gEJ7Q.jpeg"
 */}
    </div>
  
  );
};

export default Header;
