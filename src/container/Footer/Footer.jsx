import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer footer__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__footerCormorant">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__footerCormorant">+1 212-344-1230</p>
        <p className="p__footerCormorant">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.tsuragi} alt="footer_logo" />
        <p className="p__footerCormorant">&quot;A Slice of Japan in Every Bite.&quot;</p>
        <img src={images.spoon} alt='spoon' className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__footerCormorant">Monday-Friday:</p>
        <p className="p__footerCormorant">08:00 am - 12:00 am</p>
        <p className="p__footerCormorant">Saturday-Sunday:</p>
        <p className="p__footerCormorant">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__footerCormorant" style={{fontSize: '15px'}}>2024 Tsuragi. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
