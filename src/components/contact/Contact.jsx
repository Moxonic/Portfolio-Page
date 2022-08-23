import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2> Contact me</h2>

      <div className=" contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <MdOutlineEmail class="inline"/>
            <h4>Email</h4>
            <h5>d.soto@gmx.at</h5>
            <a href="mailto:d.soto@gmx.at"> Send a message </a>
          </article>
        </div>

        <div className="contact_options">
          <article className="contact_option">
          <BsWhatsapp class="inline"/>
            <h4>WhatsApp</h4>
            <h5>d.soto@gmx.at</h5>
            <a href="https://api.whatsapp.com/?phone+436509513571">Send a message</a>
          </article>
        </div>
      {/* END OF CONTACT OPTIONS */}
      <form action=""></form>
      </div>
    </section>
        )
}

export default Contact
