import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
    <div className="app__specialMenu-menu_foods  flex__center">
        <p className="app__specialMenu-menu_heading">Foods</p>
        <div className="app__specialMenu_menu_items">
          {data.foods.map((food, index) => (
            <MenuItem key={food.title + index} title={food.title} price={food.price} tags={food.tags} />
          ))}
        </div>
      </div> 
      

      <div className="app__specialMenu-menu_img">
        <img src={images.six} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_drinks  flex__center">
        <p className="app__specialMenu-menu_heading">Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.drinks.map((drink, index) => (
            <MenuItem key={drink.title + index} title={drink.title} price={drink.price} tags={drink.tags} />
          ))}
        </div>
      </div>
      
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;