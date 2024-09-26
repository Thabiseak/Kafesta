import React from 'react';
import heroimg from '../assets/heroimg.png'

const HeroSection = () => {
  return (
    <section className="hero_section">
      <div className="section_container">
        <div className="hero_container">
          <div className="text_section">
            <h2>Fuel Your Passion</h2>
            <h3>Discover the Magic in Every Cup</h3>
            <p>
              Welcome to our coffee paradise, where every bean tells a story and
              every cup sparks.
            </p>

            <div className="hero_section_button">
              <button className="button">Order Online</button>
              <button className="button">Book A Table</button>
            </div>
          </div>

          <div className="image_section">
            <img src={heroimg} alt="Coffee" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
