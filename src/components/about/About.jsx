import React from "react";
import "./About";
import "./about.css";
// import FREEDSD from "../../assets/Danielfree22.png";
import "./About.js";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import WIFILOGO from '../../assets/Wirtschaftsförderungsinstitut_logo.svg.png';
import UDEMYLOGO from '../../assets/udemyLogo.png';


const About = () => {

  return (
    <section id="about" className='flex'>
      <div className="flex-col-reverse m-auto xl:flex xl:flex-row-reverse xl:w-2/3">        
        <div className="p-5">
          <AnimationOnScroll animateIn="animate__fadeIn" duration="2" animateOnce="true">
            <h1 className="aboutme text-center pb-4">About me:</h1>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" duration="2" delay="1" animateOnce="true">
            <p className='pb-4'> 
              I am a Project Manager, Soundexpert and a Web Developer fom Austria based in Oslo since 2022.<br></br>
              I thrive when I focus on reaching goals and I love working with capable, independent thinking people.
              <br></br>
              Open communication has been important for my success when working in teams and I believe it is
              the key to overcome challenges together.
              <br></br> 
            </p>
              <div className="w-100 flex">
                  <p className="inline-block pb-12">I made this site with </p>
                  <div className="">
                    <div className="word text-sky-400 text-2xl"></div>
                  </div>
              </div>
            </AnimationOnScroll>  
        </div>
      </div> 
    </section>
  );
};

export default About;
