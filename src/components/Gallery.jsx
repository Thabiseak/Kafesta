// src/components/Gallery.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
 // Assuming you will have styles for this component

const Gallery = () => {
  return (
    <>
     <Header/>
    <section className="gallery" id="gallery">
      <h2 className="section_title">Gallery</h2>
      <div className="section_container">
        <div className="gallery_container">
          <div className="gallery_items">
            <img src={image1} alt="Gallery Image" />
          </div>
          <div className="gallery_items">
            <img src={image2} alt="Gallery Image" />
          </div>
          <div className="gallery_items">
            <img src={image3} alt="Gallery Image" />
          </div>
          <div className="gallery_items">
            <img src={image4} alt="Gallery Image" />
          </div>
          <div className="gallery_items">
            <img src={image5} alt="Gallery Image" />
          </div>
          <div className="gallery_items">
            <img src={image6} alt="Gallery Image" />
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    
    </>
    
  );
};

export default Gallery;
