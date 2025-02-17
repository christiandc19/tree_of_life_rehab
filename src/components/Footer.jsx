import React from 'react'
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import logo from "../assets/logo.png";
import "./Footer.css";


const Footer = () => {


  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <>
      <div className="footer ">
        <div>
          <div className="top container">

            <div className="logo-footer">
              <img src={logo} alt="Sacramento Rehab Logo" loading="lazy"/>
              
              <div>
              <p><a href="tel:3233645172"> Call Us: 1 (323) 364-5172</a></p>
              <p>2171 E. Francisco Blvd, Suite O, San Rafael, CA 94901</p>
              <p><a href="mailto:Info@ShastaCountyRehab.com">Email Us: info@TreeOfLifeRehab.com</a></p>

              </div>
            </div>

            <div className="column">
              <h3>COMPANY</h3>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/" onClick={handleLinkClick}>
                  <p>Home</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/about" onClick={handleLinkClick}>
                  <p>About</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/contact" onClick={handleLinkClick}>
                  <p>Contact</p>
                </Link>
              </LinkRoll>
            </div>
            

            <div className="column">
              <h3>Program Options</h3>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/inpatient-rehab" onClick={handleLinkClick}>
                  <p>Inpatient Programs</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/outpatient-rehab" onClick={handleLinkClick}>
                  <p>Outpatient Programs</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/detox-program" onClick={handleLinkClick}>
                  <p>Detox Program</p>
                </Link>
              </LinkRoll>
            </div>


            <div className="column">
              <h3>Rehab Programs</h3>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/drug-addiction-treatment" onClick={handleLinkClick}>
                  <p>Drug Addiction Rehab</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/heroin-program" onClick={handleLinkClick}>
                  <p>Heroin</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/xanax-rehab" onClick={handleLinkClick}>
                  <p>Xanax</p>
                </Link>
              </LinkRoll>
            </div>





          </div>
            <div className="copyright">
            <p>
              &copy; 2024 Tree Of Life Rehab. All rights reserved
            </p>
            </div>


        </div>
      </div>
    </>
  );
};

export default Footer;
