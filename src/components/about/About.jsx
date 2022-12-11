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
               {/*  I am a problem solver but I am also a listener. */}
                I am a frontend developer, project manager and multimedia technician based in Oslo.
                <br></br>
                I started working in the Vienna State Opera as a sound engineer in my early twenties and learned 
                to work solution oriented when dealing with technical challenges.
            </p>
            <p className='pb-4'>
                While working as a First Sound Operator on an Aida cruise ship I was deeply 
                impressed by the organization and logistics on board.
                I completed a project management course and took the opportunity to manage a portfolio of
                innovative multimedia installations with Attraktion! GmbH.
            </p>
            <p classname='pb-4'>
                Working with teams of programmers, designers and technicians I found great value exploring agile concepts to
                increase transparency, an open exchange of ideas and motivation. 
            </p>
            {/* <p className='pb-4'>
            </p> */}
            <p className='pb-4'>
                Throughout the last two years, I trained to work as a web developer with freecodecamp, udemy, a Wifi Wien course and the odinproject.
                During this time I also completed a 'systemic coaching' training to better suited to support my fellow human beings.
                In summer 2022 I moved to Norway with my girlfriend and look forward to work as a frontend developer for exciting projects.
                Besides programming I like to play guitar and sing and really enjoy to chill in the sauna on a cold winter day.
            </p> 
          {/*   <p className='pb-4'>
            </p> */}
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
