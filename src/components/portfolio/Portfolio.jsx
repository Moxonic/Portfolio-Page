import React from 'react'
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './portfolio.css'


const Portfolio = () => {
  return (
    <div id="snapContainer" className="scrollContainer">
    <div className='snap-start'>
      <img
        className=''
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJugIqexsgYSZRaCkQoMXXUgADuBrC1cvLw&usqp=CAU"
        alt=""
      />
    </div>
    <div className='snap-start'>
      <img src="https://t3.ftcdn.net/jpg/04/01/82/20/360_F_401822017_iiI3DYIiWCfmfyBbRrqT9IvsCv104WSd.jpg"></img>
    </div>
    <div className='snap-start'>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJhh6tPLqogY-Hlpi8MvS3NhqcM0ioDFDMA&usqp=CAU"
        alt=""
      />
    </div>
  </div>
  
  
   
  )
}
   

export default Portfolio;