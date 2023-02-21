import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import BackgroundParticles from './components/bg-design/BackgroundParticles'
import "animate.css/animate.min.css";
import Videos from './components/videos/Videos'

const App = () => {
  return (
    <>
      <div className="container snap-y snap-proximity">
        <BackgroundParticles  />
        <Nav />
        <Header />
        <About className='snap-start'/>
        <Experience className='snap-start'/>
        <Videos className='snap-start'/>
        <Contact />
      </div>
    </>
  )
}

export default App  //exporting the current jsx to be imported in index.js
