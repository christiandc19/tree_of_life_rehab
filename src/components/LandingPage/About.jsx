import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import './About.css'; // Import the CSS file
import AboutUs from '../../assets/aboutushome.webp'
import Fade from "react-reveal/Fade";
import Logo from '../../assets/logo-dark.png'


const About = () => {
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const [angle, setAngle] = useState(0); // Angle for circular motion

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Get the current scroll position
      const delta = currentScrollY - scrollY; // Calculate scroll direction

      // Update angle based on scroll direction
      if (delta > 0) {
        // Scrolling down
        setAngle((prevAngle) => prevAngle + 5); // Adjust the increment for speed
      } else if (delta < 0) {
        // Scrolling up
        setAngle((prevAngle) => prevAngle - 5); // Adjust the decrement for speed
      }

      setScrollY(currentScrollY); // Update the current scroll position
    };

    window.addEventListener('scroll', handleScroll); // Attach the scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener on unmount
    };
  }, [scrollY]);

  // Calculate X and Y positions based on angle for circular motion
  const radius = 50; // Radius of the circular motion in pixels
  const x = radius * Math.cos((angle * Math.PI) / 180); // Convert degrees to radians
  const y = radius * Math.sin((angle * Math.PI) / 180);

  return (
    <section className="about-container container" name="toAboutMe">

    <Fade bottom duration={2000}>
      <div className='aboutUsLetters'>
        <h1>T</h1>
        <h1>R</h1>
        <h1>E</h1>
        <h1>E</h1>
        <br />
        <h1>O</h1>
        <h1>F</h1>
        <br />
        <h1>L</h1>
        <h1>I</h1>
        <h1>F</h1>
        <h1>E</h1>


      </div>
    </Fade>

      <div className="about-image">
        <img src={AboutUs} alt="Chris" />
      </div>


      <div className="about-content">

        <h1>About Us</h1>
        <p>
        At Tree Of Life Rehab, we believe in the power of healing, transformation, and support. Established with the vision of providing comprehensive care for individuals battling addiction and mental health challenges, we offer a safe haven where recovery is not only possible but sustainable. Our team of compassionate professionals is dedicated to creating personalized treatment plans tailored to meet the unique needs of each individual.
        </p>
        <p>
        We recognize that addiction is a multifaceted issue that affects every aspect of life, and that’s why our approach integrates medical, psychological, and holistic therapies. At Tree Of Life Rehab, we aim to not only address the immediate challenges of substance abuse but also foster long-term well-being and personal growth.
        </p>
        <p>Our state-of-the-art facilities and experienced staff provide a supportive and nurturing environment for recovery. We offer a range of services, including detox, inpatient and outpatient care, dual diagnosis treatment, and relapse prevention. Every step of your journey is backed by our commitment to your health and recovery.</p>
        <p>At Tree Of Life Rehab, you are never alone. We walk alongside you through the toughest battles, empowering you to reclaim your life, rediscover hope, and embrace Renewal.
</p>

      </div>
    </section>
  );
};

export default About;
