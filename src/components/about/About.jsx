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
							with a passion for project management, audio
							expertise, and web development. 
              </p>
              <p className="pb-4">
              With roots in
							Austria, I now call Oslo my home and have been based
							here since autumn 2022. As a project manager, I am
							focused on ensuring that projects are executed
							efficiently and effectively, with a focus on
							achieving the desired goals. 
              </p>
              <p className="pb-4">
              I thrive in collaborative environments and love working with
							individuals who are independent thinkers and capable
							of bringing unique perspectives to the table. Open
							communication is a critical component of my approach
							to project management, and I believe it is the key
							to overcoming challenges and achieving success as a
							team. </p>
              <p className="pb-4"> If you're looking for a professional
							who is driven, dedicated, and committed to
							delivering results, look no further! I am eager to
							bring my skills and experience to your next project.
							
							
						</p>
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
