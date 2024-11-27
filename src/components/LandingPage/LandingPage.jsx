import React from 'react';
import './LandingPage.css';
import { FaLongArrowAltRight } from "react-icons/fa"; // Import the arrow icon
import { Link } from 'react-router-dom'; // For routing between pages
import Logo from '../../assets/logo.png';

import ContactForm from '../LandingPage/ContactForm';
import Insurance from './Insurance';
import Offer from './Offer';
import AccordionProps from './AccordionProps';
import About from './About';
import Slider from './ImageSlider';
import Services from './Services'
import RehabServices from './RehabServices';

const Hero = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
      };


    return (
        <>
            <div className='landing'>

                <div className="landing-container">

                        <div className='landing-logo'>
                            <img src={Logo} alt='logo' loading='lazy' />
                        </div>

                    <div className="landing-content">

                        <h1>Nurturing Growth, Restoring Lives.</h1>
                        <p>
                            Medication-Assisted Inpatient & Outpatient Drug and Alcohol Addiction Treatment at Tree Of Life Rehab, serving the greater San Rafael area.
                        </p>
                        <div className='hero-btn'>
                            <Link to="/inpatient-rehab" onClick={scrollToTop}>
                                <button className='hero-btn1'>
                                    Inpatient <FaLongArrowAltRight className='hero-arrow' />
                                </button>
                            </Link>
                            <Link to="/outpatient-rehab" onClick={scrollToTop}>
                            <button className='hero-btn2'>
                                Outpatient <FaLongArrowAltRight className='hero-arrow' />
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <About />
            <RehabServices />
            <Offer />
            <Services />
            <Slider />
            <AccordionProps />
            <Insurance />
            <ContactForm />
        </>
    );
}

export default Hero;
