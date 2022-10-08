import React from "react";
import "./About";
import "./about.css";
// import FREEDSD from "../../assets/Danielfree22.png";
import "./About.js";

import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {

  return (
    <section id="about" className='flex'>
      <div className="flex-col-reverse m-auto xl:flex xl:flex-row-reverse xl:w-2/3">        
        <div className="p-5">
          <AnimationOnScroll animateIn="animate__fadeInUpBig" duration="2" animateOnce="true">
            <h1 className="aboutme text-center pb-4">About me:</h1>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUpBig" duration="2" animateOnce="true">
            <p className='pb-4'>
                I started working as a sound engineer in my early twenties.
                Through mixing, recording and composing music I learned 
                not to give up easily when faced with technical challenges and to communicate effectively.
                When working as a sound operator on a cruise ship through Norway 
                I fell in love with the natural beauty of the country, 
                but decided to go back to Austria to take a position as a project manager 
                for amusement park attractions.
            </p>
            <p className='pb-4'>
                I was responsible for planning, scheduling and execution of a whole portfolio of innovative multimedia attractions.
                Besides the hardware we developed controller software, interactive multimedia games and computer animations I got curious 
                about how the visual realisation was done practically. 
            </p>
            <p className='pb-4'>
                So I started my Front End journey and found a real passion in bringing design ideas on to the screen.
                Now I want to expand my practical knowledge to real life projects to make the internet a better experience for everybody from my new homebase in Oslo.
            </p>         
              <div className="w-100 flex">
                  <p className="inline-block pb-12">I built this site using </p>
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
