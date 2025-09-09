import React from "react";
import "./about.css";
import "./About.js";
import Post from "./posts/Post";
import VideoCard from "../videos/VideoCard.jsx";
import danielOnARock from "../../assets/DanielOnARock.jpg";
/* import { AnimationOnScroll } from "react-animation-on-scroll";
 */ import { useParams, useSearchParams } from "react-router-dom";
import languageLogos from "../../assets/pngegg.png";

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
				<p className="pb-12">
					Concept and composition for an iPad application enabling visually impaired individuals to experience visual art through interactive sonification. This project received multiple awards for innovation and impact, and was presented at the Kunstforum Wien during the Georgia O'Keeffe exhibition.
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
				<p className="pb-12">
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
				<p className="pb-12">
					Sound design and installation of seven multimedia exhibits in the San Gottardo fortress museum, located in the Swiss Alps. These installations address topics such as energy, water, internet security, and climate change.
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
				<p className="pb-12">
					Sound design for MEDEL hearing aid technology.
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
				<p className="pb-12">
					Coordination of multidisciplinary teams for the development of amusement park rides, including oversight of design, engineering, construction, technology integration, scheduling, and regulatory compliance.
				</p>
			</div>
		</div>
	);
};

export default About;
