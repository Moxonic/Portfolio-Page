import React from 'react'
import CV from '../../assets/CV-Soto-FED-en.pdf'


const CTA = () => {             /*Call to action*/ 
  return (
    // <cta>
    <div className='cta'>
   <a href={CV} download className='btn'>Download CV</a> 
        <a href='#contact' className='btn '>Contact</a>
    </div>
    // </cta>
  )
}

export default CTA