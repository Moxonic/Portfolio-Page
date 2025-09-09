import React from 'react';
import { BrowserRouter, Routes, Route, useParams, useSearchParams } from 'react-router-dom';
import About from './components/about/About.jsx'
import Header from './components/header/Header';
import Nav from './components/nav/Nav.jsx';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Videos from './components/videos/Videos';
import "animate.css/animate.min.css";
import Portfolio from './components/portfolio/Portfolio';

/* function customText(){
  let{text}=useParams();
  console.log(text);
} */

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={
        <div>
          
         {/*  <Nav /> */}
          <Header />
          {/* <Portfolio />  */}
          <About/>
          <Contact />
        </div>
      } />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
