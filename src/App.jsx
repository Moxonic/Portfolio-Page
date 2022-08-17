import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience'
import Service from './components/service/Service'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Service />
      <Contact/>
    
  </>
  )
}

export default App  //exporting the current jsx to be imported in index.js