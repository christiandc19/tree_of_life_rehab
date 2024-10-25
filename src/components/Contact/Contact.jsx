import React from "react";

import './Contact.css'
import ContactForm from "../LandingPage/ContactForm";
import Services from "../LandingPage/Services";
import Insurance from "../LandingPage/Insurance";


const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu'>
            <div className="contact-hero-content">
                <div className="contact-hero-content">
                  <h1>Contact Us</h1>
                  <h2>Reach out to us for any inquiries, appointments, or assistance. </h2>
                  <p><a href="tel:8184520201"> +1 (818) 452-0201</a></p>
                </div>
            </div>
     </div>
     <ContactForm />
     <Insurance />
     <Services />
 
      </>
    )
}

export default Contact