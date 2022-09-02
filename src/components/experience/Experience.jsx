import React from "react";
import "./experience.css";

const Experience = () => {
	return (
		<section id="experience">
			{/* empty Space */}
			{/* <div className= "h-80"></div> */}
			{/* header */}
			<div className="h-screen grid grid-cols-1 content-center">
				<h1 className=" text-center">Experience</h1>
				<p className="legend text-center">
					In the following I present you some of the projects I worked on in the
					last years.
				</p>
				<h5 className="p-9 text-center">Lean back and enjoy!</h5>
			</div>

			<div className="allvids">
				<div className="videoContainer  rounded-md ">
					<div className="videoWrapper">
						<iframe
							frameborder="0"
							scrolling="no"
							marginheight="0"
							marginwidth="0"
							width="788.54"
							height="443"
							type="text/html"
							src="https://www.youtube.com/embed/6ApGMwgCt_w?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
						></iframe>
					</div>
					<div className="experience__description">
						<h3>Eye to Ear - iPad App</h3>
						<p>
							Eye to Ear facilitates visually impaired museum visitors to
							experience visual art through an interactive sonification
							approach 
						</p>
						<p>Occupation: </p>
						<p className="pl-5">Sound Art Direction & Sound Design</p>
						<p>Awards: </p>
						<p className="pl-5">
							Art Directors Club of Europe <br></br>
							Red Dot Junior Award 2017<br></br>
							Creative Club Austria (Gold)<br></br>
							Deutscher Designer Club<br></br>
							IIIDAward 2017 <br></br>
							Digital Business Trend Award 2016<br></br>
							Austrian Inclusion Award (Honory Mention)
						</p>
					</div>
				</div>

				<div className="videoContainer  rounded-md ">
					<div className="videoWrapper ">
						<iframe
							title="vimeo-player"
							src="https://player.vimeo.com/video/127020709?h=b8366ff9e9"
							frameborder="0"
							allowfullscreen
						></iframe>
					</div>
					<div className="experience__description">
						<h3>Mobiglobe</h3>
						<p>
							Located adjacent to the Volkswagen headquarters in Wolfsburg,
							Germany the Autostadt serves as a communication platform. It has a
							state-of-the-art car museum with interactive gesturebased
							encyclopedia
						</p>
						<p>Occupation: </p>
						<p className="pl-5">Sound Design</p>
						<p>Awards:</p> 
						<p className="pl-5">Red Dot Award Communicationdesign</p>
					</div>
				</div>

				<div className="videoContainer  rounded-md ">
					<div className="videoWrapper">
						<iframe
							title="vimeo-player"
							src="https://player.vimeo.com/video/126129405?h=dbfddfd934"
							frameborder="0"
							allowfullscreen
						></iframe>
					</div>
					<div className="experience__description">
						<h3 className="">Sasso San Gottardo</h3>
						<p>
							Deep inside the swiss alps hides the once top secret Gotthard
							fortress. Since 2012 it is open for the public and displays 7
							rooms with informational multimedia installations created with Idee und Klang Studios treating topics like energy,
							water, internet security and climate change
						</p>
						<p> Occupation:</p>
						<p className="pl-5"> Sound Design, Procurement, Technical Installation</p>
					</div>
				</div>

				<div className="videoContainer  rounded-md ">
					<div className="videoWrapper">
						<iframe
							frameborder="0"
							scrolling="no"
							marginheight="0"
							marginwidth="0"
							width="788.54"
							height="443"
							type="text/html"
							src="https://www.youtube.com/embed/IbSHel9CRT0?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
						></iframe>
					</div>
					<div className="experience__description">
						<h3>
							Blue Cube 2.0 
						</h3>
						<p>
							In 2020 Attraktion! redesigned and upgraded the attraction park the Blue Cube at the Danfoss Universe Science Park in Denmark
						</p>
						<p>Occupation: </p>
						<p className="pl-5">project management</p>
						<p>Awards: </p>
						<p className="pl-5">Global Creative Technology Design Award</p>
					</div>
				</div>

				<div className="videoContainer  rounded-md ">
					<div className="videoWrapper">
						<iframe
							frameborder="0"
							scrolling="no"
							marginheight="0"
							marginwidth="0"
							width="788.54"
							height="443"
							type="text/html"
							src="https://www.youtube.com/embed/8eZfYiCGXQc?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
							allowfullscreen
						>
							<div>
								<small>
									<a href="https://youtubeembedcode.com/pl/">
										https://youtubeembedcode.com/pl/
									</a>
								</small>
							</div>
							<div>
								<small>
									<a href="https://bettingsidor-utan-svensk-licens.se/">
									</a>
								</small>
							</div>
						</iframe>
					</div>
					<div className="experience__description">
						<h3>Attraktion! Showcase 2019/20</h3>
						<p> 
						Attraktion! creates exceptional media-based experience products such as service robots,
						dome attractions, interactive games and exhibits 
						</p>
						<p>Occupation:</p>
						<p className="pl-5"> Project Management at Attraktion! for the displayed projects </p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
