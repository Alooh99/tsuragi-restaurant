import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__headerWrapper section__padding' id='home'>
    <div className='app__headerWrapper'>
    <div className='app__headerWrapper_info'>
      <h1 className='app__header-h1'>TSURAGI</h1>
      <SubHeading title='A Slice of Japan in Every Bite.' />
    <div className='app__headerWrapper_img'>
      <img src={images.five} alt="header img" />
      <img src={images.eight} alt="header img" />
    </div>
    </div>

      <div className='app__headerWrapper_info2'>
      <p className="p__samuraiBlast" style={{ margin: '2rem 0', textAlign:'center' }}>
      Discover authentic Japanese flavors at Tsuragi. Enjoy fresh, expertly crafted dishes in a warm, inviting atmosphere. Experience a true taste of Japan.      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
      </div>

    </div>
  </div>
);

export default Header;
