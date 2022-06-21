import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience'
import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
   </>
  )
}

export default App  //exporting the current jsx to be imported in index.js