import React from 'react';

import {images} from '../../constants'

const SubHeading = ({title}) => (
  <div style={{margin: '1rem', display: 'flex', justifyContent:'center'}}>
    <p className='p__cormorant' style={{paddingRight:'12px'}}>{title}</p>
    <img src={images.chopsticks} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
