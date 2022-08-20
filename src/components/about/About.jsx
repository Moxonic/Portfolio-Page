import React from 'react'
import './About'
import './about.css'
import FREEDSD from '../../assets/Danielfree22.png'
import './About.js'

const About = () => {
  return (
    <section id='about'>
      <div>
        <h1 className='aboutme'>
        to You
        </h1>
        <div className='about__text'>

        <div class="word"></div>

          {/* <p className='bg-blue-400 black '> 
            Daniel is starting his career as a Frontend Developer.
          </p>
          <p>
            He built this website with HTML, CSS, Javascript and React.
          </p>
          <p>
            Are you surprised his introduction so short?
          </p>
          <p>
            Of course, he is just about to start it with you.
          </p> */}

        </div>
        <div >
          <img className='myPicAbout' src={FREEDSD} alt='powerpose'></img>  
        </div> 
          
        </div>
    </section>
  )
}

export default About