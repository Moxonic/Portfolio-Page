import React from 'react'
import './experience.css'

// CAROUSEL IMPORTS
import { STORY_CHANGED } from '@storybook/core-events';

addons.register('my-organisation/my-addon', api => {
  api.on(STORY_CHANGED, storyId => console.log(storyId));
});
// var React = require('react');
// var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

const Experience = () => {
  return (
    <section id='experience'>
      <h1>Experience</h1>

      <Carousel showArrows={true} 
      // onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
      >
                <div>
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/6ApGMwgCt_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/127020709?h=b8366ff9e9" width="640" height="360" frameborder="0" allowfullscreen></iframe>

                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/126129405?h=dbfddfd934" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <iframe width="640" height="360" src="https://www.youtube.com/embed/IbSHel9CRT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                <iframe width="640" height="360" src="https://www.youtube.com/embed/8eZfYiCGXQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="legend">Legend 5</p>
                </div>
      </Carousel>
      {/* <iframe width="640" height="360" src="https://www.youtube.com/embed/6ApGMwgCt_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/127020709?h=b8366ff9e9" width="640" height="360" frameborder="0" allowfullscreen></iframe>

      <iframe title="vimeo-player" src="https://player.vimeo.com/video/126129405?h=dbfddfd934" width="640" height="360" frameborder="0" allowfullscreen></iframe>

      <iframe width="640" height="360" src="https://www.youtube.com/embed/IbSHel9CRT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <iframe width="640" height="360" src="https://www.youtube.com/embed/8eZfYiCGXQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    </section>
  )
}

export default Experience