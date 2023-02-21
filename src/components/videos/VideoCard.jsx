import React from 'react';

/* function IframeVideo({ src, title }) {
    const [isPlaying, setIsPlaying] = useState(false);
  
    const handleClick = () => {
      setIsPlaying(!isPlaying);
    }; */

function VideoCard(props) {
    return (<div >
                <div className="
                            videoContainer
                            p-2 mx-8 my-12 flex-col rounded-md 
                            xl:flex xl:flex-row xl:m-20 xl:items-center 
                            xl:justify-evenly
                            ">
                    <div className="wrapperwrapper xl:w-3/4 ">
                        <div className="videoWrapper xl:flex-row pt-5">

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
                        <p className="text-justify">
                            {props.description}
                        </p>
                        <h4 className="pt-5 xl:pt-0 ">Responsibility: </h4>
                        <p className='pb-5'>{props.occupation}</p>
                        
                    </div>
                </div>
    </div>)
};

export default VideoCard;
