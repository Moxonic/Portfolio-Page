import React from 'react'
import CV from '../../assets/CV_DanielSotoDelgado.pdf'


const CTA = () => {             /*Call to action*/ 
  return (
    // <cta>
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let´s Talk</a>
    </div>
    // </cta>
  )
}

export default CTA