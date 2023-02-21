import React from 'react'
import VideoCard from './VideoCard'
import Carousel from 'nuka-carousel';

function Videos() {
  return (
    <div>{/* ////////////////////////////////VIDEOS /////////////////////////////////////////*/}
    <div className="allVids">
        <Carousel 
        
        autoplay={true} 
        autoplayInterval={11000}
        animation={'slide'} 
        wrapAround={true} 
        slidesToShow={1}
        defaultControlsConfig={{
            nextButtonText: '>',
            prevButtonText: '<',
                                
            nextButtonStyle: {borderRadius: '3px 3px 3px 3px',
            height:'33vh',
            left:'0rem',
            zIndex:'0'},
            prevButtonStyle: {borderRadius: '3px 3px 3px 3px',
            height:'30vh'},
            pagingDotsStyle: {
                fill: 'lightgray'
            }
        }}
        >
            <VideoCard
                title="Attraktion! Showcase 2019/20"
                occupation="Project Management"
                description=" Attraktion! creates exceptional media-based experience products such as service robots,
                                    dome attractions, interactive games and exhibitions"
                src="https://www.youtube.com/embed/8eZfYiCGXQc?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
            />
            <VideoCard
                title="Eye to Ear - iPad App"
                description="Eye to Ear facilitates visually impaired museum visitors to
                                experience visual art through an interactive sonification
                                approach"
                occupation="User Experience & Sound Design"
                src="https://www.youtube.com/embed/6ApGMwgCt_w?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
                
            />
            <VideoCard
                className='videoContainerSpace'
                title="Mobiglobe"
                occupation="Sound Design"
                description="Located adjacent to the Volkswagen headquarters in Wolfsburg,
                            Germany the Autostadt serves as a communication platform. It has a
                            state-of-the-art car museum with an interactive gesturebased encyclopedia."
                src="https://player.vimeo.com/video/127020709?h=b8366ff9e9"
            />
            <VideoCard
                title="Sasso San Gottardo"
                occupation="Sound Design, Technical Installation"
                description="Deep inside the swiss alps hides the once top secret Gotthard
                                    fortress. Since 2012 it is open for the public and displays 7
                                    rooms with informational multimedia installations created with Idee und Klang Studios treating topics like energy,
                                    water, internet security and climate change"
                src="https://player.vimeo.com/video/126129405?h=dbfddfd934"
            />
            <VideoCard
                occupation="Project Management"
                description="In 2020 Attraktion! redesigned and upgraded the attraction park the Blue Cube at the Danfoss Universe Science Park in Denmark"
                title="Blue Cube 2.0"
                src="https://www.youtube.com/embed/IbSHel9CRT0?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
            />
        </Carousel>
    </div>
    </div>
    )
}

export default Videos;