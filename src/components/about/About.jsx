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
                I am a project manager, frontend developer and multimedia technician based in Oslo.
                <br></br>
                Having worked many years as a sound engineer I am solution oriented
                when dealing with technical challenges and quick to adapt to changes.
            </p>
            <p className='pb-4'>
                I have a BFI project management certificate and experience managing 
                innovative multimedia installations with Attraktion! GmbH.
            </p>
            <p className='pb-4'>
                As a project manager I define objectives and break them down into 
                smaller project tasks that can be planned and tracked.
                When working with people I like listening to their opinions and ideas.
                I value openness and honesty. 
            </p>
            <p className='pb-4'>  
                I find purpose in taking responsibility when I am faced with problems 
                and find joy when I can contribute to improvements.
                </p>
            <p className='pb-4'>
                I am passionate about learning new web technologies, organizational frameworks
                as well as improving my own communication skills.   
            </p>
      
            <p className='pb-4'>
                During the corona lockdown I discovered my passion for deb development with udemy and wifi courses
                and enjoy working on my own project ideas. 
            </p> 
            <div className="logos p-4 justify-center"> 
              <img className='wifiLogo m-5 ' src={WIFILOGO}></img>
              <img className='udemyLogo m-5' src={UDEMYLOGO}></img>
            </div> 
                
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
