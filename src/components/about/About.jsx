import "./about.css";
import "./About.js";
import SP from "../../assets/SPOStill.png"; 
import SPL from "../../assets/SPstill.jpg";
import { useParams, useSearchParams } from "react-router-dom";

const About = (props) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const paramText = searchParams.get("text");
	console.log(paramText);

	return (
		<div className="about flex flex-col max-w-2xl justify-center m-auto h-auto snap-y">
			<div className="scrollContainer">
				<h1 className="text-4xl font-bold text-center mb-6 mt-6"></h1>
				
				<div className="youtubeContainer">
					<iframe
						className="youtubeIframe"
						allow="autoplay; encrypted-media"
						allowFullScreen
						autoPlay
						muted
						type="text/html"
						src="https://www.youtube.com/embed/6ApGMwgCt_w?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
						title="Eye to Ear - Interactive Sonification App"
					></iframe>
				</div>
				<h2>Eye to Ear</h2>
				<p className="pb-16">
				An iPad app designed to help visually impaired people experience visual art 
				through interactive sound. The project won several innovation and impact awards 
				and was showcased at Kunstforum Wien during the Georgia O’Keeffe exhibition.				
				</p>

				<div className="vimeoContainer">
					<iframe
						className="vimeoIframe"
						allow="fullscreen;"
						type="text/html"
						src="https://player.vimeo.com/video/127020709?h=b8366ff9e9"
						title="VW Mobiglobe - Interactive Encyclopedia"
					></iframe>
				</div>
				<h2>Volkswagen Mobiglobe</h2>
				<p className="pb-16">
					Interactive eight-channel composition for the gesture-based encyclopedia at Volkswagen headquarters in Wolfsburg.
				</p>

				<div className="vimeoContainer">
					<iframe
						className="vimeoIframe"
						allow="fullscreen;"
						type="text/html"
						src="https://player.vimeo.com/video/126129405?h=dbfddfd934"
						title="San Gottardo Installation"
					></iframe>
				</div>
				<h2>Sasso Museum</h2>
				<p className="pb-16">
				Designed and installed sound for seven multimedia
				 exhibits in the San Gottardo fortress museum 
				 (Swiss Alps). Topics included energy, water, 
				 internet security, and climate change.	
				 </p>

				<div className="youtubeContainer">
					<iframe
						className="youtubeIframe"
						src="https://www.youtube.com/embed/ydQzgO29ehM"
						title="MEDEL Triformance"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
				<h2>MEDEL Triformance</h2>
				<p className="pb-16">
					Provided Sound design for MEDEL's hearing aid technology.
				</p>

				<div className="youtubeContainer">
					<iframe
						className="youtubeIframe"
						allow="fullscreen;"
						type="text/html"
						src="https://www.youtube.com/embed/8eZfYiCGXQc?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
						title="Project Management"
					/>
				</div>
				<h2>Project Management</h2>
				<p className="pb-16">
				Coordinated multidisciplinary teams in the development 
				of amusement park rides, managing design, engineering, 
				construction, technology integration, scheduling, and 
				regulatory compliance.</p>

			{/* 	<div className="youtubeContainer">
					
				
				</div> */}
				<img className="AppImage" src={SP} alt="Daniel on a rock"/>
				<h2>Theater App - Showpony</h2>
				<p className="pb-16">
					Conceptualized and programmed an app to streamline 
					communication during rehearsals and performances. 
					Displays calls for actors and departments, shares page numbers, 
					and generates countdowns for timed cues. 
					Supports local time tracking of events on each 
					phone while keeping calls synced globally.<br />	
					<a
						href="https://stagepony.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 underline"
					>
						Try the App
					</a>
				</p>

				<img className="AppImageSpl" src={SPL} alt="Daniel on a rock"/>
				<h2>Theater App - Stageplanner</h2>
				<p className="pb-16">
					Visual Stage Planning Web App
					Programmed a web application for intuitive and consistent documentation of speaker 
					positions, cable paths, and other stage elements. 
					Simplifies stage planning and ensures uniform layouts across productions.<br />	
					<a
						href="https://stageplanner.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 underline"
					>
						Try the App
					</a>
				</p>		
			</div>	
		</div>
	);
};

export default About;
