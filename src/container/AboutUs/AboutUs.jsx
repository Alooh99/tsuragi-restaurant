import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={images.G} alt="G_overlay" /> */}
    </div>

    <div className="app__aboutus-content ">
      <div className='wrapper'>
      <div className="app__aboutus-content_about">
        <h1 className="headtextDark__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__darkSamuraiBlast">"Welcome to Tsuragi, where tradition meets taste. Inspired by the precision of the Japanese sword, we serve authentic Japanese cuisine with a modern touch."</p>
      </div>

      

      <div className="app__aboutus-content_history">
        <h1 className="headtextDark__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__darkSamuraiBlast">"Founded with a passion for Japanese flavors, Tsuragi represents the artistry and dedication of its namesake. Our journey began with a simple goal: to bring the true taste of Japan to our community."</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
      </div>

      <div className="app__aboutus-content_knife">
        <img src={images.sword2} alt="about_Sword" />
      </div>
    </div>
  </div>
);

export default AboutUs;