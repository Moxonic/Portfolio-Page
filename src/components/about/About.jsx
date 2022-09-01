import React from "react";
import "./About";
import "./about.css";
import FREEDSD from "../../assets/Danielfree22.png";
import "./About.js";
import Testimonials from './../testimonials/Testimonials';

const About = () => {

  return (
    <section id="about">
      <div className=" container__about">
        
        <div className="about__text text t">
        <h1 className="aboutme">Intro</h1>
          <p>
            I am looking forward to make new connections.<br></br>
            Meaning that I am commited to learn a new language, getting to know new people and to
            learn coding technologies to become a better and more efficient developer. lorem25 
          </p>
          
          <br></br>

          <div className="about__technology">
            <p className="inline-block">I built this site using </p>

            <div className="cont__word--mod ">
              <div className="word text-sky-400 text-2xl"></div>
            </div>
          </div>
        </div>

        <img className="myPicAbout" src={FREEDSD} alt="powerpose"></img>
      </div>
    </section>
  );
};

export default About;
