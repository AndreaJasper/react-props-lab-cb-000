import React from 'react';
import ReactDOM from 'react-dom';

const name = ['Millennium Falcon', 'TIE Fighter', 'X-Wing', 'Separatist Dreadnought', 'Imperial Shuttle']
const speed = ['slow', 'lightspeed', 'moderate']
const hasRockets = ['yes', 'no']
const colors = ['silver', 'black', 'red', 'orange']

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: 'false',
  colors: ['black', 'red']
};


