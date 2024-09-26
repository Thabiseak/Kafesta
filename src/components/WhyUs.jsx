import React from 'react';
import image11 from '../assets/image11.jpg'
import about from '../assets/about.jpg'
import image10 from '../assets/image10.jpg'

const WhyUs = () => {
  return (
    <section className="why_us" id="why">
      <h2 className="section_title">Why Us?</h2>
      <div className="section_container">
        <div className="why_container">
          <div className="why_items">
            <img src={image11} alt="Delicious" />
            <div className="why_us_text">
              <h3>Delicious Food</h3>
              <p>
                With a lavish spread of finger licking food, we serve to satisfy
                your palate and take you on a culinary treat.
              </p>
            </div>
          </div>
          <div className="why_items">
            <img src={about} alt="Pleasant" />
            <div className="why_us_text">
              <h3>Pleasant Ambience</h3>
              <p>
                We seek to serve all our guests with the perfect dining
                experience. We provide perfect ambience to cherish special
                moments.
              </p>
            </div>
          </div>
          <div className="why_items">
            <img src={image10} alt="Hospitality" />
            <div className="why_us_text">
              <h3>Hospitality</h3>
              <p>
                Our staff members are happy to help. We go the extra mile to
                make you happy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
