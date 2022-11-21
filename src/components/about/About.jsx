import React from "react";
import "./About";
import "./about.css";
// import FREEDSD from "../../assets/Danielfree22.png";
import "./About.js";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import WIFILOGO from '../../assets/Wirtschaftsförderungsinstitut_logo.svg.png';


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
                I started working as a sound engineer in my early twenties.
                Through mixing, recording and composing music I learned 
                not to give up easily when faced with technical challenges and to communicate effectively.
                I worked on many projects for the Vienna State Opera, Red Bulls Servus TV and advertisement agencies. 
                After a job as sound operations manager on an Aida cruise ship I decided to return to Austria as I was offered a position as a project manager 
                for amusement park attractions.
            </p>
            <p className='pb-4'>
                After getting a  practical project management certificate I became responsible 
                for planning, scheduling and the execution of a broad portfolio of innovative multimedia installations with Attraktion GmbH.
                Besides planning and building hardware constructions with hydraulics and pneumatics, we developed controller software, interactive multimedia games and computer animations.
                Working with specialists from different IT fields I wanted to gain a better understanding of programming. 
            </p>
            <p className='pb-4'>
                So I started my own developer journey with freecodecamp and udemy courses and found a real passion in sharing knowledge and code with others during a Fullstack Develpment Wificourse.
                I love to learn, communicate and code and want to expand my knowledge in real life projects to raise connectivity and improve online experiences.
            </p>         
              <div className="w-100 flex">
                  <p className="inline-block pb-12">I built this site using </p>
                  <div className="">
                    <div className="word text-sky-400 text-2xl"></div>
                  </div>
              </div>
            </AnimationOnScroll>  
            <img className='wifiLogo' src={WIFILOGO}></img>
        </div>
           
      </div> 
    </section>
  );
};

export default About;
