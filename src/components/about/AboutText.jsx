import React from 'react';
import {useParams} from 'react-router-dom';

function AboutText(props) {
    console.log(useParams())
    const {text}  = props.text;
/* console.log({text}) */
    return (
      <h1>URL:{text}</h1>
    );
}

export default AboutText;