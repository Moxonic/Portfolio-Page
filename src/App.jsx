import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import BackgroundParticles from './components/bg-design/BackgroundParticles'



const App = () => {
  

  return (
    <>
      <div className="container">
        <BackgroundParticles  />
        <Nav />
        <Header />
        <About />
        <Experience />
        <Contact />
      </div>


    </>
  )
}

export default App  //exporting the current jsx to be imported in index.js