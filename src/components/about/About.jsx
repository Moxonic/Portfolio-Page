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
		<div className="about flex flex-col max-w-2xl justify-center m-auto h-auto snap-y ">
			<div className="scrollContainer">
				<div className="scrollItem">
					<Post
						text="I was born and raised in Innsbruck, Austria in the
					heart of the tyrolean alps. Growing up surrounded by mountains."
						image="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180221134637/iStock-539009044.jpg"
					/>
				</div>
				<div className="scrollItem">
					<Post
						
						text="During school I listened to Hip-Hop and
					painted graffitis as a way of expression. At the age of 14
					I became interested in programming beats and
					sampling old jazz and classical music tracks from my
					mothers vinyl collection. Following my passion for music I moved to Vienna after school and
					studied sound engineering and music production at
					SAE Wien and finished a bachelor degree at the university of
					Vienna."
						image="https://miro.medium.com/v2/resize:fit:1400/1*U_HEg407PCp7VU-M0gEJ7Q.jpeg"
					/>
				</div>
				<div className="scrollItem">

				<Post
					text="I learned about acoustics and programmed
					gesture-controlled interfaces for digital
				instruments, generative music machines and
				synthesizers with Max/MSP."
				image="https://hacksterio.s3.amazonaws.com/uploads/attachments/273256/screen_shot_2017-03-15_at_07_49_09_jn5CYthAlI.png"
				/>
				</div>
			</div>
			{/* 	<Post 
			className='scrollItem'
			text=''
			image=''/>
			<Post 
			className='scrollItem'
			text=''
			image=''/> */}

			{/* <AnimationOnScroll
				animateIn="animate__fadeIn"
				duration="2"
				animateOnce="true"
			> */}
			<div className="youtubeContainer">
				<iframe
					className="youtubeIframe"
					/* allow="fullscreen;" */
					allow="autoplay; encrypted-media"
					allowFullScreen
					autoPlay
					muted
					type="text/html"
					src="https://www.youtube.com/embed/6ApGMwgCt_w?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
					alt="Eye to Ear - interactive sonification app for visually impaired people"
				></iframe>
			</div>
			<p className="pb-12">
				One of my most rewarding projects was creating an iPad app that
				allowed visually impaired individuals to experience visual art
				through an interactive sonification method. The project was
				highly successful, and the app received multiple awards for its
				innovation and impact.
			</p>
			<div className="vimeoContainer">
				<iframe
					className="vimeoIframe"
					allow="fullscreen;"
					type="text/html"
					src="https://player.vimeo.com/video/127020709?h=b8366ff9e9"
					alt="VW Mobiglobe - interactive gesturebased encyclopedia "
				></iframe>
			</div>
			<p className="pb-12">
				At Idee und Klang Studios in Basel I composed interactive sound
				compositions for a gesturebased encyclopedia at Volkswagen
				headquarters in Wolfsburg.
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
			<p className="pb-12">
				For the museum in the San Gottardo fortress which is hidden deep
				inside of the Swiss Alps I built 7 informational multimedia
				installations. These installations explore topics such as
				energy, water, internet security, and climate change.
			</p>

			<Post
				className="scrollItem"
				text="As a versatile
				and adaptable engineer, I have acquired invaluable expertise
				in audio and video production through my involvement in
				on-set work and shooting assignments for prestigious
				broadcasters like Servus TV, ORF, and W24."
				image="https://veechxveech.com/wp-content/uploads/2015/10/ServusTVNews-Studio-2-Veech-x-Veech-1024x682.jpg"
			>
				{" "}
			</Post>

			<div className="youtubeContainer">
				<iframe
					className="youtubeIframe"
					src="https://www.youtube.com/embed/ydQzgO29ehM"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
			<p className="pb-12">
				As a sound designer, I try to capture the essence of brand
				values by implementing everyday objects into creative musical
				expressions. This example of my collaboration with Medel, I
				incorporated the sound of my car trunk opening, shaking out my
				bedsheets and sparkling water. Can you hear it?
			</p>

			<Post
				className="scrollItem"
				text="In 2014 I started working full time as a sound technician in
					the Vienna State Opera. I got a deep insight in the world of
					classical music and opera and learned a lot about the
					technical aspects of sound engineering, mixers in digital
					environments and setting up systems to guarantee safe high
					quality productions."
				image="https://www.wien.info/resource/image/290664/19x10/1200/630/3e15dd255d76bae1ef3af25e17e27bb4/0C4B1B0C3FEA6D7DF35F067DE09AF89F/40520-ringstrasse-2015-staatsoper-tags-schraeg-von-oben.webp"
			/>
			<Post
				className="scrollItem"
				text="Mixing in the opera is a highly specialized task because
					different individuals require distinct mixes at various
					positions on and off the stage. For instance, you may need
					separate mixes for the conductor, singers, orchestra, stage
					manager, and the front-of-house audio, while also sending a
					distinct mix to the recording truck or streaming department."
				image="https://www.wiener-staatsoper.at/fileadmin/_processed_/e/6/csm_Debu__ts_bc0660665e.jpg"
				alt="Vienna State Opera Inside View"
			/>

			<img
				src="https://decruisegids.nl/wp-content/uploads/aidacosma.jpg"
				alt="Aida Cruise Ship Cosma"
				className=" inline-block "
			/>
			<p className="">
				After two years, my desire to explore more of the world led me
				to embark on a new adventure as a sound operator for Aida
				Cruises. This opportunity allowed me to travel and work
				simultaneously. As the person in charge of the sound system on
				board, I had the chance to cruise through captivating
				destinations such as the Mediterranean Sea, the Baltic Sea, and
				the Fjords of Norway.
			</p>

		{/* 	<img
				src="https://scontent.fosl3-2.fna.fbcdn.net/v/t1.18169-9/19420415_10213297434413731_2678120072597772520_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=UsuIiySMB1AAX-XfjtW&_nc_oc=AQkHcUtxZoyZkBYXiddE4gwtfDQ8cT16TUW2sApdaM50HYne-OrfSz8ffGQhzXnL4I8&_nc_ht=scontent.fosl3-2.fna&oh=00_AfAuedbxRr4y9gsRTimNRmbjQP_QB9ThrM72wY5VSl_HbA&oe=64A2C2C7"
				alt="Front of House Aida Bella"
				className=" inline-block "
			/> */}

			<p className="">
				Impressed by the thorough planning
				necessary to ensure a smooth operation on all different levels.
				I decided that I wanted to learn more about organization and
				enrolled in a project management course.
			</p>
			<div className="youtubeContainer">
				<iframe
					className="youtubeIframe"
					allow="fullscreen;"
					type="text/html"
					src="https://www.youtube.com/embed/8eZfYiCGXQc?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
				/>
			</div>
			<p className="">
				In early 2019 I started as a project manager at
				Attraktion! GmbH, overseeing a portfolio of
				international amusement park installations.
			</p>
			<p className="pb-12">
				In addition to planning new projects and coordinating people and
				resources, I collaborated with developers, artists, and
				engineers and maintained strong customer relations while making
				sure that all requirements were met. To enhance
				team communication, I introduced daily standup meetings for
				in-house production and logistics. 
			</p>
			{/* 					<div className="youtubeContainer">
							<iframe
								className="youtubeIframe"
								allow="fullscreen;"
								type="text/html"
								src="https://www.youtube.com/embed/IbSHel9CRT0?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
							></iframe>
						</div> */}
			<img
				src={danielOnARock}
				alt="Daniel sitting on the beach playing guitar"
				className="m-auto rounded-full h-52 w-52 mb-4"
			/>
			<p className="">
				The impact of the Corona pandemic on the entertainment industry
				and my passion for problem-solving and communication technology
				led me to learn web development. I completed an online course and built websites and
				applications.
			</p>
			{/* 						<p className="">
							The impact of the Corona pandemic on the
							entertainment industry led me to reevaluate my
							career path. Driven by my passion for
							problem-solving and communication technology I fully
							embraced learning web development. I completed a
							full-stack web development course in 2021 and moved
							to Oslo in 2022.
						</p> */}
			{/* 	<img
							src="https://www.freecodecamp.org/news/content/images/2022/08/pexels-antonio-batinic--4164418--1-.jpg"
							alt="screen with javascript code"
							className=""
						/> */}
			{/* 	<p className="">
							I am dedicated to building user-friendly front-end
							designs that leave a lasting impact. I continuously
							expand my knowledge, collaborate effectively in
							cross-functional teams, and strive to bring fresh
							ideas and maintain high coding standards. Let's work
							together to create exceptional, user-centered
							websites.
						</p> */}
			<div className="w-100 flex">
				<p className="inline-block">For this webpage I used:</p>
				<div className="p-6">
					<div className="word text-sky-400 text-2xl"></div>
				</div>
			</div>
			<img
				src={languageLogos}
				alt="logos of html, css and javascript"
				className=""
			/>
			<p className="">{paramText}</p>
			<p className="">
				In 2022 I decided to move to Norway with my girlfriend who got a job as a singer in the opera here. 
				I started working as a sound engineer in det Norske Teatret and am very happy contributed to many great productions. 
			</p>
			<p className="">
			
			</p>
			<p className=""></p>
			{/* </AnimationOnScroll> */}
		</div>
	);
};

export default About;
