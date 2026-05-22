import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import MYPIC from "../../assets/CvPhotoDanielSotoDelgado25.jpg";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-photo">
        <img src={MYPIC} alt="Daniel Soto Delgado" />
      </div>
      <h5>Get in touch</h5>

      <div className="contact_container">
        <article className="contact_option">
          <a href="mailto:d.soto@gmx.at" className="contact_link">
            <MdOutlineEmail className="contactSymbol" />
            <span>Email</span>
          </a>
        </article>

        <article className="contact_option">
          <a href="https://wa.me/4793926209" target="_blank" rel="noreferrer" className="contact_link">
            <BsWhatsapp className="contactSymbol" />
            <span>WhatsApp</span>
          </a>
        </article>

        <article className="contact_option">
          <a href="https://www.linkedin.com/in/daniel-soto-delgado-21368866/" target="_blank" rel="noreferrer" className="contact_link">
            <BsLinkedin className="contactSymbol" />
            <span>LinkedIn</span>
          </a>
        </article>

        <article className="contact_option">
          <a href="https://github.com/Moxonic" target="_blank" rel="noreferrer" className="contact_link">
            <BsGithub className="contactSymbol" />
            <span>GitHub</span>
          </a>
        </article>
      </div>
    </section>
  );
};

export default Contact;
