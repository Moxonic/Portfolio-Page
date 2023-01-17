import React from "react";
import "./experience.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import VideoCard from "./VideoCard";

const eyeToEarAwards = ['Art Directors Club of Europe',
	'Red Dot Junior Award 2017','Creative Club Austria (Gold)',
	'Deutscher Designer Club',
	'IIIDAward 2017',
	'Digital Business Trend Award 2016',
	'Austrian Inclusion Award (Honory Mention)']

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
						In the following you will find some of the projects I
						worked on in the last years.
					</p>
					<h5 className="p-9 text-center">Lean back and enjoy!</h5>
				</AnimationOnScroll>
			</div>
			<AnimationOnScroll
				animateIn="animate__fadeInUp"
				duration="2"
				animateOnce="true"
			>

		{/* ////////////////////////////////VIDEOS /////////////////////////////////////////*/}
				<div className="allvids">
					<VideoCard
						title="Eye to Ear - iPad App"
						description="Eye to Ear facilitates visually impaired museum visitors to
                    				experience visual art through an interactive sonification
                    				approach"
						occupation="User Experience & Sound Design"
						src="https://www.youtube.com/embed/6ApGMwgCt_w?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
						awards= {eyeToEarAwards}
					/>
					<VideoCard 
						title="Mobiglobe"
						occupation="Sound Design"
						description="Located adjacent to the Volkswagen headquarters in Wolfsburg,
                    			Germany the Autostadt serves as a communication platform. It has a
                    			state-of-the-art car museum with an interactive gesturebased encyclopedia."
						src="https://player.vimeo.com/video/127020709?h=b8366ff9e9"
					/>

					<VideoCard
						title="Sasso San Gottardo"
						occupation="Sound Design, Technical Installation"
						description="Deep inside the swiss alps hides the once top secret Gotthard
										fortress. Since 2012 it is open for the public and displays 7
										rooms with informational multimedia installations created with Idee und Klang Studios treating topics like energy,
										water, internet security and climate change"
						src="https://player.vimeo.com/video/126129405?h=dbfddfd934"
					/>
					<VideoCard
						occupation="Project Management"
						description="In 2020 Attraktion! redesigned and upgraded the attraction park the Blue Cube at the Danfoss Universe Science Park in Denmark"
						title="Blue Cube 2.0"
						src="https://www.youtube.com/embed/IbSHel9CRT0?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
					/>
					{/* 		<h4 className="pt-5">Awards: </h4>
                			<p className="">Global Creative Technology Design Award</p>
            				</div> */}
					<VideoCard
						title="Attraktion! Showcase 2019/20"
						occupation="Project Management"
						description=" Attraktion! creates exceptional media-based experience products such as service robots,
                    					dome attractions, interactive games and exhibitions"
						src="https://www.youtube.com/embed/8eZfYiCGXQc?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
					/>
				</div>
			</AnimationOnScroll>
		</section>
	);
};

export default Experience;
