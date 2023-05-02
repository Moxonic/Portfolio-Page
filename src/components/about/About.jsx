import React from "react";
import "./About";
import "./about.css";
// import FREEDSD from "../../assets/Danielfree22.png";
import "./About.js";
import { AnimationOnScroll } from "react-animation-on-scroll";
import WIFILOGO from "../../assets/Wirtschaftsförderungsinstitut_logo.svg.png";
import UDEMYLOGO from "../../assets/udemyLogo.png";

const About = () => {
	return (
		<section id="about" className="flex">
			<div className="flex-col-reverse m-auto xl:flex xl:flex-row-reverse xl:w-2/3">
				<div className="p-5">
					<AnimationOnScroll
						animateIn="animate__fadeIn"
						duration="2"
						animateOnce="true"
					>
						<h1 className="aboutme text-center pb-4">About me:</h1>					
						<p className="pb-4">
							I am a versatile and driven professional
							with a passion for projects that create memorable experiences. 
              </p>
              <p className="pb-4">
              				With roots in
							Austria, I now call Oslo my home and live here since autumn 2022. 
							I love to learn new languages, technologies and skills.
	
              </p>
              <p className="pb-4">
              				I thrive in collaborative environments and love working with
							individuals who are independent thinkers and that bringing unique perspectives to the table. 
							I believe that open communication is the key to overcoming challenges and achieving success as a
							team. </p>
						<div className="w-100 flex">
							<p className="inline-block pb-12">
								I made this site with{" "}
							</p>
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
