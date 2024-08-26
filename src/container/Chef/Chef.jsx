import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtextDark__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__darkSamuraiBlast">At Tsuragi, we believe in honoring tradition while embracing innovation. </p>
        </div>
        <p className="p__darkSamuraiBlast"> We are committed to using the freshest ingredients and crafting every dish with passion and precision. Our goal is to create an authentic dining experience that celebrates the rich flavors and culture of Japan. </p>
      </div>

      <div className="app__chef-sign">
        <p>Satoshi Nakamura</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign1} alt="sign_image" />
      </div>
    </div>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef1} alt="chef_image" />
    </div>
  </div>
);

export default Chef;