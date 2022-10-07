import React from "react";
import "./experience.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Experience = () => {
	return (
		<section id="experience">
			<div className="h-screen grid grid-cols-1 content-center">
				<h1 className=" text-center">Experience</h1>
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<p className="legend text-center p-9">
						In the following you will find some of the projects I worked on in the
						last years.
					</p>
					<h5 className="p-9 text-center">Lean back and enjoy!</h5>
				</AnimationOnScroll>
			</div>
			<AnimationOnScroll animateIn="animate__slideInLeft" animateOnce="true">
			<div className="allvids">
					<div className="
					videoContainer
					p-2 mx-3 my-9 flex-col rounded-md 
					xl:flex xl:flex-row xl:m- xl:items-center 
					xl:justify-evenly
					">
						<div className="wrapperwrapper xl:w-3/4 ">
							<div className="videoWrapper  
							xl:flex-row 
							">
								<iframe
									className="h-full w-full xl:h-96 "
									frameBorder="0"
									scrolling="no"
									allow="fullscreen;"
									type="text/html"
									src="https://www.youtube.com/embed/6ApGMwgCt_w?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
								></iframe>
							</div>
						</div>
						<div className="experience__description flex-col content-center items-center xl:w-96 xl:p-6 ">
							<h3 className="pt-5 xl:pt-0">Eye to Ear - iPad App</h3>
							<p className="text-left">
								Eye to Ear facilitates visually impaired museum visitors to
								experience visual art through an interactive sonification
								approach 
							</p>
							<h4 className="pt-5 xl:pt-0">Occupation: </h4>
							<p >Sound Art Direction & Sound Design</p>
							<h4 className="pt-5  xl:pt-0">Awards: </h4>
							<ul className=" text-center">
								<li>Art Directors Club of Europe</li>
								<li>Red Dot Junior Award 2017</li>
								<li>Creative Club Austria (Gold)</li>
								<li>Deutscher Designer Club</li>
								<li>IIIDAward 2017</li>
								<li>Digital Business Trend Award 2016</li>
								<li>Austrian Inclusion Award (Honory Mention)</li>
							</ul>
						</div>
					</div>

					<div className="
					videoContainer
					p-2 mx-3 my-9 flex-col rounded-md 
					xl:flex xl:flex-row xl:m- xl:items-center 
					xl:justify-evenly
					">
						<div className="wrapperwrapper xl:w-3/4">
							<div className="videoWrapper  
							xl:flex-row 
							">
								<iframe
									className="h-full w-full xl:h-96 "
									title="vimeo-player"
									src="https://player.vimeo.com/video/127020709?h=b8366ff9e9"
									frameBorder="0"
									allow="fullscreen;"></iframe>
							</div>
						</div>
						<div className="experience__description flex-col content-center items-center xl:w-96 xl:p-6  ">
							<h3 className="pt-5 xl:pt-0">Mobiglobe</h3>
							<p className="text-left">
								Located adjacent to the Volkswagen headquarters in Wolfsburg,
								Germany the Autostadt serves as a communication platform. It has a
								state-of-the-art car museum with an interactive gesturebased encyclopedia.
							</p>
							<h4 className="pt-5">Occupation: </h4>
							<p className="">Sound Design</p>
							<h4 className="pt-5">Awards: </h4>
							<p className=" text-center ">Red Dot Award Communicationdesign</p>
						</div>
					</div>


					<div className="
					videoContainer
					p-2 mx-3 my-9 flex-col rounded-md 
					xl:flex xl:flex-row xl:m- xl:items-center 
					xl:justify-evenly
					">
						
						{/* //VIDEOS */}
						<div className="wrapperwrapper xl:w-3/4">
							<div className="videoWrapper  
							xl:flex-row 
							">
								<iframe
									className='h-full w-full xl:h-96 '
									title="vimeo-player"
									src="https://player.vimeo.com/video/126129405?h=dbfddfd934"
									frameBorder="0"
									allow="fullscreen;"
								></iframe>
							</div>
						</div>
						<div className="experience__description flex-col content-center items-center xl:w-96 xl:p-6">
							<h3  className="pt-5 xl:pt-0">Sasso San Gottardo</h3>
							<p className="text-left">
								Deep inside the swiss alps hides the once top secret Gotthard
								fortress. Since 2012 it is open for the public and displays 7
								rooms with informational multimedia installations created with Idee und Klang Studios treating topics like energy,
								water, internet security and climate change
							</p>
							<h4 className="pt-5"> Occupation:</h4>
							<p > Sound Design, Technical Installation</p>
						</div>
					</div>

					<div className="
					videoContainer
					p-2 mx-3 my-9 flex-col rounded-md 
					xl:flex xl:flex-row xl:m- xl:items-center 
					xl:justify-evenly
					">
						
						{/* //VIDEOS */}
						<div className="wrapperwrapper xl:w-3/4">
							<div className="videoWrapper  
							xl:flex-row 
							">
								<iframe
									className='h-full w-full xl:h-96 '
									frameBorder="0"
									allow="fullscreen;"
									scrolling="no"
									marginHeight="0"
									marginWidth="0"
									width="788.54"
									height="443"
									type="text/html"
									src="https://www.youtube.com/embed/IbSHel9CRT0?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
								></iframe>
							</div>
						</div>
						<div className="experience__description flex-col content-center pb-5 items-center xl:w-96 xl:p-6">
							<h3 className="pt-5 xl:pt-0">
								Blue Cube 2.0 
							</h3>
							<p className="text-left">
								In 2020 Attraktion! redesigned and upgraded the attraction park the Blue Cube at the Danfoss Universe Science Park in Denmark
							</p>
							<h4 className="pt-5">Occupation: </h4>
							<p className="">Project Management</p>
							<h4>Awards: </h4>
							<p className="">Global Creative Technology Design Award</p>
						</div>
					</div>

					<div className="
					videoContainer
					p-2 mx-3 my-9 flex-col rounded-md 
					xl:flex xl:flex-row xl:m- xl:items-center 
					xl:justify-evenly
					">
						
						{/* //VIDEOS */}
						<div className="wrapperwrapper xl:w-3/4">
							<div className="videoWrapper  
							xl:flex-row 
							">
								<iframe
									className='h-full w-full xl:h-96 '
									frameBorder="0"
									allow="fullscreen;"
									scrolling="no"
									marginHeight="0"
									marginWidth="0"
									width="788.54"
									height="443"
									type="text/html"
									src="https://www.youtube.com/embed/8eZfYiCGXQc?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
									allowFullScreen></iframe>
							</div>
						</div>
						<div className="experience__description flex-col content-center pb-5 items-center xl:w-96 xl:p-6">
							<h3 className="pt-5 xl:pt-0">Attraktion! Showcase 2019/20</h3>
							<p className="text-left "> 
							Attraktion! creates exceptional media-based experience products such as service robots,
							dome attractions, interactive games and exhibits 
							</p>
							<h4 className="pt-5">Occupation:</h4>
							<p className=""> Project Management </p>
						</div>
					</div>

			</div>
			</AnimationOnScroll>
		</section>
	);
};

export default Experience;
