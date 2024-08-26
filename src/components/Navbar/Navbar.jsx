import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.tsuragi} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__navCormorant"><a href="#about">About</a></li>
        <li className="p__navCormorant"><a href="#menu">Menu</a></li>
        <li className="p__navCormorant"><a href="#awards">Awards</a></li>
        <li className="p__navCormorant"><a href="#home">Home</a></li>
        <li className="p__navCormorant"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__navCormorant">Log In / Registration</a>
        <div />
        <a href="/" className="p__navCormorant">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fade7c" fontSize={27} onClick={() => setToggleMenu(true)} />
        {/* if toggle menu true */}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-right">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <img src={images.tsuragi} alt="tsuragi" style={{width: '120px', marginBottom: '20px'}}/>
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;