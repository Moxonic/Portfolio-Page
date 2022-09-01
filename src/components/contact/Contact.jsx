import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import {BsLinkedin} from 'react-icons/bs'


const Contact = () => {
    return (
        <section id="contact">
            {/* <div className="contact_container" */}
            <h5>Get in touch</h5>
            <h2> Contact me</h2>

            <div className=" contact_container">
                <div >
                    <article className="contact_option">
                        <a href="mailto:d.soto@gmx.at" 
                        className="flex">
                            <MdOutlineEmail class="contactSymbol" />
                            <h4 className='symboltext'>Email</h4>
                        </a>
                    </article>
                </div>

                <div >
                    <article className="contact_option">
                        <a href="https://api.whatsapp.com/?phone+436509513571" target="_blank" 
                        className="flex">
                            <BsWhatsapp class="contactSymbol" />
                            <h4 className='symboltext'>WhatsApp</h4>
                        </a>
                    </article>
                </div>

                <div className=''>
                    <article className="contact_option">
                        <a href='https://www.linkedin.com/in/daniel-soto-delgado-21368866/' target='_blank' 
                        className="flex">
                            <BsLinkedin className='contactSymbol'/>
                            <h4  className='symboltext'>LinkedIn</h4>
                            </a>
                    </article>
                </div>

            </div>
        </section>
    );
};

export default Contact;
