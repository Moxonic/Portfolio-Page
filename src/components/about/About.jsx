import React from 'react'
import './About'
import './about.css'
import FREEDSD from '../../assets/Danielfree22.png'
import './About.js'

const About = () => {
  return (
    <section id='about'>
      <div className='container container__about'>
        <h1 className='aboutme'>
        to You
        </h1>
        <div className='about__text'>
          <div className="word"></div>
        </div>
        <img className='myPicAbout' src={FREEDSD} alt='powerpose'></img> 
      </div>
    </section>
  )
}

export default About