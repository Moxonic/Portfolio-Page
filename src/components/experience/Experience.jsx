import React from 'react'
import './experience.css'


const Experience = () => {
    return (
        <section id='experience'>
            <h1 className='w-full'>Experience</h1>
            
                <div className='videoContainer w-full'>
                    <div className='videoWrapper'>
                        <iframe className='vidiv w-full'
                        width="inherit" height="inherit     " 
                        src="https://www.youtube.com/embed/6ApGMwgCt_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <p className="legend">Legend 1</p>
                    </div>
                    <div className='videoWrapper'>
                    <iframe className='vidiv' title="vimeo-player" src="https://player.vimeo.com/video/127020709?h=b8366ff9e9" 
                    // width="640" height="360" 
                    frameborder="0" allowfullscreen></iframe>

                        <p className="legend">Legend 2</p>
                    </div>
                    <div className='videoWrapper'>
                    <iframe  className='vidiv' title="vimeo-player" src="https://player.vimeo.com/video/126129405?h=dbfddfd934" 
                    // width="640" height="360" 
                    frameborder="0" allowfullscreen></iframe>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div className='videoWrapper'>
                    <iframe className='vidiv'
                    // width="640" height="360"
                    src="https://www.youtube.com/embed/IbSHel9CRT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div className='videoWrapper'>
                    <iframe className='vidiv'
                    // width="640" height="360"
                    src="https://www.youtube.com/embed/8eZfYiCGXQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p className="legend">Legend 5</p>
                    </div>
                </div>
        </section>
    )
}

export default Experience