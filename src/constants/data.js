// Importing images from images.js
import images from './images';

// Food data
export const foods = [
  {
    title: 'Salmon Sushi',
    price: '$15',
    tags: 'Fresh salmon | Sushi rice | Nori',
  },
  {
    title: 'Tuna Sushi',
    price: '$17',
    tags: 'Fresh tuna | Sushi rice | Nori',
  },
  {
    title: 'Tempura',
    price: '$12',
    tags: 'Shrimp | Vegetables | Tempura batter',
  },
  {
    title: 'Chicken Shoyu Ramen',
    price: '$18',
    tags: 'Chicken broth | Soy sauce | Noodles | Egg',
  },
  {
    title: 'Chicken Udon Noodle',
    price: '$14',
    tags: 'Udon noodles | Chicken | Vegetables | Broth',
  },
  {
    title: 'Chicken Teriyaki',
    price: '$20',
    tags: 'Grilled chicken | Teriyaki sauce | Steamed rice',
  },
  {
    title: 'Chicken Karaage',
    price: '$10',
    tags: 'Marinated chicken | Crispy batter | Lemon wedge',
  },
  {
    title: 'Matcha Latte with Apple Pie',
    price: '$12',
    tags: 'Matcha latte | Slice of apple pie',
  },
];

// Drink data
export const drinks = [
  {
    title: 'Hot Matcha Latte',
    price: '$6',
    tags: 'Matcha powder | Milk | Sweetener',
  },
  {
    title: 'Iced Green Tea',
    price: '$5',
    tags: 'Green tea | Ice | Lemon slice',
  },
  {
    title: 'Yuzu Lemonade',
    price: '$7',
    tags: 'Yuzu juice | Lemon | Sugar | Sparkling water',
  },
  {
    title: 'Calpico Soda',
    price: '$5',
    tags: 'Calpico concentrate | Soda water | Ice',
  },
  {
    title: 'Ramune Soda',
    price: '$4',
    tags: 'Ramune flavor | Carbonated soft drink',
  },
  {
    title: 'Genmaicha Tea',
    price: '$6',
    tags: 'Green tea | Roasted brown rice',
  },
  {
    title: 'Hojicha Latte',
    price: '$6',
    tags: 'Hojicha tea | Milk | Sweetener',
  },
  {
    title: 'Kombucha',
    price: '$7',
    tags: 'Fermented tea | Ginger | Lemon',
  },
];

// Awards data
export const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const data = { foods, drinks, awards };
export default data;
