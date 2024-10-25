import React from 'react'
import './AboutPage.css'

import ContactForm from '../LandingPage/ContactForm'
import OurValues from '../About/OurValues'


const AboutPage = () => {
    return (
<>        
<div className='about'>
    <div className="hero-container">

        <div className="about-us-content">
            <h1>About Us</h1>
        </div>

    </div>
</div>
<OurValues />
<ContactForm />
</>


    )
}

export default AboutPage
