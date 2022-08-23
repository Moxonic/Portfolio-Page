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
    <div className="container">
      <Nav />
      <Header />
      <About />
      <Experience />
      <Service />
      <Contact/>
    </div>

    
  </>
  )
}

export default App  //exporting the current jsx to be imported in index.js