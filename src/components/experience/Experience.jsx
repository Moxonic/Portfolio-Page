import React from "react";
import "./experience.css";

const Experience = () => {
	return (
		<section id="experience">
			
			{/* empty Space */}
			{/* <div className= "h-80"></div> */}
			{/* header */}
			<div className= 'h-screen grid grid-cols-1 content-center'>
				<h1 className="w-full text-center">Experience</h1>
				<p className="legend text-center">
					In the following I present you some of the projects I worked on in the last years. 
					<br></br>
					Lean back and enjoy!
				</p>
			</div>
		

			{/* video 1 */}
			<div className="videoContainer w-full rounded-md">	
				<div className="videoWrapper">
					<iframe
						// className="w-full"
						src="https://www.youtube.com/embed/6ApGMwgCt_w"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>	
				<div className="experience__description">
					<h2 >
						Eye to Ear - IPad App
					</h2>
					<p>
						concept creation and musical composition
						<br></br>
						Eye to Ear allows visually impaired museum
						visitors to experience art through an interactive sonification
						approach.
					</p>
					<p>
						Awards: Art Directors Club of Europe (Gold- ‘European student of the
						Year’), Red Dot Award 2017 (Winner in category ‘Junior Award’),
						Creative Club Austria (Gold in category ‘Student of the Year’),
						Deutscher Designer Club (Gold in category ‘Zukunft’), IIIDAward 2017
						(Gold in category ‘Student Work), Digital Business Trend Award 2016
						(Winner in category ‘Revolution’), Austrian Inclusion Award (Honory
						Mention)
					</p>
				</div>	
			</div>		

			<div className="videoContainer drop-shadow-lg rounded-md">		
				<div className="videoWrapper">
					<iframe
						className="vidiv"
						title="vimeo-player"
						src="https://player.vimeo.com/video/127020709?h=b8366ff9e9"
						frameborder="0"
						allowfullscreen
					></iframe>
				</div>
				<div className="experience__description">
					<h2 className="">Mobiglobe - gesturebased encyclopedia</h2>
					<p>
						immersive sound design and surround sound composition
					</p>
					<p>
						Located adjacent to the Volkswagen headquarters in Wolfsburg, Germany the Autostadt serves as a communication platform.
						It has a state-of-the-art car museum with interactive gesturebased encyclopedia.
					</p>
					<p>Awards: Red Dot Award Communicationdesign</p>
				</div>
			</div>

			<div className="videoContainer w-full rounded-md">					
				<div className="videoWrapper">
					<iframe
						className="vidiv"
						title="vimeo-player"
						src="https://player.vimeo.com/video/126129405?h=dbfddfd934"
						frameborder="0"
						allowfullscreen
					></iframe>
				</div>
				<div className="experience__description">			
					<h2 className="">Sasso San Gottardo - multimedia museum</h2>
					<p>
						project management, sound design, installation
						<br></br>
						Deep inside the swiss alps hides the once top secret Gotthard fortress. 
						Since 2012 it is open for the public and displays 7 rooms with multimedia installations treating topics like energy, water, internet security and climate change.
					</p>
				</div>
			</div>

			<div className="videoContainer w-full rounded-md">
				<div className="videoWrapper">
					<iframe
						className="vidiv"
						src="https://www.youtube.com/embed/IbSHel9CRT0"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<div className="experience__description">		
					<h2 className="">Blue Cube 2.0 - multimedia attraction park at Universe Science Park in Denmark</h2>
					<p>
						project management
						<br></br>
						In 2020 Attraktion! redesigned and upgraded all immersive experiences in the Blue Cube at Universe Science Park, 
						which represents the branded theme park from Danfoss at their headquarters in Denmark.
						<br></br>
						<p>Awards: Global Creative Technology Design Award</p>
					</p>
				</div>	
			</div>

			<div className="videoContainer w-full object-cover rounded-md">
				<div className="videoWrapper">
					<iframe
						className="vidiv"
						src="https://www.youtube.com/embed/8eZfYiCGXQc"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<div className="experience__description">
					<h2 className="">Attraktion! Showcase </h2>
					<p>
						project management, customer relations, procurement, service,... 
						<br></br>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Experience;
