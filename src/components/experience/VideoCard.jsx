import React from 'react';
import Awards from './Awards';

function VideoCard(props) {
    return (<div>
                <div className="
                            videoContainer
                            p-2 mx-3 my-9 flex-col rounded-md 
                            xl:flex xl:flex-row xl:m-20 xl:items-center 
                            xl:justify-evenly
                            ">
                    <div className="wrapperwrapper xl:w-3/4 ">
                        <div className="videoWrapper  
                                    xl:flex-row 
                                    ">
                            <iframe
                                className="h-full w-full xl:h-96 "
                                allow="fullscreen;"
                                type="text/html"
                                src={props.src}
                            ></iframe>
                        </div>
                    </div>
                    <div className="experience__description flex-col content-center items-center xl:w-96 xl:p-6 ">
                        <h3 className="pt-5 xl:pt-0">{props.title}</h3>
                        <p className="text-left">
                            {props.description}
                        </p>
                        <h4 className="pt-5 xl:pt-0">Occupation: </h4>
                        <p >{props.occupation}</p>
                        
                    </div>
                </div>
{/* 
        <div className="
					videoContainer
					p-2 mx-3 my-9 flex-col rounded-md 
					xl:flex xl:flex-row xl:m-20 xl:items-center 
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
					xl:flex xl:flex-row xl:m-20 xl:items-center 
					xl:justify-evenly
					">

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
                <h3 className="pt-5 xl:pt-0">Sasso San Gottardo</h3>
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
					xl:flex xl:flex-row xl:m-20 xl:items-center 
					xl:justify-evenly
					">
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
                <p >Project Management</p>
                <h4 className="pt-5">Awards: </h4>
                <p className="">Global Creative Technology Design Award</p>
            </div>
        </div>

        <div className="
					videoContainer
					p-2 mx-3 my-9 flex-col rounded-md 
					xl:flex xl:flex-row xl:m-20 xl:items-center 
					xl:justify-evenly
					">
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
                    dome attractions, interactive games and exhibitions
                </p>
                <h4 className="pt-5">Occupation:</h4>
                <p className=""> Project Management </p>
            </div>
        </div>
 */}
    </div>)
};

export default VideoCard;
