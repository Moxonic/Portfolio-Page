import React from "react";
import "./About";
import "./about.css";
import FREEDSD from "../../assets/Danielfree22.png";
import "./About.js";

const About = () => {

  return (
    <section id="about" className='flex'>
      <div className="flex-col-reverse m-auto xl:flex xl:flex-row-reverse xl:w-2/3  ">        
        <img className='rounded-full center w-40 h-40 mx-auto xl:w-56 xl:h-56 ' src={FREEDSD} alt="looking nice"></img>
        <div className="p-5 ">
          <h1 className="aboutme text-center">Introduction:</h1>
          <p className="text-justify">
              I´m a Front End Developer with a creative attitude to technical problem solving and a good sense for design.
              I have one year experience and I want to make connections to expand on to bigger projects.
          </p>            
          <div className="w-100 flex">
              <p className="inline-block pb-12">I built this site using </p>
              <div className="">
                <div className="word text-sky-400 text-2xl"></div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
