// src/components/Contact.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { IoLocationSharp, IoMailSharp, IoCallSharp, IoTimeSharp } from 'react-icons/io5';

const Contact = () => {
  return (
    <>
      <Header />
      <section className="contact" id="contact">
        <h2 className="section_title">Contact Us</h2>
        <div className="section_container">
          <div className="contact_container">
            <div className="contact_form">
              <form action="#">
                <div className="field">
                  <label htmlFor="Name">Full Name</label>
                  <input type="text" id="Name" placeholder="Your Name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="number">Your Number</label>
                  <input
                    type="tel"
                    id="number"
                    placeholder="Your Contact Number"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="textarea">Textarea</label>
                  <textarea
                    name="textarea"
                    id="textarea"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button className="button" id="submit">Submit</button>
              </form>
            </div>

            <div className="contact_text">
              <div className="contact_items">
                <IoLocationSharp />
                <div className="contact_details">
                  <h3>Our Location</h3>
                  <p>Berndorf, Germany</p>
                </div>
              </div>
              <div className="contact_items">
                <IoMailSharp />
                <div className="contact_details">
                  <h3>General Enquiries</h3>
                  <p>coffeeshop@xyz.com</p>
                </div>
              </div>
              <div className="contact_items">
                <IoCallSharp />
                <div className="contact_details">
                  <h3>Call Us</h3>
                  <p>+01 92728239</p>
                </div>
              </div>
              <div className="contact_items">
                <IoTimeSharp />
                <div className="contact_details">
                  <h3>Our Timing</h3>
                  <p>Mon-Sun: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
