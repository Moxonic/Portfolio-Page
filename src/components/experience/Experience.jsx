import React from "react";
import "./experience.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

/* 
const eyeToEarAwards = ['Art Directors Club of Europe',
	'Red Dot Junior Award 2017', 'Creative Club Austria (Gold)',
	'Deutscher Designer Club',
	'IIIDAward 2017',
	'Digital Business Trend Award 2016',
	'Austrian Inclusion Award (Honory Mention)'] */

const Experience = () => {
	return (
		<section id="experience">
			<div className="h-screen grid grid-cols-1 content-center">
				<AnimationOnScroll
					animateIn="animate__fadeIn"
					duration="2"
					delay="1"
				>
					<h1 className=" text-center">Experience</h1>
				</AnimationOnScroll>
				<AnimationOnScroll
					animateIn="animate__fadeIn"
					duration="2"
					delay="1"
				>
					<p className="legend text-center p-9">
						Welcome to my showreel! The following selection showcases a selection of my work and projects I was involved in, 
						so sit back, relax, and enjoy the show!
					</p>
					<h5 className="p-9 text-center">Enjoy!</h5>
				</AnimationOnScroll>
			</div>

			

		</section>
	);
};

export default Experience;
