import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import About from './components/about/About.jsx'
import Header from './components/header/Header';
import Nav from './components/nav/Nav.jsx';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Videos from './components/videos/Videos';
import BackgroundParticles from './components/bg-design/BackgroundParticles';
import "animate.css/animate.min.css";

/* function customText(){
  let{text}=useParams();
  console.log(text);
} */

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={
        <div>
          <BackgroundParticles />
          <Nav />
          <Header /> 
          <Routes>
            <Route path=':text' element ={<About />} />
          </Routes>
          <Videos />
          <Contact />
        </div>
      } />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
