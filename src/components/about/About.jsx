import React from "react";
import "./About";
import "./about.css";
import FREEDSD from "../../assets/Danielfree22.png";
import "./About.js";

const About = () => {
  return (
    <section id="about">
      <div className=" container__about">
        

        <div className="about__text text t">
        <h1 className="aboutme">Intro</h1>
          <p>
            I am willing and open to make new connections.<br></br>
            This means that I am commited to learn Norwegian, getting to know new people and
            learning something new about coding and programming every day to become faster
            and more efficient...
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
