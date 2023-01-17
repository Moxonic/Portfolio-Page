import React from 'react';
import Awards from './Awards';

function VideoCard(props) {
    return (<div >
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
                        <h4 className="pt-5 xl:pt-0 ">Occupation: </h4>
                        <p className='pb-5'>{props.occupation}</p>
                        
                    </div>
                </div>
    </div>)
};

export default VideoCard;
