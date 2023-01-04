import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import FREEDSD from "../../assets/Danielfree22.png";


const Contact = () => {
    return (
        <section id="contact">
            <h5 className=""> Contact me</h5>
            <img className='rounded-full center w-60 h-60 mx-auto xl:w-56 xl:h-56 m-5 border-solid border-2' src={FREEDSD} alt="looking nice"></img>
            

            <div className=" contact_container flex-col items-center pl-4 lg:flex-row">
                <div >
                    <article className="contact_option justify-center">
                        <a href="mailto:d.soto@gmx.at" 
                        className="flex justify-center">
                            <MdOutlineEmail class="contactSymbol" />
                            <h4 className='symboltext w-32'>Email</h4>
                        </a>
                    </article>
                </div>

                <div>
                    <article className="contact_option">
                        <a href="https://wa.me/436509513571" target="_blank" rel="noreferrer" 
                        className="flex justify-center">
                            <BsWhatsapp class="contactSymbol" />
                            <h4 className='symboltext w-32'>WhatsApp</h4>
                        </a>
                    </article>
                </div>

                <div>
                    <article className="contact_option">
                        <a href='https://www.linkedin.com/in/daniel-soto-delgado-21368866/' target='_blank' rel="noreferrer"  
                        className="flex justify-center">
                            <BsLinkedin className='contactSymbol'/>
                            <h4  className='symboltext w-32'>LinkedIn</h4>
                            </a>
                    </article>
                </div>

                <div>
                    <article className="contact_option">
                        <a href="https://github.com/Moxonic" target="_blank" rel="noreferrer" 
                        className="flex justify-center">
                            <BsGithub class="contactSymbol" />
                            <h4 className='symboltext w-32'>Github</h4>
                        </a>
                    </article>
                </div>
                {/* <div className='end'></div> */}
            </div>
        </section>
    );
};

export default Contact;
