// src/components/About.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import about from '../assets/about.jpg'
 // Assuming you will have styles for this component

const About = () => {
  return (
    <div>
     <Header/>
      <section className="about_us" id="about">
        <div className="section_container">
          <div className="about_container">
            <div className="text_section">
              <h2 className="section_title">About Us</h2>
              <p>
                We at Coffee House, located in Berndorf, Germany, are one of the
                favorite hangouts for coffee and conversations. Our goal is to
                offer the best experience to our guests, ensuring an authentic
                coffee drinking experience in a warm, friendly, and relaxed
                environment. We aim to bring a sense of relaxation to the city
                with our cozy space, complete with comfortable couches to lounge
                in while you enjoy your coffee.
              </p>
            </div>

            <div className="image_section">
              <img src={about} alt="coffee" />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
