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
                I started working as a sound engineer in my early twenties.
                Through mixing, recording and composing music I learned 
                not to give up when faced with technical difficulties and to communicate effectively.
                Over the years I have worked on for television-, radio-, opera-, museum-, theater- and advertisement-productions. 
                After a three month contract managing sound operations on an Aida cruise ship I 
                returned to Austria after being offered a position as a project manager for multimedia amusement park attractions.
            </p>
            <p className='pb-4'>
                I got made a project management certificate and took responsibility 
                for a portfolio of innovative multimedia installations with Attraktion! GmbH.
                Besides planning and developing hardware constructions with hydraulics and pneumatics, we developed 
                controller software, interactive multimedia games and computer animated films.
                Working with IT specialists, I noticed how limited my understanding was. 
            </p>
            <p className=''>
                In spring 2020 the entertainment industry came to a sudden halt so that I decided to take the opportunity to learn
                something new and start programming. 
                I did a udemy course and s "Fullstack Development" training  at Wifi in Vienna.
            </p> 
            <div className="logos p-4 justify-center"> 
              <img className='wifiLogo m-5 ' src={WIFILOGO}></img>
              <img className='udemyLogo m-5' src={UDEMYLOGO}></img>
            </div> 
            <p>
                I am passionate about sharing knowledge and learning while solving problems  
                on challenging projects. 
                <br></br>
                In August 2022 my girlfriend got a job as a soprano in the opera of Oslo and
                I decided to quit my job in the opera and to dare a fresh start with her in Oslo.


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
