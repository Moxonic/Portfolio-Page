import React from "react";
import "./About";
import "./about.css";
// import FREEDSD from "../../assets/Danielfree22.png";
import "./About.js";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useParams } from "react-router-dom";

const About = (props) => {
	 	const {text}  = useParams();
		console.log('params:', text); 
		return (
		<section id="about" className="flex">
			
			<div className="flex-col-reverse m-auto xl:flex xl:flex-row-reverse xl:w-2/3">
				<div className="p-5">
					<AnimationOnScroll
						animateIn="animate__fadeIn"
						duration="2"
						animateOnce="true"
					>
						<h1 className="aboutme text-center pb-4">About:</h1>
						<p className="pb-4">
							{text} 
							{/* Interested in the creative and technical aspects of music and sound engineering I've also found myself drawn to organization and project management, which has given me valuable skills in coordinating people and resources. 
							In 2020, I decided to pursue a new challenge and dove into web development, fueled by my love of problem solving and technology. 
							Alongside this, I also completed a 2-year coaching diploma to build better, more meaningful connections with people around me and learn how to support them in sustainable ways. 
							I'm excited to continue growing and learning, and am always looking for ways to use my skills and passion to make a positive impact. */}
						</p>
						<p className="pb-4">
						{/* 	With roots in Austria, I now call Oslo my home and live here since autumn 2022.
							I love to learn new languages, technologies and skills. */}

						</p>
						<p className="pb-4">
{/* 
*/}	</p>
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
