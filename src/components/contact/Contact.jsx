import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import {BsLinkedin} from 'react-icons/bs'
import FREEDSD from "../../assets/Danielfree22.png";


const Contact = () => {
    return (
        <section id="contact">
            <h5>Get in touch</h5>
            <img className='rounded-full center w-40 h-40 mx-auto xl:w-56 xl:h-56 p-5' src={FREEDSD} alt="looking nice"></img>
            <h2> Contact me</h2>

            <div className=" contact_container flex-col items-center pl-4">
                <div >
                    <article className="contact_option justify-center">
                        <a href="mailto:d.soto@gmx.at" 
                        className="flex justify-center">
                            <MdOutlineEmail class="contactSymbol" />
                            <h4 className='symboltext w-32'>Email</h4>
                        </a>
                    </article>
                </div>

                <div >
                    <article className="contact_option">
                        <a href="https://api.whatsapp.com/?phone436509513571" target="_blank" rel="noreferrer" 
                        className="flex justify-center">
                            <BsWhatsapp class="contactSymbol" />
                            <h4 className='symboltext w-32'>WhatsApp</h4>
                        </a>
                    </article>
                </div>

                <div className=''>
                    <article className="contact_option">
                        <a href='https://www.linkedin.com/in/daniel-soto-delgado-21368866/' target='_blank' rel="noreferrer"  
                        className="flex justify-center">
                            <BsLinkedin className='contactSymbol'/>
                            <h4  className='symboltext w-32'>LinkedIn</h4>
                            </a>
                    </article>
                </div>

            </div>
        </section>
    );
};

export default Contact;
