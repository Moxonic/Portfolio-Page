import React from "react";
import "./About";
import "./about.css";
import VideoCard from "../videos/VideoCard.jsx";
// import FREEDSD from "../../assets/Danielfree22.png";
import "./About.js";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useParams } from "react-router-dom";

const About = (props) => {
	const { text } = useParams();
	console.log("params:", text);
	return (
		<section id="about" className="flex lg:w-2/3 m-auto">
			<div className="flex-col-reverse m-auto xl:flex xl:flex-row-reverse xl:w-2/3">
				<div className="p-5">
					<AnimationOnScroll
						animateIn="animate__fadeIn"
						duration="2"
						animateOnce="true"
					>
						<h1 className="aboutme text-center pb-4">About:</h1>

						<p className="pb-4">
							I was born and raised in Austria, to be more
							specific in the little city of Innsbruck
							which is surrounded by tyrolean mountains and
							nature.
						</p>
						<img
							src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180221134637/iStock-539009044.jpg"
							alt="Innsbruck view"
							className=" inline-block pb-4"
						/>
						<p className="pb-4">
							
Growing up surrounded by mountains has had a significant impact on me and my love for nature. I'm grateful for the wonderful memories of snowboarding with friends and exploring the mountains on unforgettable trips.
						</p>
						<img
							src="https://miro.medium.com/v2/resize:fit:1400/1*U_HEg407PCp7VU-M0gEJ7Q.jpeg"
							alt="hands on a turntable"
							className=" inline-block pb-4"
						/>
						<p className="pb-4">
							During school I developed a passion for Hip-Hop and
							street art. At the age of 15 I started programming
							beats and was intruiged by sampling old jazz and
							classical music tracks from my parents vinyl
							collection.
						</p>
						{/* 	<img
							src="https://www.trend.at/_storage/asset/5942725/storage/preview/file/87272654/48582516.jpg"
							alt="red cross ambulance loading in a patient"
							className=" inline-block pb-4"
						/> 
						<p className="pb-4">
							After school I worked for a year as a first
							responder paramedic at the red cross and learned how
							to deal with people in stressful situations.
						</p> */}
						<p className="pb-4">
							Following my passion for music I moved to Vienna and
							studied sound engineering and music production at
							SAE Wien and got a bachelor from the university of
							Vienna.
						</p>

						<img
							src="https://hacksterio.s3.amazonaws.com/uploads/attachments/273256/screen_shot_2017-03-15_at_07_49_09_jn5CYthAlI.png"
							className="inline w-1/2 pb-4 "
						/>
						<img
							src="https://arqen.com/wp-content/media/impulse-response-waterfall-plot.jpg"
							className="inline w-1/2 pb-4 "
						/>

						<p className="pb-4">
							I learned about acoustics and how to use the visual programming language Max/MSP to 
							build gesture-controlled interfaces for digital
							instruments, generative music machines
							and synthesizers.
						</p>

						<div className="youtubeContainer">
							<iframe
								className="youtubeIframe"
								/* allow="fullscreen;" */
								allow="autoplay; encrypted-media"
								allowfullscreen
								autoplay
								muted
								type="text/html"
								src="https://www.youtube.com/embed/6ApGMwgCt_w?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
								alt="Eye to Ear - interactive sonification app for visually impaired people"
							></iframe>
						</div>
						<p className="pb-4">
						One of my most rewarding projects was creating an iPad app that allowed visually impaired individuals to experience visual art through an interactive sonification method. The project was highly successful, and the app received multiple awards for its innovation and impact.	</p>
						<div className="vimeoContainer">
							<iframe
								className="vimeoIframe"
								allow="fullscreen;"
								type="text/html"
								src="https://player.vimeo.com/video/127020709?h=b8366ff9e9"
								alt="VW Mobiglobe - interactive gesturebased encyclopedia "
							></iframe>
						</div>
						<p className="pb-4">
							With Idee und Klang Studios in Basel I designed
							sound installations like the gesturebased encyclopedia for
							Volkswagen headquarters in Wolfsburg.
						</p>
						<div className="vimeoContainer">
							<iframe
								className="vimeoIframe"
								allow="fullscreen;"
								type="text/html"
								src="https://player.vimeo.com/video/126129405?h=dbfddfd934"
								alt='"Idee und Klang" Installation San Gottardo'
							></iframe>
						</div>
						<p className="pb-4">
							The 7 informational multimedia installations were
							created for the San Gottardo fortress which is hidden deep inside of the
							Swiss Alps. These installations explore topics such
							as energy, water, internet security, and climate
							change.
						</p>
						<div className="pb-4 w-1/2 flex">
							<img
								src="https://www.wien.info/resource/image/290664/19x10/1200/630/3e15dd255d76bae1ef3af25e17e27bb4/0C4B1B0C3FEA6D7DF35F067DE09AF89F/40520-ringstrasse-2015-staatsoper-tags-schraeg-von-oben.webp"
								alt="Vienna State Opera from outside"
							/>
							<img
								src="https://www.wiener-staatsoper.at/fileadmin/_processed_/e/6/csm_Debu__ts_bc0660665e.jpg"
								alt="Vienna State Opera Inside View"
							/>
						</div>

						<div className="pb-4 aspect-w-16 aspect-h-9 w-full"></div>
						<p className="pb-4">
							In 2014 I started
							working full time as a sound technician in the
							Vienna State Opera. I got a deep insight in the
							world of classical music and opera and learned a lot
							about the technical aspects of sound engineering,
							mixers in digital environments and setting up
							systems to guarantee safe high quality productions.
						</p>
						<img
							src="https://www.wienerzeitung.at/_em_daten/_cache/image/1x6C6mNvhD5UUwD9jnbIkq1eE6cFhkcyjn9qMNvVbzxWs2BvOXaeJI-NT1NmI9rBlqogB9ixYIZm86X8ujyDxY_7QCoHibQg2K/151014-1656-948-0960-198296.jpg"
							alt="Vienna State Opera Foto from Undine performance"
							className=" inline-block pb-4"
						/>
						<p className="pb-4">
							I was responsible for sound and video production in
							the children's opera productions, overseeing the
							planning and setup of the systems in collaboration
							with directors, artists, and technical departments.
						</p>
						<img
							src="https://estradaistudio.pl/i/images/9/8/8/d2FjPTExNzB4MS41MDAzNjYzMDAzNjYz_src_4988-zNYHGVRw.jpeg"
							alt="Studio Vista 5"
							className=" inline-block pb-4"
						/>
						<p className="pb-4">
							Mixing in the opera is a highly specialized task because
							different individuals require distinct mixes at
							various positions on and off the stage. For
							instance, you may need separate mixes for the
							conductor, singers, orchestra, stage manager, and
							the front-of-house audio, while also sending a
							distinct mix to the recording truck or streaming
							department.
						</p>
						<p className="pb-4">
							<img
								src="https://scontent.fosl3-2.fna.fbcdn.net/v/t1.18169-9/19420415_10213297434413731_2678120072597772520_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=UsuIiySMB1AAX-XfjtW&_nc_oc=AQkHcUtxZoyZkBYXiddE4gwtfDQ8cT16TUW2sApdaM50HYne-OrfSz8ffGQhzXnL4I8&_nc_ht=scontent.fosl3-2.fna&oh=00_AfAuedbxRr4y9gsRTimNRmbjQP_QB9ThrM72wY5VSl_HbA&oe=64A2C2C7"
								alt="Aida"
								className=" inline-block pb-4"
							/>
						</p>
						<p className="pb-4">
							After two years, my desire to explore more of the
							world led me to embark on a new adventure as a sound
							operator for Aida Cruises. This opportunity allowed
							me to travel and work simultaneously. As the person
							in charge of the sound system on board, I had the
							chance to cruise through captivating destinations
							such as the Mediterranean Sea, the Baltic Sea, and
							the Fjords of Norway.
						</p>
						<img
							src="https://decruisegids.nl/wp-content/uploads/aidacosma.jpg"
							alt="Aida"
							className=" inline-block pb-4"
						/>
						<p className="pb-4">
							The stunning beauty of Norway, particularly its
							breathtaking fjords, made a lasting impact on me,
							sparking a strong desire to return to this
							remarkable country someday.
						</p>
						<p className="pb-4">
							During my time working on the cruise ship, I learned
							a lot about teamwork and effective communication and
							was impressed by the thorough planning necessary to
							ensure a smooth operation on all different levels.
						</p>

						<p className="pb-4">
							I decided that I wanted to learn more about
							organization and enrolled in a project management
							course. In early 2019 I started working as a project
							manager at Attraktion! GmbH, overseeing a diverse
							portfolio of international amusement park
							installations.
						</p>

						<div className="youtubeContainer">
							<iframe
								className="youtubeIframe"
								allow="fullscreen;"
								type="text/html"
								src="https://www.youtube.com/embed/8eZfYiCGXQc?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
							></iframe>
						</div>

						<p className="pb-4">
							In addition to planning new projects and
							coordinating people and resources, I collaborated with developers, artists, and engineers
							and maintained strong customer relations while making sure that all requirements were met. 
							To enhance efficiency and agility, I
							introduced daily standup meetings for in-house
							production and logistics, where they proved to be
							most effective. Furthermore, I implemented digital
							tools to track progress across various sites around
							the globe. These changes yielded significant
							improvements in team communication and overall
							efficiency.
						</p>
						{/* 					<div className="youtubeContainer">
							<iframe
								className="youtubeIframe"
								allow="fullscreen;"
								type="text/html"
								src="https://www.youtube.com/embed/IbSHel9CRT0?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
							></iframe>
						</div> */}

						{/* <iframe	allow="fullscreen;"		
						className=""
						width="500" height="300"
							type="text/html"
							src="www.google.com"
						></iframe> */}
						{/* 	<iframe src='http://www.sopranokang.com/' className="h-screen w-screen rounded-xl mb-4 border-0 overflow-x-hidden"></iframe>
						 */}
						<img
							src="https://scontent.fosl3-2.fna.fbcdn.net/v/t39.30808-6/347251705_3429738733909859_6225752455589049350_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=k39oIDgWzRAAX9KSu1f&_nc_ht=scontent.fosl3-2.fna&oh=00_AfDyVlkisZEhCKFspJ_nIeWTaKWJb_YLO-a2BZqtX6bqGg&oe=648041FE"
							alt="Daniel sitting on the beach playing guitar"
							className="m-auto rounded-full h-52 w-52 mb-4"
						/>
						<p className="pb-4">
							The impact of Corona on the entertainment industry
							led me to reevaluate my career path. I embraced the
							challenge of web development, driven by my passion
							for problem-solving and communication technology. I
							am eager to continue growing and learning, seeking
							opportunities to utilize my skills and make a
							positive impact. After self-study and completing a
							full stack web development course, I relocated to
							Oslo to pursue a career in web development. 
						</p>
						<p className="pb-4">
							Outside of coding, I enjoy quality time with
							my girlfriend, playing guitar, and exploring the
							outdoors.
						</p>

						<p className="pb-4"></p>
						<div className="w-100 flex">
							<p className="inline-block pb-12">
								The technologies I used for this website are:
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
