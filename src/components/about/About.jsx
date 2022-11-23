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
                not to give up when faced with technical challenges and to communicate effectively.
                Over the years I have worked for television-, radio-, opera-, museum-, theater- and advertisement-productions. 
                After a three month contract managing sound operations on an Aida cruise ship I 
                returned to Austria after being offered a position as a project manager for multimedia amusement park attractions.
            </p>
            <p className='pb-4'>
                I got a practical project management certificate and became responsible 
                for a broad portfolio of innovative multimedia installations.
                Besides planning and developing hardware constructions with hydraulics and pneumatics, we developed 
                controller software, interactive multimedia games and computer animated films.
                Working with IT specialists, customers and other project managers I gained insights and understanding 
                and at the same time became more interested in the topic. 
            </p>
            <p className=''>
                In spring 2020 the entertainment industry came to a sudden halt and I decided to start programming.
                I started learning by taking a Wifi "Fullstack Development" training course and a Udemy course.
            </p> 
            <div className="logos p-4 justify-center"> 
              <img className='wifiLogo m-5 ' src={WIFILOGO}></img>
              <img className='udemyLogo m-5' src={UDEMYLOGO}></img>
            </div> 
            <p>
                I am passionate about sharing knowledge and learning and want to keep expand my knowledge 
                through challenging projects to raise interconnectivity and improve online experiences.
                <br></br>
                In August 2022 my girlfriend got a job as a soprano in the opera of Oslo and I decided to take the opportunity 
                and move to Oslo with her.
                I am learning Norwegian fast and look forward to start working as a Frontend Developer.

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
